# Build stage — full dev install, runs the CRA production build
FROM node:20-slim AS build

WORKDIR /app

# On glibc (Debian) better-sqlite3 installs a prebuilt binary, so no compiler
# toolchain is needed (the Alpine/musl image had to compile it from source).

# Install all deps (incl. devDependencies) using the lockfile for reproducibility
COPY package*.json ./
RUN npm install --legacy-peer-deps --no-audit --no-fund

# Build the React application (CRA outputs to /app/build)
COPY . .
RUN npm run build

# ---------------------------------------------------------------------------
# Production stage — fresh slim image, installs ONLY runtime dependencies.
# This avoids carrying the ~500 MB devDependencies tree (react-scripts,
# tailwindcss, framer-motion, etc.) into the runtime image. The Express
# server only needs the packages declared in `dependencies` that are
# actually imported by server.js: express, express-rate-limit, resend.
# ---------------------------------------------------------------------------
FROM node:20-slim

WORKDIR /app

# Copy build output + server entrypoint
COPY --from=build /app/build ./build
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/package.json /app/package-lock.json ./

# Install production dependencies only. better-sqlite3 installs its prebuilt
# glibc binary here, so there's no native compile and no build toolchain.
RUN npm install --omit=dev --legacy-peer-deps --no-audit --no-fund \
    && npm cache clean --force

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start Node server (serves build/ and handles /api/contact)
CMD ["node", "server.js"]

#!/usr/bin/env bash
# Off-box build + push of the academix monorepo images to GHCR.
#   ./scripts/build-and-push.sh [academix|pmp|gallery|all] [tag]
#
# Prereq: docker logged in to GHCR (PAT with write:packages):
#   echo $GHCR_TOKEN | docker login ghcr.io -u skanderturki --password-stdin
# gallery bakes VITE_GOOGLE_CLIENT_ID at build time — export it first if needed.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TARGET="${1:-all}"
TAG="${2:-latest}"
O="ghcr.io/skanderturki"

do_academix() {
  docker build -t "$O/academix-site:$TAG" -f "$ROOT/dockerfile" "$ROOT"
  docker push "$O/academix-site:$TAG"
}
do_pmp() {
  docker build -t "$O/pmp-website:$TAG" -f "$ROOT/PMP website/Dockerfile" "$ROOT/PMP website"
  docker push "$O/pmp-website:$TAG"
}
do_gallery() {
  docker build --build-arg VITE_GOOGLE_CLIENT_ID="${NADART_VITE_GOOGLE_CLIENT_ID:-}" \
    -t "$O/nadart-evo:$TAG" -f "$ROOT/mygalery/nadart_evo/Dockerfile" "$ROOT/mygalery/nadart_evo"
  docker push "$O/nadart-evo:$TAG"
}

case "$TARGET" in
  academix) do_academix ;;
  pmp)      do_pmp ;;
  gallery)  do_gallery ;;
  all)      do_academix; do_pmp; do_gallery ;;
  *) echo "usage: $0 [academix|pmp|gallery|all] [tag]"; exit 1 ;;
esac
echo "Done. On the droplet:  docker compose -f docker-compose.droplet-{a,b}.yml --env-file .env.droplet-{a,b} pull <svc> && ... up -d <svc>"

// node --test tests/  — the static content pages (scripts/pages).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderBlocks, textOf } from '../scripts/pages/layout.mjs';
import * as EN from '../scripts/pages/content/en.mjs';
import * as FR from '../scripts/pages/content/fr.mjs';

test('English and French have the same pages, FAQ count and block structure', () => {
  assert.deepEqual(Object.keys(FR.pages), Object.keys(EN.pages));
  assert.equal(FR.faqItems.length, EN.faqItems.length);
  for (const k of Object.keys(EN.pages)) {
    const e = EN.pages[k].blocks || [];
    const f = FR.pages[k].blocks || [];
    assert.deepEqual(f.map((b) => Object.keys(b)[0]), e.map((b) => Object.keys(b)[0]), `block kinds differ on ${k}`);
  }
});

test('every page renders, with a title and description sized for search results', () => {
  for (const C of [EN, FR]) {
    for (const [k, p] of Object.entries(C.pages)) {
      const meta = p.commission ? C.commissionPages[p.commission] : p;
      assert.ok(meta.title.length <= 70, `${k} title too long: ${meta.title.length}`);
      assert.ok(meta.description.length >= 90 && meta.description.length <= 165, `${k} description length ${meta.description.length}`);
      if (p.blocks) renderBlocks(p.blocks.filter((b) => !String(b.html || b.faq || '').startsWith('__')));
    }
  }
});

test('the ABET facts stay the sourced ones', () => {
  const guide = textOf(EN.pages['what-is-abet-accreditation'].blocks.map((b) => Object.values(b)[0]).join(' '));
  assert.match(guide, /4,863 programs at 950 colleges and universities in 42 countries/);
  assert.match(guide, /at least one graduate within the two academic years before the on-site review/);
  assert.match(guide, /January 31/);
  assert.match(guide, /July 1/);
  assert.doesNotMatch(textOf(EN.faqItems.flat().join(' ')), /NCAAA-aligned|aligned with NCAAA/);
});

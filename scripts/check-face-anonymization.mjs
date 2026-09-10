#!/usr/bin/env node

import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

// These are the reviewed v2 outputs from the participant-photo comparison page.
// Pinning their hashes prevents a later asset refresh from silently restoring
// identifiable faces. Update a hash only after a new privacy review.
const reviewed = {
  'public/images/concert/audience.webp': '2fab3fb8cb737171a82af66ebf3acc23758f92bfc88b6bece7eee785a5978f9e',
  'public/images/concert/greeting.webp': '85c04291dfcfc4588e3ab74f1799e274a4b5eae8490b90d6baa4626d3360b200',
  'public/images/community/concert-together.webp': 'e98fdfa1e3fb15e1d49887ac5baee5da920289af4a009bb7bce92862ec36cf53',
  'public/images/community/forest-practice.webp': 'd7f2edfed9f93be0f8231c8035360941cf07ca38821590f930234be06a8bfa34',
  'public/images/community/concert-auditorium-2025.webp': 'edbb0e4ae18874d9737f33a36818aa6f42067df35eb1b8b14597498bb6cef1d9',
  'public/images/community/advanced-cohort.webp': '6cb51fea72280e7e89b2c88ec31d3428eb8a93d00b1e04248f55ed8a55ca2ecb',
  'public/images/community/retreat-mountain-sit.webp': 'e3c468075b0d8575efc23ebb574c61a9445894bca0065cdb898cb7079c9a3f7b',
  'public/images/community/concert-stairway.webp': '6b4df8901ad8fb39bf0fa19c4d6d16a37cae70c80eee8ff5b764e685a8cb9a4e',
  'public/images/community/somatic-ribbon-practice.webp': '9f2f02f27133b69620b1ce5fef1cf6aed0ab06a749b8f0aa1694e7cccab1e31e',
  'public/images/community/lakeside-practice.webp': '49d921763d97edf5d4ec0ad09c81a936300493e6e4566cd78e0de2cd8f14a91c',
  'public/images/community/woljeongsa-retreat-2026.webp': 'a61208b15624a7101d202022ac0e0731fbffb2217dd07df1e2a64a5b4ee399fb',
  'public/images/community/zone2-mountain.webp': '7645265be921a8423456d63975a6bf799c1248001b8f1c9db513958031112a37',
  'public/images/community/zone2-community.webp': 'aa8832c51e4a6ad3f5a75c282ebda3aeeed6fb7d315a00d0c518ef3d6e5e0650',
}

const failures = []
for (const [path, expected] of Object.entries(reviewed)) {
  let actual
  try {
    actual = createHash('sha256').update(readFileSync(path)).digest('hex')
  } catch (error) {
    failures.push(`${path}: ${error.message}`)
    continue
  }
  if (actual !== expected) failures.push(`${path}: expected ${expected}, received ${actual}`)
}

if (failures.length) {
  console.error('Participant-photo privacy check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log(`Participant-photo privacy check passed (${Object.keys(reviewed).length} reviewed assets).`)

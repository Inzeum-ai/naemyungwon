/** @type {import('next').NextConfig} */
// 모든 이미지는 public/images 아래 로컬 파일입니다. 원격 이미지를 쓰지 않으므로
// images.remotePatterns 를 두지 않습니다. (와일드카드 호스트는 /_next/image 를
// 외부 이미지 리사이즈 프록시로 악용당할 수 있습니다 — GHSA-9g9p-9gw9-jx7f)
const nextConfig = {}

module.exports = nextConfig

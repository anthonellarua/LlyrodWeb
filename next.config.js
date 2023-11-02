/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const { withNextVideo } = require('next-video/process');
const withVideos = require('next-videos')

module.exports = {
  target: 'server',
};

module.exports = withNextVideo(nextConfig);
module.exports = withVideos()
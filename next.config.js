/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    swcMinify: true,
    images: {
        unoptimized: true,
    },
};

module.exports = withContentlayer(nextConfig);

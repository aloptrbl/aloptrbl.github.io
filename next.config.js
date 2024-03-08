/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const nextConfig = {
    output: "export",
    reactStrictMode: true, 
    swcMinify: true,
    images: {
        unoptimized: true,
    },
};

module.exports = withContentlayer(nextConfig);

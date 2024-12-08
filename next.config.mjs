/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
            {
                protocol:'https',
                hostname:'24newshd.tv'
            }
        ],
    },
};

export default nextConfig;

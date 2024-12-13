/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
            {
                protocol:'https',
                hostname:'24newshd.tv'
            },
            {
                protocol:'https',
                hostname:'upload.wikimedia.org'
            }
        ],
    },
};

export default nextConfig;

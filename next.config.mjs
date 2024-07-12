/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/projects',
          destination: '/',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
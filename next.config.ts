import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One single form of the URL: https + www. The bare domain is sent to www with a permanent
  // redirect (http to https is handled by the host).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kossiarou.com" }],
        destination: "https://www.kossiarou.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config, { isServer }) => {
        config.watchOptions = {
            ignored: ['**/.next/**', '**/node_modules/**'],
        };
        return config;
    },
    onDemandEntries: {
        maxInactiveAge: 60 * 1000, // 60 seconds
        pagesBufferLength: 5,
    },
};

export default nextConfig;

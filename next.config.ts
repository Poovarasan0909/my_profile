import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';


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

if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
}
export default nextConfig;

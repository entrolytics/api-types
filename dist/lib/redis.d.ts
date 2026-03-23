/**
 * Redis client singleton for Entrolytics
 * Uses @entrolytics/redis-client package
 */
import { EntrolyticsRedisClient } from '@entrolytics/redis-client';
/**
 * Get or create the Redis client instance
 * Returns null if Redis is not configured
 */
export declare function getRedisClient(): Promise<EntrolyticsRedisClient | null>;
/**
 * Check if Redis is enabled
 */
export declare function isRedisEnabled(): boolean;
/**
 * Get the raw Redis client for advanced operations
 * Use with caution - prefer the wrapper methods
 */
export declare function getRawRedisClient(): Promise<EntrolyticsRedisClient['client'] | null>;
export { CACHE_PREFIX, type CacheStats, DELETED, EntrolyticsRedisClient, type EntrolyticsRedisClientOptions, type TTLOption, } from '@entrolytics/redis-client';
declare const redis: {
    enabled: boolean;
    getClient: typeof getRedisClient;
    getRawClient: typeof getRawRedisClient;
    isEnabled: typeof isRedisEnabled;
};
export default redis;
//# sourceMappingURL=redis.d.ts.map
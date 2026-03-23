/**
 * Rate limiting for Entrolytics API routes
 * Uses @entrolytics/redis-client package for distributed rate limiting
 */
import { getRateLimitHeaders, RATE_LIMITS } from '@entrolytics/redis-client';
import type { RateLimitConfig, RateLimitResult } from '@entrolytics/redis-client';
import type { FastifyRequest } from 'fastify';
export { getRateLimitHeaders, type RateLimitConfig, RATE_LIMITS, type RateLimitResult };
/**
 * Get client identifier from Fastify request
 * Uses IP address or a combination of headers for identification
 */
export declare function getClientIdFromRequest(request: FastifyRequest): string;
/**
 * Check rate limit for a Fastify request (IP-based)
 *
 * Uses Redis if available (distributed rate limiting), falls back to
 * in-memory (single instance) if Redis is not enabled.
 *
 * @param request - Fastify request
 * @param config - Rate limit configuration
 */
export declare function rateLimitRequest(request: FastifyRequest, config: RateLimitConfig): Promise<RateLimitResult>;
/**
 * Rate limit by a specific identifier (not just IP)
 * Useful for per-website, per-user, or per-resource rate limiting
 *
 * @param identifier - Unique identifier (e.g., website ID, user ID)
 * @param config - Rate limit configuration
 */
export declare function rateLimitByIdentifier(identifier: string, config: RateLimitConfig): Promise<RateLimitResult>;
/**
 * Get a rate limiter bound to the app's Redis client
 * Useful for creating specialized rate limiters
 */
export declare function getAppRateLimiter(): Promise<{
    check: (identifier: string, config: RateLimitConfig) => Promise<RateLimitResult>;
    checkSimple: (identifier: string, limit: number, windowSeconds: number) => Promise<boolean>;
    getRemaining: (identifier: string, config: RateLimitConfig) => Promise<number>;
}>;
//# sourceMappingURL=rate-limit.d.ts.map
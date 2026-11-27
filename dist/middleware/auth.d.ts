import type { OrgRole, PlatformRole } from '@entrolytics/config';
import type { FastifyReply, FastifyRequest } from 'fastify';
export interface AuthUser {
    id: string;
    email: string;
    displayName: string | null;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;
    role: PlatformRole;
    /** The id of the sign-in identity the account belongs to (the column keeps its older name). */
    clerkId: string;
    createdAt: Date | null;
    orgId?: string | null;
    orgRole?: OrgRole | null;
    isAdmin?: boolean;
}
export interface AuthContext {
    user: AuthUser;
    /**
     * How the caller authenticated. Minting a CLI token requires an interactive session: a CLI token
     * that could mint tokens could mint one wider than its own scopes.
     */
    credential: 'session' | 'cli-token';
    orgId?: string | null;
    grant: string[];
}
/**
 * Resolve the caller's auth context, memoized for the lifetime of the request.
 *
 * Resolution reads PostgreSQL several times, and both the global write-grant hook (AUTH-3) and the
 * route handler itself need the same context. Without memoization every guarded mutation would pay
 * for that lookup twice.
 */
export declare function getAuthUser(request: FastifyRequest): Promise<AuthContext | null>;
/**
 * Authenticate a Bearer credential: a CLI token (`entro_…`), or the short-lived token the web gets
 * from sign-in for a session. Exported for credentials that arrive outside the request headers: a
 * browser cannot set headers on a WebSocket upgrade, so the realtime socket sends its token in an
 * `authenticate` message.
 */
export declare function authenticateBearerToken(token: string, request?: FastifyRequest): Promise<AuthContext | null>;
/** Check if user has required permission */
export declare function hasPermission(auth: AuthContext | null, permission: string): boolean;
/** Check if user is admin */
export declare function isAdmin(auth: AuthContext | null): boolean;
/** Extract API key from request headers. Uses canonical `x-api-key`. */
export declare function getRequestApiKey(request: Pick<FastifyRequest, 'headers'>): string | null;
export declare function getRequestClientKey(candidate: unknown): string | null;
/** Validate API key against website access scope. */
export declare function validateRequestApiKey(request: FastifyRequest, websiteId: string): Promise<boolean>;
/**
 * Authorize collection requests by API key or by website-domain origin. Browser trackers can
 * authenticate via Origin + websiteId without exposing API keys.
 */
export declare function authorizeCollectionRequest(request: FastifyRequest, websiteId: string, clientKey?: string | null): Promise<boolean>;
/**
 * Whether the caller's effective grant permits a state-changing operation.
 *
 * The grant is the intersection of the caller's role permissions and, for CLI tokens, the token's
 * declared scopes (AUTH-3). Computing it was not enough on its own: nothing consumed it, so a
 * read-only token could still mutate the resources its user owned. This is the consumer.
 */
export declare function canWrite(auth: AuthContext | null): boolean;
/**
 * Fastify hook enforcing {@link canWrite} on every mutating REST request.
 *
 * Unauthenticated requests pass through untouched so publicly reachable endpoints (event
 * collection, Stripe webhooks) keep owning their own authorization. Route handlers still perform
 * their ownership and membership checks afterwards; this only removes operations the caller's grant
 * never permitted.
 */
export declare function enforceWriteGrant(request: FastifyRequest, reply: FastifyReply): Promise<void>;
//# sourceMappingURL=auth.d.ts.map
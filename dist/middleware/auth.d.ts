import type { OrgRole, PlatformRole } from '@entrolytics/config';
import type { FastifyRequest } from 'fastify';
export interface AuthUser {
    id: string;
    email: string;
    displayName: string | null;
    firstName: string | null;
    lastName: string | null;
    imageUrl: string | null;
    role: PlatformRole;
    clerkId: string;
    clerkOrgId?: string | null;
    createdAt: Date | null;
    orgId?: string | null;
    orgRole?: OrgRole | null;
    isAdmin?: boolean;
}
export interface AuthContext {
    user: AuthUser;
    clerkUserId: string;
    clerkOrgId?: string | null;
    orgId?: string | null;
    grant: string[];
}
/** Get authenticated user from Clerk session To be called within tRPC context or route handlers */
export declare function getAuthUser(request: FastifyRequest): Promise<AuthContext | null>;
/** Check if user has required permission */
export declare function hasPermission(auth: AuthContext | null, permission: string): boolean;
/** Check if user is admin */
export declare function isAdmin(auth: AuthContext | null): boolean;
/** Extract API key from request headers. Uses canonical `x-api-key`. */
export declare function getRequestApiKey(request: FastifyRequest): string | null;
export declare function getRequestClientKey(candidate: unknown): string | null;
/** Validate API key against website access scope. */
export declare function validateRequestApiKey(request: FastifyRequest, websiteId: string): Promise<boolean>;
/**
 * Authorize collection requests by API key or by website-domain origin. Browser trackers can
 * authenticate via Origin + websiteId without exposing API keys.
 */
export declare function authorizeCollectionRequest(request: FastifyRequest, websiteId: string, clientKey?: string | null): Promise<boolean>;
//# sourceMappingURL=auth.d.ts.map
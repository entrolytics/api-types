import type { PlatformRole } from '../lib/roles.js';
export declare class WebsiteService {
    /**
     * List websites with filtering
     */
    static listWebsites(params: {
        userId: string;
        orgId?: string | null;
        role: string;
        page?: number;
        pageSize?: number;
        search?: string;
    }): Promise<{
        id: string;
        orgId: string | null;
        userId: string | null;
        name: string;
        domain: string;
        shareId: string | null;
        resetAt: Date | null;
        ingestMode: string;
        createdBy: string | null;
        timezone: string | null;
        public: boolean | null;
        autoTrackPageviews: boolean | null;
        autoTrackSessions: boolean | null;
        excludeQueryParams: string[] | null;
        anonymizeIps: boolean | null;
        respectDnt: boolean | null;
        cookieConsentRequired: boolean | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    /**
     * Get website by ID
     */
    static getWebsite(websiteId: string, userId: string, role: string): Promise<{
        id: string;
        orgId: string | null;
        userId: string | null;
        name: string;
        domain: string;
        shareId: string | null;
        resetAt: Date | null;
        ingestMode: string;
        createdBy: string | null;
        timezone: string | null;
        public: boolean | null;
        autoTrackPageviews: boolean | null;
        autoTrackSessions: boolean | null;
        excludeQueryParams: string[] | null;
        anonymizeIps: boolean | null;
        respectDnt: boolean | null;
        cookieConsentRequired: boolean | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    /**
     * Get website by share ID (public share link)
     */
    static getWebsiteByShareId(shareId: string): Promise<{
        id: string;
        orgId: string | null;
        userId: string | null;
        name: string;
        domain: string;
        shareId: string | null;
        resetAt: Date | null;
        ingestMode: string;
        createdBy: string | null;
        timezone: string | null;
        public: boolean | null;
        autoTrackPageviews: boolean | null;
        autoTrackSessions: boolean | null;
        excludeQueryParams: string[] | null;
        anonymizeIps: boolean | null;
        respectDnt: boolean | null;
        cookieConsentRequired: boolean | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * Get website by ID + share token (public access)
     */
    static getWebsiteByShareToken(websiteId: string, shareId: string): Promise<{
        id: string;
        orgId: string | null;
        userId: string | null;
        name: string;
        domain: string;
        shareId: string | null;
        resetAt: Date | null;
        ingestMode: string;
        createdBy: string | null;
        timezone: string | null;
        public: boolean | null;
        autoTrackPageviews: boolean | null;
        autoTrackSessions: boolean | null;
        excludeQueryParams: string[] | null;
        anonymizeIps: boolean | null;
        respectDnt: boolean | null;
        cookieConsentRequired: boolean | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * Get website metadata for public collection authorization
     */
    static getWebsiteForCollection(websiteId: string): Promise<{
        domain: string;
        id: string;
    }>;
    /**
     * Create new website
     */
    static createWebsite(userId: string, role: PlatformRole | string, data: {
        name: string;
        domain: string;
        shareId?: string;
        orgId?: string;
    }): Promise<{
        name: string;
        id: string;
        orgId: string | null;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
        domain: string;
        shareId: string | null;
        resetAt: Date | null;
        ingestMode: string;
        createdBy: string | null;
        timezone: string | null;
        public: boolean | null;
        autoTrackPageviews: boolean | null;
        autoTrackSessions: boolean | null;
        excludeQueryParams: string[] | null;
        anonymizeIps: boolean | null;
        respectDnt: boolean | null;
        cookieConsentRequired: boolean | null;
        deletedAt: Date | null;
    }>;
    /**
     * Update website
     */
    static updateWebsite(websiteId: string, userId: string, role: string, data: {
        name?: string;
        domain?: string;
        public?: boolean;
        autoTrackPageviews?: boolean;
        autoTrackSessions?: boolean;
        anonymizeIps?: boolean;
        respectDnt?: boolean;
    }): Promise<{
        id: string;
        orgId: string | null;
        userId: string | null;
        name: string;
        domain: string;
        shareId: string | null;
        resetAt: Date | null;
        ingestMode: string;
        createdBy: string | null;
        timezone: string | null;
        public: boolean | null;
        autoTrackPageviews: boolean | null;
        autoTrackSessions: boolean | null;
        excludeQueryParams: string[] | null;
        anonymizeIps: boolean | null;
        respectDnt: boolean | null;
        cookieConsentRequired: boolean | null;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * Delete website
     */
    static deleteWebsite(websiteId: string, userId: string, role: string): Promise<boolean>;
    /**
     * List API keys
     */
    static listApiKeys(websiteId: string): Promise<{
        createdAt: Date;
        expiresAt: Date | null;
        id: string;
        lastUsedAt: Date | null;
        name: string;
        prefix: string;
        scopes: string[];
    }[]>;
    /**
     * Get API key metadata by ID
     */
    static getApiKeyById(keyId: string): Promise<{
        deletedAt: Date | null;
        id: string;
        websiteId: string;
    }>;
    /**
     * Create API key
     */
    static createApiKey(websiteId: string, name: string, scopes: string[]): Promise<{
        key: string;
        name: string;
        id: string;
        createdAt: Date;
        deletedAt: Date | null;
        expiresAt: Date | null;
        lastUsedAt: Date | null;
        prefix: string;
        scopes: string[];
        websiteId: string;
        keyHash: string;
        rateLimitMax: number | null;
        rateLimitWindow: number | null;
        allowedDomains: string[] | null;
        allowedOrigins: string[] | null;
        requestsCount: number | null;
    }>;
    /**
     * Revoke API key
     */
    static revokeApiKey(keyId: string, websiteId?: string): Promise<boolean>;
    /**
     * Validate an API key and return metadata if valid
     */
    static validateApiKey(rawKey: string, websiteId?: string, origin?: string): Promise<{
        allowedDomains: string[] | null;
        allowedOrigins: string[] | null;
        expiresAt: Date | null;
        id: string;
        scopes: string[];
        websiteId: string;
    } | null>;
}
//# sourceMappingURL=websites.d.ts.map
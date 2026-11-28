/** A Search Console property the connected Google account can read. */
export interface SearchConsoleProperty {
    permissionLevel: string;
    /** `https://example.com/` for a URL-prefix property, `sc-domain:example.com` for a domain one. */
    siteUrl: string;
}
export type SearchConsoleBreakdownDimension = 'country' | 'device' | 'page' | 'query';
/** What the dashboard may know about a connection: never the token. */
export interface SearchConsoleConnectionStatus {
    connectedAt: Date;
    lastError: string | null;
    lastSyncedAt: Date | null;
    /** Null until the user picks which property to import. */
    siteUrl: string | null;
    /** `needs_reauth` once Google rejects the grant; the user has to connect again. */
    status: 'active' | 'needs_reauth';
    /** The last day (`YYYY-MM-DD`) whose data has been imported. */
    syncedThrough: string | null;
}
export interface SearchConsoleMetrics {
    clicks: number;
    /** Clicks divided by impressions, 0 to 1. */
    ctr: number;
    impressions: number;
    /** Impression-weighted average position; null without impressions. */
    position: number | null;
}
export declare const SearchConsoleService: {
    /** Whether this deployment has Google OAuth credentials for the import. */
    isConfigured(): boolean;
    getStatus(websiteId: string): Promise<SearchConsoleConnectionStatus | null>;
    /** The Google consent URL for connecting `websiteId` on behalf of `userId`. */
    createAuthorizationUrl(websiteId: string, userId: string): string;
    /**
     * Store the grant from a finished consent flow. Reconnecting keeps the chosen property and its
     * imported history: only the token is replaced.
     */
    saveGrant(input: {
        refreshToken: string;
        userId: string;
        websiteId: string;
    }): Promise<void>;
    /** The Search Console properties the connected Google account can read. */
    listProperties(websiteId: string): Promise<SearchConsoleProperty[]>;
    /**
     * Choose the property to import and start its first sync. Choosing a different one drops what was
     * imported from the previous property and imports the new one from scratch.
     */
    selectProperty(websiteId: string, siteUrl: string): Promise<void>;
    /** Queue an import of the days not imported yet. */
    requestSync(websiteId: string): Promise<void>;
    /**
     * Forget the connection and its imported data, then revoke the grant at Google.
     *
     * The local delete comes first because it is what the user asked for and must not depend on
     * Google being reachable. `revoked: false` tells the caller the grant is still listed in the
     * user's Google account and has to be removed there.
     */
    disconnect(websiteId: string): Promise<{
        revoked: boolean;
    }>;
    /** Totals and the per-day series for the connected property over a date range. */
    getOverview(websiteId: string, siteUrl: string, startDate: Date, endDate: Date): Promise<{
        series: Array<SearchConsoleMetrics & {
            date: string;
        }>;
        totals: SearchConsoleMetrics;
    }>;
    /** The top keys of one breakdown (queries, pages, countries or devices) by clicks. */
    getBreakdown(websiteId: string, siteUrl: string, dimension: SearchConsoleBreakdownDimension, startDate: Date, endDate: Date, limit: number): Promise<Array<SearchConsoleMetrics & {
        key: string;
    }>>;
};
//# sourceMappingURL=search-console.d.ts.map
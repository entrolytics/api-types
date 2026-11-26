import { z } from 'zod';
export type PageType = 'path' | 'entry' | 'exit';
export type DeviceDimension = 'device' | 'browser' | 'os';
export type GeoDimension = 'country' | 'region' | 'city';
export declare const timeseriesRowSchema: z.ZodObject<{
    date: z.ZodString;
    pageviews: z.ZodNumber;
    sessions: z.ZodNumber;
    visitors: z.ZodNumber;
}, z.core.$strip>;
export type AnalyticsTimeseriesRow = z.infer<typeof timeseriesRowSchema>;
export interface SessionDetailResult {
    sessionId: string;
    visitId: string;
    pageviews: number;
    events: number;
    duration: number;
    country: string | null;
    countryCode: string | null;
    city: string | null;
    region: string | null;
    browser: string | null;
    os: string | null;
    device: 'desktop' | 'mobile' | 'tablet' | null;
    entryPath: string | null;
    exitPath: string | null;
    startTime: string;
    endTime: string;
    bounced: boolean;
}
export interface SessionActivityEvent {
    eventId: string;
    eventName: string | null;
    eventType: string;
    timestamp: string;
    path: string | null;
    referrer: string | null;
    loadTime: number;
    eventData: Record<string, unknown> | null;
    createdAt: string;
    urlPath: string | null;
}
export declare const sessionListRowSchema: z.ZodObject<{
    browser: z.ZodNullable<z.ZodString>;
    city: z.ZodNullable<z.ZodString>;
    country: z.ZodNullable<z.ZodString>;
    device_type: z.ZodNullable<z.ZodString>;
    entry_page: z.ZodNullable<z.ZodString>;
    events: z.ZodNumber;
    exit_page: z.ZodNullable<z.ZodString>;
    os: z.ZodNullable<z.ZodString>;
    pageviews: z.ZodNumber;
    referrer: z.ZodNullable<z.ZodString>;
    session_end: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    session_id: z.ZodString;
    session_start: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    visitor_id: z.ZodString;
}, z.core.$strip>;
export declare const sessionDetailRowSchema: z.ZodObject<{
    browser: z.ZodNullable<z.ZodString>;
    city: z.ZodNullable<z.ZodString>;
    country: z.ZodNullable<z.ZodString>;
    device_type: z.ZodNullable<z.ZodString>;
    duration: z.ZodCoercedNumber<unknown>;
    entry_page: z.ZodNullable<z.ZodString>;
    events: z.ZodCoercedNumber<unknown>;
    exit_page: z.ZodNullable<z.ZodString>;
    os: z.ZodNullable<z.ZodString>;
    pageviews: z.ZodCoercedNumber<unknown>;
    referrer: z.ZodNullable<z.ZodString>;
    region: z.ZodNullable<z.ZodString>;
    session_end: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    session_id: z.ZodString;
    session_start: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    visitor_id: z.ZodString;
}, z.core.$strip>;
export declare const sessionActivityRowSchema: z.ZodObject<{
    event_data: z.ZodNullable<z.ZodString>;
    id: z.ZodString;
    event_name: z.ZodNullable<z.ZodString>;
    event_type: z.ZodString;
    load_time: z.ZodNullable<z.ZodCoercedNumber<unknown>>;
    path: z.ZodNullable<z.ZodString>;
    referrer: z.ZodNullable<z.ZodString>;
    timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
}, z.core.$strip>;
export interface SessionListItem {
    sessionId: string;
    sessionStart: string;
    sessionEnd: string;
    startTime: string;
    endTime: string;
    duration: number;
    pageviews: number;
    events: number;
    visitorId: string;
    country: string | null;
    countryCode: string | null;
    city: string | null;
    device: 'desktop' | 'mobile' | 'tablet' | null;
    deviceType: string | null;
    browser: string | null;
    os: string | null;
    referrer: string | null;
    entryPage: string | null;
    entryPath: string | null;
    exitPage: string | null;
    exitPath: string | null;
    bounced: boolean;
}
/** Dashboard filters: each narrows the events read to those with that value. */
export interface AnalyticsFilters {
    browser?: string;
    country?: string;
    device?: 'desktop' | 'mobile' | 'tablet';
    path?: string;
}
export declare class AnalyticsService {
    /** Overview statistics with comparison period */
    static getOverview(websiteId: string, startDate: Date, endDate: Date, filters?: AnalyticsFilters): Promise<{
        bounces: number;
        comparison: {
            pageviews: number;
            visitors: number;
            visits: number;
            bounces: number;
            totalTime: number;
        };
        pageviews: number;
        totalTime: number;
        visitors: number;
        visits: number;
    }>;
    /**
     * Time-series data for charts, bucketed in `timeZone`. Bucketing in UTC put a visit late in the
     * evening west of Greenwich, or after midnight east of it, on the wrong day; `date` is the
     * bucket's wall-clock start in `timeZone`.
     */
    static getTimeseries(websiteId: string, startDate: Date, endDate: Date, interval: 'hour' | 'day' | 'week' | 'month', timeZone: string, filters?: AnalyticsFilters): Promise<{
        date: string;
        pageviews: number;
        sessions: number;
        visitors: number;
    }[]>;
    /** Top pages */
    /**
     * Pageviews by weekday (1 = Monday … 7 = Sunday) and hour, in `timeZone`. Bucketing in UTC put a
     * Monday-evening visit on Tuesday for anyone far enough east, and a website's own time zone was
     * stored and never read.
     */
    static getWeeklyTraffic(websiteId: string, startDate: Date, endDate: Date, timeZone: string): Promise<{
        day: number;
        hour: number;
        y: number;
    }[]>;
    static getTopPages(websiteId: string, startDate: Date, endDate: Date, limit: number, filters?: AnalyticsFilters, pageType?: PageType): Promise<{
        avg_load_time?: number | null | undefined;
        p95_load_time?: number | null | undefined;
        path: string | null;
        unique_visitors?: number | undefined;
        views: number;
    }[]>;
    /** Top referrers */
    static getTopReferrers(websiteId: string, startDate: Date, endDate: Date, limit: number, filters?: AnalyticsFilters): Promise<{
        referrer_domain: string | null;
        unique_visitors?: number | undefined;
        visits: number;
    }[]>;
    /** Device breakdown */
    static getDeviceBreakdown(websiteId: string, startDate: Date, endDate: Date, filters?: AnalyticsFilters, groupBy?: DeviceDimension): Promise<{
        browser: string | null;
        device_type: string | null;
        os: string | null;
        pageviews: number;
        unique_visitors?: number | undefined;
    }[]>;
    /** Geographic distribution */
    static getGeography(websiteId: string, startDate: Date, endDate: Date, filters?: AnalyticsFilters, groupBy?: GeoDimension): Promise<{
        city: string | null;
        country: string | null;
        region?: string | null | undefined;
        pageviews: number;
        unique_visitors?: number | undefined;
    }[]>;
    /** Top countries (by unique visitors) */
    static getTopCountries(websiteId: string, startDate: Date, endDate: Date, limit: number): Promise<{
        country: string;
        visitors: number;
    }[]>;
    /** Top devices (by pageviews) */
    static getTopDevices(websiteId: string, startDate: Date, endDate: Date, limit: number): Promise<{
        count: number;
        device: string;
    }[]>;
    /** Top browsers (by pageviews) */
    static getTopBrowsers(websiteId: string, startDate: Date, endDate: Date, limit: number): Promise<{
        browser: string;
        count: number;
    }[]>;
    /** Average session duration (seconds) */
    static getAverageSessionDuration(websiteId: string, startDate: Date, endDate: Date): Promise<number>;
    /** UTM campaigns */
    static getUtmCampaigns(websiteId: string, startDate: Date, endDate: Date, filters?: AnalyticsFilters): Promise<{
        sessions: number;
        unique_visitors: number;
        utm_campaign: string | null;
        utm_medium: string | null;
        utm_source: string | null;
        visits: number;
    }[]>;
    /** List all sessions */
    static getSessions(websiteId: string, startDate: Date, endDate: Date, limit: number, offset: number, resetAt?: Date | null, filters?: AnalyticsFilters): Promise<{
        sessionId: string;
        visitId: string;
        sessionStart: string;
        sessionEnd: string;
        startTime: string;
        endTime: string;
        duration: number;
        pageviews: number;
        events: number;
        visitorId: string;
        country: string | null;
        countryCode: string | null;
        city: string | null;
        device: "desktop" | "mobile" | "tablet" | null;
        browser: string | null;
        os: string | null;
        referrer: string | null;
        entryPage: string | null;
        entryPath: string | null;
        exitPage: string | null;
        exitPath: string | null;
        bounced: boolean;
    }[]>;
    /** Get session details */
    static getSessionDetails(websiteId: string, sessionId: string, resetAt?: Date | null): Promise<{
        sessionId: string;
        visitId: string;
        pageviews: number;
        events: number;
        duration: number;
        country: string | null;
        countryCode: string | null;
        city: string | null;
        region: string | null;
        browser: string | null;
        os: string | null;
        device: "desktop" | "mobile" | "tablet" | null;
        entryPath: string | null;
        exitPath: string | null;
        startTime: string;
        endTime: string;
        bounced: boolean;
    } | null>;
    /** Get session activity (all events in a session) */
    static getSessionActivity(websiteId: string, sessionId: string, startDate?: Date, endDate?: Date, resetAt?: Date | null): Promise<SessionActivityEvent[]>;
}
//# sourceMappingURL=analytics.d.ts.map
import { z } from 'zod';
export declare const dateRangeSchema: z.ZodObject<{
    endDate: z.ZodDate;
    filters: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodString>;
        device: z.ZodOptional<z.ZodEnum<{
            desktop: "desktop";
            mobile: "mobile";
            tablet: "tablet";
        }>>;
        browser: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    startDate: z.ZodDate;
    websiteId: z.ZodString;
}, z.core.$strip>;
export declare const analyticsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /**
     * Pageviews by weekday and hour. Buckets in `timeZone` when given (the viewer's), else in the
     * website's own time zone, else UTC.
     */
    weeklyTraffic: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            timeZone?: string | undefined;
            websiteId: string;
        };
        output: {
            day: number;
            hour: number;
            y: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Overview statistics with comparison period */
    overview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
        };
        output: {
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
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /**
     * Time-series data for charts. Buckets in `timeZone` when given (the viewer's), else in the
     * website's own time zone, else UTC.
     */
    timeseries: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
            interval: "day" | "hour" | "month" | "week";
            timeZone?: string | undefined;
        };
        output: {
            date: string;
            pageviews: number;
            sessions: number;
            visitors: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Top pages */
    topPages: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
            limit?: number | undefined;
        };
        output: {
            avg_load_time?: number | null | undefined;
            p95_load_time?: number | null | undefined;
            path: string | null;
            unique_visitors?: number | undefined;
            views: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Top referrers */
    topReferrers: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
            limit?: number | undefined;
        };
        output: {
            referrer_domain: string | null;
            unique_visitors?: number | undefined;
            visits: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Device breakdown */
    deviceBreakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
        };
        output: {
            browser: string | null;
            device_type: string | null;
            os: string | null;
            pageviews: number;
            unique_visitors?: number | undefined;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Geographic distribution */
    geography: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
        };
        output: {
            city: string | null;
            country: string | null;
            pageviews: number;
            unique_visitors?: number | undefined;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** UTM campaigns */
    utmCampaigns: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
        };
        output: {
            sessions: number;
            unique_visitors: number;
            utm_campaign: string | null;
            utm_medium: string | null;
            utm_source: string | null;
            visits: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** List all sessions, at most 200 per page */
    sessions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            startDate: Date;
            websiteId: string;
            limit?: number | undefined;
            offset?: number | undefined;
        };
        output: {
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
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get session details */
    sessionDetails: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            sessionId: string;
            websiteId: string;
        };
        output: {
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
        } | null;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get session activity (all events in a session) */
    sessionActivity: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate?: Date | undefined;
            sessionId: string;
            startDate?: Date | undefined;
            websiteId: string;
        };
        output: import("../services/analytics.js").SessionActivityEvent[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
}>>;
//# sourceMappingURL=analytics.d.ts.map
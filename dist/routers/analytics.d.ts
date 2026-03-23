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
     * Overview statistics with comparison period
     */
    overview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
        };
        output: {
            bounces: number;
            comparison: {
                pageviews: number;
                visitors: number;
                visits: number;
                bounces: number;
                totaltime: number;
            };
            pageviews: number;
            totaltime: number;
            visitors: number;
            visits: number;
        };
        meta: object;
    }>;
    /**
     * Time-series data for charts
     */
    timeseries: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            interval: "hour" | "day" | "week" | "month";
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
        };
        output: {
            date: string;
            pageviews: number;
            sessions: number;
            visitors: number;
        }[];
        meta: object;
    }>;
    /**
     * Top pages
     */
    topPages: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        };
        output: {
            path: string | null;
            views: number;
            avg_load_time?: number | null | undefined;
            p95_load_time?: number | null | undefined;
            unique_visitors?: number | undefined;
        }[];
        meta: object;
    }>;
    /**
     * Top referrers
     */
    topReferrers: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
            limit?: number | undefined;
        };
        output: {
            referrer_domain: string | null;
            visits: number;
            unique_visitors?: number | undefined;
        }[];
        meta: object;
    }>;
    /**
     * Device breakdown
     */
    deviceBreakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
        };
        output: {
            browser: string | null;
            device_type: string | null;
            os: string | null;
            pageviews: number;
            unique_visitors?: number | undefined;
        }[];
        meta: object;
    }>;
    /**
     * Geographic distribution
     */
    geography: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
        };
        output: {
            city: string | null;
            country: string | null;
            pageviews: number;
            unique_visitors?: number | undefined;
        }[];
        meta: object;
    }>;
    /**
     * UTM campaigns
     */
    utmCampaigns: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
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
    }>;
    /**
     * List all sessions
     */
    sessions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                country?: string | undefined;
                device?: "desktop" | "mobile" | "tablet" | undefined;
                browser?: string | undefined;
                path?: string | undefined;
            } | undefined;
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
            deviceType: string | null;
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
    }>;
    /**
     * Get session details
     */
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
            region: null;
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
    }>;
    /**
     * Get session activity (all events in a session)
     */
    sessionActivity: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            sessionId: string;
            websiteId: string;
            endDate?: Date | undefined;
            startDate?: Date | undefined;
        };
        output: import("../services/analytics").SessionActivityEvent[];
        meta: object;
    }>;
}>>;
//# sourceMappingURL=analytics.d.ts.map
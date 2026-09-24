export interface RealtimeSeriesPoint {
    /** Start of the minute, as an ISO 8601 UTC instant. */
    time: string;
    visitors: number;
    pageviews: number;
}
export interface RealtimeCountry {
    country: string;
    countryCode: string;
    visitors: number;
}
export interface RealtimeUrl {
    path: string;
    visitors: number;
}
export interface RealtimeEvent {
    id: string;
    type: string;
    eventName: string | null;
    path: string;
    country: string | null;
    countryCode: string | null;
    device: string;
    browser: string;
    /** ISO 8601 UTC instant. */
    timestamp: string;
}
export interface RealtimeOverviewResponse {
    activeVisitors: number;
    series: RealtimeSeriesPoint[];
    countries: RealtimeCountry[];
    urls: RealtimeUrl[];
    events: RealtimeEvent[];
}
export declare const realtimeRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** Get current visitors (last 5 minutes) */
    currentVisitors: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            pageviews: number;
            sessions: number;
            visitors: number;
        };
        meta: object;
    }>;
    /** Recent events (last 100) */
    recentEvents: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            limit?: number | undefined;
            websiteId: string;
        };
        output: {
            browser: string;
            country: string | null;
            countryCode: string | null;
            device: string;
            eventName: string | null;
            id: string;
            path: string;
            timestamp: string;
            type: string;
        }[];
        meta: object;
    }>;
    /** Active pages (current pageviews by path) */
    activePages: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            path: string;
            viewers: number;
        }[];
        meta: object;
    }>;
    /** Time series data (last 30 minutes, per minute) */
    timeSeries: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            pageviews: number;
            time: string;
            visitors: number;
        }[];
        meta: object;
    }>;
    /** Country breakdown (active visitors by country) */
    countryBreakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            country: string;
            countryCode: string;
            visitors: number;
        }[];
        meta: object;
    }>;
    /** Comprehensive realtime overview (all data in one query) */
    overview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            activeVisitors: number;
            countries: {
                country: string;
                countryCode: string;
                visitors: number;
            }[];
            events: {
                browser: string;
                country: string | null;
                countryCode: string | null;
                device: string;
                eventName: string | null;
                id: string;
                path: string;
                timestamp: string;
                type: string;
            }[];
            series: {
                pageviews: number;
                time: string;
                visitors: number;
            }[];
            urls: {
                path: string;
                visitors: number;
            }[];
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=realtime.d.ts.map
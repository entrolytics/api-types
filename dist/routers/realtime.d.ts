export interface RealtimeSeriesPoint {
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
    eventName: string;
    path: string;
    country: string;
    countryCode: string;
    device: string;
    browser: string;
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
    /**
     * Get current visitors (last 5 minutes)
     */
    currentVisitors: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {};
        meta: object;
    }>;
    /**
     * Recent events (last 100)
     */
    recentEvents: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
            limit?: number | undefined;
        };
        output: unknown[];
        meta: object;
    }>;
    /**
     * Active pages (current pageviews by path)
     */
    activePages: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: unknown[];
        meta: object;
    }>;
    /**
     * Time series data (last 30 minutes, per minute)
     */
    timeSeries: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: unknown[];
        meta: object;
    }>;
    /**
     * Country breakdown (active visitors by country)
     */
    countryBreakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: unknown[];
        meta: object;
    }>;
    /**
     * Comprehensive realtime overview (all data in one query)
     */
    overview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: RealtimeOverviewResponse;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=realtime.d.ts.map
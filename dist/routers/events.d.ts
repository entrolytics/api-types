export declare const eventsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** List all events (individual event records) */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            eventName?: string | undefined;
            limit?: number | undefined;
            offset?: number | undefined;
        };
        output: {
            browser: string | null;
            city: string | null;
            country: string | null;
            device_type: string | null;
            event_data: string;
            event_id: string;
            event_name: string | null;
            event_type: string;
            os: string | null;
            path: string;
            referrer: string | null;
            session_id: string;
            timestamp: string;
            visitor_id: string;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get event details and property breakdown */
    details: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            eventName: string;
        };
        output: {
            count: number;
            event_data: string;
            unique_users: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Event time-series (renamed from timeseries to series) */
    series: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            eventName?: string | undefined;
            interval?: "day" | "hour" | "month" | "week" | undefined;
        };
        output: {
            count: number;
            date: string;
            event_name: string | null;
            unique_sessions: number;
            unique_visitors: number;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
}>>;
//# sourceMappingURL=events.d.ts.map
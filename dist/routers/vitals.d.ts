export declare const vitalsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** Get vitals overview for a website */
    overview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: import("../services/vitals.js").VitalAggregate[];
        meta: object;
    }>;
    /** Get vitals trend over time */
    trend: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            interval?: "day" | "hour" | "week" | undefined;
            metricName: "CLS" | "FCP" | "INP" | "LCP" | "TTFB";
        };
        output: {
            date: string;
            p75Value: number;
            sampleCount: number;
        }[];
        meta: object;
    }>;
    /** Get recent vital events (for debugging) */
    recentEvents: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            limit?: number | undefined;
            websiteId: string;
        };
        output: import("../services/vitals.js").VitalEvent[];
        meta: object;
    }>;
    /** Get page breakdown with all metrics aggregated per page */
    pageBreakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            limit?: number | undefined;
        };
        output: import("../services/vitals.js").PageBreakdown[];
        meta: object;
    }>;
}>>;
//# sourceMappingURL=vitals.d.ts.map
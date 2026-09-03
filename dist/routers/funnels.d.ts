export interface FunnelStepResult {
    step: number;
    type: 'pageview' | 'event';
    value: string;
    visitors: number;
    conversionRate: number;
    dropoff: number;
    totalConversion: number;
    dropped: number;
    remaining: number;
}
export interface FunnelResponse {
    steps: FunnelStepResult[];
    totalVisitors: number;
    totalConversion: number;
}
export declare const funnelsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** Analyze funnel conversion rates */
    analyze: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            steps: {
                type: "event" | "pageview";
                value: string;
            }[];
            timeWindow?: number | undefined;
            websiteId: string;
        };
        output: {
            steps: {
                conversionRate: number;
                dropoff: number;
                dropped: number;
                remaining: number;
                step: number;
                totalConversion: number;
                type: "event" | "pageview";
                value: string;
                visitors: number;
            }[];
            totalConversion: number;
            totalVisitors: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=funnels.d.ts.map
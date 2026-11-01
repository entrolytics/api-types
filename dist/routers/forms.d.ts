export declare const formsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** Get form conversions overview */
    conversions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: import("../services/forms.js").FormConversion[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get field-level metrics for a specific form */
    fieldMetrics: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            formId: string;
        };
        output: import("../services/forms.js").FormFieldMetrics[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get recent form events (for debugging) */
    recentEvents: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            limit?: number | undefined;
            websiteId: string;
        };
        output: import("../services/forms.js").FormEvent[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
}>>;
//# sourceMappingURL=forms.d.ts.map
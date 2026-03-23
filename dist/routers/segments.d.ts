export declare const segmentsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * List segments for a website
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            createdAt: Date;
            id: string;
            name: string;
            parameters: unknown;
            type: string;
            updatedAt: Date;
            websiteId: string;
        }[];
        meta: object;
    }>;
    /**
     * Get segment details
     */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            segmentId: string;
        };
        output: {
            createdAt: Date;
            id: string;
            name: string;
            parameters: unknown;
            type: string;
            updatedAt: Date;
            websiteId: string;
        };
        meta: object;
    }>;
    /**
     * Create segment
     */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            parameters: Record<string, unknown>;
            type: string;
            websiteId: string;
        };
        output: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            websiteId: string;
            type: string;
            parameters: unknown;
        };
        meta: object;
    }>;
    /**
     * Update segment
     */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            segmentId: string;
            name?: string | undefined;
            parameters?: Record<string, unknown> | undefined;
        };
        output: {
            createdAt: Date;
            id: string;
            name: string;
            parameters: unknown;
            type: string;
            updatedAt: Date;
            websiteId: string;
        };
        meta: object;
    }>;
    /**
     * Delete segment
     */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            segmentId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /**
     * Evaluate segment (count matching users)
     */
    evaluate: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            segmentId: string;
            startDate: Date;
        };
        output: {
            count: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=segments.d.ts.map
import type { AuthContext } from '../middleware/auth.js';
export declare const segmentsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** List segments for a website, optionally of one `type` */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            type?: string | undefined;
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
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get segment details */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            segmentId: string;
            websiteId?: string | undefined;
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
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Create segment. `type` defaults to `segment` and `parameters` to none. */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            parameters?: Record<string, unknown> | undefined;
            type?: string | undefined;
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
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Update segment */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name?: string | undefined;
            parameters?: Record<string, unknown> | undefined;
            segmentId: string;
            websiteId?: string | undefined;
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
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Delete segment */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            segmentId: string;
            websiteId?: string | undefined;
        };
        output: {
            success: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Evaluate segment (count matching users) */
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
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
}>>;
//# sourceMappingURL=segments.d.ts.map
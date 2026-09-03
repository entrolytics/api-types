/** Pixels Router Handles conversion pixel tracking */
export interface PixelStatsResult {
    fires: number;
    unique_visitors: number;
    countries?: string[];
}
export declare const pixelsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** List pixels */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            createdAt: Date;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            userId: string | null;
        }[];
        meta: object;
    }>;
    /** Get pixel details */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            pixelId: string;
        };
        output: {
            createdAt: Date;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            userId: string | null;
        };
        meta: object;
    }>;
    /** Create pixel */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            orgId: string;
            slug: string;
        };
        output: {
            createdAt: Date;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            userId: string | null;
        } | undefined;
        meta: object;
    }>;
    /** Update pixel */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name?: string | undefined;
            pixelId: string;
        };
        output: {
            createdAt: Date;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            userId: string | null;
        } | undefined;
        meta: object;
    }>;
    /** Delete pixel */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            pixelId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /** Get pixel statistics */
    stats: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            pixelId: string;
            startDate: Date;
        };
        output: {
            countries?: string[] | undefined;
            fires: number;
            unique_visitors: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=pixels.d.ts.map
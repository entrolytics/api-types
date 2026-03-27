/**
 * Links Router
 * Handles link tracking and analytics
 */
export interface LinkStatsResult {
    totalClicks: number;
    uniqueVisitors: number;
    clicksByDay: Array<{
        date: string;
        clicks: number;
    }>;
    topReferrers: Array<{
        referrer: string;
        clicks: number;
    }>;
    topCountries: Array<{
        country: string;
        clicks: number;
    }>;
}
export declare const linksRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * List links
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            url: string;
            userId: string | null;
        }[];
        meta: object;
    }>;
    /**
     * Get link details
     */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            linkId: string;
        };
        output: {
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            url: string;
            userId: string | null;
        };
        meta: object;
    }>;
    /**
     * Create link
     */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            orgId: string;
            slug: string;
            url: string;
            description?: string | undefined;
        };
        output: {
            name: string;
            id: string;
            orgId: string;
            userId: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            slug: string;
            url: string;
            description: string | null;
        };
        meta: object;
    }>;
    /**
     * Update link
     */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            linkId: string;
            description?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            url?: string | undefined;
        };
        output: {
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            slug: string;
            updatedAt: Date;
            url: string;
            userId: string | null;
        };
        meta: object;
    }>;
    /**
     * Delete link
     */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            linkId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /**
     * Get link statistics
     */
    stats: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            linkId: string;
            startDate: Date;
        };
        output: {
            clicksByDay: {
                clicks: number;
                date: string;
            }[];
            topCountries: {
                country: string;
                clicks: number;
            }[];
            topReferrers: {
                referrer: string;
                clicks: number;
            }[];
            totalClicks: number;
            uniqueVisitors: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=links.d.ts.map
export declare const boardsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** List boards */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            config: unknown;
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            updatedAt: Date;
            userId: string | null;
        }[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get board with widgets */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            boardId: string;
        };
        output: {
            config: unknown;
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            updatedAt: Date;
            userId: string | null;
            widgets: {
                boardId: string;
                config: unknown;
                createdAt: Date;
                id: string;
                position: number | null;
                title: string | null;
                type: string;
                updatedAt: Date;
                websiteId: string | null;
            }[];
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Create board */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            description?: string | undefined;
            orgId: string;
            config?: Record<string, unknown> | undefined;
        };
        output: {
            config: unknown;
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            updatedAt: Date;
            userId: string | null;
        } | undefined;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Update board */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            boardId: string;
            config?: Record<string, unknown> | undefined;
            description?: string | undefined;
            name?: string | undefined;
        };
        output: {
            config: unknown;
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            updatedAt: Date;
            userId: string | null;
        } | undefined;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Delete board */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            boardId: string;
        };
        output: {
            config: unknown;
            createdAt: Date;
            deletedAt: Date | null;
            description: string | null;
            id: string;
            name: string;
            orgId: string;
            updatedAt: Date;
            userId: string | null;
        } | undefined;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Widgets management */
    widgets: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        add: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                boardId: string;
                websiteId?: string | undefined;
                type: string;
                title?: string | undefined;
                config?: Record<string, unknown> | undefined;
                position?: number | undefined;
            };
            output: {
                boardId: string;
                config: unknown;
                createdAt: Date;
                id: string;
                position: number | null;
                title: string | null;
                type: string;
                updatedAt: Date;
                websiteId: string | null;
            } | undefined;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                widgetId: string;
            };
            output: {
                boardId: string;
                config: unknown;
                createdAt: Date;
                id: string;
                position: number | null;
                title: string | null;
                type: string;
                updatedAt: Date;
                websiteId: string | null;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                widgetId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        reorder: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                boardId: string;
                widgetOrder: {
                    widgetId: string;
                    position: number;
                }[];
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                widgetId: string;
                title?: string | undefined;
                config?: Record<string, unknown> | undefined;
                position?: number | undefined;
            };
            output: {
                boardId: string;
                config: unknown;
                createdAt: Date;
                id: string;
                position: number | null;
                title: string | null;
                type: string;
                updatedAt: Date;
                websiteId: string | null;
            } | undefined;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
    }>>;
}>>;
//# sourceMappingURL=boards.d.ts.map
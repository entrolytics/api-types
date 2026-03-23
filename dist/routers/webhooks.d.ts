/**
 * Webhooks Router
 * Handles webhook CRUD and delivery tracking
 */
export declare const webhooksRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * List webhooks
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            orgId?: string | undefined;
            websiteId?: string | undefined;
        };
        output: {
            active: boolean | null;
            createdAt: Date;
            deletedAt: Date | null;
            enabled: boolean | null;
            events: string[];
            id: string;
            name: string;
            orgId: string | null;
            secret: string;
            updatedAt: Date;
            url: string;
            userId: string | null;
            websiteId: string;
        }[];
        meta: object;
    }>;
    /**
     * Get webhook details
     */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            webhookId: string;
        };
        output: {
            active: boolean | null;
            createdAt: Date;
            deletedAt: Date | null;
            enabled: boolean | null;
            events: string[];
            id: string;
            name: string;
            orgId: string | null;
            secret: string;
            updatedAt: Date;
            url: string;
            userId: string | null;
            websiteId: string;
        };
        meta: object;
    }>;
    /**
     * Create webhook
     */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            events: ("pageview.created" | "session.created" | "event.created" | "goal.completed" | "visitor.identified" | "revenue.recorded" | "*")[];
            name: string;
            url: string;
            websiteId: string;
            orgId?: string | undefined;
        };
        output: {
            id: string;
            name: string;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            orgId: string | null;
            websiteId: string;
            url: string;
            active: boolean | null;
            enabled: boolean | null;
            events: string[];
            secret: string;
        };
        meta: object;
    }>;
    /**
     * Update webhook
     */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            webhookId: string;
            active?: boolean | undefined;
            events?: ("pageview.created" | "session.created" | "event.created" | "goal.completed" | "visitor.identified" | "revenue.recorded" | "*")[] | undefined;
            name?: string | undefined;
            url?: string | undefined;
        };
        output: {
            active: boolean | null;
            createdAt: Date;
            deletedAt: Date | null;
            enabled: boolean | null;
            events: string[];
            id: string;
            name: string;
            orgId: string | null;
            secret: string;
            updatedAt: Date;
            url: string;
            userId: string | null;
            websiteId: string;
        };
        meta: object;
    }>;
    /**
     * Delete webhook
     */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            webhookId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /**
     * Webhook deliveries
     */
    deliveries: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                webhookId: string;
                limit?: number | undefined;
            };
            output: {
                id: string;
                webhookId: string;
                eventType: string;
                payload: unknown;
                status: "pending" | "success" | "failed" | "retrying";
                statusCode: number | null;
                responseBody: string | null;
                attempts: number | null;
                maxAttempts: number | null;
                nextRetryAt: Date | null;
                retryDelaySeconds: number | null;
                createdAt: Date;
                deliveredAt: Date | null;
                failedAt: Date | null;
            }[];
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=webhooks.d.ts.map
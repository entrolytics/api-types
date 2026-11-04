/** Webhooks Router Handles webhook CRUD and delivery tracking */
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
     * List webhooks. Without an explicit `orgId` this lists the organization active in the caller's
     * session, the same target writes default to; with neither, the caller's own webhooks and those
     * of every organization they belong to.
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            orgId?: string | undefined;
            websiteId?: string | undefined;
        };
        output: Omit<{
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
        }, "secret">[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get webhook details */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            webhookId: string;
        };
        output: Omit<{
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
        }, "secret">;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /**
     * Create webhook. The response is the only one besides rotation that carries the secret.
     *
     * Without a `websiteId` the webhook goes to the first website the caller can list (in `orgId`
     * when given). Attaching a webhook writes the website's configuration, so the caller needs the
     * write minimum on it. The webhook belongs to the website's owner.
     */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            enabled?: boolean | undefined;
            events: ("*" | "event.created" | "goal.completed" | "pageview.created" | "revenue.recorded" | "session.created" | "visitor.identified")[];
            name: string;
            orgId?: string | undefined;
            url: string;
            websiteId?: string | undefined;
        };
        output: {
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
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Update webhook */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            enabled?: boolean | undefined;
            events?: ("*" | "event.created" | "goal.completed" | "pageview.created" | "revenue.recorded" | "session.created" | "visitor.identified")[] | undefined;
            name?: string | undefined;
            url?: string | undefined;
            webhookId: string;
            websiteId?: string | undefined;
        };
        output: Omit<{
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
        }, "secret">;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Replace the signing secret; returns the new secret once. */
    rotateSecret: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            webhookId: string;
        };
        output: {
            secret: string;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Delete webhook */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            webhookId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Webhook deliveries */
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
                limit?: number | undefined;
                webhookId: string;
            };
            output: {
                id: string;
                webhookId: string;
                eventType: string;
                eventId: string | null;
                payload: unknown;
                status: "failed" | "pending" | "retrying" | "sending" | "success";
                statusCode: number | null;
                responseBody: string | null;
                attempts: number | null;
                maxAttempts: number | null;
                nextRetryAt: Date | null;
                retryDelaySeconds: number | null;
                claimedAt: Date | null;
                createdAt: Date;
                deliveredAt: Date | null;
                failedAt: Date | null;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
    }>>;
}>>;
//# sourceMappingURL=webhooks.d.ts.map
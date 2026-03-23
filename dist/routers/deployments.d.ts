export declare const deploymentsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * List all deployments for a website
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            limit?: number | undefined;
        };
        output: import("../services/deployments.js").Deployment[];
        meta: object;
    }>;
    /**
     * Compare recent deployments
     */
    compare: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
            limit?: number | undefined;
        };
        output: import("../services/deployments.js").DeploymentComparison[];
        meta: object;
    }>;
    /**
     * Get latest deployment
     */
    latest: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: import("../services/deployments.js").Deployment | null;
        meta: object;
    }>;
    /**
     * Track a deployment
     */
    track: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            deployId: string;
            source: "custom" | "vercel" | "netlify" | "cloudflare" | "railway" | "render" | "fly" | "heroku" | "aws" | "gcp" | "azure";
            websiteId: string;
            deployUrl?: string | undefined;
            environment?: string | undefined;
            gitBranch?: string | undefined;
            gitSha?: string | undefined;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=deployments.d.ts.map
/** Auth Router Handles CLI authentication tokens */
export declare const authRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    cli: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        /** Generate a new CLI access token */
        generateToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name?: string | undefined;
            };
            output: {
                expiresAt: string;
                token: string;
                tokenId: string;
            };
            meta: object;
        }>;
        /** List all CLI tokens for current user */
        listTokens: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                createdAt: Date;
                expiresAt: Date | null;
                id: string;
                lastUsedAt: Date | null;
                name: string;
            }[];
            meta: object;
        }>;
        /** Revoke a CLI token */
        revokeToken: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                tokenId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        /** Revoke all CLI tokens for current user */
        revokeAllTokens: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: {
                count: number;
            };
            meta: object;
        }>;
        /** Validate a CLI token (public endpoint for CLI to check token) */
        validateToken: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                token: string;
            };
            output: {
                tokenId: string;
                userId: string;
                valid: boolean;
            };
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=auth.d.ts.map
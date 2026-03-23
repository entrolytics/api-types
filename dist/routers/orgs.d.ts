/**
 * Organizations Router
 * Handles organization CRUD and member management
 */
export declare const orgsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * List user's organizations
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            clerkOrgId: string | null;
            createdAt: Date;
            id: string;
            logoUrl: string | null;
            name: string;
            slug: string;
        }[];
        meta: object;
    }>;
    /**
     * Get organization details
     */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            orgId: string;
        };
        output: {
            role: "owner" | "admin" | "member" | "viewer";
            accessCode: string | null;
            clerkOrgId: string | null;
            createdAt: Date;
            deletedAt: Date | null;
            id: string;
            logoUrl: string | null;
            name: string;
            slug: string;
            updatedAt: Date;
        };
        meta: object;
    }>;
    /**
     * Create organization
     */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            slug: string;
        };
        output: {
            id: string;
            name: string;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            accessCode: string | null;
            clerkOrgId: string | null;
            logoUrl: string | null;
            slug: string;
        };
        meta: object;
    }>;
    /**
     * Update organization
     */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            orgId: string;
            logoUrl?: string | undefined;
            name?: string | undefined;
        };
        output: {
            accessCode: string | null;
            clerkOrgId: string | null;
            createdAt: Date;
            deletedAt: Date | null;
            id: string;
            logoUrl: string | null;
            name: string;
            slug: string;
            updatedAt: Date;
        };
        meta: object;
    }>;
    /**
     * Delete organization
     */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            orgId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /**
     * Members management
     */
    members: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        invite: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orgId: string;
                email: string;
                role: "admin" | "member" | "viewer";
            };
            output: {
                id: string;
                email: string;
                role: string;
                createdAt: Date;
                expiresAt: Date;
                orgId: string;
                status: "pending" | "accepted" | "expired";
                token: string;
                invitedBy: string | null;
            };
            meta: object;
        }>;
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                orgId: string;
            };
            output: {
                createdAt: Date;
                id: string;
                role: "owner" | "admin" | "member" | "viewer";
                user: {
                    id: string;
                    email: string;
                    displayName: string | null;
                    imageUrl: string | null;
                };
            }[];
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orgId: string;
                memberId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        updateRole: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orgId: string;
                memberId: string;
                role: "owner" | "admin" | "member" | "viewer";
            };
            output: {
                createdAt: Date;
                id: string;
                orgId: string;
                role: "owner" | "admin" | "member" | "viewer";
                updatedAt: Date;
                userId: string;
            };
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=orgs.d.ts.map
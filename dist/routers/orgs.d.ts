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
            clerkOrgId: string | null;
            role: "admin" | "owner" | "member" | "viewer";
            accessCode: string | null;
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
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            clerkOrgId: string | null;
            slug: string;
            accessCode: string | null;
            logoUrl: string | null;
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
                email: string;
                status: "pending" | "expired" | "accepted";
                id: string;
                orgId: string;
                createdAt: Date;
                role: string;
                expiresAt: Date;
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
                role: "admin" | "owner" | "member" | "viewer";
                user: {
                    displayName: string | null;
                    email: string;
                    id: string;
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
                role: "admin" | "owner" | "member" | "viewer";
            };
            output: {
                createdAt: Date;
                id: string;
                orgId: string;
                role: "admin" | "owner" | "member" | "viewer";
                updatedAt: Date;
                userId: string;
            } | null;
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=orgs.d.ts.map
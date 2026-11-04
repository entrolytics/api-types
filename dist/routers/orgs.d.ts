/** Organizations Router Handles organization CRUD and member management */
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
    /** List user's organizations */
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
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Get organization details */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            orgId: string;
        };
        output: {
            clerkSyncRequestedAt: Date | null;
            createdAt: Date;
            deletedAt: Date | null;
            id: string;
            logoUrl: string | null;
            name: string;
            slug: string;
            updatedAt: Date;
            accessCode: string | null;
            clerkOrgId: string | null;
            role: "admin" | "member" | "owner" | "viewer";
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Create organization. Without a `slug` the name is used as one. */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            slug?: string | undefined;
        };
        output: {
            accessCode: string | null;
            clerkOrgId: string | null;
            clerkSyncRequestedAt: Date | null;
            createdAt: Date;
            deletedAt: Date | null;
            id: string;
            logoUrl: string | null;
            name: string;
            slug: string;
            updatedAt: Date;
        } | undefined;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Update organization */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            logoUrl?: string | undefined;
            name?: string | undefined;
            orgId: string;
        };
        output: {
            accessCode: string | null;
            clerkOrgId: string | null;
            clerkSyncRequestedAt: Date | null;
            createdAt: Date;
            deletedAt: Date | null;
            id: string;
            logoUrl: string | null;
            name: string;
            slug: string;
            updatedAt: Date;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Replace the access code (admins); returns the new one */
    rotateAccessCode: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            orgId: string;
        };
        output: {
            accessCode: string;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Delete organization */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            orgId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Members management */
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
        /** Invite someone by email; the service authorizes the inviter (owner or admin). */
        invite: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orgId: string;
                email: string;
                role: "admin" | "member" | "viewer";
            };
            output: {
                acceptUrl: string;
                createdAt: Date;
                email: string;
                expiresAt: Date;
                id: string;
                invitedBy: string | null;
                orgId: string;
                role: string;
                status: "accepted" | "expired" | "pending";
                token: string;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        /** Look up an invitation from its token, for the acceptance screen. */
        lookup: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                token: string;
            };
            output: {
                email: string;
                expiresAt: Date;
                orgId: string;
                orgName: string;
                role: string;
                status: "accepted" | "expired" | "pending";
                usable: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        /** Redeem an invitation as the signed-in user. */
        accept: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                token: string;
            };
            output: {
                clerkSynced: boolean;
                orgId: string;
                orgName: string | null;
                role: "admin" | "member" | "owner" | "viewer";
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                orgId: string;
            };
            output: {
                createdAt: Date;
                id: string;
                role: "admin" | "member" | "owner" | "viewer";
                user: {
                    displayName: string | null;
                    email: string;
                    id: string;
                    imageUrl: string | null;
                };
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        updateRole: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orgId: string;
                memberId: string;
                role: "admin" | "member" | "owner" | "viewer";
            };
            output: {
                createdAt: Date;
                id: string;
                orgId: string;
                role: "admin" | "member" | "owner" | "viewer";
                updatedAt: Date;
                userId: string;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
    }>>;
}>>;
//# sourceMappingURL=orgs.d.ts.map
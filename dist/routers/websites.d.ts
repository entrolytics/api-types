/** Websites Router Handles website CRUD and API key management */
export declare const websitesRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** List websites (admin sees all, users see only their own) */
    /** List websites (admin sees all, users see only their own) */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            page?: number | undefined;
            pageSize?: number | undefined;
            search?: string | undefined;
        };
        output: {
            id: string;
            orgId: string | null;
            userId: string | null;
            name: string;
            domain: string;
            shareId: string | null;
            clientKey: string;
            resetAt: Date | null;
            ingestMode: string;
            createdBy: string | null;
            timezone: string | null;
            isActive: boolean;
            autoTrackPageviews: boolean | null;
            autoTrackSessions: boolean | null;
            excludeQueryParams: string[] | null;
            anonymizeIps: boolean | null;
            respectDnt: boolean | null;
            cookieConsentRequired: boolean | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: object;
    }>;
    /** Get website by ID */
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            id: string;
            orgId: string | null;
            userId: string | null;
            name: string;
            domain: string;
            shareId: string | null;
            clientKey: string;
            resetAt: Date | null;
            ingestMode: string;
            createdBy: string | null;
            timezone: string | null;
            isActive: boolean;
            autoTrackPageviews: boolean | null;
            autoTrackSessions: boolean | null;
            excludeQueryParams: string[] | null;
            anonymizeIps: boolean | null;
            respectDnt: boolean | null;
            cookieConsentRequired: boolean | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        meta: object;
    }>;
    /** Create website */
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            domain: string;
            name: string;
            orgId?: string | undefined;
        };
        output: {
            anonymizeIps: boolean | null;
            autoTrackPageviews: boolean | null;
            autoTrackSessions: boolean | null;
            clientKey: string;
            cookieConsentRequired: boolean | null;
            createdAt: Date;
            createdBy: string | null;
            deletedAt: Date | null;
            domain: string;
            excludeQueryParams: string[] | null;
            id: string;
            ingestMode: string;
            isActive: boolean;
            name: string;
            orgId: string | null;
            resetAt: Date | null;
            respectDnt: boolean | null;
            shareId: string | null;
            timezone: string | null;
            updatedAt: Date;
            userId: string | null;
        } | undefined;
        meta: object;
    }>;
    /** Turn the public share link on (issues a new token) or off (revokes it) */
    setSharing: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            enabled: boolean;
            websiteId: string;
        };
        output: {
            shareId: string | null;
        };
        meta: object;
    }>;
    /** Update website */
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            anonymizeIps?: boolean | undefined;
            autoTrackPageviews?: boolean | undefined;
            autoTrackSessions?: boolean | undefined;
            domain?: string | undefined;
            name?: string | undefined;
            respectDnt?: boolean | undefined;
            websiteId: string;
        };
        output: {
            id: string;
            orgId: string | null;
            userId: string | null;
            name: string;
            domain: string;
            shareId: string | null;
            clientKey: string;
            resetAt: Date | null;
            ingestMode: string;
            createdBy: string | null;
            timezone: string | null;
            isActive: boolean;
            autoTrackPageviews: boolean | null;
            autoTrackSessions: boolean | null;
            excludeQueryParams: string[] | null;
            anonymizeIps: boolean | null;
            respectDnt: boolean | null;
            cookieConsentRequired: boolean | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        } | undefined;
        meta: object;
    }>;
    /** Delete website */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /** API Keys management */
    apiKeys: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                websiteId: string;
                name: string;
                scopes?: ("analytics:read" | "events:write")[] | undefined;
            };
            output: {
                key: string;
                allowedDomains?: string[] | null | undefined;
                allowedOrigins?: string[] | null | undefined;
                createdAt?: Date | undefined;
                deletedAt?: Date | null | undefined;
                expiresAt?: Date | null | undefined;
                id?: string | undefined;
                keyHash?: string | undefined;
                lastUsedAt?: Date | null | undefined;
                name?: string | undefined;
                prefix?: string | undefined;
                rateLimitMax?: number | null | undefined;
                rateLimitWindow?: number | null | undefined;
                requestsCount?: number | null | undefined;
                scopes?: string[] | undefined;
                websiteId?: string | undefined;
            };
            meta: object;
        }>;
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                createdAt: Date;
                expiresAt: Date | null;
                id: string;
                lastUsedAt: Date | null;
                name: string;
                prefix: string;
                scopes: string[];
            }[];
            meta: object;
        }>;
        revoke: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                keyId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=websites.d.ts.map
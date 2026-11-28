/**
 * Google Search Console import. Connecting, choosing a property and disconnecting change what data
 * a website shows and hold a Google grant, so they need `admin`; reads follow the website's own.
 */
export declare const searchConsoleRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    /** Whether the server supports the import, and this website's connection if it has one */
    status: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            configured: boolean;
            connection: import("../services/search-console.js").SearchConsoleConnectionStatus | null;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Start the Google consent flow; the browser is sent to the returned URL */
    connect: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            url: string;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** The Search Console properties the connected Google account can read */
    properties: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
        };
        output: import("../services/search-console.js").SearchConsoleProperty[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Choose which property to import and start importing it */
    selectProperty: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            websiteId: string;
            siteUrl: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Import the days not imported yet, without waiting for the daily run */
    sync: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Remove the connection and its imported data, and revoke the grant at Google */
    disconnect: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            websiteId: string;
        };
        output: {
            revoked: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Clicks, impressions, CTR and average position: totals and the per-day series */
    overview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
            endDate: Date;
            startDate: Date;
        };
        output: {
            series: Array<import("../services/search-console.js").SearchConsoleMetrics & {
                date: string;
            }>;
            totals: import("../services/search-console.js").SearchConsoleMetrics;
        } | null;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** Top queries, pages, countries or devices by clicks */
    breakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
            endDate: Date;
            startDate: Date;
            dimension: "country" | "device" | "page" | "query";
            limit?: number | undefined;
        };
        output: (import("../services/search-console.js").SearchConsoleMetrics & {
            key: string;
        })[];
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
}>>;
//# sourceMappingURL=search-console.d.ts.map
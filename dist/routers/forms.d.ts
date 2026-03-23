export declare const formsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * Get form conversions overview
     */
    conversions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: import("../services/forms.js").FormConversion[];
        meta: object;
    }>;
    /**
     * Get field-level metrics for a specific form
     */
    fieldMetrics: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            formId: string;
        };
        output: import("../services/forms.js").FormFieldMetrics[];
        meta: object;
    }>;
    /**
     * Get form funnel analysis (drop-off per field)
     */
    funnel: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            formId: string;
        };
        output: {
            fieldName: string;
            fieldIndex: number;
            visitors: number;
            dropOffRate: number;
        }[];
        meta: object;
    }>;
    /**
     * Get recent form events (for debugging)
     */
    recentEvents: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            websiteId: string;
            limit?: number | undefined;
        };
        output: import("../services/forms.js").FormEvent[];
        meta: object;
    }>;
    /**
     * Track a form event (mutation for internal use)
     */
    track: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            eventType: "start" | "field_focus" | "field_blur" | "field_error" | "submit" | "abandon";
            formId: string;
            sessionId: string;
            urlPath: string;
            visitorId: string;
            websiteId: string;
            errorMessage?: string | undefined;
            fieldIndex?: number | undefined;
            fieldName?: string | undefined;
            fieldType?: "number" | "date" | "email" | "select" | "url" | "file" | "submit" | "text" | "password" | "tel" | "textarea" | "checkbox" | "radio" | "hidden" | "other" | undefined;
            formName?: string | undefined;
            success?: boolean | undefined;
            timeOnField?: number | undefined;
            timeSinceStart?: number | undefined;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=forms.d.ts.map
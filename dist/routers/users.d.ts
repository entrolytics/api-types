/**
 * Users Router
 * Handles user profile and preferences
 */
export declare const usersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * List users (admin only)
     */
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            orderBy?: "id" | "email" | "displayName" | "firstName" | "lastName" | "role" | "createdAt" | "updatedAt" | undefined;
            page?: number | undefined;
            pageSize?: number | undefined;
            plan?: string | undefined;
            role?: string | undefined;
            search?: string | undefined;
            sortDescending?: boolean | undefined;
            status?: string | undefined;
        };
        output: {
            count: number;
            data: ({
                clerkId: string;
                createdAt: Date;
                displayName: string | null;
                email: string;
                firstName: string | null;
                id: string;
                imageUrl: string | null;
                lastName: string | null;
                planId: string | null;
                planStatus: string | null;
                role: string;
                stripeCustomerId: string | null;
                updatedAt: Date;
                websiteCount: number;
            } & {
                websiteCount: number;
            })[];
            orderBy: "id" | "email" | "displayName" | "firstName" | "lastName" | "role" | "createdAt" | "updatedAt";
            page: number;
            pageSize: number;
            search: string | undefined;
        };
        meta: object;
    }>;
    /**
     * Get current user profile with entitlements
     */
    me: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            subscription?: {
                cancelAtPeriodEnd: boolean;
                currentPeriodEnd: Date | null;
                stripeSubscriptionId: string | null;
            } | undefined;
            trial?: {
                isTrialing: boolean;
                trialEnd: Date | null;
            } | undefined;
            clerkUserId: string;
            features: {
                funnels: boolean;
                attribution: boolean;
                revenue: boolean;
                customDashboards: boolean;
                abAnalytics: boolean;
                emailReports: boolean;
                apiAccess: boolean;
                cliAccess: boolean;
                sso?: boolean;
                auditLogs?: boolean;
                prioritySupport?: boolean;
                selfHosted?: boolean;
            };
            grant: string[];
            limits: {
                pageviews: number;
                websites: number;
                retentionDays: number;
                seats: number;
            };
            orgId: string | null | undefined;
            plan: {
                id: "free" | "pro" | "business" | "enterprise";
                name: string;
                status: "active" | "canceled" | "past_due" | "trialing" | "paused";
            };
            usage: {
                pageviews: number;
                websites: number;
                periodStart: Date;
                periodEnd: Date;
            };
            user: import("../middleware/auth.js").AuthUser;
        };
        meta: object;
    }>;
    /**
     * Update user profile
     */
    updateProfile: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            displayName?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
        };
        output: {
            id: string;
            clerkId: string;
            email: string;
            name: string | null;
            displayName: string | null;
            firstName: string | null;
            lastName: string | null;
            avatarUrl: string | null;
            imageUrl: string | null;
            role: string;
            onboardingCompleted: string | null;
            onboardingCompletedAt: Date | null;
            onboardingStep: string | null;
            onboardingSkipped: string | null;
            companySize: string | null;
            industry: string | null;
            useCase: string | null;
            referralSource: string | null;
            emailWeeklyReports: boolean | null;
            emailUsageAlerts: boolean | null;
            emailProductUpdates: boolean | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        meta: object;
    }>;
    /**
     * Update email preferences
     */
    updatePreferences: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            emailProductUpdates?: boolean | undefined;
            emailUsageAlerts?: boolean | undefined;
            emailWeeklyReports?: boolean | undefined;
        };
        output: {
            id: string;
            clerkId: string;
            email: string;
            name: string | null;
            displayName: string | null;
            firstName: string | null;
            lastName: string | null;
            avatarUrl: string | null;
            imageUrl: string | null;
            role: string;
            onboardingCompleted: string | null;
            onboardingCompletedAt: Date | null;
            onboardingStep: string | null;
            onboardingSkipped: string | null;
            companySize: string | null;
            industry: string | null;
            useCase: string | null;
            referralSource: string | null;
            emailWeeklyReports: boolean | null;
            emailUsageAlerts: boolean | null;
            emailProductUpdates: boolean | null;
            deletedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        meta: object;
    }>;
    /**
     * Delete user account
     */
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: void;
        output: {
            success: boolean;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=users.d.ts.map
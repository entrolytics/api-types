export interface JourneyPath {
    path: string[];
    count: number;
    percentage: number;
}
export interface JourneyResult {
    journeys: JourneyPath[];
}
export interface UTMItem {
    x: string;
    y: number;
}
export interface UTMResult {
    utm_source: UTMItem[];
    utm_medium: UTMItem[];
    utm_campaign: UTMItem[];
    utm_content: UTMItem[];
    utm_term: UTMItem[];
}
export interface RevenueChartItem {
    x: string;
    t: string;
    y: number;
}
export interface RevenueCountryItem {
    name: string;
    value: number;
}
export interface RevenueTotal {
    SUM: number;
    COUNT: number;
    average: number;
    unique_count: number;
}
export interface RevenueResult {
    chart: RevenueChartItem[];
    country: RevenueCountryItem[];
    total: RevenueTotal;
}
export interface AttributionItem {
    name: string;
    value: number;
}
export interface AttributionTotal {
    pageviews: number;
    visitors: number;
    visits: number;
}
export interface AttributionResult {
    referrer: AttributionItem[];
    paidAds: AttributionItem[];
    utm_source: AttributionItem[];
    utm_medium: AttributionItem[];
    utm_campaign: AttributionItem[];
    utm_content: AttributionItem[];
    utm_term: AttributionItem[];
    total: AttributionTotal;
}
export interface LandingPageItem {
    path: string;
    entrances: number;
    bounceRate: number;
    avgDuration: number;
    conversions: number;
}
export interface LandingPagesResult {
    pages: LandingPageItem[];
    total: {
        entrances: number;
        bounceRate: number;
        avgDuration: number;
        conversions: number;
    };
}
export interface CompareMetrics {
    visitors: number;
    pageviews: number;
    bounceRate: number;
    avgDuration: number;
    conversions: number;
}
export interface CompareResult {
    current: CompareMetrics;
    previous: CompareMetrics;
    changes: CompareMetrics;
    currentChart: Array<{
        x: string;
        y: number;
    }>;
    previousChart: Array<{
        x: string;
        y: number;
    }>;
}
export interface BreakdownItem {
    x: string;
    y: number;
}
export interface BreakdownResponse {
    breakdown: BreakdownItem[];
}
export declare const reportsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
     * RETENTION - Cohort retention analysis
     */
    retention: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: {
            cohorts: {
                date: string;
                count: number;
                returnRate: number[];
            }[];
            periods: string[];
        };
        meta: object;
    }>;
    /**
     * GOALS - List saved goals with current metrics
     */
    listGoals: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: {
            goals: {
                conversionRate: number;
                current: number;
                id: string;
                name: string;
                target: number;
                type: "pageview" | "event" | "duration" | "pageviews_per_session";
                value: string;
            }[];
        };
        meta: object;
    }>;
    /**
     * CREATE GOAL
     */
    createGoal: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            target: number;
            type: "duration" | "pageview" | "event" | "pageviews_per_session";
            value: string;
            websiteId: string;
        };
        output: {
            conversionRate: number;
            current: number;
            id: string;
            name: string;
            target: number;
            type: "duration" | "pageview" | "event" | "pageviews_per_session";
            value: string;
        };
        meta: object;
    }>;
    /**
     * DELETE GOAL
     */
    deleteGoal: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            reportId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    /**
     * JOURNEYS - User path analysis
     */
    journeys: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            endStep?: string | undefined;
            startStep?: string | undefined;
            steps?: number | undefined;
        };
        output: JourneyResult;
        meta: object;
    }>;
    /**
     * UTM - UTM parameter breakdown
     */
    utm: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: UTMResult;
        meta: object;
    }>;
    /**
     * BREAKDOWN - Property breakdown analysis
     */
    breakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            property: "url" | "event_type" | "path" | "referrer" | "browser" | "city" | "country" | "device_type" | "os" | "event_name" | "referrer_domain" | "utm_campaign" | "utm_medium" | "utm_source" | "utm_content" | "utm_term";
            filters?: {
                column: "url" | "event_type" | "path" | "referrer" | "browser" | "city" | "country" | "device_type" | "os" | "event_name" | "referrer_domain" | "utm_campaign" | "utm_medium" | "utm_source" | "utm_content" | "utm_term";
                value: string;
            }[] | undefined;
        };
        output: BreakdownResponse;
        meta: object;
    }>;
    /**
     * REVENUE - Revenue tracking and analysis
     */
    revenue: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            currency?: string | undefined;
        };
        output: RevenueResult;
        meta: object;
    }>;
    /**
     * ATTRIBUTION - Attribution modeling
     */
    attribution: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            model: "first-click" | "last-click";
            step: string;
            type: "path" | "event";
            currency?: string | undefined;
        };
        output: AttributionResult;
        meta: object;
    }>;
    /**
     * LANDING PAGES - Landing page performance
     */
    landingPages: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: LandingPagesResult;
        meta: object;
    }>;
    /**
     * COMPARE - Period comparison
     */
    compare: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            currentEnd: Date;
            currentStart: Date;
            previousEnd: Date;
            previousStart: Date;
            websiteId: string;
        };
        output: CompareResult;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=reports.d.ts.map
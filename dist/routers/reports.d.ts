import { z } from 'zod';
declare const revenueTotalRowSchema: z.ZodObject<{
    COUNT: z.ZodCoercedNumber<unknown>;
    SUM: z.ZodCoercedNumber<unknown>;
    average: z.ZodCoercedNumber<unknown>;
    unique_count: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
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
declare const revenueChartItemSchema: z.ZodObject<{
    t: z.ZodString;
    x: z.ZodString;
    y: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type RevenueChartItem = z.infer<typeof revenueChartItemSchema>;
declare const revenueCountryItemSchema: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type RevenueCountryItem = z.infer<typeof revenueCountryItemSchema>;
export type RevenueTotal = z.infer<typeof revenueTotalRowSchema>;
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
declare const landingPageItemSchema: z.ZodObject<{
    avgDuration: z.ZodCoercedNumber<unknown>;
    bounceRate: z.ZodCoercedNumber<unknown>;
    conversions: z.ZodCoercedNumber<unknown>;
    entrances: z.ZodCoercedNumber<unknown>;
    path: z.ZodString;
}, z.core.$strip>;
export type LandingPageItem = z.infer<typeof landingPageItemSchema>;
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
declare const breakdownItemSchema: z.ZodObject<{
    x: z.ZodString;
    y: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type BreakdownItem = z.infer<typeof breakdownItemSchema>;
export interface BreakdownResponse {
    breakdown: BreakdownItem[];
}
/**
 * Which visitors the retention numbers describe, given the visitor-identity policy.
 *
 * The query counts every visitor id. Anonymous browser identifiers rotate daily by design, so a
 * browser visitor counts in its first week's cohort and never as returning; only server-side
 * collection, which supplies its own visitor id, can be followed across weeks. (The label used to
 * claim the numbers covered only stable identifiers, and "identified visitors", which do not
 * exist.) Excluding rotating ids from the cohorts needs a marker on each event; see the report.
 */
export declare const RETENTION_MEASURED_POPULATION = "Every visitor. Anonymous browser visitors get a new identifier each day by design, so they count in their first week and never as returning; returns come from server-side collection, which keeps its own visitor id.";
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
     * RETENTION - Cohort retention analysis.
     *
     * Measures the return of the same `visitor_id` across weeks. That identity is only stable across
     * days for server-side collection, where the caller supplies it: anonymous browser collection
     * derives a visitor id that rotates at midnight UTC by design, so the same browser is a different
     * visitor tomorrow and cannot appear as retained. The report therefore describes the population
     * it can actually measure, and says so, rather than presenting near-zero weekly retention for
     * anonymous traffic as a finding about the site. Changing the identity policy is a privacy
     * decision, not a reporting one (see F-13).
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
            measuredPopulation: string;
            periods: string[];
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** GOALS - List saved goals with current metrics */
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
                type: string;
                value: string;
            }[];
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** CREATE GOAL */
    createGoal: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            target: number;
            type: "duration" | "event" | "pageview" | "pageviews_per_session";
            value: string;
            websiteId: string;
        };
        output: {
            conversionRate: number;
            current: number;
            id: string;
            name: string;
            target: number;
            type: "duration" | "event" | "pageview" | "pageviews_per_session";
            value: string;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** DELETE GOAL */
    deleteGoal: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            reportId: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** JOURNEYS - User path analysis */
    journeys: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            endStep?: string | undefined;
            startStep?: string | undefined;
            steps?: number | undefined;
        };
        output: {
            journeys: {
                count: number;
                path: string[];
                percentage: number;
            }[];
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** UTM - UTM parameter breakdown */
    utm: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: UTMResult;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** BREAKDOWN - Property breakdown analysis */
    breakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            filters?: {
                column: "browser" | "city" | "country" | "device_type" | "event_name" | "event_type" | "os" | "path" | "referrer" | "referrer_domain" | "url" | "utm_campaign" | "utm_content" | "utm_medium" | "utm_source" | "utm_term";
                value: string;
            }[] | undefined;
            property: "browser" | "city" | "country" | "device_type" | "event_name" | "event_type" | "os" | "path" | "referrer" | "referrer_domain" | "url" | "utm_campaign" | "utm_content" | "utm_medium" | "utm_source" | "utm_term";
        };
        output: {
            breakdown: {
                x: string;
                y: number;
            }[];
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** REVENUE - Revenue tracking and analysis */
    revenue: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            currency?: string | undefined;
        };
        output: {
            chart: {
                t: string;
                x: string;
                y: number;
            }[];
            country: {
                name: string;
                value: number;
            }[];
            total: {
                COUNT: number;
                SUM: number;
                average: number;
                unique_count: number;
            };
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** ATTRIBUTION - Attribution modeling */
    attribution: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
            currency?: string | undefined;
            model: "first-click" | "last-click";
            step: string;
            type: "event" | "path";
        };
        output: AttributionResult;
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** LANDING PAGES - Landing page performance */
    landingPages: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            endDate: Date;
            startDate: Date;
            websiteId: string;
        };
        output: {
            pages: {
                avgDuration: number;
                bounceRate: number;
                conversions: number;
                entrances: number;
                path: string;
            }[];
            total: {
                avgDuration: number;
                bounceRate: number;
                conversions: number;
                entrances: number;
            };
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
    /** COMPARE - Period comparison */
    compare: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            currentEnd: Date;
            currentStart: Date;
            previousEnd: Date;
            previousStart: Date;
            websiteId: string;
        };
        output: {
            changes: {
                avgDuration: number;
                bounceRate: number;
                conversions: number;
                pageviews: number;
                visitors: number;
            };
            current: {
                avgDuration: number;
                bounceRate: number;
                conversions: number;
                pageviews: number;
                visitors: number;
            };
            currentChart: {
                x: string;
                y: number;
            }[];
            previous: {
                avgDuration: number;
                bounceRate: number;
                conversions: number;
                pageviews: number;
                visitors: number;
            };
            previousChart: {
                x: string;
                y: number;
            }[];
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    }>;
}>>;
export {};
//# sourceMappingURL=reports.d.ts.map
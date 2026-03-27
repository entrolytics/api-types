export declare const appRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: {
        auth: import("../middleware/auth.js").AuthContext | null;
        req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
        res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
    };
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    analytics: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        overview: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
            };
            output: {
                bounces: number;
                comparison: {
                    pageviews: number;
                    visitors: number;
                    visits: number;
                    bounces: number;
                    totaltime: number;
                };
                pageviews: number;
                totaltime: number;
                visitors: number;
                visits: number;
            };
            meta: object;
        }>;
        timeseries: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                interval: "hour" | "day" | "week" | "month";
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
            };
            output: {
                date: string;
                pageviews: number;
                sessions: number;
                visitors: number;
            }[];
            meta: object;
        }>;
        topPages: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            };
            output: {
                path: string | null;
                views: number;
                avg_load_time?: number | null | undefined;
                p95_load_time?: number | null | undefined;
                unique_visitors?: number | undefined;
            }[];
            meta: object;
        }>;
        topReferrers: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                limit?: number | undefined;
            };
            output: {
                referrer_domain: string | null;
                visits: number;
                unique_visitors?: number | undefined;
            }[];
            meta: object;
        }>;
        deviceBreakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
            };
            output: {
                browser: string | null;
                device_type: string | null;
                os: string | null;
                pageviews: number;
                unique_visitors?: number | undefined;
            }[];
            meta: object;
        }>;
        geography: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
            };
            output: {
                city: string | null;
                country: string | null;
                pageviews: number;
                unique_visitors?: number | undefined;
            }[];
            meta: object;
        }>;
        utmCampaigns: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
            };
            output: {
                sessions: number;
                unique_visitors: number;
                utm_campaign: string | null;
                utm_medium: string | null;
                utm_source: string | null;
                visits: number;
            }[];
            meta: object;
        }>;
        sessions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            };
            output: {
                sessionId: string;
                visitId: string;
                sessionStart: string;
                sessionEnd: string;
                startTime: string;
                endTime: string;
                duration: number;
                pageviews: number;
                events: number;
                visitorId: string;
                country: string | null;
                countryCode: string | null;
                city: string | null;
                device: "desktop" | "mobile" | "tablet" | null;
                deviceType: string | null;
                browser: string | null;
                os: string | null;
                referrer: string | null;
                entryPage: string | null;
                entryPath: string | null;
                exitPage: string | null;
                exitPath: string | null;
                bounced: boolean;
            }[];
            meta: object;
        }>;
        sessionDetails: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                sessionId: string;
                websiteId: string;
            };
            output: {
                sessionId: string;
                visitId: string;
                pageviews: number;
                events: number;
                duration: number;
                country: string | null;
                countryCode: string | null;
                city: string | null;
                region: null;
                browser: string | null;
                os: string | null;
                device: "desktop" | "mobile" | "tablet" | null;
                entryPath: string | null;
                exitPath: string | null;
                startTime: string;
                endTime: string;
                bounced: boolean;
            } | null;
            meta: object;
        }>;
        sessionActivity: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                sessionId: string;
                websiteId: string;
                endDate?: Date | undefined;
                startDate?: Date | undefined;
            };
            output: import("../services/analytics.js").SessionActivityEvent[];
            meta: object;
        }>;
    }>>;
    events: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                eventName?: string | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            };
            output: {
                browser: string | null;
                city: string | null;
                country: string | null;
                device_type: string | null;
                event_data: string;
                event_id: string;
                event_name: string | null;
                event_type: "pageview" | "custom_event" | "click";
                os: string | null;
                path: string;
                referrer: string | null;
                session_id: string;
                timestamp: string;
                visitor_id: string;
            }[];
            meta: object;
        }>;
        details: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                eventName: string;
            };
            output: {
                count: number;
                event_data: string;
                unique_users: number;
            }[];
            meta: object;
        }>;
        series: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                eventName?: string | undefined;
                interval?: "hour" | "day" | "week" | "month" | undefined;
            };
            output: {
                count: number;
                date: string;
                event_name: string | null;
                unique_sessions: number;
                unique_visitors: number;
            }[];
            meta: object;
        }>;
    }>>;
    funnels: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        analyze: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                steps: {
                    type: "pageview" | "event";
                    value: string;
                }[];
                websiteId: string;
                timeWindow?: number | undefined;
            };
            output: import("./funnels.js").FunnelResponse;
            meta: object;
        }>;
    }>>;
    reports: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
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
        deleteGoal: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                reportId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        journeys: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                endStep?: string | undefined;
                startStep?: string | undefined;
                steps?: number | undefined;
            };
            output: import("./reports.js").JourneyResult;
            meta: object;
        }>;
        utm: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
            };
            output: import("./reports.js").UTMResult;
            meta: object;
        }>;
        breakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                property: "url" | "path" | "referrer_domain" | "browser" | "device_type" | "os" | "city" | "country" | "utm_campaign" | "utm_medium" | "utm_source" | "referrer" | "event_name" | "event_type" | "utm_content" | "utm_term";
                filters?: {
                    column: "url" | "path" | "referrer_domain" | "browser" | "device_type" | "os" | "city" | "country" | "utm_campaign" | "utm_medium" | "utm_source" | "referrer" | "event_name" | "event_type" | "utm_content" | "utm_term";
                    value: string;
                }[] | undefined;
            };
            output: import("./reports.js").BreakdownResponse;
            meta: object;
        }>;
        revenue: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                currency?: string | undefined;
            };
            output: import("./reports.js").RevenueResult;
            meta: object;
        }>;
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
            output: import("./reports.js").AttributionResult;
            meta: object;
        }>;
        landingPages: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
            };
            output: import("./reports.js").LandingPagesResult;
            meta: object;
        }>;
        compare: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                currentEnd: Date;
                currentStart: Date;
                previousEnd: Date;
                previousStart: Date;
                websiteId: string;
            };
            output: import("./reports.js").CompareResult;
            meta: object;
        }>;
    }>>;
    realtime: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        currentVisitors: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {};
            meta: object;
        }>;
        recentEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
                limit?: number | undefined;
            };
            output: unknown[];
            meta: object;
        }>;
        activePages: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: unknown[];
            meta: object;
        }>;
        timeSeries: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: unknown[];
            meta: object;
        }>;
        countryBreakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: unknown[];
            meta: object;
        }>;
        overview: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: import("./realtime.js").RealtimeOverviewResponse;
            meta: object;
        }>;
    }>>;
    vitals: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        overview: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
            };
            output: import("../services/vitals.js").VitalAggregate[];
            meta: object;
        }>;
        byPage: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                limit?: number | undefined;
                metricName?: "LCP" | "INP" | "CLS" | "TTFB" | "FCP" | undefined;
            };
            output: import("../services/vitals.js").PageVitals[];
            meta: object;
        }>;
        trend: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                metricName: "LCP" | "INP" | "CLS" | "TTFB" | "FCP";
                interval?: "hour" | "day" | "week" | undefined;
            };
            output: {
                date: string;
                p75Value: number;
                sampleCount: number;
            }[];
            meta: object;
        }>;
        recentEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
                limit?: number | undefined;
            };
            output: import("../services/vitals.js").VitalEvent[];
            meta: object;
        }>;
        track: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                metricName: "LCP" | "INP" | "CLS" | "TTFB" | "FCP";
                metricValue: number;
                path: string;
                sessionId: string;
                url: string;
                visitorId: string;
                websiteId: string;
                browser?: string | undefined;
                deviceType?: string | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        pageBreakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                limit?: number | undefined;
            };
            output: import("../services/vitals.js").PageBreakdown[];
            meta: object;
        }>;
    }>>;
    forms: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        conversions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
            };
            output: import("../services/forms.js").FormConversion[];
            meta: object;
        }>;
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
        recentEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
                limit?: number | undefined;
            };
            output: import("../services/forms.js").FormEvent[];
            meta: object;
        }>;
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
                fieldType?: "number" | "email" | "date" | "select" | "url" | "submit" | "text" | "password" | "tel" | "textarea" | "checkbox" | "radio" | "file" | "hidden" | "other" | undefined;
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
    deployments: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                limit?: number | undefined;
            };
            output: import("../services/deployments.js").Deployment[];
            meta: object;
        }>;
        compare: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
                limit?: number | undefined;
            };
            output: import("../services/deployments.js").DeploymentComparison[];
            meta: object;
        }>;
        latest: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: import("../services/deployments.js").Deployment | null;
            meta: object;
        }>;
        track: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                deployId: string;
                source: "custom" | "vercel" | "netlify" | "cloudflare" | "railway" | "render" | "fly" | "heroku" | "aws" | "gcp" | "azure";
                websiteId: string;
                deployUrl?: string | undefined;
                environment?: string | undefined;
                gitBranch?: string | undefined;
                gitSha?: string | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
    }>>;
    auth: import("@trpc/server").TRPCBuiltRouter<{
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
            generateToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    name?: string | undefined;
                };
                output: {
                    expiresAt: string;
                    token: string;
                };
                meta: object;
            }>;
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
            revokeToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    tokenId: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            revokeAllTokens: import("@trpc/server").TRPCMutationProcedure<{
                input: void;
                output: {
                    count: number;
                };
                meta: object;
            }>;
            validateToken: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    token: string;
                };
                output: {
                    userId: string;
                    valid: boolean;
                };
                meta: object;
            }>;
        }>>;
    }>>;
    users: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                orderBy?: "email" | "id" | "createdAt" | "updatedAt" | "role" | "displayName" | "firstName" | "lastName" | undefined;
                page?: number | undefined;
                pageSize?: number | undefined;
                plan?: string | undefined;
                role?: "admin" | "user" | "view-only" | undefined;
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
                orderBy: "email" | "id" | "createdAt" | "updatedAt" | "role" | "displayName" | "firstName" | "lastName";
                page: number;
                pageSize: number;
                search: string | undefined;
            };
            meta: object;
        }>;
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
                    id: "business" | "enterprise" | "free" | "pro";
                    name: string;
                    status: "active" | "canceled" | "past_due" | "paused" | "trialing";
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
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: {
                success: boolean;
            };
            meta: object;
        }>;
    }>>;
    websites: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
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
                resetAt: Date | null;
                ingestMode: string;
                createdBy: string | null;
                timezone: string | null;
                public: boolean | null;
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
                resetAt: Date | null;
                ingestMode: string;
                createdBy: string | null;
                timezone: string | null;
                public: boolean | null;
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
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                domain: string;
                name: string;
                orgId?: string | undefined;
                shareId?: string | undefined;
            };
            output: {
                name: string;
                id: string;
                orgId: string | null;
                userId: string | null;
                createdAt: Date;
                updatedAt: Date;
                domain: string;
                shareId: string | null;
                resetAt: Date | null;
                ingestMode: string;
                createdBy: string | null;
                timezone: string | null;
                public: boolean | null;
                autoTrackPageviews: boolean | null;
                autoTrackSessions: boolean | null;
                excludeQueryParams: string[] | null;
                anonymizeIps: boolean | null;
                respectDnt: boolean | null;
                cookieConsentRequired: boolean | null;
                deletedAt: Date | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                websiteId: string;
                anonymizeIps?: boolean | undefined;
                autoTrackPageviews?: boolean | undefined;
                autoTrackSessions?: boolean | undefined;
                domain?: string | undefined;
                name?: string | undefined;
                public?: boolean | undefined;
                respectDnt?: boolean | undefined;
            };
            output: {
                id: string;
                orgId: string | null;
                userId: string | null;
                name: string;
                domain: string;
                shareId: string | null;
                resetAt: Date | null;
                ingestMode: string;
                createdBy: string | null;
                timezone: string | null;
                public: boolean | null;
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
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
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
                    scopes?: string[] | undefined;
                };
                output: {
                    key: string;
                    name: string;
                    id: string;
                    createdAt: Date;
                    deletedAt: Date | null;
                    expiresAt: Date | null;
                    lastUsedAt: Date | null;
                    prefix: string;
                    scopes: string[];
                    websiteId: string;
                    keyHash: string;
                    rateLimitMax: number | null;
                    rateLimitWindow: number | null;
                    allowedDomains: string[] | null;
                    allowedOrigins: string[] | null;
                    requestsCount: number | null;
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
    orgs: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
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
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                orgId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
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
    webhooks: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                orgId?: string | undefined;
                websiteId?: string | undefined;
            };
            output: {
                active: boolean | null;
                createdAt: Date;
                deletedAt: Date | null;
                enabled: boolean | null;
                events: string[];
                id: string;
                name: string;
                orgId: string | null;
                secret: string;
                updatedAt: Date;
                url: string;
                userId: string | null;
                websiteId: string;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                webhookId: string;
            };
            output: {
                active: boolean | null;
                createdAt: Date;
                deletedAt: Date | null;
                enabled: boolean | null;
                events: string[];
                id: string;
                name: string;
                orgId: string | null;
                secret: string;
                updatedAt: Date;
                url: string;
                userId: string | null;
                websiteId: string;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                events: ("pageview.created" | "session.created" | "event.created" | "goal.completed" | "visitor.identified" | "revenue.recorded" | "*")[];
                name: string;
                url: string;
                websiteId: string;
                orgId?: string | undefined;
            };
            output: {
                enabled: boolean | null;
                name: string;
                active: boolean | null;
                id: string;
                orgId: string | null;
                userId: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                websiteId: string;
                url: string;
                events: string[];
                secret: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                webhookId: string;
                active?: boolean | undefined;
                events?: ("pageview.created" | "session.created" | "event.created" | "goal.completed" | "visitor.identified" | "revenue.recorded" | "*")[] | undefined;
                name?: string | undefined;
                url?: string | undefined;
            };
            output: {
                active: boolean | null;
                createdAt: Date;
                deletedAt: Date | null;
                enabled: boolean | null;
                events: string[];
                id: string;
                name: string;
                orgId: string | null;
                secret: string;
                updatedAt: Date;
                url: string;
                userId: string | null;
                websiteId: string;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                webhookId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        deliveries: import("@trpc/server").TRPCBuiltRouter<{
            ctx: {
                auth: import("../middleware/auth.js").AuthContext | null;
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            transformer: true;
        }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    webhookId: string;
                    limit?: number | undefined;
                };
                output: {
                    id: string;
                    webhookId: string;
                    eventType: string;
                    payload: unknown;
                    status: "pending" | "success" | "failed" | "retrying";
                    statusCode: number | null;
                    responseBody: string | null;
                    attempts: number | null;
                    maxAttempts: number | null;
                    nextRetryAt: Date | null;
                    retryDelaySeconds: number | null;
                    createdAt: Date;
                    deliveredAt: Date | null;
                    failedAt: Date | null;
                }[];
                meta: object;
            }>;
        }>>;
    }>>;
    boards: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                config: unknown;
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                updatedAt: Date;
                userId: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                boardId: string;
            };
            output: {
                widgets: {
                    boardId: string;
                    config: unknown;
                    createdAt: Date;
                    id: string;
                    position: number | null;
                    title: string | null;
                    type: string;
                    updatedAt: Date;
                    websiteId: string | null;
                }[];
                config: unknown;
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                updatedAt: Date;
                userId: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                orgId: string;
                description?: string | undefined;
                config?: Record<string, unknown> | undefined;
            };
            output: {
                name: string;
                id: string;
                orgId: string;
                userId: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                config: unknown;
                description: string | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                boardId: string;
                config?: Record<string, unknown> | undefined;
                description?: string | undefined;
                name?: string | undefined;
            };
            output: {
                config: unknown;
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                updatedAt: Date;
                userId: string | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                boardId: string;
            };
            output: {
                config: unknown;
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                updatedAt: Date;
                userId: string | null;
            };
            meta: object;
        }>;
        widgets: import("@trpc/server").TRPCBuiltRouter<{
            ctx: {
                auth: import("../middleware/auth.js").AuthContext | null;
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            transformer: true;
        }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
            add: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    boardId: string;
                    type: string;
                    websiteId?: string | undefined;
                    title?: string | undefined;
                    config?: Record<string, unknown> | undefined;
                    position?: number | undefined;
                };
                output: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    type: string;
                    websiteId: string | null;
                    config: unknown;
                    boardId: string;
                    title: string | null;
                    position: number | null;
                };
                meta: object;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    widgetId: string;
                };
                output: {
                    boardId: string;
                    config: unknown;
                    createdAt: Date;
                    id: string;
                    position: number | null;
                    title: string | null;
                    type: string;
                    updatedAt: Date;
                    websiteId: string | null;
                };
                meta: object;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    widgetId: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            reorder: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    boardId: string;
                    widgetOrder: {
                        widgetId: string;
                        position: number;
                    }[];
                };
                output: {
                    success: boolean;
                };
                meta: object;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    widgetId: string;
                    title?: string | undefined;
                    config?: Record<string, unknown> | undefined;
                    position?: number | undefined;
                };
                output: {
                    boardId: string;
                    config: unknown;
                    createdAt: Date;
                    id: string;
                    position: number | null;
                    title: string | null;
                    type: string;
                    updatedAt: Date;
                    websiteId: string | null;
                };
                meta: object;
            }>;
        }>>;
    }>>;
    links: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                slug: string;
                updatedAt: Date;
                url: string;
                userId: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                linkId: string;
            };
            output: {
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                slug: string;
                updatedAt: Date;
                url: string;
                userId: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                orgId: string;
                slug: string;
                url: string;
                description?: string | undefined;
            };
            output: {
                name: string;
                id: string;
                orgId: string;
                userId: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                slug: string;
                url: string;
                description: string | null;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                linkId: string;
                description?: string | undefined;
                name?: string | undefined;
                slug?: string | undefined;
                url?: string | undefined;
            };
            output: {
                createdAt: Date;
                deletedAt: Date | null;
                description: string | null;
                id: string;
                name: string;
                orgId: string;
                slug: string;
                updatedAt: Date;
                url: string;
                userId: string | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                linkId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        stats: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                linkId: string;
                startDate: Date;
            };
            output: {
                clicksByDay: {
                    clicks: number;
                    date: string;
                }[];
                topCountries: {
                    country: string;
                    clicks: number;
                }[];
                topReferrers: {
                    referrer: string;
                    clicks: number;
                }[];
                totalClicks: number;
                uniqueVisitors: number;
            };
            meta: object;
        }>;
    }>>;
    pixels: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                createdAt: Date;
                id: string;
                name: string;
                orgId: string;
                slug: string;
                updatedAt: Date;
                userId: string | null;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                pixelId: string;
            };
            output: {
                createdAt: Date;
                id: string;
                name: string;
                orgId: string;
                slug: string;
                updatedAt: Date;
                userId: string | null;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                orgId: string;
                slug: string;
            };
            output: {
                name: string;
                id: string;
                orgId: string;
                userId: string | null;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                pixelId: string;
                name?: string | undefined;
            };
            output: {
                createdAt: Date;
                id: string;
                name: string;
                orgId: string;
                slug: string;
                updatedAt: Date;
                userId: string | null;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                pixelId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        stats: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                pixelId: string;
                startDate: Date;
            };
            output: import("./pixels.js").PixelStatsResult;
            meta: object;
        }>;
    }>>;
    billing: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        usage: import("@trpc/server").TRPCBuiltRouter<{
            ctx: {
                auth: import("../middleware/auth.js").AuthContext | null;
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            transformer: true;
        }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    orgId?: string | undefined;
                };
                output: {
                    createdAt: Date;
                    customEvents: number | null;
                    eventsCount: number | null;
                    id: string;
                    linkClicks: number | null;
                    orgId: string | null;
                    pageviews: number | null;
                    periodEnd: Date;
                    periodStart: Date;
                    pixelFires: number | null;
                    teamMembersCount: number | null;
                    userId: string | null;
                    websitesCount: number | null;
                };
                meta: object;
            }>;
        }>>;
        subscription: import("@trpc/server").TRPCBuiltRouter<{
            ctx: {
                auth: import("../middleware/auth.js").AuthContext | null;
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            transformer: true;
        }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    orgId?: string | undefined;
                };
                output: {
                    id: string;
                    orgId: string | null;
                    userId: string | null;
                    stripeSubscriptionId: string | null;
                    stripeCustomerId: string | null;
                    stripePriceId: string | null;
                    planId: "business" | "enterprise" | "free" | "pro";
                    status: "active" | "canceled" | "past_due" | "trialing";
                    cancelAtPeriodEnd: boolean | null;
                    eventsLimit: number;
                    websitesLimit: number;
                    teamMembersLimit: number;
                    currentPeriodStart: Date | null;
                    currentPeriodEnd: Date | null;
                    cancelAt: Date | null;
                    trialStart: Date | null;
                    trialEnd: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                };
                meta: object;
            }>;
        }>>;
        checkout: import("@trpc/server").TRPCBuiltRouter<{
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
                    cancelUrl: string;
                    priceId: string;
                    successUrl: string;
                    orgId?: string | undefined;
                };
                output: {
                    sessionId: string;
                    url: string | null;
                };
                meta: object;
            }>;
        }>>;
        portal: import("@trpc/server").TRPCBuiltRouter<{
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
                    returnUrl: string;
                    orgId?: string | undefined;
                };
                output: {
                    url: string;
                };
                meta: object;
            }>;
        }>>;
    }>>;
    segments: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        list: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                createdAt: Date;
                id: string;
                name: string;
                parameters: unknown;
                type: string;
                updatedAt: Date;
                websiteId: string;
            }[];
            meta: object;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                segmentId: string;
            };
            output: {
                createdAt: Date;
                id: string;
                name: string;
                parameters: unknown;
                type: string;
                updatedAt: Date;
                websiteId: string;
            };
            meta: object;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                parameters: Record<string, unknown>;
                type: string;
                websiteId: string;
            };
            output: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: string;
                websiteId: string;
                parameters: unknown;
            };
            meta: object;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                segmentId: string;
                name?: string | undefined;
                parameters?: Record<string, unknown> | undefined;
            };
            output: {
                createdAt: Date;
                id: string;
                name: string;
                parameters: unknown;
                type: string;
                updatedAt: Date;
                websiteId: string;
            };
            meta: object;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                segmentId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
        }>;
        evaluate: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                segmentId: string;
                startDate: Date;
            };
            output: {
                count: number;
            };
            meta: object;
        }>;
    }>>;
    integrations: import("@trpc/server").TRPCBuiltRouter<{
        ctx: {
            auth: import("../middleware/auth.js").AuthContext | null;
            req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
            res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
        };
        meta: object;
        errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        transformer: true;
    }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
        wordpress: import("@trpc/server").TRPCBuiltRouter<{
            ctx: {
                auth: import("../middleware/auth.js").AuthContext | null;
                req: import("fastify").FastifyRequest<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown, import("fastify").FastifyBaseLogger, import("fastify/types/type-provider.js").ResolveFastifyRequestType<import("fastify").FastifyTypeProviderDefault, import("fastify").FastifySchema, import("fastify").RouteGenericInterface>>;
                res: import("fastify").FastifyReply<import("fastify").RouteGenericInterface, import("fastify").RawServerDefault, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, unknown, import("fastify").FastifySchema, import("fastify").FastifyTypeProviderDefault, unknown>;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            transformer: true;
        }, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
            connect: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    siteUrl: string;
                    apiKey: string;
                };
                output: never;
                meta: object;
            }>;
            disconnect: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    integrationId: string;
                };
                output: never;
                meta: object;
            }>;
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: never;
                meta: object;
            }>;
        }>>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=index.d.ts.map
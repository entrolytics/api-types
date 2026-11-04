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
        weeklyTraffic: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                timeZone?: string | undefined;
                websiteId: string;
            };
            output: {
                day: number;
                hour: number;
                y: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        overview: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
            };
            output: {
                bounces: number;
                comparison: {
                    pageviews: number;
                    visitors: number;
                    visits: number;
                    bounces: number;
                    totalTime: number;
                };
                pageviews: number;
                totalTime: number;
                visitors: number;
                visits: number;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        timeseries: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
                interval: "day" | "hour" | "month" | "week";
                timeZone?: string | undefined;
            };
            output: {
                date: string;
                pageviews: number;
                sessions: number;
                visitors: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        topPages: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
                limit?: number | undefined;
            };
            output: {
                avg_load_time?: number | null | undefined;
                p95_load_time?: number | null | undefined;
                path: string | null;
                unique_visitors?: number | undefined;
                views: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        topReferrers: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
                limit?: number | undefined;
            };
            output: {
                referrer_domain: string | null;
                unique_visitors?: number | undefined;
                visits: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        deviceBreakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
            };
            output: {
                browser: string | null;
                device_type: string | null;
                os: string | null;
                pageviews: number;
                unique_visitors?: number | undefined;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        geography: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
            };
            output: {
                city: string | null;
                country: string | null;
                pageviews: number;
                unique_visitors?: number | undefined;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        utmCampaigns: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        sessions: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                filters?: {
                    country?: string | undefined;
                    device?: "desktop" | "mobile" | "tablet" | undefined;
                    browser?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                startDate: Date;
                websiteId: string;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                region: string | null;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        sessionActivity: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate?: Date | undefined;
                sessionId: string;
                startDate?: Date | undefined;
                websiteId: string;
            };
            output: import("../services/analytics.js").SessionActivityEvent[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                event_type: string;
                os: string | null;
                path: string;
                referrer: string | null;
                session_id: string;
                timestamp: string;
                visitor_id: string;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        series: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                eventName?: string | undefined;
                interval?: "day" | "hour" | "month" | "week" | undefined;
            };
            output: {
                count: number;
                date: string;
                event_name: string | null;
                unique_sessions: number;
                unique_visitors: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    type: "event" | "pageview";
                    value: string;
                }[];
                timeWindow?: number | undefined;
                websiteId: string;
            };
            output: {
                steps: {
                    conversionRate: number;
                    dropoff: number;
                    dropped: number;
                    remaining: number;
                    step: number;
                    totalConversion: number;
                    type: "event" | "pageview";
                    value: string;
                    visitors: number;
                }[];
                totalConversion: number;
                totalVisitors: number;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                measuredPopulation: string;
                periods: string[];
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    type: string;
                    value: string;
                }[];
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
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
        utm: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
            };
            output: import("./reports.js").UTMResult;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
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
            output: import("./reports.js").AttributionResult;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
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
            output: {
                pageviews: number;
                sessions: number;
                visitors: number;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        recentEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                limit?: number | undefined;
                websiteId: string;
            };
            output: {
                browser: string;
                country: string | null;
                countryCode: string | null;
                device: string;
                eventName: string | null;
                id: string;
                path: string;
                timestamp: string;
                type: string;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        activePages: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                path: string;
                viewers: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        timeSeries: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                pageviews: number;
                time: string;
                visitors: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        countryBreakdown: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                country: string;
                countryCode: string;
                visitors: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        overview: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                activeVisitors: number;
                countries: {
                    country: string;
                    countryCode: string;
                    visitors: number;
                }[];
                events: {
                    browser: string;
                    country: string | null;
                    countryCode: string | null;
                    device: string;
                    eventName: string | null;
                    id: string;
                    path: string;
                    timestamp: string;
                    type: string;
                }[];
                series: {
                    pageviews: number;
                    time: string;
                    visitors: number;
                }[];
                urls: {
                    path: string;
                    visitors: number;
                }[];
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        trend: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                startDate: Date;
                websiteId: string;
                interval?: "day" | "hour" | "week" | undefined;
                metricName: "CLS" | "FCP" | "INP" | "LCP" | "TTFB";
            };
            output: {
                date: string;
                p75Value: number;
                sampleCount: number;
            }[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        recentEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                limit?: number | undefined;
                websiteId: string;
            };
            output: import("../services/vitals.js").VitalEvent[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        recentEvents: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                limit?: number | undefined;
                websiteId: string;
            };
            output: import("../services/forms.js").FormEvent[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                limit?: number | undefined;
                startDate: Date;
                websiteId: string;
            };
            output: import("../services/deployments.js").Deployment[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        track: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                deployId: string;
                deployUrl?: string | undefined;
                environment?: string | undefined;
                gitBranch?: string | undefined;
                gitSha?: string | undefined;
                source: "aws" | "azure" | "cloudflare" | "custom" | "fly" | "gcp" | "heroku" | "netlify" | "railway" | "render" | "vercel";
                websiteId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    tokenId: string;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            revokeToken: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    tokenId: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            revokeAllTokens: import("@trpc/server").TRPCMutationProcedure<{
                input: void;
                output: {
                    count: number;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            validateToken: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    token: string;
                };
                output: {
                    tokenId: string;
                    userId: string;
                    valid: boolean;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                orderBy?: "createdAt" | "displayName" | "email" | "firstName" | "id" | "lastName" | "role" | "updatedAt" | undefined;
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
                data: {
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
                }[];
                orderBy: "createdAt" | "displayName" | "email" | "firstName" | "id" | "lastName" | "role" | "updatedAt";
                page: number;
                pageSize: number;
                search: string | undefined;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        me: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
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
                trial?: {
                    isTrialing: boolean;
                    trialEnd: Date | null;
                } | undefined;
                subscription?: {
                    cancelAtPeriodEnd: boolean;
                    currentPeriodEnd: Date | null;
                    stripeSubscriptionId: string | null;
                } | undefined;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        updateProfile: import("@trpc/server").TRPCMutationProcedure<{
            input: {
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
                createdAt: Date;
                updatedAt: Date;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                createdAt: Date;
                updatedAt: Date;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: void;
            output: {
                pending: boolean;
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        setSharing: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                enabled: boolean;
                websiteId: string;
            };
            output: {
                shareId: string | null;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                websiteId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            revoke: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    keyId: string;
                    websiteId?: string | undefined;
                };
                output: {
                    success: boolean;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
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
            output: Omit<{
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
            }, "secret">[];
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                webhookId: string;
            };
            output: Omit<{
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
            }, "secret">;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                enabled?: boolean | undefined;
                events: ("*" | "event.created" | "goal.completed" | "pageview.created" | "revenue.recorded" | "session.created" | "visitor.identified")[];
                name: string;
                orgId?: string | undefined;
                url: string;
                websiteId?: string | undefined;
            };
            output: {
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                enabled?: boolean | undefined;
                events?: ("*" | "event.created" | "goal.completed" | "pageview.created" | "revenue.recorded" | "session.created" | "visitor.identified")[] | undefined;
                name?: string | undefined;
                url?: string | undefined;
                webhookId: string;
                websiteId?: string | undefined;
            };
            output: Omit<{
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
            }, "secret">;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        rotateSecret: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                webhookId: string;
            };
            output: {
                secret: string;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                webhookId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    limit?: number | undefined;
                    webhookId: string;
                };
                output: {
                    id: string;
                    webhookId: string;
                    eventType: string;
                    eventId: string | null;
                    payload: unknown;
                    status: "failed" | "pending" | "retrying" | "sending" | "success";
                    statusCode: number | null;
                    responseBody: string | null;
                    attempts: number | null;
                    maxAttempts: number | null;
                    nextRetryAt: Date | null;
                    retryDelaySeconds: number | null;
                    claimedAt: Date | null;
                    createdAt: Date;
                    deliveredAt: Date | null;
                    failedAt: Date | null;
                }[];
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            input: {
                websiteId?: string | undefined;
            } | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
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
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                description?: string | undefined;
                orgId?: string | undefined;
                config?: Record<string, unknown> | undefined;
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
            } | undefined;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            } | undefined;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            } | undefined;
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    websiteId?: string | undefined;
                    type: string;
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
                } | undefined;
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    boardId?: string | undefined;
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
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            remove: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    boardId?: string | undefined;
                    widgetId: string;
                };
                output: {
                    success: boolean;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    boardId?: string | undefined;
                    widgetId: string;
                    title?: string | undefined;
                    type?: string | undefined;
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
                } | undefined;
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            input: {
                orgId?: string | undefined;
            } | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                description?: string | undefined;
                name: string;
                orgId?: string | undefined;
                slug?: string | undefined;
                url: string;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                description?: string | undefined;
                linkId: string;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                linkId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            input: {
                orgId?: string | undefined;
            } | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                orgId?: string | undefined;
                slug?: string | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name?: string | undefined;
                pixelId: string;
                slug?: string | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                pixelId: string;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        stats: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                endDate: Date;
                pixelId: string;
                startDate: Date;
            };
            output: {
                firesByDay: {
                    date: string;
                    fires: number;
                }[];
                lastFired: string | null;
                topPages: {
                    fires: number;
                    page: string;
                }[];
                totalFires: number;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    userId: string | null;
                    teamMembersCount: number;
                    websitesCount: number;
                } | {
                    customEvents: number;
                    eventsCount: number;
                    linkClicks: number;
                    pageviews: number;
                    periodEnd: Date;
                    periodStart: Date;
                    pixelFires: number;
                    teamMembersCount: number;
                    websitesCount: number;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    lastStripeEventAt: Date | null;
                    currentPeriodStart: Date | null;
                    currentPeriodEnd: Date | null;
                    cancelAt: Date | null;
                    trialStart: Date | null;
                    trialEnd: Date | null;
                    createdAt: Date;
                    updatedAt: Date;
                } | null;
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    orgId?: string | undefined;
                    planId: "business" | "enterprise" | "free" | "pro";
                    successUrl: string;
                };
                output: {
                    sessionId: string;
                    url: string | null;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                    orgId?: string | undefined;
                    returnUrl: string;
                };
                output: {
                    url: string;
                };
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                type?: string | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                segmentId: string;
                websiteId?: string | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
                parameters?: Record<string, unknown> | undefined;
                type?: string | undefined;
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
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name?: string | undefined;
                parameters?: Record<string, unknown> | undefined;
                segmentId: string;
                websiteId?: string | undefined;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
        }>;
        delete: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                segmentId: string;
                websiteId?: string | undefined;
            };
            output: {
                success: boolean;
            };
            meta: object;
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
            errorShape: import("@trpc/server").TRPCDefaultErrorShape;
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
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            disconnect: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    integrationId: string;
                };
                output: never;
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: void;
                output: never;
                meta: object;
                errorShape: import("@trpc/server").TRPCDefaultErrorShape;
            }>;
        }>>;
    }>>;
}>>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=index.d.ts.map
export type RouteTarget = 'edge' | 'node' | 'unknown';
export interface RouteMetricSample {
    timestamp: number;
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    target: RouteTarget;
}
export interface RouteMetricQuery {
    start?: number;
    end?: number;
    search?: string;
    method?: string;
    limit?: number;
    bucketMs?: number;
}
export interface RouteStatsRow {
    path: string;
    method: string;
    requests: number;
    avgLatency: number;
    p95Latency: number;
    p99Latency: number;
    errorRate: number;
    lastHit: string;
}
export interface RouteTimeSeriesPoint {
    timestamp: string;
    requests: number;
    edgeRequests: number;
    nodeRequests: number;
    errors: number;
    errorRate: number;
    avgLatency: number;
    p50Latency: number;
    p95Latency: number;
    p99Latency: number;
}
export interface RouteStatsResponse {
    totalRequests: number;
    avgLatency: number;
    errorRate: number;
    routes: RouteStatsRow[];
    series: RouteTimeSeriesPoint[];
    period: {
        start: string;
        end: string;
        bucketMs: number;
    };
}
export interface RoutingStatsResponse {
    period: {
        start: string;
        end: string;
    };
    requests: {
        total: number;
        edge: number;
        node: number;
    };
    latency: {
        edge: {
            p50: number;
            p95: number;
            p99: number;
        };
        node: {
            p50: number;
            p95: number;
            p99: number;
        };
    };
    errorRate: {
        total: number;
        edge: number;
        node: number;
    };
}
export declare class RouteMetricsStore {
    private samples;
    private readonly ttlMs;
    private readonly maxSamples;
    constructor(options?: {
        ttlMs?: number;
        maxSamples?: number;
    });
    track(sample: RouteMetricSample): void;
    getStats(query?: RouteMetricQuery): RouteStatsResponse;
    getRoutingStats(start?: number, end?: number): RoutingStatsResponse;
    private compact;
}
export declare const routeMetrics: RouteMetricsStore;
//# sourceMappingURL=route-metrics.d.ts.map
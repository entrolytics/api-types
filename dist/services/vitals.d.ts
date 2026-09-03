import type { VitalRating, VitalType } from '@entrolytics/protocol';
export type VitalMetric = VitalType;
export interface VitalEvent {
    metricName: VitalMetric;
    metricValue: number;
    metricRating: VitalRating;
    deviceType: string;
    browser: string;
    timestamp: Date;
    path: string;
}
export interface VitalAggregate {
    metricName: VitalMetric;
    goodCount: number;
    needsImprovementCount: number;
    poorCount: number;
    p75Value: number;
    p95Value: number;
    avgValue: number;
    count: number;
    goodPercentage: number;
}
export interface PageVitals {
    path: string;
    metricName: VitalMetric;
    p75Value: number;
    sampleCount: number;
}
export interface PageBreakdown {
    path: string;
    avgLcp: number | null;
    avgInp: number | null;
    avgCls: number | null;
    avgTtfb: number | null;
    avgFcp: number | null;
    count: number;
}
export declare const VitalsService: {
    /** Track a new web vital event */
    /** Prepare a new web vital event for ingestion */
    prepareVital(websiteId: string, visitorId: string, sessionId: string, data: {
        eventId: string;
        timestamp: string;
        url: string;
        path: string;
        metricName: VitalMetric;
        metricValue: number;
        deviceType?: string;
        browser?: string;
    }): {
        browser: string;
        device_type: string;
        id: string;
        metric_name: VitalType;
        metric_rating: VitalRating;
        metric_value: number;
        path: string;
        session_id: string;
        timestamp: string;
        url: string;
        visitor_id: string;
        website_id: string;
    };
    /** Get aggregated vitals overview for a website */
    getOverview(websiteId: string, startDate: Date, endDate: Date): Promise<VitalAggregate[]>;
    /** Get vitals breakdown by page */
    getByPage(websiteId: string, startDate: Date, endDate: Date, metricName?: VitalMetric, limit?: number): Promise<PageVitals[]>;
    /** Get vitals trend over time */
    getTrend(websiteId: string, startDate: Date, endDate: Date, metricName: VitalMetric, interval?: 'hour' | 'day' | 'week'): Promise<Array<{
        date: string;
        p75Value: number;
        sampleCount: number;
    }>>;
    /** Get recent vital events for debugging */
    getRecentEvents(websiteId: string, limit?: number, resetAt?: Date | null): Promise<VitalEvent[]>;
    /**
     * Get page breakdown with all metrics aggregated per page path This pivots the data to show
     * avgLcp, avgInp, avgCls, avgTtfb, avgFcp per page
     */
    getPageBreakdown(websiteId: string, startDate: Date, endDate: Date, limit?: number): Promise<PageBreakdown[]>;
};
export type VitalInsertRow = ReturnType<typeof VitalsService.prepareVital>;
//# sourceMappingURL=vitals.d.ts.map
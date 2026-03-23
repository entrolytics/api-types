export type WebhookEventType = 'pageview.created' | 'session.created' | 'event.created' | 'goal.completed' | 'visitor.identified' | 'revenue.recorded';
/**
 * Generate HMAC signature for webhook payload
 */
export declare function generateWebhookSignature(payload: string, secret: string): string;
/**
 * Verify webhook signature (for receiving end)
 */
export declare function verifyWebhookSignature(payload: string, signature: string, secret: string, tolerance?: number): boolean;
/**
 * Dispatch a webhook event to all subscribed endpoints
 */
export declare function dispatchWebhookEvent(eventType: WebhookEventType, data: object, websiteId?: string): Promise<void>;
/**
 * Retry failed webhook deliveries
 * This should be called by a background job/cron
 */
export declare function retryFailedDeliveries(): Promise<void>;
/**
 * Test a webhook by sending a test event
 */
export declare function testWebhook(webhookId: string): Promise<{
    success: boolean;
    statusCode?: number;
    response?: string;
    error?: string;
}>;
//# sourceMappingURL=webhook.d.ts.map
import StripeSdk from 'stripe';
export declare const stripe: StripeSdk | null;
export declare const billingEnabled: boolean;
/**
 * Plan definitions with Stripe Price IDs
 * Configure these in Stripe Dashboard and update the IDs here
 */
export declare const PLANS: {
    readonly business: {
        readonly id: "business";
        readonly name: "Business";
        readonly description: "For agencies and high-traffic sites";
        readonly priceId: string | null;
        readonly monthlyPrice: 99;
        readonly limits: {
            readonly pageviews: 1000000;
            readonly websites: -1;
            readonly retentionDays: 730;
            readonly seats: 20;
        };
        readonly features: {
            readonly funnels: true;
            readonly attribution: true;
            readonly revenue: true;
            readonly customDashboards: true;
            readonly abAnalytics: true;
            readonly emailReports: true;
            readonly apiAccess: true;
            readonly cliAccess: true;
        };
    };
    readonly enterprise: {
        readonly id: "enterprise";
        readonly name: "Enterprise";
        readonly description: "Custom solutions for large organizations";
        readonly priceId: null;
        readonly monthlyPrice: null;
        readonly limits: {
            readonly pageviews: -1;
            readonly websites: -1;
            readonly retentionDays: -1;
            readonly seats: -1;
        };
        readonly features: {
            readonly funnels: true;
            readonly attribution: true;
            readonly revenue: true;
            readonly customDashboards: true;
            readonly abAnalytics: true;
            readonly emailReports: true;
            readonly apiAccess: true;
            readonly cliAccess: true;
            readonly sso: true;
            readonly auditLogs: true;
            readonly prioritySupport: true;
            readonly selfHosted: true;
        };
    };
    readonly free: {
        readonly id: "free";
        readonly name: "Starter";
        readonly description: "Perfect for side projects and small sites";
        readonly priceId: null;
        readonly monthlyPrice: 0;
        readonly limits: {
            readonly pageviews: 25000;
            readonly websites: 2;
            readonly retentionDays: 30;
            readonly seats: 1;
        };
        readonly features: {
            readonly funnels: false;
            readonly attribution: false;
            readonly revenue: false;
            readonly customDashboards: false;
            readonly abAnalytics: false;
            readonly emailReports: false;
            readonly apiAccess: true;
            readonly cliAccess: true;
        };
    };
    readonly pro: {
        readonly id: "pro";
        readonly name: "Pro";
        readonly description: "For growing businesses and startups";
        readonly priceId: string | null;
        readonly monthlyPrice: 29;
        readonly limits: {
            readonly pageviews: 250000;
            readonly websites: 10;
            readonly retentionDays: 365;
            readonly seats: 5;
        };
        readonly features: {
            readonly funnels: true;
            readonly attribution: true;
            readonly revenue: true;
            readonly customDashboards: false;
            readonly abAnalytics: false;
            readonly emailReports: true;
            readonly apiAccess: true;
            readonly cliAccess: true;
        };
    };
};
export type PlanId = keyof typeof PLANS;
export type Plan = (typeof PLANS)[PlanId];
/**
 * Get plan by ID
 */
export declare function getPlan(planId: string): Plan;
/**
 * Get plan by Stripe Price ID
 */
export declare function getPlanByPriceId(priceId: string): Plan | null;
/**
 * Create Stripe checkout session for subscription
 */
export declare function createCheckoutSession(options: {
    customerId?: string;
    customerEmail?: string;
    priceId: string;
    successUrl: string;
    cancelUrl: string;
    metadata?: Record<string, string>;
    trialPeriodDays?: number;
}): Promise<StripeSdk.Checkout.Session | null>;
/**
 * Create Stripe customer portal session
 */
export declare function createPortalSession(options: {
    customerId: string;
    returnUrl: string;
}): Promise<StripeSdk.BillingPortal.Session | null>;
/**
 * Get Stripe customer by ID
 */
export declare function getCustomer(customerId: string): Promise<StripeSdk.Customer | null>;
/**
 * Create or retrieve Stripe customer for user
 */
export declare function getOrCreateCustomer(options: {
    email: string;
    name?: string;
    metadata?: Record<string, string>;
}): Promise<StripeSdk.Customer | null>;
/**
 * Get active subscription for a customer
 */
export declare function getActiveSubscription(customerId: string): Promise<StripeSdk.Subscription | null>;
/**
 * Cancel subscription
 */
export declare function cancelSubscription(subscriptionId: string, immediately?: boolean): Promise<StripeSdk.Subscription | null>;
/**
 * Resume a subscription that was set to cancel at period end
 */
export declare function resumeSubscription(subscriptionId: string): Promise<StripeSdk.Subscription | null>;
/**
 * Validate webhook signature
 */
export declare function constructWebhookEvent(payload: string | Buffer, signature: string): StripeSdk.Event | null;
//# sourceMappingURL=stripe.d.ts.map
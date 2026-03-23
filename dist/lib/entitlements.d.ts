import type { PlanId } from './stripe';
/**
 * Account entitlements - computed from subscription
 */
export interface AccountEntitlements {
    planId: PlanId;
    planName: string;
    status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'paused';
    limits: {
        pageviews: number;
        websites: number;
        retentionDays: number;
        seats: number;
    };
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
    usage: {
        pageviews: number;
        websites: number;
        periodStart: Date;
        periodEnd: Date;
    };
    trial?: {
        isTrialing: boolean;
        trialEnd: Date | null;
    };
    subscription?: {
        stripeSubscriptionId: string | null;
        currentPeriodEnd: Date | null;
        cancelAtPeriodEnd: boolean;
    };
}
/**
 * Get subscription for a user or org
 */
export declare function getSubscription(userId: string, orgId?: string | null): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    orgId: string | null;
    status: "active" | "canceled" | "past_due" | "trialing";
    stripeSubscriptionId: string | null;
    stripeCustomerId: string | null;
    stripePriceId: string | null;
    planId: "free" | "pro" | "business" | "enterprise";
    cancelAtPeriodEnd: boolean | null;
    eventsLimit: number;
    websitesLimit: number;
    teamMembersLimit: number;
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    cancelAt: Date | null;
    trialStart: Date | null;
    trialEnd: Date | null;
} | undefined>;
/**
 * Get or create subscription record (creates free tier if none exists)
 */
export declare function getOrCreateSubscription(userId: string, orgId?: string | null): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    orgId: string | null;
    status: "active" | "canceled" | "past_due" | "trialing";
    stripeSubscriptionId: string | null;
    stripeCustomerId: string | null;
    stripePriceId: string | null;
    planId: "free" | "pro" | "business" | "enterprise";
    cancelAtPeriodEnd: boolean | null;
    eventsLimit: number;
    websitesLimit: number;
    teamMembersLimit: number;
    currentPeriodStart: Date | null;
    currentPeriodEnd: Date | null;
    cancelAt: Date | null;
    trialStart: Date | null;
    trialEnd: Date | null;
}>;
/**
 * Get current usage for the billing period
 */
export declare function getCurrentUsage(userId: string, orgId?: string | null): Promise<{
    customEvents: number | null;
    linkClicks: number | null;
    pageviews: number | null;
    periodEnd: Date;
    periodStart: Date;
    pixelFires: number | null;
}>;
/**
 * Get website count for user/org
 */
export declare function getWebsiteCount(userId: string, orgId?: string | null): Promise<number>;
/**
 * Get full account entitlements
 */
export declare function getAccountEntitlements(userId: string, orgId?: string | null): Promise<AccountEntitlements>;
/**
 * Check if action is allowed based on quota
 */
export declare function checkQuota(userId: string, action: 'pageview' | 'website' | 'custom_event' | 'link_click' | 'pixel_fire', orgId?: string | null): Promise<{
    allowed: boolean;
    reason?: string;
    usage?: number;
    limit?: number;
}>;
/**
 * Check if a feature is available for the account
 */
export declare function hasFeature(userId: string, feature: keyof AccountEntitlements['features'], orgId?: string | null): Promise<boolean>;
/**
 * Increment usage counter (called after successful event ingestion)
 */
export declare function incrementUsage(userId: string, metric: 'pageviews' | 'customEvents' | 'linkClicks' | 'pixelFires', amount?: number, orgId?: string | null): Promise<void>;
/**
 * Invalidate entitlements cache (call after subscription changes)
 */
export declare function invalidateEntitlementsCache(userId: string, orgId?: string | null): Promise<void>;
/**
 * Update subscription from Stripe webhook data
 */
export declare function updateSubscriptionFromStripe(data: {
    stripeSubscriptionId: string;
    stripeCustomerId: string;
    stripePriceId: string;
    planId: PlanId;
    status: string;
    currentPeriodStart?: Date;
    currentPeriodEnd?: Date;
    cancelAtPeriodEnd?: boolean;
    trialStart?: Date | null;
    trialEnd?: Date | null;
    userId?: string;
    orgId?: string;
}): Promise<void>;
//# sourceMappingURL=entitlements.d.ts.map
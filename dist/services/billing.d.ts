import type { PlatformRole } from '../lib/roles.js';
export declare class BillingService {
    /**
     * Get current usage for user or org
     */
    static getUsage(userId: string, role: PlatformRole | string, orgId?: string): Promise<{
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
    }>;
    /**
     * Get subscription details
     */
    static getSubscription(userId: string, role: PlatformRole | string, orgId?: string): Promise<{
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
    }>;
    /**
     * Create Stripe checkout session
     */
    static createCheckoutSession(userId: string, email: string, role: PlatformRole | string, params: {
        priceId: string;
        orgId?: string;
        successUrl: string;
        cancelUrl: string;
    }): Promise<{
        sessionId: string;
        url: string | null;
    }>;
    /**
     * Create Stripe portal session
     */
    static createPortalSession(userId: string, role: PlatformRole | string, params: {
        returnUrl: string;
        orgId?: string;
    }): Promise<{
        url: string;
    }>;
}
//# sourceMappingURL=billing.d.ts.map
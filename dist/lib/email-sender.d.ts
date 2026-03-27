import type { EmailResult } from './email.js';
export interface WelcomeEmailProps {
    websiteName?: string;
    userEmail?: string;
}
export interface UsageWarningEmailProps {
    percentUsed?: number;
    usageType?: string;
}
export interface WeeklyReportEmailProps {
    websiteName?: string;
    websiteId?: string;
}
/**
 * Check if a user has a specific email preference enabled
 */
declare function checkEmailPreference(userId: string, preference: 'emailWeeklyReports' | 'emailUsageAlerts' | 'emailProductUpdates'): Promise<boolean>;
/**
 * Send welcome email to new user
 */
export declare function sendWelcomeEmail(to: string, props: WelcomeEmailProps): Promise<EmailResult>;
/**
 * Send usage warning email
 * Checks user's emailUsageAlerts preference before sending
 */
export declare function sendUsageWarningEmail(to: string, props: UsageWarningEmailProps, userId?: string): Promise<EmailResult>;
/**
 * Send weekly analytics report email
 * Note: Weekly reports cron already checks preference before calling this
 */
export declare function sendWeeklyReportEmail(to: string, props: WeeklyReportEmailProps): Promise<EmailResult>;
declare const _default: {
    checkEmailPreference: typeof checkEmailPreference;
    sendUsageWarningEmail: typeof sendUsageWarningEmail;
    sendWeeklyReportEmail: typeof sendWeeklyReportEmail;
    sendWelcomeEmail: typeof sendWelcomeEmail;
};
export default _default;
//# sourceMappingURL=email-sender.d.ts.map
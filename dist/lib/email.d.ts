import { Resend } from 'resend';
type ResendEmailPayload = Parameters<Resend['emails']['send']>[0];
type ReactElement = ResendEmailPayload['react'];
export interface SendEmailOptions {
    to: string | string[];
    subject: string;
    react?: ReactElement;
    html?: string;
    text?: string;
    replyTo?: string;
    tags?: Array<{
        name: string;
        value: string;
    }>;
}
export interface EmailResult {
    success: boolean;
    id?: string;
    error?: string;
}
/**
 * Send an email using Resend
 * Supports both React Email components (recommended) and raw HTML
 */
export declare function sendEmail(options: SendEmailOptions): Promise<EmailResult>;
/**
 * Send a batch of emails
 */
export declare function sendBatchEmails(emails: SendEmailOptions[]): Promise<{
    results: EmailResult[];
    successCount: number;
    failCount: number;
}>;
export type EmailTemplateType = 'welcome' | 'usage_warning' | 'usage_critical' | 'trial_ending' | 'subscription_canceled' | 'weekly_report' | 'monthly_report' | 'password_reset' | 'team_invite';
/**
 * Check if email service is configured
 */
export declare function isEmailConfigured(): boolean;
declare const _default: {
    isEmailConfigured: typeof isEmailConfigured;
    sendBatchEmails: typeof sendBatchEmails;
    sendEmail: typeof sendEmail;
};
export default _default;
//# sourceMappingURL=email.d.ts.map
import type { DeploymentSource } from '@entrolytics/protocol';
export declare const DEPLOYMENT_SOURCES: readonly ["vercel", "netlify", "cloudflare", "railway", "render", "fly", "heroku", "aws", "gcp", "azure", "custom"];
export declare function isDeploymentSource(value: string): value is DeploymentSource;
export declare function normalizeDeploymentSource(value: string | null | undefined): DeploymentSource;
export interface Deployment {
    deployId: string;
    gitSha: string | null;
    gitBranch: string | null;
    source: DeploymentSource;
    deployUrl: string | null;
    environment: string | null;
    deployedAt: Date;
    pageviews: number;
    visitors: number;
    errors: number;
}
export interface DeploymentComparison {
    deployId: string;
    gitSha: string | null;
    deployedAt: Date;
    pageviews: number;
    visitors: number;
    avgLoadTime: number | null;
    errorCount: number;
}
export declare const DeploymentsService: {
    /** Track a deployment event */
    trackDeployment(websiteId: string, data: {
        deployId: string;
        gitSha?: string;
        gitBranch?: string;
        source: DeploymentSource;
        deployUrl?: string;
        environment?: string;
    }): Promise<void>;
    /** List all deployments for a website */
    listDeployments(websiteId: string, startDate: Date, endDate: Date, limit?: number): Promise<Deployment[]>;
    /** Compare deployments (for release tracking) */
    compareDeployments(websiteId: string, limit?: number): Promise<DeploymentComparison[]>;
    /** Get the latest deployment for a website */
    getLatestDeployment(websiteId: string): Promise<Deployment | null>;
};
//# sourceMappingURL=deployments.d.ts.map
/**
 * Admin bootstrap utilities for Entrolytics
 * Handles initial admin setup and auto-promotion logic
 */
export interface AdminSetupConfig {
    initialAdminEmail?: string;
    autoPromoteFirstUser?: boolean;
}
/**
 * Get admin setup configuration from environment variables
 */
export declare function getAdminSetupConfig(): AdminSetupConfig;
/**
 * Check if any admin users exist in the system
 */
export declare function hasAdminUsers(): Promise<boolean>;
/**
 * Get total number of users in the system
 */
export declare function getTotalUserCount(): Promise<number>;
/**
 * Check if a user should be auto-promoted to admin
 * Conditions:
 * 1. User email matches INITIAL_ADMIN_EMAIL, OR
 * 2. AUTO_PROMOTE_FIRST_USER is true and no admin users exist and this is the first user
 */
export declare function shouldPromoteToAdmin(userEmail: string): Promise<boolean>;
/**
 * Promote a user to admin role by user ID
 */
export declare function promoteUserToAdmin(userId: string): Promise<boolean>;
/**
 * Promote a user to admin role by email address
 */
export declare function promoteUserToAdminByEmail(email: string): Promise<boolean>;
/**
 * Bootstrap admin setup - called during user creation
 * This function should be called whenever a new user is created
 */
export declare function bootstrapAdminSetup(userEmail: string, userId: string): Promise<void>;
/**
 * Validate admin setup configuration
 */
export declare function validateAdminSetupConfig(): {
    valid: boolean;
    errors: string[];
};
/**
 * Get admin setup status for diagnostics
 */
export declare function getAdminSetupStatus(): Promise<{
    config: AdminSetupConfig;
    hasAdminUsers: boolean;
    setupComplete: boolean;
    totalUsers: number;
}>;
//# sourceMappingURL=admin.d.ts.map
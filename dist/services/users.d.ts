/**
 * Update user profile information
 */
export declare function updateUserProfile(userId: string, data: {
    displayName?: string;
    firstName?: string;
    lastName?: string;
}): Promise<{
    id: string;
    clerkId: string;
    email: string;
    name: string | null;
    displayName: string | null;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    imageUrl: string | null;
    role: string;
    onboardingCompleted: string | null;
    onboardingCompletedAt: Date | null;
    onboardingStep: string | null;
    onboardingSkipped: string | null;
    companySize: string | null;
    industry: string | null;
    useCase: string | null;
    referralSource: string | null;
    emailWeeklyReports: boolean | null;
    emailUsageAlerts: boolean | null;
    emailProductUpdates: boolean | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
/**
 * Update user email preferences
 */
export declare function updateUserPreferences(userId: string, data: {
    emailWeeklyReports?: boolean;
    emailUsageAlerts?: boolean;
    emailProductUpdates?: boolean;
}): Promise<{
    id: string;
    clerkId: string;
    email: string;
    name: string | null;
    displayName: string | null;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    imageUrl: string | null;
    role: string;
    onboardingCompleted: string | null;
    onboardingCompletedAt: Date | null;
    onboardingStep: string | null;
    onboardingSkipped: string | null;
    companySize: string | null;
    industry: string | null;
    useCase: string | null;
    referralSource: string | null;
    emailWeeklyReports: boolean | null;
    emailUsageAlerts: boolean | null;
    emailProductUpdates: boolean | null;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}>;
/**
 * Soft delete user account
 */
export declare function deleteUser(userId: string): Promise<boolean>;
//# sourceMappingURL=users.d.ts.map
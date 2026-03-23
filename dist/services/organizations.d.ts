export declare class OrganizationService {
    /**
     * List organizations for a user
     */
    static listUserOrganizations(userId: string): Promise<{
        clerkOrgId: string | null;
        createdAt: Date;
        id: string;
        logoUrl: string | null;
        name: string;
        slug: string;
    }[]>;
    /**
     * Get organization details if user is a member
     */
    static getOrganization(orgId: string, userId: string): Promise<{
        role: "owner" | "admin" | "member" | "viewer";
        accessCode: string | null;
        clerkOrgId: string | null;
        createdAt: Date;
        deletedAt: Date | null;
        id: string;
        logoUrl: string | null;
        name: string;
        slug: string;
        updatedAt: Date;
    } | null>;
    /**
     * Create a new organization
     */
    static createOrganization(userId: string, data: {
        name: string;
        slug: string;
    }): Promise<{
        id: string;
        name: string;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        accessCode: string | null;
        clerkOrgId: string | null;
        logoUrl: string | null;
        slug: string;
    }>;
    /**
     * Update organization
     */
    static updateOrganization(orgId: string, userId: string, data: {
        name?: string;
        logoUrl?: string;
    }): Promise<{
        accessCode: string | null;
        clerkOrgId: string | null;
        createdAt: Date;
        deletedAt: Date | null;
        id: string;
        logoUrl: string | null;
        name: string;
        slug: string;
        updatedAt: Date;
    }>;
    /**
     * Delete organization (soft delete)
     */
    static deleteOrganization(orgId: string, userId: string): Promise<boolean>;
    /**
     * List organization members
     */
    static listMembers(orgId: string): Promise<{
        createdAt: Date;
        id: string;
        role: "owner" | "admin" | "member" | "viewer";
        user: {
            id: string;
            email: string;
            displayName: string | null;
            imageUrl: string | null;
        };
    }[]>;
    /**
     * Invite member
     */
    static inviteMember(orgId: string, inviterId: string, email: string, role: 'admin' | 'member' | 'viewer'): Promise<{
        id: string;
        email: string;
        role: string;
        createdAt: Date;
        expiresAt: Date;
        orgId: string;
        status: "pending" | "accepted" | "expired";
        token: string;
        invitedBy: string | null;
    }>;
    /**
     * Remove member
     */
    static removeMember(orgId: string, memberId: string): Promise<boolean>;
    /**
     * Update member role
     */
    static updateMemberRole(orgId: string, memberId: string, role: 'owner' | 'admin' | 'member' | 'viewer'): Promise<{
        createdAt: Date;
        id: string;
        orgId: string;
        role: "owner" | "admin" | "member" | "viewer";
        updatedAt: Date;
        userId: string;
    }>;
}
//# sourceMappingURL=organizations.d.ts.map
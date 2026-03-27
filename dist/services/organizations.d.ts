import type { OrgRole } from '../lib/roles.js';
export declare class OrganizationService {
    static ensureClerkOrganization(orgId: string, preferredUserId?: string): Promise<string>;
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
        clerkOrgId: string | null;
        role: "admin" | "owner" | "member" | "viewer";
        accessCode: string | null;
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
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        clerkOrgId: string | null;
        slug: string;
        accessCode: string | null;
        logoUrl: string | null;
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
        role: "admin" | "owner" | "member" | "viewer";
        user: {
            displayName: string | null;
            email: string;
            id: string;
            imageUrl: string | null;
        };
    }[]>;
    /**
     * Invite member
     */
    static inviteMember(orgId: string, inviterId: string, email: string, role: 'admin' | 'member' | 'viewer'): Promise<{
        email: string;
        status: "pending" | "expired" | "accepted";
        id: string;
        orgId: string;
        createdAt: Date;
        role: string;
        expiresAt: Date;
        token: string;
        invitedBy: string | null;
    }>;
    static upsertMemberByUserId(orgId: string, actorUserId: string, memberUserId: string, role: OrgRole): Promise<{
        membership: {
            createdAt: Date;
            id: string;
            orgId: string;
            role: "admin" | "owner" | "member" | "viewer";
            updatedAt: Date;
            userId: string;
        };
        user: {
            clerkId: string;
            createdAt: Date;
            displayName: string | null;
            email: string;
            firstName: string | null;
            id: string;
            imageUrl: string | null;
            lastName: string | null;
            role: string;
            updatedAt: Date;
        };
    }>;
    static updateMemberRoleByUserId(orgId: string, actorUserId: string, memberUserId: string, role: OrgRole): Promise<{
        membership: {
            createdAt: Date;
            id: string;
            orgId: string;
            role: "admin" | "owner" | "member" | "viewer";
            updatedAt: Date;
            userId: string;
        };
        user: {
            clerkId: string;
            createdAt: Date;
            displayName: string | null;
            email: string;
            firstName: string | null;
            id: string;
            imageUrl: string | null;
            lastName: string | null;
            role: string;
            updatedAt: Date;
        };
    }>;
    static removeMemberByUserId(orgId: string, memberUserId: string): Promise<boolean>;
    /**
     * Remove member
     */
    static removeMember(orgId: string, memberId: string): Promise<boolean>;
    /**
     * Update member role
     */
    static updateMemberRole(orgId: string, memberId: string, role: OrgRole): Promise<{
        createdAt: Date;
        id: string;
        orgId: string;
        role: "admin" | "owner" | "member" | "viewer";
        updatedAt: Date;
        userId: string;
    } | null>;
}
//# sourceMappingURL=organizations.d.ts.map
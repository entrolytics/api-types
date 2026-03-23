import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';
export declare function createToken(payload: object, secret: string, options?: jwt.SignOptions): string;
export declare function parseToken(token: string | null, secret: string): string | jwt.JwtPayload | null;
/**
 * Sign a JWT token with the default secret
 * @param payload - The payload to sign
 * @param expiresIn - Token expiry (e.g., '1h', '30d')
 */
export declare function sign(payload: object, expiresIn?: SignOptions['expiresIn']): string;
/**
 * Verify a JWT token with the default secret
 * @param token - The token to verify
 * @returns The decoded payload or null if invalid
 */
export declare function verify(token: string): jwt.JwtPayload | null;
//# sourceMappingURL=jwt.d.ts.map
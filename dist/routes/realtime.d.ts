import type { FastifyRequest } from 'fastify';
import { WebSocket } from 'ws';
interface RealtimeEvent {
    type: string;
    data?: Record<string, unknown>;
    timestamp?: number;
}
export declare function handleRealtimeConnection(connection: WebSocket, request: FastifyRequest): void;
/**
 * Publish event to all connected clients for a website
 */
export declare function publishToRealtime(websiteId: string, data: RealtimeEvent): void;
/**
 * Get count of connected clients for a website
 */
export declare function getConnectedClients(websiteId: string): number;
export {};
//# sourceMappingURL=realtime.d.ts.map
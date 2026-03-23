import { EventPayloadSchema } from '@entrolytics/protocol';
import type { EventDBRow } from '@entrolytics/protocol';
import type { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import type { z } from 'zod';
type EventPayload = z.infer<typeof EventPayloadSchema>;
export declare const collectOptions: RouteShorthandOptions;
export declare function collectEvent(request: FastifyRequest, reply: FastifyReply): Promise<never>;
export declare function getBotIgnoreReason(userAgent: string): string | null;
export declare function buildClickhouseEvent(event: EventPayload, userAgent: string, ip: string): EventDBRow;
export {};
//# sourceMappingURL=collect.d.ts.map
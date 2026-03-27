import { zodToJsonSchema } from 'zod-to-json-schema';
type ZodToJsonSchemaInput = Parameters<typeof zodToJsonSchema>[0];
export declare function zodToOpenApiSchema(schema: ZodToJsonSchemaInput, options?: {
    target?: 'openApi3';
}): object & {
    $schema?: string | undefined;
    definitions?: {
        [key: string]: object;
    } | undefined;
};
export declare const commonResponses: {
    400: {
        description: string;
        properties: {
            error: {
                type: string;
            };
        };
        type: string;
    };
    401: {
        description: string;
        properties: {
            error: {
                type: string;
                example: string;
            };
        };
        type: string;
    };
    403: {
        description: string;
        properties: {
            error: {
                type: string;
                example: string;
            };
        };
        type: string;
    };
    404: {
        description: string;
        properties: {
            error: {
                type: string;
                example: string;
            };
        };
        type: string;
    };
    500: {
        description: string;
        properties: {
            error: {
                type: string;
            };
        };
        type: string;
    };
};
export {};
//# sourceMappingURL=zod-to-openapi.d.ts.map
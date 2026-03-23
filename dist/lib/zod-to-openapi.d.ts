import type { ZodTypeAny } from 'zod';
export declare function zodToOpenApiSchema(schema: ZodTypeAny, options?: {
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
//# sourceMappingURL=zod-to-openapi.d.ts.map
export type FormEventType = 'start' | 'field_focus' | 'field_blur' | 'field_error' | 'submit' | 'abandon';
export type FormFieldType = 'text' | 'email' | 'password' | 'tel' | 'number' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'file' | 'hidden' | 'submit' | 'other';
export interface FormEvent {
    formId: string;
    formName: string | null;
    eventType: FormEventType;
    fieldName: string | null;
    fieldType: FormFieldType | null;
    urlPath: string;
    timestamp: Date;
}
export interface FormConversion {
    formId: string;
    formName: string | null;
    starts: number;
    submits: number;
    abandons: number;
    conversionRate: number;
}
export interface FormFieldMetrics {
    formId: string;
    fieldName: string;
    fieldType: FormFieldType;
    focusCount: number;
    blurCount: number;
    errorCount: number;
    avgTimeOnField: number;
}
export interface FormEventInsertRow {
    id: string;
    website_id: string;
    visitor_id: string;
    session_id: string;
    form_id: string;
    form_name: string | null;
    url_path: string;
    event_type: FormEventType;
    field_name: string | null;
    field_type: FormFieldType | null;
    field_index: number | null;
    time_on_field: number | null;
    time_since_start: number | null;
    error_message: string | null;
    success: boolean | null;
    timestamp: string;
}
export declare const FormsService: {
    /**
     * Track a form event
     */
    /**
     * Track a form event (Buffered)
     * Note: This method prepares data for buffering. Actual insertion should be handled by the batch insert method.
     */
    prepareFormEvent(websiteId: string, visitorId: string, sessionId: string, data: {
        formId: string;
        formName?: string;
        urlPath: string;
        eventType: FormEventType;
        fieldName?: string;
        fieldType?: FormFieldType;
        fieldIndex?: number;
        timeOnField?: number;
        timeSinceStart?: number;
        errorMessage?: string;
        success?: boolean;
    }): FormEventInsertRow;
    /**
     * Insert a batch of form events directly to ClickHouse
     */
    insertBatch(events: FormEventInsertRow[]): Promise<void>;
    /**
     * Track a form event (Direct - DEPRECATED)
     * @deprecated Use buffering via prepareFormEvent instead
     */
    trackFormEvent(websiteId: string, visitorId: string, sessionId: string, data: {
        formId: string;
        formName?: string;
        urlPath: string;
        eventType: FormEventType;
        fieldName?: string;
        fieldType?: FormFieldType;
        fieldIndex?: number;
        timeOnField?: number;
        timeSinceStart?: number;
        errorMessage?: string;
        success?: boolean;
    }): Promise<void>;
    /**
     * Get form conversion overview
     */
    getConversions(websiteId: string, startDate: Date, endDate: Date): Promise<FormConversion[]>;
    /**
     * Get field-level metrics for a form
     */
    getFieldMetrics(websiteId: string, formId: string, startDate: Date, endDate: Date): Promise<FormFieldMetrics[]>;
    /**
     * Get funnel analysis for a form (drop-off per field)
     */
    getFormFunnel(websiteId: string, formId: string, startDate: Date, endDate: Date): Promise<Array<{
        fieldName: string;
        fieldIndex: number;
        visitors: number;
        dropOffRate: number;
    }>>;
    /**
     * Get recent form events (for debugging)
     */
    getRecentEvents(websiteId: string, limit?: number): Promise<FormEvent[]>;
};
//# sourceMappingURL=forms.d.ts.map
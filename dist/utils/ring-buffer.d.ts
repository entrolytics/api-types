/**
 * Ring Buffer for high-throughput event ingestion
 * Batches events in memory and flushes them periodically to ClickHouse
 * Based on Prisme's pattern: 50K req/s capability
 */
export interface RingBufferOptions<T> {
    size: number;
    flushInterval: number;
    flushSize: number;
    onFlush: (items: T[]) => Promise<void>;
}
export declare class RingBuffer<T> {
    private buffer;
    private timer?;
    private options;
    private flushing;
    constructor(options: RingBufferOptions<T>);
    /**
     * Add an item to the buffer
     * If buffer reaches flush size, triggers immediate flush
     */
    push(item: T): void;
    /**
     * Start periodic flushing
     */
    start(): void;
    /**
     * Stop periodic flushing
     */
    stop(): void;
    /**
     * Flush all buffered items
     */
    flush(): Promise<void>;
    /**
     * Get current buffer size
     */
    size(): number;
    /**
     * Check if buffer is empty
     */
    isEmpty(): boolean;
}
//# sourceMappingURL=ring-buffer.d.ts.map
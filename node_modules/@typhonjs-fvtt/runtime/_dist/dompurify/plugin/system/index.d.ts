declare class DOMPurify {
    static sanitize(dirty: any): any;
    static sanitizeWithVideo(dirty: any): any;
    static onPluginLoad(ev: any): void;
}

export { DOMPurify };

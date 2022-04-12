import { SvelteComponent } from 'svelte/types/runtime/internal/Component';

declare class TJSDocumentCreate extends SvelteComponent {
    constructor(options: any);
    set documentCls(arg: any);
    get documentCls(): any;
    set data(arg: any);
    get data(): any;
    set parent(arg: any);
    get parent(): any;
    set pack(arg: any);
    get pack(): any;
    set renderSheet(arg: any);
    get renderSheet(): any;
    get requestSubmit(): any;
}
declare class TJSDocumentDelete extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    set context(arg: any);
    get context(): any;
    get deleteDocument(): any;
}
declare class TJSDocumentImport extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    get requestSubmit(): any;
}
declare class TJSFolderCreateUpdate extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    get requestSubmit(): any;
}
declare class TJSFolderDelete extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    get deleteFolder(): any;
}
declare class TJSFolderExport extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    set packName(arg: any);
    get packName(): any;
    set merge(arg: any);
    get merge(): any;
    set keepId(arg: any);
    get keepId(): any;
    get exportData(): any;
}
declare class TJSFolderRemove extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    get removeFolder(): any;
}
declare class TJSFolderRolltable extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    get createTable(): any;
}
declare class TJSPermissionControl extends SvelteComponent {
    constructor(options: any);
    set document(arg: any);
    get document(): any;
    get requestSubmit(): any;
}

export { TJSDocumentCreate, TJSDocumentDelete, TJSDocumentImport, TJSFolderCreateUpdate, TJSFolderDelete, TJSFolderExport, TJSFolderRemove, TJSFolderRolltable, TJSPermissionControl };

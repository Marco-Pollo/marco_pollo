export type ProjectSettings = {
    internalName: string,
    externalName: string,
    loggerGuid: string,
    subproject: string | null,
    textStringPrefix: string,
    textLibName: string,
    strictLogging: boolean,
    walletPluginName?: string
};

export type Package = {
    name: string,
    version: string,
    project: ProjectSettings
    [key: string]: unknown
};

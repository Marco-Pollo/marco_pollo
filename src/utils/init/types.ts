export type ProjectSettings = {
    internalName: string,
    externalName: string,
    strictLogging: boolean,
};

export type Package = {
    name: string,
    version: string,
    project: ProjectSettings
    [key: string]: unknown
};

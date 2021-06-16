declare module 'chayns-components' {
    import React from 'react';

    export const TextString: React.Component & {
        language: string;
        getTextString(stringName: string, language?: string, fallback?: string): string | undefined;
    };
}

declare module 'chayns-components/lib/utils/is' {
    export function isNullOrWhiteSpace(value: unknown): boolean;
}

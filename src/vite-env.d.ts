/// <reference types="vite/client" />
declare module '*.svg' {

    import * as React from 'react';

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;

    const src: any;

    export default src;

}
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  api: {
    getDeviceId: () => Promise<string>;
    downloadPDF: (PathName: string, url: string, filename: string) => Promise<any>;
    downloadVideo: (PathName: string, url: string, filename: string) => Promise<any>;
    downloadImage: (PathName: string, url: string, filename: string) => Promise<any>;
    getWindowSize: () => Promise<{ width: number; height: number }>;
    onWindowResize: (callback: (size: { width: number; height: number }) => void) => void;
  }
}

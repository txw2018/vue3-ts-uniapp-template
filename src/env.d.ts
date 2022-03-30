/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_TITLE: string
  readonly VITE_ENV_CONFIG: string
  readonly VITE_BASE_URL: string
  readonly VITE_CDN: string
  readonly VITE_BASE_API: string
  readonly VITE_WEBSOCKET: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

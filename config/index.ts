const modules = import.meta.globEager("./*.ts");
type Config = {
  title: string;
  ENV_CONFIG: string;
  baseUrl: string; // 测试项目地址
  $cdn: string;
  baseApi: string; // 测试api请求地址
  websocket: string;
};
const currentConfig = modules[`./env.${import.meta.env.VITE_APP_ENV}.ts`]
  .default as Config;

export default currentConfig;

export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_SERVER: string;
    }
  }
}

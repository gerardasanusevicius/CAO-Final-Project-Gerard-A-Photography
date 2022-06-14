export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH_TOKEN_IN_LOCAL_STORAGE?: string;
      REACT_APP_API_SERVER?: string;
      REACT_APP_API_SERVER_NEW?: string;
    }
  }
}

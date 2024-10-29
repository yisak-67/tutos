const checkConfig = (server) => {
    let config = {};
    switch (server) {
      case "production":
        config = {
          // baseUrl: "https://supergearyt.vercel.app/",
          baseUrl: "http://localhost:8000",
        };
        break;
      case "local":
        config = {
          baseUrl: "http://localhost:8000",
        };
        break;
      default:
        break;
    }
    return config;
  };
  
  export const selectServer = "local";
  export const config = checkConfig(selectServer);
  
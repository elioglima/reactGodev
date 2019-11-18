module.exports = {
  app: {
    title: "API GoDev",
    description: "API GoDev 1.0",
    keywords: "mongodb, express, angularjs, node.js, mongoose, passport"
  },
  port: process.env.PORT || 5225,
  Timeout: process.env.REACT_APP_TIMEOUT || 1200000,
  Debug: process.env.REACT_APP_DEBUG || true,
  API: {
    URL: process.env.REACT_APP_API_URL || "http://localhost:5225/api"
  },
  Firebase: {
    apiKey: process.env.REACT_APP_FB_APIKEY || "",
    authDomain: process.env.REACT_APP_FB_AUTBDOMAIN || "",
    databaseURL: process.env.REACT_APP_FB_DATABASEURL || "",
    projectId: process.env.REACT_APP_FB_PROJECTID || "",
    storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET || "",
    messagingSenderId: process.env.REACT_APP_FB_MSSSENDERID || "",
    APPiD: process.env.REACT_APP_FB_APPID || ""
  }
};

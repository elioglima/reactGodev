module.exports = {
  app: {
    title: "API GoDev",
    description: "API GoDev 1.0",
    keywords: "mongodb, express, angularjs, node.js, mongoose, passport"
  },
  port: process.env.PORT || 5225,
  Timeout: process.env.REACT_TIMEOUT || 1200000,
  Debug: process.env.REACT_DEBUG || true,
  API: {
    URL: process.env.REACT_API_URL || "http://localhost:5225/api"
  }
};

module.exports = {
  app: {
    title: "API GoDev",
    description: "API GoDev 1.0",
    keywords: "mongodb, express, angularjs, node.js, mongoose, passport"
  },
  port: process.env.PORT || 5225,
  secretToken: process.env.SECRET_TOKEN || "no token",
  ChaveAcesso: process.env.CHAVE_ACESSO || "",
  Timeout: process.env.TIMEOUT || 1200000,
  URL: process.env.URL || "",
  TEMP_DIAS_PROPOSTAWEB: process.env.TEMP_DIAS_PROPOSTAWEB || 5,
  maxWorkers: process.env.MAX_WORKERS || 1,
  SaveAllLog: process.env.SAVE_ALL_LOG == "true" || false,
  Trace: process.env.TRACE == "true" || false,
  db: {
    uri: process.env.URL_MONGO || "mongodb://localhost:27017/GoDev",
    options: {
      useNewUrlParser: true
    }
  }
};

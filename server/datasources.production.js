module.exports = {
    "db": {
      "name": "db",
      "connector": "mongodb"
    },
    "MongoDB": {
      "url": process.env.MONGODB_URI,
      "name": "MongoDB",
      "connector": "loopback-connector-mongodb"
    }
  }
  
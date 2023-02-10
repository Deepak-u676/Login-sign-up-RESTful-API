
const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET:"mysecretkey",
    DATABASE: "mongodb+srv://saresvh:wwkRxhn0fLFszVwZ@cluster0.corvm7a.mongodb.net/test",
  },
};

exports.get = function get(env) { return config[env] || config.default; };

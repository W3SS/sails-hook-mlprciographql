const graphQL = require("graphql");
const sailsGraphQL = require("sails-graphql");

module.exports = function (sails) {
  return {
    initialize: function (next) {
      sails.after(["hook:orm:loaded", "hook:policies:loaded"], () => {
        return next();
      });
    }
  };
};

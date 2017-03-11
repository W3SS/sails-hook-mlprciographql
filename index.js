const graphQL = require("graphql");
const sailsGraphQL = require("sails-graphql");

module.exports = function (sails) {
  return {
    initialize: function (next) {
      sails.after(["hook:orm:loaded", "hook:policies:loaded"], () => {
        sails.graphql = (req) =>{
          return graphQL.graphql(
              sailsGraphQL.generateSchema(sails.models),
              req.body.query,
              null,
              {
                  request: sails.request,
                  reqData: {
                      headers: {}
                  }
              }
          );
        };
        return next();
      });
    }
  };
};

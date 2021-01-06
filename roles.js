const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("super-admin")
    .ac.grant("user")
    .readOwn("profile")
    .updateOwn("profile");

  ac.grant("admin").readAny("profile");

  ac.grant("super-admin")
    .extend("user")
    .extend("admin")
    .updateAny("profile")
    .deleteAny("profile");

  return ac;
})();

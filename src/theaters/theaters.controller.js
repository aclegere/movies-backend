const asyncErrorBoundry = require("../errors/asyncErrorBoundry");
const theatersService = require("./theaters.service");

async function list(req, res, next) {
  const data = await theatersService.list();
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundry(list),
};

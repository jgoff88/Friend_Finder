

var friendsData = require("../data/friends");





module.exports = function(app) {

  app.get("/api", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });


  app.post("/api/clear", function(req, res) {
    friendsData.length = 0;

    res.json({ ok: true });
  });
};

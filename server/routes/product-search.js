const router = require("express").Router();

const algoliasearch = require("algoliasearch");
const client = algoliasearch("BKE3FM15RG", "011b1ed1b3473f773674b2a15d861389");
const index = client.initIndex("amazonov1");

router.get("/", (req, res, next) => {
  if (req.query.query) {
    index.search(
      {
        query: req.query.query,
        page: req.query.page
      },
      (err, content) => {
        res.json({
          success: true,
          message: "Here is your search",
          status: 200,
          content: content,
          search_result: req.query.query
        });
      }
    );
  }
});

module.exports = router;

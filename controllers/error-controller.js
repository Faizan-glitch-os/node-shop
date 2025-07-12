exports.error = (req, res, next) => {
  res
    .status(404)
    .render("page-not-found", { pageTitle: "Not Found", path: "error" });
};

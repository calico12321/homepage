const { BlogGen } = require("blog-gen");

const CONTENT_ROOT = __dirname;
const DIST_ROOT = __dirname + "/docs";

(async () => {
  const blogGen = await BlogGen.Construct({
    site: { title: "Calico", description: "", author: "", keywords: [] },
    build: {
      contentRoot: CONTENT_ROOT,
      distRoot: DIST_ROOT,
    },
  });

  await blogGen.run();
})();

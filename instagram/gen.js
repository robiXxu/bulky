const { readFile, writeFile } = require("fs/promises");

(async () => {
  const followers = JSON.parse(
    await readFile("files/followers.json", {
      encoding: "utf8",
    })
  );
  const following = JSON.parse(
    await readFile("files/following.json", {
      encoding: "utf8",
    })
  );


  const toRemove = following.filter((f) => !followers.includes(f));

  const template = await readFile("files/template.md", { encoding: "utf8" });

  const toStore = template.replace("%replace%",JSON.stringify(toRemove));

  await writeFile("run.js", toStore, {encoding:"utf8"});
})();

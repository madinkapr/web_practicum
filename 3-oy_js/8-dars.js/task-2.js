import { readFile, writeFile } from "fs/promises";

async function calcNameLen(filename) {
  try {
    const data = await readFile(filename, "utf-8");
    const users = JSON.parse(data);

    let count = {};

    for (let user of users) {
      count[user.name] = (count[user.name] || 0) + 1;
    }

    
    let topName = null;
    let topCount = 0;

    for (let name in count) {
      if (count[name] > topCount) {
        topName = name;
        topCount = count[name];
      }
    }

    const result = { name: topName, count: topCount };

    await writeFile("stats.json", JSON.stringify(result, null, 2));
    console.log("stats.json yozildi:", result);
  } catch (err) {
    console.log("Dang", err.message);
  }
}

calcNameLen("users.json");

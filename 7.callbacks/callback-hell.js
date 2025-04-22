const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }
  const modifyData = data.toUpperCase();
  fs.writeFile("output.txt", modifyData, (err) => {
    if (err) {
      console.error("Erro writing this file", err);
      return;
    }
    console.log("data written to the new file ");
    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading output file", err);
        return;
      }
      console.log(data);
    });
  });
});

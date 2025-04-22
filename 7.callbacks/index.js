const fs = require("fs");

function person(name, callBackFn) {
  console.log(`hello from ${name}`);
  callBackFn();
}
function address() {
  console.log("India");
}

person("Bhaskar", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }
  console.log(data);
});

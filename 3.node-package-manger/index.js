const lodash = require("lodash");

const names = ["bhaskar", "ravi"];
const capitalize = lodash.map(names, lodash.upperCase);
console.log(capitalize);

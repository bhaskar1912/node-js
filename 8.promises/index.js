const { error } = require("console");

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promise starts ");

delayFn(2000).then(() => console.log("after 2sec promise resolved"));
console.log("end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("can not perfom divise by 0 ");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error, "error"));

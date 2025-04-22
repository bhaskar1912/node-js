function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGReet(name) {
  await delayFn(2000);
  console.log(name);
}

delayedGReet("Bhaskar");

async function division(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("can not divide by 0");
    }
    return num1 / num2;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function mainFn() {
  console.log(await division(4, 2));
  console.log(await division(4, 0));
}
mainFn();

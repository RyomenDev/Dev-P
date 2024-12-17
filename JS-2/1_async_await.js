console.log("first line");

const fun1 = async () => {
  console.log("entering async function");
  const data = await fetch(
    `https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3`
  );
  console.log("data", data);

  console.log("exiting async function");
};

fun1();

console.log("last line");

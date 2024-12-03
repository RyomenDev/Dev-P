fun1();
// fun2(); //  Cannot access 'fun2' before initialization
// fun3(); //  Cannot access 'fun2' before initialization
function fun1() {
  console.log("hello1");
}

const fun2 = function () {
  console.log("hello2");
};

const fun3 = () => {
  console.log("hello3");
};


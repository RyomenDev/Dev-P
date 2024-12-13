let response = {
  user: {
    name: "John",
    address: {
      city: "New York",
    },
  },
};

console.log(response.user?.address?.city); // "New York"
console.log(response.user?.contact?.email); // undefined, no error
// console.log(response.user.contact.email); // undefined,error

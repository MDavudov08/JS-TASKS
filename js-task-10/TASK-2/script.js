const user1 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};

const user2 = user1;

user2.name = "John Doe";
user1.username = "john_doe";

console.log("User 1:", user1);
console.log("User 2:", user2);

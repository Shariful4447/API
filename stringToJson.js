
const user={id:23, name:"salman"};

const userJson=JSON.stringify(user);//if we want to convert string into json format
console.log(userJson);

const userFromJson=JSON.parse(userJson);
console.log(userFromJson);

//new example

const userNew={
    id: 23, 
    name:"salman",
    lover:{
        namen : "jarina",
        favoriteFood :"pizza"

    },
    frindsAge:[15, 20, 25],
    friends:["Kamal ", "Jamal", "Tomal"]
};

const userNewJson=JSON.stringify(userNew);//if we want to convert string into json format
console.log(userNewJson);

const userNewFromJson=JSON.parse(userNewJson);
console.log(userNewFromJson);

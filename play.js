let person = {
    name: "John Paul",
    age: 25,
    greet(){
        console.log('Hello person');
    }
}

const normalWay = (user) =>{  //usual method
    console.log(user.name);
}

normalWay(person);

//destructing
const destructing = ({name}) => {
    console.log(name);
}

destructing(person);

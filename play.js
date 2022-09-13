let user = {
    uName: "John",
    age: 25,
    // greet : function(){ //1st method
    //     console.log('Hello, my name is '+this.uName);
    // }
    greet(){
        console.log('Hello, my name is '+this.uName); //2nd method
    }
}

user.greet();
const aboutMe = {
    name: "John",
    age: 25,
    course: "AppDev",
    introduce: function () {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.introduce();
aboutMe.hobby = "Reading";
console.log(aboutMe);

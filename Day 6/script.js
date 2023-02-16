// Problem: 1

// class Movie{
//     constructor(title,studio,rating)
//     {
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating;
//     }
// }
// var movieshow = new Movie("Casino Royale","Eon Productions","PG13");
// console.log(movieshow);

// Problem: 2 (UML diagram)

// class Circle{
//     constructor(radius,color)
//     {
//         this.radius=radius;
//         this.color=color;
//     }
//     //method-userdefined
//     getRadius(){
//         return 2 * Math.PI * this.radius;
//     }
//     //method [get is build-in-method]
//     getArea(){
//         return Math.PI * Math.pow(this.radius, 2);
//     }
//     getColor(){
//         return image.color;
//     }
// }
// var image = new Circle(3.0,"red");
// console.log(image.getRadius());
// console.log(image.getColor());
// console.log(image.getArea());

//Problem: 3 [Write a “person” class to hold all the details]

// class Person{
//     constructor(name,job,email)
//     {
//         this.name = name;
//         this.job = job;
//         this.email = email;
//     }

//     getLocation(){
//         return "Bangalore";
//     }
//     getContact()
//     {
//         return "91XXXXXXXXX";
//     }

     
// }
// var information  = new Person("Praveen","Developer","praveen14dhannan@gmail.com");
// console.log(information);
// console.log(information.name);
// console.log(information.job);
// console.log(information.getLocation());
// console.log(information.getContact());
// console.log(information.email);

// Problem: 4
//write a class to calculate the uber price.

class Uber{
    
    constructor(name,id,location)
    {
        this.name = name;
        this.id = id;
        this.location = location;
    } 
    getPrice(kilometer)
    {
        return kilometer * 8;
      
    }
}
var cab = new Uber("Praveen",1693,"chennai");
console.log(cab.name);
console.log(cab.id);
console.log(cab.location);
console.log(cab.getPrice(20));






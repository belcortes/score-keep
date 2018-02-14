import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {


	// let obj = {
	// 	name:'Bel',
	// 	printName() {
	// 		console.log(`Name: ${this.name}`)
	// 	}
	// }

	// obj.printName()
	// class Person {
	// 	constructor(name = 'Anonymous', age = 0) {
	// 		this.name = name;
	// 		this.age = age;
	// 	}
	// 	getGreeting() {
	// 		return `Hi! I am ${this.name}.`
	// 	}
	// 	getPersonDescription() {
	// 		return `${this.name} is ${this.age} year(s) old.`
	// 	}

	// }
////////////////////////////////////////////////////////
	// class Employee extends Person {
	// 	constructor(name, age, title) {
	// 		super(name, age)
	// 		this.title = title;
	// 	}
	// 	getGreeting(){
	// 		if (this.title) {
	// 			return `Hi! I am ${this.name}. I work as a ${this.title}.`
	// 		} else {
	// 			return super.getGreeting();
	// 		}
			
	// 	}
	// 	hasJob(){
	// 		return !!this.title;
	// 	}
	// }

	// class Programmer extends Person {
	// 	constructor(name, age, preferredLanguage = 'assembly') {
	// 		super(name, age)
	// 		this.preferredLanguage = preferredLanguage;
	// 	}
	// 	getGreeting(){
	// 		return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`
	// 	}
	// }

	// let me = new Employee('Bel', 25, 'db admin');
	// console.log(me.getGreeting())
	// // console.log(me.hasJob())

	// let newEmployee = new Employee('Gleb', 35)
	// // console.log(newEmployee.getPersonDescription())
	// console.log(newEmployee.getGreeting())

	// let programmer = new Programmer('Bel', 27, 'react')
	// console.log(programmer.getGreeting())
	
});

//OBJECT SPREAD OPERATOR - ALLOWS COPY PROPERTIES FROM ONE OBJECT TO ANOTHER OBJECT
// let user =  {
// 	name: 'Bel',
// 	location: 'SF'
// }

// let person = {
// 	...user,
// 	age: '27'
// }

// console.log(person)



//OBJECT PROPERTY SHORTHAND - WAY TO DEFINE OBJ PROPERTIES WHEN YOU HAVE VARIABLE OF THE SAME NAME

// let bike = 'Scott'

// let stuff = {
// 	// bike: bike
// 	bike,
// 	laptop: 'Mac'
// }

// console.log(stuff)

// COMBINING BOTH!!!	
// let house = {
// 	bedrooms: 2,
// 	bathrooms: 1.5
// }

// let yearBuilt = 1838;

// let newObject = {
// 	...house,
// 	bedrooms: 3,
// 	yearBuilt,
// 	flooring: 'Carpet'
// }

// console.log(newObject)



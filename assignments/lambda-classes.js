// CODE here for your Lambda Classes
/*Instructors extension of Person
Students extension of Person 
Project Managers exstention of Instructors

two or three objects for each class and test them according to attributes*/


class Person {
    constructor (attributes){
        this.name= attributes.name, 
        this.age= attributes.age, 
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`
    }
}


class Student extends Person {
    constructor (attributes) {
        super (attributes); 
        this.previousBackground = attributes.previousBackground, 
        this.className = attributes.className, 
        this.favSubjects = attributes.favSubjects 
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`)
    }
    PRAssignment (sbjct){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(sbjct){
        return `${student.name} has begun sprint challenge on ${subject}`
    } 
}


class Instructor extends Person {
    constructor (attributes){
        super (attributes); 
        this.specialty = attributes.specialty, 
        this.favLanguage= attributes.favLanguage, 
        this.catchPhrase= attributes.catchPhrase
    }
        demo (sbjct) {
            return `Today we learned about ${subject}.`
        }

        grade ({student}, sbjct){
            return `${student.name} receives a perfect score on ${subject}`
        }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super (attributes); 
        this.gradClassName = attributes.gradClassName, 
        this.favInstructor = attributes.favInstructor
    }
        stantUp(slkchnl){
            return `${this.name} announces to ${slkchnl}, @channel standy times! `
        }

        debugsCode({student}, subject){
            return `${this.name} debugs ${student.name}'s code on ${subject}`
        }
}
 

const Ash = new Student ({
    name: 'Ashley',
    age: 26, 
    location: 'Utah', 
    previousBackground: 'Automotive', 
    className: 'web25', 
    favSubjects: 'CSS' 
}); 

const Hui = new Student ({
    name: 'Hui', 
    age: 42, 
    location: 'San Francisco', 
    previousBackground: 'Grant Researcher', 
    className: 'web25', 
    favSubjects: 'HTML'
}); 

const Rikei = new Student ({
    name: 'Rikei', 
    age: 21, 
    location: 'New York', 
    previousBackground: 'Artist', 
    className: 'web24', 
    favSubjects: 'JavaScript, HTML, CSS3'
}); 

const BrittH = new Instructor ({
    name: 'Britt Hemming', 
    age: 28, 
    location: 'Windsor', 
    specialty: 'Advanced HTML/CSS/JS', 
    favLanguage: 'CSS3', 
    catchPhrase: 'Polar Vortex, Aye'
}); 

const JoshK = new Instructor ({
    name: 'Josh Knell', 
    age: 57, 
    location: 'Provo', 
    specialty: 'Orientation', 
    favLanguage: 'React', 
    catchPhrase: 'Did I do that?'
}); 

const RyanH = new Instructor ({
    name: 'Ryan Hamblin', 
    age: 38, 
    location: 'Concord', 
    specialty: 'Advanced JavaScript', 
    favLanguage: 'Semantic HTML5', 
    catchPhrase: 'Get in, Loser- we are goin coding'
}); 

const Itel = new ProjectManager ({
    name: 'Itel D', 
    age: 83, 
    location: 'St. Louis', 
    gradClassName: 'web17', 
    favInstructor: 'Britt Hemming' 
}); 

const Marianna = new ProjectManager ({
    name: 'Marianna A', 
    age: 22, 
    location: 'London', 
    gradClassName: 'web4', 
    favInstructor: 'Dan Frehner'
}); 


console.log(Ash); 
console.log(Hui.speak()); 
console.log(Rikei.listsSubjects());
console.log(Britt.demo(ReactJSX));
console.log(JoshK.grade(Ash, AccesibleHTML)); 
console.log(RyanH.catchPhrase); 
console.log(Itel.stantUp(web25_ah)); 
console.log(Marianna.debugsCode(Hui, mediaBreaksAndYou));  


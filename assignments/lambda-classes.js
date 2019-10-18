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




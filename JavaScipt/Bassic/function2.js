const createPeople = name => {
    
    let sex ;

    const people = {
        getName(){
            return name;
        },
        setName(newName){
            name = newName;
        },

        getSex(){
            return sex;
        },

        setSex(newSex){
            if(typeof newSex === "string" && (newSex == "male" || newSex == "female")){
               sex = newSex;
            }
        }
    }

    return people;
}

const people = createPeople('John');
people.setName("Dai");
people.setSex("female");
console.log(people.getName()); // John
console.log(people.getSex() === undefined ? "Hello" : people.getSex() == "male" ? "Nam" : "Nu" ); // undefined

function person(){
    this.age = 0;
    setInterval(() => {
        this.age++;
    },5000,console.log("Hello")); // setInterval don't understand
}

const p = new person();
console.log(p.age); // 0

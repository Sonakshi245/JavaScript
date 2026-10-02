class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static  createId(){
        return `123`
    }

}

const Sonakshi=new User("Sonakshi")
// console.log(Sonakshi.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone =new Teacher("iphone","iphone@gmail.com")
iphone.logMe()
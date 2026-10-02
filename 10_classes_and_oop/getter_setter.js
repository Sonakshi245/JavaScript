class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email=value
  }
  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const sonakshi = new User("sona7@gmail.com", "123");
console.log(sonakshi.password);

const sonakshi1 = new User("sona7@gmail.com", "abc");
console.log(sonakshi1.email);
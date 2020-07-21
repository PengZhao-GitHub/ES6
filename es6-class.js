class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static counteUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username + ' is now registered');
    }
}

let bob = new User('Bob', 'bob@gmail.com', '123');

bob.register();

User.counteUsers();

// Inheritance
//************************************************ */
class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage(){
        console.log(this.username + ' is subscribed to the ' + this.memberPackage);
    }
}

let mike = new Member('Mike', 'mike@gmail.com', '123', 'ES6 training course');

mike.getPackage();
mike.register();
Member.counteUsers();



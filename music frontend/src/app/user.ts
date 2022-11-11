

export class User{
    name: string;
    userName :string;
mobileNumber:string;
email:string;
password : string;
    constructor(
        name: string,
        userName: string, 
        mobileNumber : string,
        email: string,
        password: string
    ){
this.name = name;
this.userName = userName;
this.mobileNumber = mobileNumber;
this.email = email;
this.password = password;

    }
}
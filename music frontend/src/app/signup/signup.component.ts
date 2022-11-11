import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  flag : boolean = false;
user : any
users:any 
 constructor(private router : Router, private service :UserRegistrationService, private http: HttpClient ) {
  
  }
message : any;
  ngOnInit(): void {
   let res= this.http.get("http://localhost:8091/users");
   res.subscribe((data)=>this.users=data);
  
  }
 

public registerNow(pass:string , confirm :string, name: string, email : string, mobile : string,username:string){
  if(name===""){
    alert("Please provide your name")
    window.location.reload();

  }
  else if(email===""){
    alert("Please provide your email")
    window.location.reload();

  }
  else if(username===""){
    alert("Please provide your UserName")
    window.location.reload();

  }
  else if(mobile===""){
    alert("Please provide your mobile number")
    window.location.reload();

  }
  else if(pass===""){
    alert("Please enter your password")
    window.location.reload();

  }
  else if(confirm===""){
    alert("Please enter your confirm password")
    window.location.reload();

  }
 else  if(pass!==confirm){
  alert("Password and Confirm Password Should be same")  
  window.location.reload();

}

  else{

    for(let user of this.users){
     
      if(user.userName===username || user.email===email ){
        this.flag= true;
        alert("Username or Email is already taken.");
        window.location.reload();
        break;
      }
    }



    if(this.flag===false){
  this.user = new User(name,username,mobile,email,pass);
  let resp =this.service.doRegistration(this.user);
resp.subscribe((data)=>this.message=data);

    this.router.navigateByUrl('/login')
    }



  }





}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
flag:boolean = false;
password : string = "";
  users : any;
  constructor(private router : Router,private http : HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8091/users");
    resp.subscribe((data)=>this.users=data);
  
    
  }

  btnLogIn(username:string,password:string):void{

    for(let user of this.users){
      if(user.userName===username ||user.email===username ){
          this.flag = true;
        this.password = user.password;
          break;
    }

  }

    if(this.flag===false){
      alert("Username Is Not Found");
    }
    else{
      if(password===this.password){
        this.router.navigateByUrl('/music');
      }
      else{
        alert("Password is incorrect");
        window.location.reload();
      }
    }


  }
btnSignUp():void{
  this.router.navigateByUrl('/signup')
}
forgot():void{
  this.router.navigateByUrl('/forgot')
}  

}

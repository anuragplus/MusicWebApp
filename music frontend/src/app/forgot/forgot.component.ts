import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserRegistrationService} from '../user-registration.service'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  users : any;
  constructor(private http : HttpClient,private service : UserRegistrationService) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8091/users");
    resp.subscribe((data)=>this.users=data);
  
    
  }
flag:number =0;
  btnUpdate(email : string, password : string):void{
    
    for(let user of this.users){
      if(email===user.email){
        
        user.password = password;
       

        this.service.updateUser(user);
        this.flag=1;
        alert("Updated Successfully");
        window.location.reload();
        break;
      }
    }
    if(this.flag==0){
      alert('Email Is Not Found');
    }
  }
}

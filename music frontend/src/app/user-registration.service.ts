import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
users:any;
  constructor(private http: HttpClient) { }

  public doRegistration(user:any){
    return this.http.post("http://localhost:8090/users",user,{responseType:'object' as 'json'})
  }
  public updateUser(user:any){
    return this.http.put("http://localhost:8090/users",user).subscribe((data)=>this.users=data);
  }

}

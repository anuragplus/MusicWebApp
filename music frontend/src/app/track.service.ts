import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http : HttpClient) { }
  public doRegistration(track:any){
    return this.http.post("http://localhost:8092/tracks",track,{responseType:'object' as 'json'})
  }
}

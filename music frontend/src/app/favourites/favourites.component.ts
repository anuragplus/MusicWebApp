import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
tracks : any;
  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8091/tracks");
    resp.subscribe((data)=>this.tracks=data);
  }
  

  
  
}

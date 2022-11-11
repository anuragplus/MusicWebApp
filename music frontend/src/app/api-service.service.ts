import { Injectable ,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 
  API_KEY_LASTFM = "cef87b75d4922e1757f6936325fe37e6"
  // API_KEY_THEMOVIEDB = "f563c2a6d1476a66ea9a224cbdc54ae4"
 
  constructor(private http: HttpClient) { }

  public searchMusic(artistName: string, queryType: string) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.API_KEY_LASTFM}&format=json`);
  }




}

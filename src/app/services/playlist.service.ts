import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: "root"
})

export class PlayListService {
    subject=new Subject();
    constructor(private http:HttpClient){

    }


    getPlaylist(){
        return this.http.get(environment.baseUrl+'/playlist');
    }
    
    getSubject(){
        return this.subject;
    }
}
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: "root"
})

export class SongsService {

    constructor(private http:HttpClient){

    }


    getSongs(playlistId:any){
        let data={
            id:playlistId
        }
        return this.http.get(environment.baseUrl+'/songs',{params: data});
    }
}
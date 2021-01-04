import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SongsService} from '../../../services/songs.service';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songsList:any[];
  constructor(private apiService:SongsService,private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.songsList=[];

    this.activatedRoute.params.subscribe((result:any)=>{
      debugger;
      this.apiService.getSongs(result.id).subscribe((result:any)=>{
        this.songsList=result[0].Songs;
        console.log(result);
      })
    })
  }

}

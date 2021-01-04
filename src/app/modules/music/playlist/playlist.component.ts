import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlayListService} from '../../../services/playlist.service';
import {SongsService} from '../../../services/songs.service';
import { AudioService } from "../../../services/audio.service";
import {environment} from '../../../../environments/environment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit,OnDestroy {
  playList:any[];
  songs:any[];
  songsIndex:number;
  playlistSize:number;
  subscribtion:Subscription;
  constructor(private apiService:PlayListService,private router:Router,
    private songsService:SongsService,private audioService:AudioService) { 
    this.apiService.getPlaylist().subscribe((result:any)=>{
      debugger;
      this.playList=result;
      console.log(this.playList);
    },(e)=>{
      debugger;
      console.log(e);
    })
  }

  ngOnInit(): void {
    this.subscribtion=this.apiService.getSubject().subscribe((result:any)=>{
     
      if(this.songsIndex<this.playlistSize-1 && result==true){
        this.songsIndex++;
        console.log("work1");
      }
      else if(this.songsIndex>0 && result==false){
        this.songsIndex--;
        console.log("work2");
      }
      else{
        return;
      }
      this.audioService.stop();
      this.playStream(environment.baseUrl+'/'+this.songs[this.songsIndex].url);
    
  })
  }
  ngOnDestroy(){
  this.subscribtion.unsubscribe();
  }


  getSongs(id:number){
    this.router.navigate(['/songs',id])
  }
  play(id:number){
   
    this.songsService.getSongs(id).subscribe((result:any)=>{
    this.songs=result[0].Songs;
    this.playlistSize=result[0].Songs.length;
    this.songsIndex=0;
    this.audioService.stop();
    this.playStream(environment.baseUrl+'/'+this.songs[this.songsIndex].url);
  
})
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe((events:any) => {
      if(events.type=="ended" && this.songsIndex<this.playlistSize-1){
        this.songsIndex++;
        this.audioService.stop();
        this.playStream(environment.baseUrl+'/'+this.songs[this.songsIndex].url);
      }
     
    });
  }

  

}

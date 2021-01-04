import { Component, OnInit } from '@angular/core';
import { AudioService } from "src/app/services/audio.service";

import { StreamState } from "src/app/models/stream-state";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  constructor(public audioService: AudioService) { 
   
    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit(): void {
  }
  
  nextSong(){

  }

 


}

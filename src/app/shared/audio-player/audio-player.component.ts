import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StreamState } from "../../models/stream-state";
import { AudioService } from "../../services/audio.service";
import {PlayListService} from "../../services/playlist.service";
@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  constructor(private audioService: AudioService,private playlistService:PlayListService) {
 

     // listen to stream state
     this.audioService.getState().subscribe(state => {
      this.state = state;
    });
   }

  ngOnInit(): void {
  }


  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }
  next() {
    // const index = this.currentFile.index + 1;
    // const file = this.files[index];
    // this.openFile(file, index);
    this.playlistService.getSubject().next(true);
  }
  previous() {
    // const index = this.currentFile.index - 1;
    // const file = this.files[index];
    // this.openFile(file, index);
    this.playlistService.getSubject().next(false);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      
    });
  }
  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }


}

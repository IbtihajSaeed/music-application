import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongsComponent } from './songs/songs.component';
import { LayoutComponent } from './layout/layout.component';
import {MusicRoutingModule} from './music-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {SharedModule} from '../../shared/shared.module';
@NgModule({
  declarations: [PlaylistComponent, SongsComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    MusicRoutingModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MusicModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {SongsComponent} from './songs/songs.component';
const routes: Routes = [
  { path: "", component: LayoutComponent,
  children:[
    {path:"",component:PlaylistComponent},
    {path:"songs/:id",component:SongsComponent}
  ] 
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }

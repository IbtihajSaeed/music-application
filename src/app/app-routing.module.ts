import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {MusicModule} from '../app/modules/music/music.module';
const routes: Routes = [
  {path:'',loadChildren:() => import('./modules/music/music.module').then(m => m.MusicModule)},
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
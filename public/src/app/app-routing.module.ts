import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//---IMPORT---
import { HttpService } from './http.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UploadFileComponent } from './evaluacion/components/upload-file/upload-file.component';
import { TermicoComponent } from './evaluacion/components/termico/termico.component';
import { LuminicoComponent } from './evaluacion/components/luminico/luminico.component';


const routes: Routes = [
  {path: '', component: UploadFileComponent},
  {path: 'termico', component: TermicoComponent},
  {path: 'luminico', component: LuminicoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

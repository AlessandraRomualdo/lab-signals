import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffectsComponent } from './effects/effects.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' }, 
  { path: 'intro', component: SignalsIntroComponent }, 
  { path: 'elements', component: EffectsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

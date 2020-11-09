import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaDetailsComponent } from '../app/persona-details/persona-details.component';
import { CreatePersonaComponent } from './../app/create-persona/create-persona.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { UpdatePersonaComponent } from '././update-persona/update-persona.component';

const routes: Routes = [
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: PersonaListComponent },
  { path: 'add', component: CreatePersonaComponent },
  { path: 'update/:id', component: UpdatePersonaComponent },
  { path: 'details/:id', component: PersonaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

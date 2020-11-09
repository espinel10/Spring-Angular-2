import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { PersonaDetailsComponent } from './persona-details/persona-details.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePersonaComponent,
    PersonaDetailsComponent,
    PersonaListComponent,
    UpdatePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

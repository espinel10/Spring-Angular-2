import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';



@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personas: Persona[];

  constructor(private personaService: PersonaService,
    private router:Router) { }
    

  ngOnInit(): void {
  this.personaService.getPersonaList()
  .subscribe(data=>{
    this.personas= data;
  });
  }


}

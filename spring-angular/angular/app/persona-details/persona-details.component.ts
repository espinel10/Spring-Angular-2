import { Component, OnInit , Input } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { PersonaListComponent } from '../persona-list/persona-list.component';
import { Router , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-persona-details',
  templateUrl: './persona-details.component.html',
  styleUrls: ['./persona-details.component.css']
})
export class PersonaDetailsComponent implements OnInit {
  id:number;
  persona:Persona;

  constructor(private route: ActivatedRoute,private router: Router,
      private personaService:PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona();

    this.id= this.route.snapshot.params['id'];

    this.personaService.getPersona(this.id)
    .subscribe(data => {
      console.log(data)
      this.persona = data;

    },error => console.log(error));
  }

  list(){
    this.router.navigate(['persona']);
  }

}

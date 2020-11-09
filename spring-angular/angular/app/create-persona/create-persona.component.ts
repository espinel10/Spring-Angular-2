import { Component, OnInit ,NgModule} from '@angular/core';
import { Persona } from '../persona';
import { PersonaService} from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css']
})
export class CreatePersonaComponent implements OnInit {

  persona: Persona = new Persona();
  submitted = false;

  constructor(private personaService: PersonaService,private router:Router) { }

  ngOnInit(): void {
  }

  newPersona():void {
    this.submitted = false;
    this.persona = new Persona();
  }

  save(){
    this.personaService
    .createPersona(this.persona).subscribe(data =>{
      console.log(data)
      this.persona = new Persona();
      this.gotoList();
    },
    error => console.log(error));

  }
  onSubmit(){

    this.submitted = true;
    this.save();
  }


  gotoList(){
    this.router.navigate(['/persona']);
  }


}

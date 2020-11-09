import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {

  id: number;
  persona: Persona;

  constructor(private route: ActivatedRoute,private router: Router,
    private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona();

    this.id=this.route.snapshot.params['id'];
    this.personaService.getPersona(this.id)
    .subscribe(
      data => {
        console.log(data)
        this.persona = data;
      },error => console.error());
  }
  updatePersona(){
    this.personaService.updatePersona(this.id , this.persona)
    .subscribe(
      data => {
        console.log(data)
        this.persona=new Persona();
        this.gotoList();
      },error => console.log(error));
  }

  onSubmit(){
  this.updatePersona();
  }
  gotoList(){
    this.router.navigate(['/persona']);
  }



}

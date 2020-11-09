import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseUrl='http://localhost:4444/ejemplo/persona';
  constructor(private http: HttpClient) { }

  getPersona(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPersona(persona: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,persona);
  }

  updatePersona(id: number,value: any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deletePersona(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text'});
  }
  getPersonaList(){
    return this.http.get<Persona[]>(`${this.baseUrl}`);
  }

}

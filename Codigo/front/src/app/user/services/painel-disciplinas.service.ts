import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PainelDisciplinasService {

  constructor(
    private http: HttpClient,
  ) { }
  url = 'https://teorema-prepara.herokuapp.com/api/v1/';

  getUserId(id: String): Observable<any>{
    return this.http.get(`${this.url}user/${id}`).pipe();
  }
}

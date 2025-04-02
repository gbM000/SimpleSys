import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../model/Livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  read():Observable<Livro[]>{
    return this.http.get<Livro[]>(this.url);
  }

  create(obj:Livro):Observable<Livro>{
    return this.http.post<Livro>(this.url, obj)
  }


  update(obj:Livro):Observable<Livro>{
    return this.http.put<Livro>(this.url, obj)
  }

  remove(cod:number):Observable<void>{
    return this.http.delete<void>(this.url + "/" + cod);
  }

}

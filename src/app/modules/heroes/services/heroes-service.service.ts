import {  HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import{Hero}from '../models';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  constructor() { }

  private http=inject(HttpClient);
  private baseUrl: string=environment.baseUrl;

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`) .pipe(
      catchError( (error)=> of(undefined) )
    );
  }

  getSuggestions(query: string): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit-6`)
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero>{
    if(!hero.id) throw Error ('Hero id is required')
    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError((err)=> of(false)),
      map((resp)=> true)
    );
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from './Serie';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(environment.apiURL);
  }

  getMeanSeasons(series: Serie[]): number {
    let meanSeasons = 0;
    series.forEach(serie => {
      meanSeasons += serie.seasons;
    });
    meanSeasons /= series.length;
    return meanSeasons;
  }
}

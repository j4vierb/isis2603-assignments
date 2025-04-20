import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './Serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public series: Serie[] = [];
  public meanSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  getMeanSeasons(): void {
    this.meanSeasons = this.serieService.getMeanSeasons(this.series);
  }

  ngOnInit() {
    this.getSeries();
    this.getMeanSeasons();
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form (submit)="$event.preventDefault(); filterResults(filter.value);">
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value);">Search</button>
      </form>
    </section>
    <span *ngIf="match" class="match">Doesn't match</span>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  match: boolean = false;

  constructor() {
    this.housingService.getAllHousingLocations().then((housingList: HousingLocation[]) => {
      this.housingLocationList = housingList;
      this.filteredLocationList = housingList;
    });
  }

  filterResults(text: string): void {
    if(!text) this.filteredLocationList = this.housingLocationList;

    let locationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );

    // if doesn't match any location, show all locations
    this.match = locationList.length == 0 ? true : false;

    this.filteredLocationList = locationList.length == 0 ? this.housingLocationList : locationList;
  }
}

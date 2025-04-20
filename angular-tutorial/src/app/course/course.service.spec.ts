/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseService } from './course.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpClientModule } from '@angular/common/http';

describe('Service: Course', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule, HttpClientModule],
     providers: [CourseService]
   });
 });

 it('should ...', inject([CourseService], (service: CourseService) => {
   expect(service).toBeTruthy();
 }));
});

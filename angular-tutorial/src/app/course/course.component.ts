import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  constructor(private courseService: CourseService  ) { }

  ngOnInit() {
    this.getCourses();
  }
}

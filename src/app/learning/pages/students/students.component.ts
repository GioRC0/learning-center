import { Component } from '@angular/core';
import {StudentsService} from "../../services/students.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {mapOneOrManyArgs} from "rxjs/internal/util/mapOneOrManyArgs";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  constructor(private studentService: StudentsService) {
    this.studentService.getAll().subscribe((response:any) => {
      console.log(response);
    });
  }
}

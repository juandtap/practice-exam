import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  
  
})
export class AddComponent {
  student: Student = new Student
  constructor(private studentService: StudentService, private router : Router){}

  save(){
    this.studentService.create(this.student)
    this.student = new Student
    this.router.navigate([''])
  }
}

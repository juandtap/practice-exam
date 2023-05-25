import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  student_list: Student[] = []
  constructor(private studentService: StudentService){
    this.student_list = studentService.getList()
  }
}

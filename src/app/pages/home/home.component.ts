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
  // estos nombres deben coincidir con los de matColumnDef en el html
  columnNames = ['Codigo','Nombre','Apellido','Email','Carrera', 'Genero']
  constructor(private studentService: StudentService){
    this.student_list = this.studentService.getList()
    console.log('lista recuperada')
    console.log(this.student_list)
  }
}

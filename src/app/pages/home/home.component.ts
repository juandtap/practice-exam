import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
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
  columnNames = ['Codigo','Nombre','Apellido','Email','Carrera', 'Genero', 'Opciones']
  // se crea esta variable ya que Mat-Table no actualiza los datos automaticamente
  @ViewChild(MatTable) table?:MatTable<Student> ;

  constructor(private studentService: StudentService, private router : Router){
    this.student_list = this.studentService.getList()
    console.log('lista recuperada')
    console.log(this.student_list)
  }

 

  delete(student : Student){
    this.studentService.delete(student)
    this.table?.renderRows()
  }

  
}

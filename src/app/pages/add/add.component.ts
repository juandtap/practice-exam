import { Component } from '@angular/core';
import {  Router, ActivatedRoute, Route } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  
  
})
export class AddComponent {
  
  isEditing? : string
  student: Student = new Student
  constructor(private studentService: StudentService, private router : Router, private routerIn: ActivatedRoute){}

  ngOnInit(){
    this.routerIn.queryParams.subscribe(params =>{
      this.isEditing = params['flag']
      
      
      if (this.isEditing === 'edit'){
       // este codigo carga los datos en formulario
        
        this.student =  JSON.parse(params['studentToEdit']) ?  JSON.parse(params['studentToEdit']) : new Student
        console.log('estudiante para editar')
        console.log(this.student)
      }

      
    })

    if(this.isEditing === 'edit'){
      console.log('edition mode')
      
    } else{
      console.log('create mode')
    }
  }

  

  save(){
    if (this.isEditing === 'create'){
      
      console.log('flag en '+this.isEditing + ' se crea nuevo estudiante')
      this.studentService.create(this.student)
      this.student = new Student
      this.router.navigate([''])
    } else {
      
      console.log('flag en '+this.isEditing + ' se edita estudiante')
      this.studentService.update(this.student)
      this.student = new Student
      this.router.navigate([''])
    }
    
  }
}

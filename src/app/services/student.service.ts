import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  student_list : Student[] = []

  getList(){
    return this.student_list
  }

  create(student : Student){
    if(student.id !== null){
      this.student_list.push(student)
    }
    
  }

  

}

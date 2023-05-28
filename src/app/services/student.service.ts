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
    if(student.id !== null && !this.student_list.some(element => element.id === student.id)){
      this.student_list.push(student)
    } else{
      console.log("valor del codigo nulo o repetido")
    }
    
  }

  delete(student: Student){
    let index = 0
    for (let s of this.student_list){
      if (s.id === student.id){
        this.student_list.splice(index,1)
      }
      index++
    }
  }

  

}

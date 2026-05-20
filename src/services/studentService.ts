import Student, { StudentCreationAttributes } from "../model/student.js";

export function addStudent(student:StudentCreationAttributes){
    return Student.create(student)
}

export function deleteStudent(id:number){
    return Student.destroy({where:{id}})
}

export function updateStudent(id:number,student:StudentCreationAttributes){
    return Student.update(student,{where:{id}})
}
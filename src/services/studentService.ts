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

//分页查询学生
export async function getStudents(page:number = 1,pageSize:number = 10){
    const res = await Student.findAll({
        offset:(page-1)*pageSize,
        limit:pageSize
    })
    const count = await Student.count({})
    if(res){
        return {
            total:count,
            list:JSON.parse(JSON.stringify(res)) 
        }
    }
    return null
}

export async function getStudents2(page:number = 1,pageSize:number = 10){
    const res = await Student.findAndCountAll({
        offset:(page-1)*pageSize,
        limit:pageSize  
    })
    if(res){
        return JSON.parse(JSON.stringify(res))
    }
    return null
}
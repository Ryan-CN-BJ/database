import Mock from 'mockjs'
import Student from "../model/student.js";

export default function mockStudent(){
    const students = Mock.mock({
        'datas|16':[
            {
                name:'@cname()',
                birthday:'@date("yyyy-MM-dd")',
                classId:'@integer(1,16)',
                mobile:/\x31[3-9]\d{9}/,
                sex:'@integer(0,1)',
            }
        ]
    }).datas
    Student.bulkCreate(students)
}

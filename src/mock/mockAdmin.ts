import Mock from 'mockjs'
import Admin from "../model/admin.js";

export default function mockAdmin(){
    const admins = Mock.mock({
        'datas|16':[
            {
                loginId:'@email()',
                loginPassword:'@string(10, 16)',
                name:'@cname()',
            }
        ]
    }).datas
    Admin.bulkCreate(admins)
}
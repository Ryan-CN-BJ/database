import Mock from 'mockjs'

import Class from "../model/class.js";



export default async function mockClass(){
    const classes = Mock.mock({
        'datas|16':[
            {
                'id|+1':1,
                name:'前端第 @id 期',
                openDate:'@date("yyyy-MM-dd")',
            }
        ]
    }).datas
    await Class.bulkCreate(classes)
}
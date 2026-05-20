import './admin.js'
import './class.js'
import './student.js'
import './book.js'
import sequelize from './db.js'
import mockClass from '../mock/mockClass.js'
import mockStudent from '../mock/mockStudent.js'
import mockBook from '../mock/mockBook.js'
import mockAdmin from '../mock/mockAdmin.js'

export default async function initDB(){
    await sequelize.sync({force:true})
    await mockClass()
    await mockStudent()
    await mockBook()
    await mockAdmin()
}

import sequelize from "./model/sync.js"
import { addAdmin,deleteAdmin } from "./services/adminService.js";


async function main(){
    await sequelize.sync({force:true})
    await addAdmin({
        loginId: 'admin',
        loginPassword: '123456',
        name: '管理员'
    })
    await addAdmin({
        loginId: 'admin2',
        loginPassword: '123456',
        name: '管理员2'
    })
    await deleteAdmin(2)
}

main()

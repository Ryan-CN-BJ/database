import initDB from "./model/sync.js"
import { addAdmin,deleteAdmin } from "./services/adminService.js";



async function main(){
    await initDB()
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

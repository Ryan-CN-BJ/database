import initDB from "./model/sync.js"
import { login } from "./services/adminService.js"

async function main(){
    await initDB()
    const res = await login('t.snln@xltefxw.tr','9554567186')
    console.log(res?.toJSON())
}

main()

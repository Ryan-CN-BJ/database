import initDB from "./model/sync.js"
import { addAdmin,login } from "./services/adminService.js"
import md5 from 'md5'
import moment from 'moment'

async function main(){
    await initDB()
    // await addAdmin({
    //     loginId:'t.snln@xltefxw.tr',
    //     loginPassword:'123123',
    //     name:'MRJ',
    // })
    const res = await login('t.snln@xltefxw.tr','123123')
    const curTime = moment.utc(res?.updatedAt).local().format('YYYY-MM-DD HH:mm:ss')
    console.log(curTime,'curTime')
    const m = md5('1232131313')
    console.log(m)
    // const curBJTime = moment().format('YYYY-MM-DD HH:mm:ss')
    // const curUKTime = moment.utc().format('YYYY-MM-DD HH:mm:ss')
    // console.log(curBJTime,'curBJTime')
    // console.log(curUKTime,'curUKTime')
    
}

main()

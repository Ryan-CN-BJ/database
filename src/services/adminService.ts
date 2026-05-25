import Admin, { AdminCreationAttributes,AdminDTO } from "../model/admin.js";
import md5 from 'md5'

 export function addAdmin(admin:AdminCreationAttributes){
   admin.loginPassword = md5(admin.loginPassword)
    return Admin.create(admin)
 }

 export function deleteAdmin(id:number){
    return Admin.destroy({where:{id}})
 }

 export async function updateAdmin(id:number,admin:AdminCreationAttributes){
   admin.loginPassword = md5(admin.loginPassword)
    return Admin.update(admin,{where:{id}})
 }

 export async function login(loginId:string,loginPassword:string):Promise<AdminDTO | null>{
   const res = await Admin.findOne({
      attributes:['id','loginId'],
      raw:true,
      where:{
         loginId,
         loginPassword:md5(loginPassword)
      }
   })
   return res
 }

 export async function getAdminById(id:number){
    const res = await Admin.findByPk(id)
    if(res){
      return res.toJSON()
    }
    return null
 }

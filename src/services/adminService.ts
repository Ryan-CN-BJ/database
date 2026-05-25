import Admin, { AdminCreationAttributes } from "../model/admin.js";

 export function addAdmin(admin:AdminCreationAttributes){
    return Admin.create(admin)
 }

 export function deleteAdmin(id:number){
    return Admin.destroy({where:{id}})
 }

 export function updateAdmin(id:number,admin:AdminCreationAttributes){
    return Admin.update(admin,{where:{id}})
 }

 export async function login(loginId:string,loginPassword:string){
   const res = await Admin.findOne({
      where:{
         loginId,
         loginPassword
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

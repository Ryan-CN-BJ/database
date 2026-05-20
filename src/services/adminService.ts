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
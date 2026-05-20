import Class, { ClassCreationAttributes } from "../model/class.js";

export function addClass(cls:ClassCreationAttributes){
    return Class.create(cls)
}

export function deleteClass(id:number){
    return Class.destroy({where:{id}})
}

export function updateClass(id:number,cls:ClassCreationAttributes){
    return Class.update(cls,{where:{id}})
}
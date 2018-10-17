/**
 *  category.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:36
 */
import {CategoryModel} from "../../../model/CategoryModel"


export const getCategory = async (parent, args) => {
  return await (new CategoryModel()).getCategoryById(args.id)
}

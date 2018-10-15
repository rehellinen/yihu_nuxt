import {SellerModel} from "../../model/SellerModel"

/**
 *  category.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:36
 */
export const categoryScheme = `
  type Category {
    id: ID,
    name: String,
    theme: Theme,
    image: Image,
    listorder: Int,
    status: Int
  }
`

export const getCategory = async (parent, args) => {
  return await (new SellerModel()).getSellerByInfo(args)
}

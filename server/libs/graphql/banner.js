import {SellerModel} from "../../model/SellerModel"
import {BannerModel} from "../../model/BannerModel"

/**
 *  banner.js
 *  Create By rehellinen
 *  Create On 2018/10/14 15:42
 */
export const bannerScheme = `
  type Banner {
    id: ID,
    image_id: Int,
    listorder: Int,
    name: String
  }
`

export const getBanner = async (parent, args) => {
  return await (new BannerModel()).getAll()
}

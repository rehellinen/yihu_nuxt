import {SellerModel} from "../../model/SellerModel"

/**
 *  user.js
 *  Create By rehellinen
 *  Create On 2018/10/13 20:05
 */

export const sellerScheme = `
  type Seller {
    name: String,
    number: String
  }
`

export const sellerData = async () => {
  return await (new SellerModel()).getSellerByInfo({
    number: 2016052462,
    telephone: 13229438008
  })
}

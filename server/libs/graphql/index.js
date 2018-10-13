/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, sellerData} from "./seller"
import {SellerModel} from "../../model/SellerModel"

export const resolvers = {
  Query: {
    async seller () {
      return sellerData()
    }
  }
}

export const schema = `
  type Query {
    seller: Seller
  }
  ${sellerScheme}
  `

/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, sellerData} from "./seller"
import {SellerModel} from "../../model/SellerModel"

export const resolvers = {
  Query: {
    async seller (parent, args, context, info) {
      return sellerData(parent, args, context, info)
    }
  }
}

export const schema = `
  type Query {
    seller(number: Int, telephone: Float): Seller,
  }
  ${sellerScheme}
  `

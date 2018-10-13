/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, sellerData} from "./seller"

export const resolvers = {
  Query: {
    async seller (parent, args) {
      return sellerData(parent, args)
    }
  }
}

export const schema = `
  type Query {
    seller(number: Int, telephone: Float): Seller,
  }
  ${sellerScheme}
  `

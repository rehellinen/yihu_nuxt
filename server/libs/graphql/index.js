/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, getSeller} from "./seller"
import {bannerScheme, getBanner} from "./banner"

export const resolvers = {
  Query: {
    async seller (parent, args) {
      return getSeller(parent, args)
    },
    async banner (parent, args) {
      return getBanner(parent, args)
    }
  }
}

export const schema = `
  type Query {
    seller(number: Int, telephone: Float): Seller,
    banner: [Banner]
  }
  ${sellerScheme},
  ${bannerScheme}
  `

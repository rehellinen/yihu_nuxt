/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, getSeller} from "./seller"
import {bannerScheme, getBanner} from "./banner"
import {imageScheme} from "./image"

export const resolvers = {
  Query: {
    async seller (parent, args, context, info) {
      return getSeller(parent, args)
    },
    async banner () {
      return getBanner()
    }
  }
}

export const schema = `
  type Query {
    seller(number: Int, telephone: Float): Seller,
    banner: [Banner]
  }
  ${sellerScheme},
  ${bannerScheme},
  ${imageScheme}
  `

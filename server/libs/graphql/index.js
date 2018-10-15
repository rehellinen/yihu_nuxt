/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, getSeller} from "./seller"
import {bannerScheme, getBanner} from "./banner"
import {imageScheme} from "./image"
import {goodsScheme, getGoods} from "./goods"
import {shopScheme, getShop} from "./shop"
import {categoryScheme, getCategory} from "./category"
import {themeScheme, getTheme} from "./theme"

export const resolvers = {
  Query: {
    async seller (parent, args, context, info) {
      return getSeller(parent, args)
    },
    async banner () {
      return getBanner()
    },
    async goods (parent, args) {
      return getGoods(parent, args)
    }
  }
}

export const schema = `
  type Query {
    seller(number: Int, telephone: Float): Seller,
    banner: [Banner],
    goods: Goods
  }
  ${sellerScheme},
  ${bannerScheme},
  ${imageScheme},
  ${goodsScheme},
  ${shopScheme},
  ${categoryScheme},
  ${themeScheme}
  `

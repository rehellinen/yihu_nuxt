/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme, getSeller} from "./seller"
import {bannerScheme, getBanner} from "./banner"
import {imageScheme} from "./image"
import {goodsScheme, getGoods, getOneGoods} from "./goods"
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
    async oneGoods (parent, args) {
      return getOneGoods(parent, args)
    },
    async goods (parent, args) {
      return getGoods(parent, args)
    }
  }
}

export const schema = `
  type Query {
    banner: [Banner],
    goods(type: Int): [Goods],
    oneGoods(id: Int, type: Int): Goods,
    seller(number: Int, telephone: Float): Seller
  }
  ${sellerScheme},
  ${bannerScheme},
  ${imageScheme},
  ${goodsScheme},
  ${shopScheme},
  ${categoryScheme},
  ${themeScheme}
  `

/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme} from "./scheme/seller"
import {bannerScheme} from "./scheme/banner"
import {imageScheme} from "./scheme/image"
import {goodsScheme, indexGoodsScheme, oneGoodsScheme} from "./scheme/goods"
import {shopScheme} from "./scheme/shop"
import {categoryScheme} from "./scheme/category"
import {themeScheme} from "./scheme/theme"

import {getBanner} from "./service/banner"
import {getSeller} from "./service/seller"

import {goodsResolver} from "./resolver/goods"

const query = {
  Query: {
    async seller (parent, args, context, info) {
      return getSeller(parent, args)
    },
    async banner () {
      return getBanner()
    },
    async goods () {
      return {}
    }
  }
}

export const resolvers = Object.assign(query, goodsResolver)

export const schema = `
  type Query {
    banner: [Banner],
    goods: Goods,
    seller(number: Int, telephone: Float): Seller
  },
  ${sellerScheme},
  ${bannerScheme},
  ${imageScheme},
  ${goodsScheme},
  ${oneGoodsScheme},
  ${indexGoodsScheme},
  ${shopScheme},
  ${categoryScheme},
  ${themeScheme}
`

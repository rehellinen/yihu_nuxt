/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {sellerScheme} from "./scheme/seller"
import {bannerScheme} from "./scheme/banner"
import {imageScheme} from "./scheme/image"
import {goodsScheme, IndexGoodsScheme, OneGoodsScheme} from "./scheme/goods"
import {shopScheme, oneShopScheme} from "./scheme/shop"
import {categoryScheme} from "./scheme/category"
import {themeScheme} from "./scheme/theme"

import {getBanner} from "./service/banner"
import {getSeller} from "./service/seller"
import {getTheme} from "./service/theme"

import {goodsResolver} from "./resolver/goods"
import {getCategory} from "./service/category"

const indexScheme = `
  type Query {
    banner: [Banner],
    theme: [Theme],
    goods: Goods,  
    category(id: Int): [Category],
    seller(number: Int, telephone: Float): Seller,
    shop: Shop    
  }
`
// 四个参数：parent, args, context, info
const query = {
  Query: {
    seller: async (parent, args) => getSeller(parent, args),
    banner: async () => getBanner(),
    goods: async () => {},
    theme: async () => getTheme(),
    category: async (parent, args) => getCategory(parent, args),
    shop: async () => {}
  }
}

export const resolvers = Object.assign(query, goodsResolver)

export const schema = `
  ${indexScheme},
  ${sellerScheme},
  ${bannerScheme},
  ${imageScheme},
  ${goodsScheme},
  ${OneGoodsScheme},
  ${IndexGoodsScheme},
  ${shopScheme},
  ${oneShopScheme},
  ${categoryScheme},
  ${themeScheme}
`

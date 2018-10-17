/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {oneSellerScheme, sellerScheme} from "./scheme/seller"
import {bannerScheme} from "./scheme/banner"
import {imageScheme} from "./scheme/image"
import {goodsScheme, IndexGoodsScheme, OneGoodsScheme} from "./scheme/goods"
import {shopScheme, oneShopScheme} from "./scheme/shop"
import {categoryScheme} from "./scheme/category"
import {themeScheme} from "./scheme/theme"

import {getBanner} from "./service/banner"
import {getTheme} from "./service/theme"
import {getCategory} from "./service/category"

import {goodsResolver} from "./resolver/goods"
import {shopResolver} from "./resolver/shop"
import {sellerResolver} from "./resolver/seller"

const indexScheme = `
  type Query {
    banner: [Banner],
    theme: [Theme],
    goods: Goods,  
    category(id: Int): [Category],
    seller: Seller,
    shop: Shop    
  }
`
// 四个参数：parent, args, context, info
const query = {
  Query: {
    seller: async () => ({}),
    shop: async () => ({}),
    goods: async () => ({}),
    banner: async () => getBanner(),
    theme: async () => getTheme(),
    category: async (parent, args) => getCategory(parent, args),

  }
}

export const resolvers = Object.assign(
  query,
  goodsResolver,
  shopResolver,
  sellerResolver
)

export const schema = `
  ${indexScheme},
  ${sellerScheme},
  ${oneSellerScheme},
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

/**
 *  index.js
 *  Create By rehellinen
 *  Create On 2018/10/13 19:09
 */
import {oneSellerScheme, sellerScheme, sellerHideScheme} from "./scheme/seller"
import {bannerScheme} from "./scheme/banner"
import {imageScheme} from "./scheme/image"
import {goodsScheme, IndexGoodsScheme, OneGoodsScheme} from "./scheme/goods"
import {shopScheme, oneShopScheme, shopHideScheme} from "./scheme/shop"
import {categoryScheme} from "./scheme/category"
import {themeScheme} from "./scheme/theme"
import {buyerScheme} from './scheme/buyer'
import {orderScheme, oneOrderScheme} from "./scheme/order"

import {getBanner} from "./service/banner"
import {getTheme} from "./service/theme"
import {getCategory} from "./service/category"
import {getBuyer} from "./service/buyer"

import {goodsResolver} from "./resolver/goods"
import {shopResolver, oneShopResolver} from "./resolver/shop"
import {sellerResolver, oneSellerResolver} from "./resolver/seller"
import {orderResolver} from "./resolver/order"

const indexScheme = `
  type Query {
    banner: [Banner]
    theme: [Theme]
    buyer: Buyer
    seller: Seller
    shop: Shop  
    goods: Goods,
    order: Order,
    category(id: Int): [Category]      
  }
`
// 四个参数：parent, args, context, info
const query = {
  Query: {
    seller: async () => ({}),
    shop: async () => ({}),
    goods: async () => ({}),
    order: async () => ({}),
    banner: async () => getBanner(),
    buyer: async (parent, args, context) => getBuyer(parent, args, context),
    theme: async () => getTheme(),
    category: async (parent, args) => getCategory(parent, args)
  }
}

export const resolvers = Object.assign(
  query,
  goodsResolver,
  shopResolver,
  oneShopResolver,
  sellerResolver,
  oneSellerResolver,
  orderResolver
)

export const schema = `
  ${indexScheme}
  ${sellerScheme}
  ${oneSellerScheme}
  ${sellerHideScheme}
  ${bannerScheme}
  ${imageScheme}
  ${goodsScheme}
  ${OneGoodsScheme}
  ${IndexGoodsScheme}
  ${shopScheme}
  ${oneShopScheme}
  ${shopHideScheme}
  ${categoryScheme}
  ${themeScheme}
  ${buyerScheme},
  ${orderScheme},
  ${oneOrderScheme}
`

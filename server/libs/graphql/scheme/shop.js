/**
 *  shop.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:33
 */
export const shopScheme = `
  type Shop {
    normal: [OneShop],
    one(id: Int): OneShop
  }  
`

export const oneShopScheme = `
  type OneShop {
    id: ID,
    name: String,
    telephone: Float,
    email: String,
    weixin: String
    zhifubao: String,
    major: String,
    top_image: Image,
    avatar_image: Image,
    listorder: Int,
    status: Int,
    hide: ShopHide
  }
`
export const shopHideScheme = `
  type ShopHide {
    number: Int,
    dormitory: Int,
    openID: String
  }
`

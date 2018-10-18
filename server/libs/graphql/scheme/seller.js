/**
 *  user.js
 *  Create By rehellinen
 *  Create On 2018/10/13 20:05
 */

export const sellerScheme = `
  type Seller {
    normal: [OneSeller],
    one(id: Int): OneSeller
  }  
`

export const oneSellerScheme = `
  type OneSeller {
    id: ID,
    name: String,
    telephone: Float,
    email: String,
    weixin: String
    zhifubao: String,
    listorder: Int,
    status: Int,
    hide: SellerHide
  }
`

export const sellerHideScheme = `
  type SellerHide {
    number: Int,
    dormitory: Int,
    openID: String
  }
`

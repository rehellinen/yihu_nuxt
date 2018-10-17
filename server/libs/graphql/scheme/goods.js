/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
export const goodsScheme = `
  type Goods {
    index: indexGoods,
    category(id: Int): [oneGoods],
    seller(id: Int): [oneGoods],
    shop(id: Int): [oneGoods],
    one(id: Int, type: Int): oneGoods,
    recent(id: Int): [oneGoods],
    type(type: Int): [oneGoods]
  }
`

export const indexGoodsScheme = `
  type indexGoods {
    newGoods: [oneGoods],
    oldGoods: [oneGoods]
  }
`

export const oneGoodsScheme = `
  type oneGoods {
    id: ID,
    name: String,
    price: Float,
    quantity: Int,
    description: String,
    status: Int,
    subtitle: String,
    type: Int,
    listorder: Int,
    seller: Seller,
    shop: Shop,
    image: Image,
    category: Category  
  }
`

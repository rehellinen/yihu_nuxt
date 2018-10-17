/**
 *  goods.js
 *  Create By rehellinen
 *  Create On 2018/10/15 19:28
 */
export const goodsScheme = `
  type Goods {
    index: IndexGoods,
    category(id: Int): [OneGoods],
    seller(id: Int): [OneGoods],
    shop(id: Int): [OneGoods],
    one(id: Int, type: Int): OneGoods,
    recent(id: Int): [OneGoods],
    type(type: Int): [OneGoods]
  }
`

export const IndexGoodsScheme = `
  type IndexGoods {
    newGoods: [OneGoods],
    oldGoods: [OneGoods]
  }
`

export const OneGoodsScheme = `
  type OneGoods {
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

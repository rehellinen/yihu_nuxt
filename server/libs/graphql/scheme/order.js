/**
 *  order.js
 *  Create By rehellinen
 *  Create On 2018/10/18 18:39
 */
export const orderScheme = `
  type Order {
    deleted: [OneOrder],
    unpaid: [OneOrder],
    paid: [OneOrder],
    delivered: [OneOrder],
    paidButNoGoods: [OneOrder],
    withdrawing: [OneOrder],
    withdrawn: [OneOrder]
  }
`

export const oneOrderScheme = `
  type OneOrder {
    id: ID,
    order_no: String,
    create_time: Int,
    total_price: Float,
    snap_name: String,
    snap_img: String,
    status: Int,
    total_count: Int,
    type: Int,
    listorder: Int,
    seller: OneSeller,
    buyer: Buyer,
    shop: OneShop,
    image: Image
  }
`

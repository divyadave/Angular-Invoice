export interface Iinvoice {
    companyName: string,
    phoneNum: string,
    productName: string[],
    quantity: number[],
    price: number[],
    subtotal: number,
    taxRate: number,
    grandTotal: number

}
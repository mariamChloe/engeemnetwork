import {IProduct} from "./IMarketplace";

export  interface ICustomerRequest{
  Firstname: string,
  Lastname: string,
  Email: string,
  Company: string|null,
  Country: string,
  City: string|null,
  Indicatif: string|null,
  Telephone: string|null,
  Cart: IProduct[]
}

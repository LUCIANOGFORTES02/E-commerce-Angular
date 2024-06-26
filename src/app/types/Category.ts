import { Product } from "./Product"

export type Category={
    id:string,
    name:string,
    slug:string,
    imageUrl:string
    products:Product[]
}
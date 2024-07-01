export interface ProductResult {
    [key : string] : Record<string , any>[];
}

export interface ProductIntialVal {
    productList : ProductResult,
    currProductSearch : string
}

export interface Product {
    
       [key : string] : any;
}

export interface Cart {
    [key : string]: number;
}

export interface ProductCart {
    productCart : Cart[]
}


export interface CompareProductReducer {
    asin : string[];
}

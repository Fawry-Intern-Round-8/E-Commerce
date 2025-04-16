export interface StoreDTO {
    id: number;
    name: string;
    address: string;
}

export interface StoreRequestDTO {
    name: string;
    address: string;
    longitude: number;
    latitude: number;
}

export interface StoreResponseDTO {
    id: number;
    name: string;
    address: string;
    longitude: number;
    latitude: number;
}

export interface StockDTO {
    id: number;
    storeId: number;
    productId: number;
    quantity: number;
    price: number;
}

export interface StockRequestDTO {
    storeId: number;
    productId: number;
    quantity: number;
}

export interface StockResponseDTO {
    id: number;
    storeId: number;
    productId: number;
    quantity: number;
}

export interface StockConsumeRequestDTO {
    productId: number;
    quantity: number;
    customerEmail: string;
    longitude: number;
    latitude: number;
}

export interface StockConsumeResponseDTO {
    id: number;
    name: string;
    address: string;
    distance: number;
    quantity: number;
}
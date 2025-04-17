import { StoreDTO } from './store-models';

export enum TransactionType {
    ADD = 'ADD',
    CONSUME = 'CONSUME'
}

export interface StockTransaction {
    transactionId: number;
    storeId: number;
    productId: number;
    oldQuantity: number;
    newQuantity: number;
    transactionType: TransactionType;
    createdAt: string;
    consumerEmail?: string;
}

export interface TransactionRequestDTO {
    storeId: number;
    productId: number;
    quantity: number;
    transactionType: TransactionType;
    consumerEmail?: string;
}

export interface TransactionResponseDTO {
    transactionId: number;
    storeId: number;
    productId: number;
    oldQuantity: number;
    newQuantity: number;
    transactionType: TransactionType;
    createdAt: string;
    consumerEmail?: string;
}

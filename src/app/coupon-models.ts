export enum DiscountType {
    PERCENTAGE = 'PERCENTAGE',
    FIXED = 'FIXED'
}

export interface CouponRequestDTO {
    code: string;
    discountType: DiscountType;
    value: number;
    maxUsages: number;
    expiryDate: string;
    isActive: boolean;
}

export interface Coupon {
    id: number;
    code: string;
    discountType: DiscountType;
    value: number;
    maxUsages: number;
    currentUsages: number;
    expiryDate: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

export interface CouponValidationResponse {
    valid: boolean;
    value?: number;
    discountType?: DiscountType;
}
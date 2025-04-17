export class Coupon {
    id!: number;
    code!: string;
    discountType!: string;
    value!: number;
    maxUsages!: number;
    currentUsages!: number;
    expiryDate!: Date;
    createdAt!: Date;
    updatedAt!: Date;
    isActive!: boolean;
}

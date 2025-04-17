import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponService } from '../coupon.service';
import { Coupon, CouponRequestDTO, DiscountType } from '../coupon-models';

@Component({
  selector: 'app-coupon-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coupon-update.component.html',
  styleUrl: './coupon-update.component.css'
})
export class CouponUpdateComponent implements OnInit {
  coupon: CouponRequestDTO = {
    code: '',
    discountType: DiscountType.FIXED,
    value: 0,
    maxUsages: 0,
    expiryDate: '',
    isActive: true
  };

  id!: number;
  couponCode!: string;

  constructor(private couponService: CouponService,
    private activityRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.activityRoute.snapshot.params['id'];

    // Get all coupons and filter by code instead of id
    this.couponService.getAllCoupons().subscribe(coupons => {
      const foundCoupon = coupons.find(c => c.id === Number(this.id));
      if (foundCoupon) {
        this.couponCode = foundCoupon.code;
        this.coupon.code = foundCoupon.code;
        this.coupon.discountType = foundCoupon.discountType;
        this.coupon.value = foundCoupon.value;
        this.coupon.maxUsages = foundCoupon.maxUsages;
        this.coupon.expiryDate = foundCoupon.expiryDate;
        this.coupon.isActive = foundCoupon.isActive;
      } else {
        console.error('Coupon not found with ID:', this.id);
      }
    });
  }

  onSubmit() {
    this.couponService.updateCoupon(this.id, this.coupon).subscribe(data => {
      console.log('Coupon updated successfully:', data);
      this.router.navigate(['/coupons']);
    }, error => console.error('Error updating coupon:', error));
  }
}
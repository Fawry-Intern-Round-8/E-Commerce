import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CouponService } from '../coupon.service';
import { Router } from '@angular/router';
import { CouponRequestDTO, DiscountType } from '../coupon-models';

@Component({
  selector: 'app-coupon-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coupon-add.component.html',
  styleUrl: './coupon-add.component.css'
})
export class CouponAddComponent implements OnInit {
  coupon: CouponRequestDTO = {
    code: '',
    discountType: DiscountType.FIXED,
    value: 0,
    maxUsages: 1,
    expiryDate: '',
    isActive: true
  };

  discountTypes = Object.values(DiscountType);

  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
    // Set default expiry date to one month from now
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    this.coupon.expiryDate = date.toISOString().split('T')[0];
  }

  saveCoupon() {
    console.log('Sending coupon data:', this.coupon);
    this.couponService.createCoupon(this.coupon).subscribe(
      data => {
        console.log('Success:', data);
        this.goToCouponList();
      },
      error => {
        console.error('Error details:', error);
        if (error.error && error.error.message) {
          console.error('Server message:', error.error.message);
        }
      }
    );
  }

  goToCouponList() {
    this.router.navigate(['/coupons']);
  }

  onSubmit() {
    this.saveCoupon();
  }
}
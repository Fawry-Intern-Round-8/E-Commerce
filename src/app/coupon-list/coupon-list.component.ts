import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Coupon } from '../coupon-models';
import { CouponService } from '../coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {
  coupons!: Coupon[];
  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
    this.getCouponList();
  }

  getCouponList() {
    this.couponService.getAllCoupons().subscribe(data => {
      this.coupons = data;
    });
  }

  updateCoupon(id: number) {
    this.router.navigate(['update-coupon', id]);
  }

  deleteCoupon(id: number) {
    this.couponService.deleteCoupon(id).subscribe(() => {
      this.getCouponList();
    });
  }

  viewCoupon(id: number) {
    this.router.navigate(['coupon-details', id]);
  }
}

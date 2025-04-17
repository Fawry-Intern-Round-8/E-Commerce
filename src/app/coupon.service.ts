import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CouponRequestDTO, Coupon, CouponValidationResponse } from './coupon-models';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private baseURL = "http://localhost:8082/api/v1/coupons";

  constructor(private httpClient: HttpClient) { }

  createCoupon(couponRequest: CouponRequestDTO): Observable<Coupon> {
    // Changed from /create to standard REST endpoint
    return this.httpClient.post<any>(`${this.baseURL}`, couponRequest)
      .pipe(map(response => response.data));
  }

  getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<any>(`${this.baseURL}`)
      .pipe(map(response => response.data));
  }

  getCouponById(id: number): Observable<Coupon> {
    return this.httpClient.get<any>(`${this.baseURL}/${id}`)
      .pipe(map(response => response.data));
  }

  getCouponByCode(code: string): Observable<Coupon> {
    return this.httpClient.get<any>(`${this.baseURL}/code/${code}`)
      .pipe(map(response => response.data));
  }

  deleteCoupon(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${id}`);
  }

  validateCoupon(code: string): Observable<CouponValidationResponse> {
    return this.httpClient.get<any>(`${this.baseURL}/validate/${code}`)
      .pipe(map(response => response.data));
  }

  updateCoupon(id: number, couponRequest: CouponRequestDTO): Observable<Coupon> {
    return this.httpClient.put<any>(`${this.baseURL}/${id}`, couponRequest)
      .pipe(map(response => response.data));
  }

  incrementCouponUsage(code: string): Observable<void> {
    return this.httpClient.post<void>(`${this.baseURL}/increment/${code}`, {});
  }
}
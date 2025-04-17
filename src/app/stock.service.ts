import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  StoreResponseDTO,
  StoreRequestDTO,
  StoreDTO,
  StockDTO,
  StockRequestDTO,
  StockResponseDTO,
  StockConsumeRequestDTO,
  StockConsumeResponseDTO
} from './store-models';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  getStockById(id: number) {
    return this.httpClient.get<StockDTO>(`${this.baseURL}/getStockById/${id}`);
  }
  private baseURL = "http://localhost:8085/api/stocks";

  constructor(private httpClient: HttpClient) { }

  checkProductAvailability(productId: number, quantity: number): Observable<number> {
    return this.httpClient.get<number>(`${this.baseURL}/availability?productId=${productId}&quantity=${quantity}`);
  }

  createStock(stockRequest: StockRequestDTO): Observable<StockResponseDTO> {
    return this.httpClient.post<StockResponseDTO>(`${this.baseURL}/createStock`, stockRequest);
  }

  addStock(stockRequest: StockRequestDTO): Observable<StockResponseDTO> {
    return this.httpClient.post<StockResponseDTO>(`${this.baseURL}/addStock`, stockRequest);
  }

  deleteStock(stockId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${stockId}/deleteStock`);
  }

  consumeStock(consumeRequest: StockConsumeRequestDTO): Observable<StockConsumeResponseDTO[]> {
    return this.httpClient.post<StockConsumeResponseDTO[]>(`${this.baseURL}/consume`, consumeRequest);
  }

  getAllStocks(): Observable<StockDTO[]> {
    return this.httpClient.get<StockDTO[]>(`${this.baseURL}/getAllStocks`);
  }
}
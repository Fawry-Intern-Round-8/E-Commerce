import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreResponseDTO, StoreRequestDTO, StoreDTO, StockDTO } from './store-models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseURL = "http://localhost:8085/api/stores";

  constructor(private httpClient: HttpClient) { }

  getAllStores(): Observable<StoreResponseDTO[]> {
    return this.httpClient.get<StoreResponseDTO[]>(`${this.baseURL}/getAllStores`);
  }

  getAllStocksForStore(storeId: number, page: number = 0, size: number = 10): Observable<StockDTO[]> {
    return this.httpClient.get<StockDTO[]>(
      `${this.baseURL}/${storeId}/stocks?page=${page}&size=${size}`
    );
  }

  getStoreById(storeId: number): Observable<StoreDTO> {
    return this.httpClient.get<StoreDTO>(`${this.baseURL}/${storeId}`);
  }

  createStore(storeRequest: StoreRequestDTO): Observable<StoreResponseDTO> {
    return this.httpClient.post<StoreResponseDTO>(`${this.baseURL}/createStore`, storeRequest);
  }

  updateStore(storeId: number, storeRequest: StoreRequestDTO): Observable<StoreResponseDTO> {
    return this.httpClient.post<StoreResponseDTO>(`${this.baseURL}/${storeId}/updateStore`, storeRequest);
  }

  deleteStore(storeId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/${storeId}/deleteStore`);
  }

  getTotalStockByStoreId(storeId: number): Observable<number> {
    return this.httpClient.get<number>(`${this.baseURL}/${storeId}/getTotalStocks`);
  }
}
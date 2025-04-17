import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionResponseDTO, TransactionRequestDTO, StockTransaction } from './transactions';
import { TransactionType } from './transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  getTransactionById(id: number) {
    return this.httpClient.get<StockTransaction>(`${this.baseURL}/${id}`);
  }
  private baseURL = "http://localhost:8085/api/transactions-history";

  constructor(private httpClient: HttpClient) { }

  getTransactionsList(): Observable<TransactionResponseDTO[]> {
    return this.httpClient.get<TransactionResponseDTO[]>(`${this.baseURL}`);
  }
}

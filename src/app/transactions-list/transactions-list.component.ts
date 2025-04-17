import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransactionResponseDTO } from '../transactions';
import { TransactionsService } from '../transactions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
  transactions!: TransactionResponseDTO[];
  constructor(private transactionsService: TransactionsService, private router: Router) { }

  ngOnInit(): void {
    this.getTransactionsList();
  }

  getTransactionsList() {
    this.transactionsService.getTransactionsList().subscribe(data => {
      this.transactions = data;
    });
  }

  viewTransaction(transactionId: number | undefined) {
    if (transactionId !== undefined) {
      this.router.navigate(['transactions-details', transactionId]);
    } else {
      console.error('Transaction ID is undefined');
    }
  }
}

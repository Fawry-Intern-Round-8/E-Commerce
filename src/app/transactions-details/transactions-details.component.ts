import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionResponseDTO } from '../transactions';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transactions-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions-details.component.html',
  styleUrl: './transactions-details.component.css'
})
export class TransactionsDetailsComponent implements OnInit {
  transaction!: TransactionResponseDTO;
  transactionId!: number;

  constructor(private transactionsService: TransactionsService, private activityRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.transactionId = this.activityRoute.snapshot.params['id'];
    this.transactionsService.getTransactionById(this.transactionId).subscribe(data => {
      this.transaction = data;
    });
  }

  getTransactionDetails() {
    console.log(`Fetching details for transaction with ID: ${this.transactionId}`);
  }
}

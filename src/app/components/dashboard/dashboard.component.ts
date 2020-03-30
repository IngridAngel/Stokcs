import { StocksService, StockInterface } from './../../services/stokcs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stokcs: Array<StockInterface>;
  symbols: Array<string>;
  constructor(private service: StocksService)
   { 
    this.symbols = service.get();
   }
    
  ngOnInit(): void {
    this.service.load(this.symbols)
 .subscribe(stocks => this.stokcs = stocks)
  }

}

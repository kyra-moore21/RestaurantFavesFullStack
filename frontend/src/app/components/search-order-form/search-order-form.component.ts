import { Component, EventEmitter, Output } from '@angular/core';
import { SearchParams } from '../../models/search-params';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-order-form.component.html',
  styleUrl: './search-order-form.component.css'
})
export class SearchOrderFormComponent {
@Output() searchOrders = new EventEmitter<SearchParams>();

query: string = "";
orderAgain: boolean | null = null;

constructor() {}

ngOnInit(): void{}

search = (): void => {

  this.searchOrders.emit({query: this.query, orderAgain: this.orderAgain})
}

clear = (): void => {
  this.query = "";
  this.orderAgain = null;
  this.search();
}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderModel } from '../../models/order-model';

@Component({
  selector: 'tr[single-row]',
  standalone: true,
  imports: [],
  templateUrl: './single-order.component.html',
  styleUrl: './single-order.component.css'
})
export class SingleOrderComponent {
@Input() DisplayOrder:OrderModel = {} as OrderModel;
@Output() Delete = new EventEmitter<OrderModel>();

emitDelete(){
  this.Delete.emit(this.DisplayOrder);
}
}

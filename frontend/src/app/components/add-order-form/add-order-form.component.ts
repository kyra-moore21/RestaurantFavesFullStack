import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderModel } from '../../models/order-model';

@Component({
  selector: 'app-add-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order-form.component.html',
  styleUrl: './add-order-form.component.css'
})
export class AddOrderFormComponent {
@Output() SubmittedOrder = new EventEmitter<OrderModel>();

formOrder:OrderModel = {} as OrderModel;

emitSubmitted(){
  if (this.formOrder.orderAgain === undefined){
    this.formOrder.orderAgain = false;
  }
  let newOrder:OrderModel = { ...this.formOrder};
  this.SubmittedOrder.emit(newOrder);
}
}

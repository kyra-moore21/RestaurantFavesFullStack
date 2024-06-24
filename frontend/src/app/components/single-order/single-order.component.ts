import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderModel } from '../../models/order-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tr[single-row]',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-order.component.html',
  styleUrl: './single-order.component.css'
})
export class SingleOrderComponent {
@Input() DisplayOrder:OrderModel = {} as OrderModel;
@Output() Delete = new EventEmitter<OrderModel>();
@Output() Update = new EventEmitter<OrderModel>();
showForm: boolean = false;
emitDelete(){
  this.Delete.emit(this.DisplayOrder);
}

submit(){
   this.showForm = !this.showForm;
this.emitUpdate();

}
emitUpdate(){
  this.Update.emit(this.DisplayOrder);
}
}

import { Component } from '@angular/core';
import { SingleOrderComponent } from '../single-order/single-order.component';
import { AddOrderFormComponent } from '../add-order-form/add-order-form.component';
import { FormsModule } from '@angular/forms';
import { OrderModel } from '../../models/order-model';
import { FavService } from '../../services/fav.service';
import { SearchParams } from '../../models/search-params';
import { SearchOrderFormComponent } from '../search-order-form/search-order-form.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [SingleOrderComponent, AddOrderFormComponent, FormsModule, SearchOrderFormComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
AllOrders:OrderModel[] = [];
filters:  SearchParams = {query: "", orderAgain: null}
constructor(private _favService:FavService){}

ngOnInit(){
  this.getOrders();
}

getOrders(){
  if(this.hasFilters()){
    this._favService.searchOrders(this.filters.query, this.filters.orderAgain).subscribe((response: OrderModel[]) => {
      console.log(response);
      this.AllOrders = response;
    });
  } else {
    this._favService.GetAll().subscribe((response: OrderModel[]) => {
      console.log(response);
      this.AllOrders = response;
    });
  }
  
}


hasFilters(): boolean{
return this.filters.query !== "" || this.filters.orderAgain !== null;
}

setFilters(params:SearchParams){
this.filters = params;
this.getOrders();
}
clearFilters():void {
  this.setFilters({
    query: "",
    orderAgain: null
  });
}
deleteOrder(o:OrderModel){
  this._favService.deleteOrder(o.id).subscribe((response) =>{
    this.getOrders();
  })
}
addOrder(o:OrderModel){
  this._favService.addOrder(o).subscribe((response:OrderModel) => {
    console.log(response);
    this.getOrders();
  })
}
updateOrder(o:OrderModel){
  this._favService.updateOrder(o).subscribe((response) => {
    this.getOrders();
  })
}
}

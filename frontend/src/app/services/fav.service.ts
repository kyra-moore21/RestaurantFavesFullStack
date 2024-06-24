import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from '../models/order-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  constructor(private http:HttpClient) { }
  url:string = "https://localhost:7059";

  GetAll(){
    return this.http.get<OrderModel[]>(`${this.url}/api/Order`);
  }
  searchOrders(restaurant: string,orderAgain: boolean | null ):Observable<OrderModel[]>{
    let params = new HttpParams();

    if (restaurant) {
      params = params.set('q', restaurant);
    }

    if (orderAgain !== null) {
      params = params.set('orderAgain', orderAgain.toString());
    }
    return this.http.get<OrderModel[]>(`${this.url}/api/Order`, {params});
  }
  getByID(id:number):Observable<OrderModel>{
    return this.http.get<OrderModel>(`${this.url}/api/Order${id}`);
  }
  updateOrder(updatedOrder:OrderModel):Observable<void>{
    return this.http.put<void>(`${this.url}/api/Orders/${updatedOrder.id}`, updatedOrder);
  }
  deleteOrder(id:number):Observable<void>{
      return this.http.delete<void>(`${this.url}/api/Order/${id}`);
  }
  addOrder(newOrder:OrderModel):Observable<OrderModel>{
    return this.http.post<OrderModel>(`${this.url}/api/Order`, newOrder);
  }
}

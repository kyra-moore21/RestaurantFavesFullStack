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
  searchOrders(
    restaurant: string,
    orderAgain: boolean | null
  ):Observable<OrderModel[]>{
     // Add URL query parameters to an object.
    // HttpClient will add them to the URL safely.
    let params: any = {};
    if(restaurant) {
      params.q = restaurant;
    }
    if(orderAgain !== null){
      params.orderAgain = orderAgain;
    }
    return this.http.get<OrderModel[]>(`${this.url}/api/Order`, {params});
  }

  deleteOrder(id:number):Observable<void>{
      return this.http.delete<void>(`${this.url}/api/Order/${id}`)
  }
  addOrder(newOrder:OrderModel):Observable<OrderModel>{
    return this.http.post<OrderModel>(`${this.url}/api/Order`, newOrder);
  }
}

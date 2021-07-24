import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators'



@Injectable({providedIn:'root'})
export class PaymentService {
    subject = new Subject();
   
    ApiErrors = new Subject();
    postId: Object;
    PaymentCatIds_ByUID= new Subject();
    paymentBySlug=new Subject()
    constructor(private http:HttpClient){
        
    }


SavePaymentDetails(catSlug:any,userId:string,Uname:any,email:any){

const dataArr=[];
dataArr.push(catSlug)
dataArr.push(userId)
dataArr.push(Uname)
dataArr.push(email)


this.http.post('http://localhost:3000/payments',dataArr).subscribe(data => {
    this.postId = data;
})


}


getPaymentCatIds_ByUID(id:string){
      console.log(id)
    this.http.get(`http://localhost:3000/paymentCIds_UID/${id}`).subscribe((data)=>{
        this.PaymentCatIds_ByUID.next(data);
    },(error)=>this.ApiErrors.next(error));
}
getPaymentBySlug(slug:string){
    this.http.get(`http://localhost:3000/payments/${slug}`).subscribe((data)=>{
        this.paymentBySlug.next(data);
    },(error)=>this.ApiErrors.next(error));
}


}

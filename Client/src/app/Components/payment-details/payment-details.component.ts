import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
slug:any
paymentDetails:any
  constructor(private route:ActivatedRoute,private paymentService :PaymentService,private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      this.slug = params['slug']
      console.log(this.slug)})


      this.paymentService.getPaymentBySlug(this.slug);
      this.paymentService.paymentBySlug.subscribe((payment)=>{
        this.paymentDetails = payment;
       
        console.log(this.paymentDetails);
      })



  }
  back(){

    this.router.navigate(['viewCategories',this.slug,'view','TemGenerate','Tem'])
    // viewCategories/LqyPxYTmFZj1yyaw2Uqn6nvHeVzjgQ1B/view/TemGenerate/TemSave
    
    }




}

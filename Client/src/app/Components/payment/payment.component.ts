import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { PaymentService } from 'src/app/Services/payment.service';
import {render} from 'creditcardpayments/creditCardPayments';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  
  slug:any;
  details: any;
  userId:any
  payment_CID: unknown;
  userName:any
  email:any
  constructor(private route:ActivatedRoute,private auth: AuthenticationService,private paymentService:PaymentService, private router: Router) { 


    render({
      id : "#myPaypalButtons",
      currency : "USD",
      value : "200.00",
      onApprove : (details) => {
        // alert("Transaction Successfull")
        
        
        this.paymentService.SavePaymentDetails(this.slug,this.userId,this.userName,this.email)
      

        
        Swal.fire({
          title: "Payment Process Sucess",
         
          icon:'success',
         
        
        
        
        
          })
          this.router.navigate(['ClintViewCategory']);







 


      }
    });


  }

  ngOnInit(): void {

    this.auth.profile().subscribe(
      
      user => {
        
        // console.log(user);
        this.details = user;
        this.userId=this.details._id
        this.userName=this.details.firstName
        this.email=this.details.email
       
       
      },
      err => {
        console.error(err);
      }
    )

    this.route.params.subscribe((params)=>{
      this.slug = params['slug']
   
     
    })


//



//








 
     





  }

  
}

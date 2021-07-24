import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { FormService } from 'src/app/Services/form.service';
import { PaymentService } from 'src/app/Services/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clint-view-category',
  templateUrl: './clint-view-category.component.html',
  styleUrls: ['./clint-view-category.component.css']
})
export class ClintViewCategoryComponent implements OnInit {

  payment_CID: any;
  userId: any;
  details: any;
check:boolean
  constructor(private formService:FormService,private auth: AuthenticationService,  private router: Router,private paymentService:PaymentService) { }
  categories;
  ngOnInit(): void {


    this.formService.getCategories();
    this.formService.subject.subscribe((categories)=>{
      this.categories=categories;
      // console.log(this.categories)

      
    })

    this.auth.profile().subscribe(
      
      user => {
        
        // console.log(user);
        this.details = user;
        this.userId=this.details._id
        
       
      },
      err => {
        console.error(err);
      }
    )


  











  }

  checkPaymentDetails(slug:any){
    console.log(slug)
    
this.paymentService.getPaymentCatIds_ByUID(this.userId)

    this.paymentService.PaymentCatIds_ByUID.subscribe((payment_CID)=>{
          this.payment_CID= payment_CID;
           
    console.log(this.payment_CID)
    
       
for(let i =0 ;i<this.payment_CID.length;i++){

  if(this.payment_CID[i].catID==slug){

    console.log(this.payment_CID[i].catID)
    
      
      this.router.navigate(['ClintViewCategory',slug,'view','ClintFillForm']);
    
    this.check=true
    }


}


    
      if(!this.check){
      
      //  this.router.navigate(['ClintViewCategory',slug,'view','payment'])




//
Swal.fire({
  title: "Go to Paymeent!",
 
  icon:'warning',
  showCancelButton:true,
  confirmButtonText:'Yes, buy it!',
  cancelButtonText:'No ,Thanks'

  }).then((result)=>{

if(result.value){

  this.router.navigate(['ClintViewCategory',slug,'view','payment'])

}

  })

//


      
      }
    
    })
  
  



    





  }











}

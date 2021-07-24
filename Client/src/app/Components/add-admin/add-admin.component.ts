import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs'
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service' 
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages'
import { ValidationService } from 'src/app/Services/validation.service'

import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  firstName:string
  lastName:string
  email:string
  password:string
  role:string

  constructor(private val:ValidationService,private flash:FlashMessagesService,public auth: AuthenticationService , private router: Router) { }

  addAdmin() {
    const credentials= {
      firstName: this.firstName,
      lastName: this.lastName,
      email:this.email,
      password:this.password,
      role: 'admin'
    }



    if(!this.val.validatingRegister(credentials)){
      console.log('fill all')
      this.flash.show('*** Please fill all the fields ***', {cssClass:'alert-danger',timeout:3000})

      //




      //
      return false
    }

    if(!this.val.validatingEmail(credentials.email)){
      console.log('invalid email')
      this.flash.show('*** Entered Email is invalid *** ', {cssClass:'alert-danger',timeout:3000})
      
      return false
    }

    if(!this.val.validatingPassword(credentials.password)){
      this.flash.show('*** 6 - 10 characters should be in your password ***', {cssClass:'alert-danger',timeout:3000})
      console.log('invalid password')
      return false
    }



    this.auth.addAdmin(credentials).subscribe(user=> {
      if(user.success){
        this.router.navigateByUrl('/dashboard')
        // alert('registered successfully')
        Swal.fire({
          title: "Add admin",
         
          icon:'success',
         
        
        
        
        
          })
      }else{
        this.flash.show(user.message, {cssClass:'alert-danger',timeout:3000})
        console.log(user.message)
      }
    })
  }

  ngOnInit(): void {
  }



}

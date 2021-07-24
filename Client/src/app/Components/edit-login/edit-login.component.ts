import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthenticationService} from 'src/app/Services/authentication.service';
import { ValidationService } from 'src/app/Services/validation.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-login',
  templateUrl: './edit-login.component.html',
  styleUrls: ['./edit-login.component.css']
})
export class EditLoginComponent implements OnInit {

  constructor(private val:ValidationService,private flash:FlashMessagesService,public auth: AuthenticationService,private router: Router) { }
  details:any
  userId:any
  password:any
  email:any


  editLogin() {
    const credentials = {
      email:this.email,
      password:this.password
    }

    if(!this.val.validatingRegister2(credentials)){
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
    console.log(this.password)
    this.auth.editLogin(this.userId,credentials).subscribe(
      ()=> {
        this.router.navigateByUrl('/profile')
      
      },
      err=>{
        console.error(err)
      }
    )
    
    Swal.fire({
      title: "Edited Details successfully",
     
      icon:'success',
     
    
    
    
    
      })
  }

  ngOnInit(): void {
    this.auth.profile().subscribe(
      user => {
        // console.log(user);
        this.details = user;
        this.userId=this.details._id
        // console.log(this.userId);
      },
      err => {
        console.error(err);
      }
    )
  }

}

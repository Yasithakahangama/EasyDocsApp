import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Swal from 'sweetalert2';
import { FlashMessagesService } from 'angular2-flash-messages'
import { ValidationService } from 'src/app/Services/validation.service'



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  
    
    firstName: string
    lastName: string
    
    
  

  constructor(private val:ValidationService,private flash:FlashMessagesService,public auth: AuthenticationService ,private toastr: ToastrService, private router: Router) { }
  
  details:any
  userId:any
  editProfile() {

    const credentials = {
      firstName:this.firstName,
      lastName:this.lastName
    }

    
    if(!this.val.validatingRegister1(credentials)){
      // console.log('fill all')
      this.flash.show('*** Please fill all the fields *** ', {cssClass:'alert-danger',timeout:3000})

      //




      //
      return false
    }
    
    this.auth.editProfile(this.userId,credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
        
        
      },
      err => {
        console.error(err)
      }




    )

    Swal.fire({
      title: "Edited Details successfully ",
     
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

  logout(){
    localStorage.removeItem('userToken'); 
    this.router.navigateByUrl('');
    this.toastr.info("Good Bye ","",{
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing'
      
  
    });
  }
}

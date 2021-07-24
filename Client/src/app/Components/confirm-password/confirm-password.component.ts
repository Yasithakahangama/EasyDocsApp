import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthenticationService} from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {

  credentials: string

  constructor(public auth: AuthenticationService ,private toastr: ToastrService, private router: Router) { }
  details:any
  userId:any

  confirmPassword(){
    console.log(this.credentials)
    this.auth.checkpassword(this.credentials,this.userId).subscribe(data=> {
      if(data.success){
        this.router.navigateByUrl('/editLogin')
       
      }else {
        alert(data.message);
      }
    })


  }

  ngOnInit(): void {
    this.auth.profile().subscribe(
      user => {
        // console.log(user);
        this.details = user;
        this.userId=this.details._id
        console.log(this.userId);
      },
      err => {
        console.error(err);
      }
    )
  }

}
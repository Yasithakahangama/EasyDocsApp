import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { from } from 'rxjs'
import { AuthenticationService , UserDetails } from '../../Services/authentication.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  details: UserDetails

  constructor(private auth: AuthenticationService , private router:Router) { }

  ngOnInit(): void {
    this.auth.profile().subscribe(
      user => {
        console.log(user);
        this.details = user;
        // console.log(this.details);
      },
      err => {
        console.error(err);
      }
    )
  }


  goEdit(){
    this.router.navigate(['confirmPassword'])
  }

  // editprofilr(this.details.id,{username:"sdsd00",}){
  //   this.auth.editprofilr()
  // }

}

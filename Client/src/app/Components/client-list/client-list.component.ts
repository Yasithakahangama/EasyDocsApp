import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ AuthenticationService,UserDetails } from '../../Services/authentication.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientDetails : UserDetails[];

  constructor(private toastr: ToastrService,private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.auth.getClientlist().subscribe( client => {

      this.clientDetails = client;
      console.log(this.clientDetails);
      
    },
    err => {
      console.log(err);
    });


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

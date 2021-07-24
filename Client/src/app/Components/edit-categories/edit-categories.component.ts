import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormService } from '../../Services/form.service'
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'; 


@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {
categories;

  constructor(private formService:FormService, private toastr: ToastrService, public auth: AuthenticationService , private router: Router) { }

  logout(){
    localStorage.removeItem('userToken'); 
    this.router.navigateByUrl('');
    this.toastr.info("Good Bye ","",{
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing'
      
  
    });
  }


  ngOnInit(): void {
    this.formService.getCategories();
    this.formService.subject.subscribe((categories)=>{
      this.categories=categories;
    })
  }

}

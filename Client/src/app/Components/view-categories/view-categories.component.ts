import { Component, OnInit } from '@angular/core';
import { FormService } from '../../Services/form.service'
import { ToastrService } from 'ngx-toastr'; 

import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories;
  catid:any
  constructor(private formService:FormService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.formService.getCategories();
    this.formService.subject.subscribe((categories)=>{
      this.categories=categories;
      console.log(this.categories)
    })
  }

  deleteAds(_id: string) {
    this.catid=_id
    console.log('pid is '+this.catid)
    this.formService.deleteCat(this.catid).subscribe((result) =>{
      this.ngOnInit()
      console.log('permission deleted')
    })
    


    // Swal.fire({
    //   title: "Delete Category",
     
    //   icon:'success',
     
      
    
    
    
    
    //   })
     
    Swal.fire({
      title: "Deleted!",
     
      icon:'success',
     
      confirmButtonText:'Yes, delete it!',
     
    
      }).then((result)=>{

if(result.value){
window.location.reload()


}

      })



      //  window.location.reload();
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

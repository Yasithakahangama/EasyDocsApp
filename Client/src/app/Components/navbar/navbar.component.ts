import { Component, OnInit } from '@angular/core';
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'; 

import { PermissionService } from 'src/app/Services/permission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthenticationService ,private toastr: ToastrService, private router: Router,private per:PermissionService) { }
  details:any
  userId:any
  viewPermissions=[]
  pName:string
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

  logout(){
    localStorage.removeItem('userToken'); 
    this.router.navigateByUrl('');
    this.toastr.info("Good Bye ","",{
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing'
      
  
    });
  }





  checkPermission(){
    this.per.getPermissions(this.userId).subscribe((doc)=>{
  
      this.viewPermissions=doc;
      console.log(this.viewPermissions)
      // console.log(this.viewPermissions[0])




      for(let i=0;i<this.viewPermissions.length;i++){

   
        this.pName=this.viewPermissions[i].pName
        if(this.pName==='Add Admin'){
          console.log(this.viewPermissions[i].pName)
  this.router.navigate(['addAdmin'])
  return
        }
        
      
      }
 
      

        Swal.fire({
          title: "You Do Not Have Permission",
         
          icon:'warning',
         
        
        
        
        
          })




      
      
      })
     

     
  }



  checkPermission1(){
    this.per.getPermissions(this.userId).subscribe((doc)=>{
  
      this.viewPermissions=doc;
      console.log(this.viewPermissions)
      // console.log(this.viewPermissions[0])




      for(let i=0;i<this.viewPermissions.length;i++){

   
        this.pName=this.viewPermissions[i].pName
        if(this.pName==='Client List'){
          console.log(this.viewPermissions[i].pName)
  this.router.navigate(['clientlist'])
  return
        }

      
      
      }


      

        Swal.fire({
          title: "You Do Not Have Permission",
         
          icon:'warning',
         
        
        
        
        
          })




      
 

      
      })
     

     
  }
  checkPermission2(){
    this.per.getPermissions(this.userId).subscribe((doc)=>{
  
      this.viewPermissions=doc;
      console.log(this.viewPermissions)
      // console.log(this.viewPermissions[0])
  
  
  
  
      for(let i=0;i<this.viewPermissions.length;i++){
  
   
        this.pName=this.viewPermissions[i].pName
        if(this.pName==='Admin List'){
          console.log(this.viewPermissions[i].pName)
  this.router.navigate(['adminlist'])
  return
        }

       
      
      }


      

        Swal.fire({
          title: "You Do Not Have Permission",
         
          icon:'warning',
         
        
        
        
        
          })




      
  
  
      
      })
     
  
     
  }

  checkPermission3(){
    this.per.getPermissions(this.userId).subscribe((doc)=>{
  
      this.viewPermissions=doc;
      console.log(this.viewPermissions)
      // console.log(this.viewPermissions[0])
  
  
  
  
      for(let i=0;i<this.viewPermissions.length;i++){
  
   
        this.pName=this.viewPermissions[i].pName
        if(this.pName==='Edit Categories'){
          console.log(this.viewPermissions[i].pName)
  this.router.navigate(['editCategories'])
  return
        }
        
      
      }

      

        Swal.fire({
          title: "You Do Not Have Permission",
         
          icon:'warning',
         
        
        
        
        
          })




      
  
  
      
      })
     
  
     
  }



}

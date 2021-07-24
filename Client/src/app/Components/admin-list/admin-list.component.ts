import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ AuthenticationService,UserDetails } from '../../Services/authentication.service';
import { ToastrService } from 'ngx-toastr'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  id:any
  Admindetails : UserDetails[];


  dataarr=[];
  
  constructor(private auth: AuthenticationService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  
    var multi:any[][];

    this.auth.getAdminlist().subscribe( client => {
     
      this.Admindetails = client;
      console.log(this.Admindetails);

for(let i=0;i<this.Admindetails.length;i++){

  

  

if(this.Admindetails[i].email !='keshanMainAdmin@gmail.com' && this.Admindetails[i].email !='yasithaMainAdmin@gmail.com'){

// this.dataarr.push(this.Admindetails[i])

this.dataarr.push(this.Admindetails[i])


}


}
console.log(this.dataarr)


      
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

  editPer(adminId:any){
    this.router.navigate(['editPermissions',adminId]);
  }

  deleteAdmin(_id:any){
    this.id=_id
    console.log('pid is '+this.id)
    this.auth.deleteAdmin(this.id).subscribe((result) =>{
      // this.ngOnInit()
      console.log('admin deleted')
    })

    // Swal.fire({
    //   title: "Deleted admin",
     
    //   icon:'success',
     
    
    
    
    
    //   })
      // window.location.reload();



Swal.fire({
  title: "Add new admin!",
 
  icon:'success',
  
  confirmButtonText:'Yes, Add it!',


  }).then((result)=>{

if(result.value){

  this.router.navigateByUrl('/adminlist')
  window.location.reload();

}

  })


  }

}

import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DocumentService } from 'src/app/Services/document.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-docs',
  templateUrl: './view-docs.component.html',
  styleUrls: ['./view-docs.component.css']
})
export class ViewDocsComponent implements OnInit {

  mydocs: any;
  details: any;
  userId:any
  mypdf:any;
  mydocument=[]
  docuid:any
  // profiles: documentmodel[];
  constructor( private docstService:DocumentService,private auth: AuthenticationService) { }
  
  ngOnInit(): void {



    // this.docstService.getdocuments();
    // this.docstService.getPastpaperStream().subscribe((profiles: documentmodel[]) => {
    //     this.profiles = profiles;
    //   });


// console.log(this.profiles)


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
    


    this.docstService.getdocuments();
this.docstService.getdocument.subscribe((documents)=>{
  this.mydocs = documents;
  this.mypdf=this.mydocs.documents;
  // console.log(this.mypdf)


  for(let i=0;i<this.mypdf.length;i++){

if(this.mypdf[i].uid==this.userId){


  // console.log(this.mypdf[i].documentPath)
this.mydocument.push(this.mypdf[i])


}

  }


// console.log(this.mydocument);

})

    




  }


  deleteAds(_id: string) {
    this.docuid=_id
    console.log('pid is '+this.docuid)
    this.docstService.deleteDoc(this.docuid).subscribe((result) =>{
      this.ngOnInit()
      console.log('permission deleted')
    })
   

    Swal.fire({
      title: "Deleted!",
     
      icon:'success',
     
      confirmButtonText:'Yes, delete it!',
     
    
      }).then((result)=>{
  
  if(result.value){
  window.location.reload()
  
  
  }
  
      })
  }



}

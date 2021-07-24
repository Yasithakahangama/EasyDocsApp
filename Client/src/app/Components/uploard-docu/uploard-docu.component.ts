import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { DocumentService } from 'src/app/Services/document.service';
import Swal from 'sweetalert2';
import { documentmodel } from '../model/documents';

@Component({
  selector: 'app-uploard-docu',
  templateUrl: './uploard-docu.component.html',
  styleUrls: ['./uploard-docu.component.css']
})
export class UploardDocuComponent implements OnInit {

  form: FormGroup;

  document: documentmodel;
  documentData: string;
 
  FinalBody: any = {};
  postId: Object;
  details: any;
  userId:any
  constructor(private http: HttpClient , private documentService:DocumentService,private auth: AuthenticationService,private router:Router) { }

  ngOnInit(): void {

    this.auth.profile().subscribe(
      user => {
        console.log(user);
        this.details = user;
        this.userId=this.details._id
        console.log(this.userId);
      },
      err => {
        console.error(err);
      }
    )
    
    this.form = new FormGroup({
      name: new FormControl(null),
      document: new FormControl(null),
    });
  }
  

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ document: file });
    const allowedMimeTypes = ["application/pdf"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.documentData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit() {

      this.documentService.addDocument(this.form.value.name,this.userId,this.form.value.document);

      this.form.reset();
      this.documentData = null;


      Swal.fire({
        title: "Sucessfully Uploaded!",
       
        icon:'success',
       
      
      
      
      
        })

      this.router.navigate(['dashboard']);



  }


  
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/Services/photo.service';
import { photo } from '../model/photo';
import jsPDF from 'jspdf';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uplord-photo',
  templateUrl: './uplord-photo.component.html',
  styleUrls: ['./uplord-photo.component.css']
})
export class UplordPhotoComponent implements OnInit {
  form: FormGroup;
  photo: photo
  imageData: string;
  profiles: any;
  img=[]
  id:any
  details:any
  userId:any
  constructor(private photoService:PhotoService,private router:Router,private auth:AuthenticationService) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      image: new FormControl(null),
  })


  this.photoService.getphotoo();
  this.photoService.getpho.subscribe((profiles)=>{
  
    this.profiles = profiles;
       console.log(this.profiles)
       this.img=this.profiles.profiles
  
  })

  
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


  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    
    
    this.photoService.addPhoto(this.userId, this.form.value.image);
    // this.ngOnInit()
  //  this.router.navigate(['UplordPhoto'])
  window.location.reload();
    this.form.reset();
    this.imageData = null;
  }



  deleteAds(_id: string) {
    this.id=_id
    console.log('pid is '+this.id)
    this.photoService.deletePhoto(this.id).subscribe((result) =>{
      this.ngOnInit()
      console.log('permission deleted')
    })
    window.location.reload();
  }


  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = 1200;
    canvas.height = 900;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  //var base64 = (document.getElementById("imageid"));
  download(){
    let doc = new jsPDF();
    for(var i=0;i<this.img.length;i++){
     let imageData= this.getBase64Image(document.getElementById('img'+i));
    //  console.log(imageData);
     doc.addImage(imageData, "JPG", 10, (i+1)*23, -96, -50);
    //  doc.addImage(imageData, "JPG", 7, (i+1)*20, -52, -27);
       doc.addPage();
    }
    doc.save('Test.pdf');

    this.photoService.deleteAll(this.userId).subscribe((result) =>{
      this.ngOnInit()
      console.log('permission deleted')
    })
    window.location.reload();
    



  


  }
  deleteAll(){

    this.photoService.deleteAll(this.userId).subscribe((result) =>{
      this.ngOnInit()
      console.log('permission deleted')
    })





    Swal.fire({
      title: "Delete all!",
     
      icon:'success',
     
      confirmButtonText:'Yes, delete all!',
     
    
      }).then((result)=>{
  
  if(result.value){
  window.location.reload()
  
  
  }
  
      })



  }

  

}

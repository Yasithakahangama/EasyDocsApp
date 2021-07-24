import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';
import { TemplateService } from 'src/app/Services/template.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private route:ActivatedRoute,private templateService: TemplateService , private formService:FormService,private router:Router) { }
  slug:string;

  template :any;
  form:any;
  templateOne:any
Temid:any
  formParameter:[];
  ngOnInit(): void {

    this.route.parent.params.subscribe((params)=>{
      this.slug = params['slug']
     

       
  
      this.templateService.getTemplateBySlug(this.slug);
      this.templateService.templateBySlug.subscribe((template)=>{
        this.template = template;
        
console.log(this.template);
        
       

  })

})
  
}







ViewTem(TID:any){
console.log(TID)
  // this.templateService.getTemplateByID(TID);
//   this.templateService.templateByID.subscribe((templateone)=>{
//     this.templateOne = templateone;
//     console.log(this.templateOne)
//     this.formParameter=this.templateOne.FormParameter;


// this.templateService.getTemplate(TID);




this.router.navigate(['viewCategories',TID]);











// })





}


setMyStyles(i:any) {
  let styles = {

// 'margin-left':this.template.FormParameter[index].Xvalue,
// 'margin-top':this.template.FormParameter[index].Yvalue
'background-color': 'lime',

 'left.px':this.template.FormParameter[i].Xvalue - 520,
'top.px':this.template.FormParameter[i].Yvalue- 120,
 'position': 'absolute'

  }
// console.log(styles)
  return styles;


}

deleteAds(_id: string) {
  this.Temid=_id
  console.log('pid is '+this.Temid)
  this.templateService.deleteTem(this.Temid).subscribe((result) =>{
  
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
  


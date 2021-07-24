import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';
import { TemplateService } from 'src/app/Services/template.service';

@Component({
  selector: 'app-create-doc',
  templateUrl: './create-doc.component.html',
  styleUrls: ['./create-doc.component.css']
})
export class CreateDocComponent implements OnInit {

  slug:string;
  constructor(private route:ActivatedRoute,private templateService: TemplateService , private formService:FormService,private router:Router ) { }


  template :any;
  form:any;
  formPara :[]=[];
K :any


dataArr = [];



  ngOnInit(): void {

 
    this.route.params.subscribe((params:Params)=>{
      this.slug = params['slug']
      console.log(this.slug);

       
  
      this.templateService.getTemplateBySlug(this.slug);
      this.templateService.templateBySlug.subscribe((template)=>{
        this.template = template;

console.log(this.template)



       

//         this.formService.getFormBySlug(this.slug);
//         this.formService.formBySlug.subscribe((form)=>{
//           this.form = form;
         
//           this.formPara = this.form.f_Paras;
    
//           const i =this.form.f_Paras.length;
       

//    for(let j=0 ;j<i;j++){
  


//    const TPname=this.template.FormParameter[j].formParaName;
//    console.log(TPname)
   

//    for(let k=0 ; k<i;k++){
 
//     if(TPname==this.form.f_Paras[k].label){
//       // console.log(this.form.f_Paras[k].label)
//       // console.log(this.form.f_Paras[k].lable)
//       this.K=k
// // console.log(this.K)
// var res=this.form.f_Paras[this.K].responses; 


//     }
    
    


//    }
   
//   //  ;
 
//       const FormPara=this.template.FormParameter[j].formParaName;
//      const  Xvalue=this.template.FormParameter[j].Xvalue;
//        const Yvalue=this.template.FormParameter[j].Yvalue;
      
   
//   this.dataArr[j]={FormPara,Xvalue,Yvalue,res}

      
//    }

// // console.log(this.form)
//  console.log(this.dataArr)

//   })

})
  })
}


// setMyStyles(i:any) {
//   let styles = {

// // 'margin-left':this.template.FormParameter[index].Xvalue,
// // 'margin-top':this.template.FormParameter[index].Yvalue
// // 'background-color': 'lime',

//  'left.px':this.dataArr[i].Xvalue - 520,
// 'top.px':this.dataArr[i].Yvalue- 120,
//  'position': 'absolute'

//   }
// // console.log(styles)
//   return styles;


// }


// Create(){
//   this.router.navigate(['ClintViewCategory',this.slug,'view','ClintDownloadDocComponent']);


// }




ViewTem(TID:any){
  console.log(TID)
  this.router.navigate(['ClintViewCategory',this.slug,TID]);
}
}

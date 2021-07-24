import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';
import { TemplateService } from 'src/app/Services/template.service';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-final-doc',
  templateUrl: './create-final-doc.component.html',
  styleUrls: ['./create-final-doc.component.css']
})
export class CreateFinalDocComponent implements OnInit {

  constructor(private route:ActivatedRoute,private templateService: TemplateService,private formService:FormService,private router:Router) { }
Tid:any
templateOne:any
form:any;
formPara :[]=[];
slug:any


K :any


dataArr = [];
  ngOnInit(): void {


    this.route.params.subscribe((params)=>{
      this.Tid = params['id']
      
      this.slug = params['slug']
      console.log(this.slug);

      this.templateService.getTemplateByID(this.Tid);

      this.templateService.templateByID.subscribe((templateone)=>{
            this.templateOne = templateone;
            console.log(this.templateOne)





        this.formService.getFormBySlug(this.slug);
        this.formService.formBySlug.subscribe((form)=>{
          this.form = form;
         
          this.formPara = this.form.f_Paras;
    
          const i =this.form.f_Paras.length;
       console.log(this.form)

   for(let j=0 ;j<i;j++){
  


   const TPname=this.templateOne[0].FormParameter[j].formParaName;
   console.log(TPname)
   

   for(let k=0 ; k<i;k++){
 
    if(TPname==this.form.f_Paras[k].label){
      // console.log(this.form.f_Paras[k].label)
      // console.log(this.form.f_Paras[k].lable)
      this.K=k
// console.log(this.K)
var res=this.form.f_Paras[this.K].responses; 


    }
    
    


   }
   
  //  ;
 
      const FormPara=this.templateOne[0].FormParameter[j].formParaName;
     const  Xvalue=this.templateOne[0].FormParameter[j].Xvalue;
       const Yvalue=this.templateOne[0].FormParameter[j].Yvalue;
      
   
  this.dataArr[j]={FormPara,Xvalue,Yvalue,res}

      
   }

// console.log(this.form)
 console.log(this.dataArr)

  })













  })

})
  }



  
setMyStyles(i:any) {
  let styles = {

// 'margin-left':this.template.FormParameter[index].Xvalue,
// 'margin-top':this.template.FormParameter[index].Yvalue
// 'background-color': 'lime',

 'left.px':this.dataArr[i].Xvalue+30,
'top.px':this.dataArr[i].Yvalue+50,
 'position': 'absolute'

  }
// console.log(styles)
  return styles;


}




title = 'print-sample';
  
download(){
  var element = document.getElementById("element")

  html2canvas(element).then((canvas)=>{
    console.log(canvas)

    var imgData = canvas.toDataURL('image/png')

    var doc = new jspdf()

    var imageHight = canvas.height * 208 / canvas.width

    doc.addImage(imgData,0,0,208,imageHight)

    doc.save("document.pdf")
  })
}



save(){


  Swal.fire({
    title: "Please Upload!",
   
    icon:'warning',
    showCancelButton:true,
    confirmButtonText:'Upload ',
    cancelButtonText:'No ,Thanks'
  
    }).then((result)=>{

if(result.value){
this.router.navigate(['UplordDocumentComponent'])


}

    })


}



}

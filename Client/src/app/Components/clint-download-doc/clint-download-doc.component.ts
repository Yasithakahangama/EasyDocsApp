import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas' 
import { ActivatedRoute, Params } from '@angular/router';
import { TemplateService } from 'src/app/Services/template.service';
import { FormService } from 'src/app/Services/form.service';
@Component({
  selector: 'app-clint-download-doc',
  templateUrl: './clint-download-doc.component.html',
  styleUrls: ['./clint-download-doc.component.css']
})
export class ClintDownloadDocComponent implements OnInit {

  constructor(private route:ActivatedRoute,private templateService: TemplateService , private formService:FormService) { }


  template :any; 
  form:any;
  formPara :[]=[];
  slug:string;
  dataArr = [];
  ngOnInit(): void {



    
    this.route.params.subscribe((params:Params)=>{
      this.slug = params['slug']
      console.log(this.slug);

       
  
      this.templateService.getTemplateBySlug(this.slug);
      this.templateService.templateBySlug.subscribe((template)=>{
        this.template = template;
       

        this.formService.getFormBySlug(this.slug);
        this.formService.formBySlug.subscribe((form)=>{
          this.form = form;
         
          this.formPara = this.form.f_Paras;
    
          const i =this.form.f_Paras.length;
       

   for(let j=0 ;j<i;j++){
  


   
   
    
   const res=this.form.f_Paras[j].responses
      const FormPara=this.template.FormParameter[j].formParaName;
     const  Xvalue=this.template.FormParameter[j].Xvalue;
       const Yvalue=this.template.FormParameter[j].Yvalue;
      
   
  this.dataArr[j]={FormPara,Xvalue,Yvalue,res}
      
   }


          console.log(this.dataArr);


  })

})
  })
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

 

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-clint-fill-form',
  templateUrl: './clint-fill-form.component.html',
  styleUrls: ['./clint-fill-form.component.css']
})
export class ClintFillFormComponent implements OnInit {

  constructor(private formService:FormService,private route:ActivatedRoute,private router:Router) { }
  slug:string;
  form:any;
  formPara:[]
  result:any={responses:[]};
  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{
      this.slug = params['slug']
      console.log(this.slug);
      this.formService.getFormBySlug(this.slug);
      this.formService.formBySlug.subscribe((form)=>{
        this.form = form;
        this.formPara=this.form.f_Paras;
       
        console.log(this.form);
      })
    })




  }
  onSubmitSurveyForm(surveyForm:NgForm){
    console.log(surveyForm.value);
    this.result['slug'] = this.slug;
    for (const key in  surveyForm.value ) {
     
        this.result.responses.push({
          response:surveyForm.value[key]})
          
      
    }
  //console.log(this.result)
   this.formService.SubmitResponse(this.result);
   this.router.navigate(['ClintViewCategory',this.slug,'view','CreateDoc']);
   //ClintViewCategory/:slug/view/ClintFillForm/CreateDoc

  }

}

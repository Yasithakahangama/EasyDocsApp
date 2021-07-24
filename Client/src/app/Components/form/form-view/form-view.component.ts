import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/Services/form.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {
  slug:string;
  form:any;
  formPara:[]=[];
  result:any={responses:[]};
  constructor(private formService:FormService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.route.parent.params.subscribe((params)=>{
      this.slug = params['slug']
      console.log(this.slug)
      this.formService.getFormBySlug(this.slug);
      this.formService.formBySlug.subscribe((form)=>{
        this.form = form;
        this.formPara = this.form.f_Paras;
        console.log(this.form);
      })
    })
    



  }


  onSubmitSurveyForm(surveyForm:NgForm){

    console.log(surveyForm);
    this.result['slug'] = this.slug;
    for (const key in  surveyForm.value ) {
     
        this.result.responses.push({
          response:surveyForm.value[key]})
          
      
    }
  console.log(this.result)
   this.formService.SubmitResponse(this.result);

  }




  }











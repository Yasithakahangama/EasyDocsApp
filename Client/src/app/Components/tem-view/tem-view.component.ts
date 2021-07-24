import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemplateService } from 'src/app/Services/template.service';

@Component({
  selector: 'app-tem-view',
  templateUrl: './tem-view.component.html',
  styleUrls: ['./tem-view.component.css']
})
export class TemViewComponent implements OnInit {

  constructor(private route:ActivatedRoute,private templateService: TemplateService, private router: Router) { }
Tid:any
templateOne : any
formParameter:any
slug:any
  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.Tid = params['id']
      console.log(this.Tid  )

      this.templateService.getTemplateByID(this.Tid);

      this.templateService.templateByID.subscribe((templateone)=>{
            this.templateOne = templateone;
            console.log(this.templateOne)
            this.slug=this.templateOne[0].slug
            console.log(this.slug)


          this.formParameter=this.templateOne[0].FormParameter;
          console.log(this.formParameter)
        

      })




    })

  }


  
setMyStyles(i:any) {
  let styles = {

// 'margin-left':this.template.FormParameter[index].Xvalue,
// 'margin-top':this.template.FormParameter[index].Yvalue
'background-color': 'lime',

 'left.px':this.templateOne[0].FormParameter[i].Xvalue  ,
'top.px':this.templateOne[0].FormParameter[i].Yvalue+45,
 'position': 'absolute'

  }
// console.log(styles)
  return styles;


}
back(){

this.router.navigate(['viewCategories',this.slug,'view','TemGenerate','Tem'])
// viewCategories/LqyPxYTmFZj1yyaw2Uqn6nvHeVzjgQ1B/view/TemGenerate/TemSave

}

}

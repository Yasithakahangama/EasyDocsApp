import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { FormService } from 'src/app/Services/form.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tem-generate',
  templateUrl: './tem-generate.component.html',
  styleUrls: ['./tem-generate.component.css']
})
export class TemGenerateComponent implements OnInit {

  constructor(private formService:FormService,private route:ActivatedRoute,private router:Router,private http: HttpClient) { }


  slug:string;
  form:any;
  formPara:[]=[];
  CatID:any;
 

  formName: any;
  FinalBody: any = {};
  data: Map<String, any>;
  postId: any;

  myArr=[]

  ngOnInit(): void {

    this.data = new Map();
    
    this.route.parent.params.subscribe((params)=>{
      this.slug = params['slug']
      this.formService.getFormBySlug(this.slug);
      this.formService.formBySlug.subscribe((form)=>{
        this.form = form;
        this.formPara = this.form.f_Paras;
        this.CatID=this.form._id;
        this.formName=this.form.name;
     
      //   console.log(this.form.name);   
      // console.log(this.form);
      // console.log(this.questions);
      // console.log(this.CatID);
       
       
      })
      
    })


  }

  








    
  marginLeft:any;
  marginTop:any;
 
  onDragEnded(event : any , index : number, name: String) {
    
    
    // console.log( index);  
    
    // let element = event.source.getRootElement();
    // let boundingClientRect = element.getBoundingClientRect();
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    // console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top)); 
// console.log(element)
// console.log(boundingClientRect )

    
 
    // console.log('X:'+ (boundingClientRect.left), 'y: ' + (boundingClientRect.top));   
    this.marginLeft=boundingClientRect.x;
    // console.log("margin left ="+this.marginLeft); 
  
    this.marginTop= boundingClientRect.y;
    //console.log("margin top ="+this.marginTop); 


    this.data.set(name, {
      id: index,
      name: name,
      marginLeft:(boundingClientRect.x - parentPosition.left),
      marginTop:(boundingClientRect.y - parentPosition.top)})
    
     console.log(this.data)

    this.myArr.push(boundingClientRect.x)
    this.myArr.push(boundingClientRect.y)
    this.myArr.push(boundingClientRect.x-parentPosition.left)
    this.myArr.push(boundingClientRect.y-parentPosition.top)
    console.log(this.myArr)
    
  }

  


  getPosition(el) {
    let x = 520.4;
    let y = 165.6;
    // while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    //   x += el.offsetLeft - el.scrollLeft;
    //   y += el.offsetTop - el.scrollTop;
    //   el = el.offsetParent;
    // }

    // console.log(" X is ="+x)
    // console.log("y is ="+y)
    return { top: y, left: x };
  }

  onSubmitSurveyForm(){

    
    const dataArr = [];
    // this.http.post('http://localhost:3000/saveTem')
     for (let key of this.data.entries()){
       dataArr.push(key[1])
       
     }
     dataArr.push(this.CatID)
     dataArr.push(this.slug)
 
 
    // console.log(dataArr);
     console.log(this.CatID)
 
 
     this.FinalBody = {dataArr};
 console.log(this.FinalBody )
 this.http.post('http://localhost:3000/save/saveTem',this.FinalBody, { observe: 'body' }).subscribe(data => {
  this.postId = data;
})
this.router.navigate(['TemSave'],{relativeTo:this.route});

Swal.fire({
  title: "Added New Template",
 
  icon:'success',
 




  })

    }



}

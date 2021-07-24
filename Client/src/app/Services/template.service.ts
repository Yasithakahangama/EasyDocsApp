import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators'



@Injectable({providedIn:'root'})
export class TemplateService{
    subject = new Subject();
   
    ApiErrors = new Subject();
    templateBySlug= new Subject();
    templateByID= new Subject();
    constructor(private http:HttpClient){
        
    }

    getTemplateBySlug(slug:string){
        this.http.get(`http://localhost:3000/template/${slug}`).subscribe((data)=>{
            this.templateBySlug.next(data);
        },(error)=>this.ApiErrors.next(error));
    }
   
    getTemplateByID(id:string){
        
        this.http.get(`http://localhost:3000/templateone/${id}`).subscribe((data)=>{
            this.templateByID.next(data);
        },(error)=>this.ApiErrors.next(error));
    }

    public deleteTem(id:any): Observable<any> {
        console.log(id)
        return this.http.delete('http://localhost:3000/templateone/delete/'+id)
      }
      
   
    


    
}


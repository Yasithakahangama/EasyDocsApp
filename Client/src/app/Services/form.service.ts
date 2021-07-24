import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FormService {
subject = new Subject();
formBySlug = new Subject();
ApiErrors = new Subject();

  constructor(private http:HttpClient) { }

  // get all categories
  getCategories(){
    this.http.get('http://localhost:3000/categories/categories').pipe(map(response=>response
      )).subscribe((categories)=>{
        this.subject.next(categories);
        return categories;
      },(error)=>{
        this.ApiErrors.next(error);
      })
  }

  // view a category form

getFormBySlug(slug:string){
  this.http.get(`http://localhost:3000/form/${slug}`).subscribe((data)=>{
      this.formBySlug.next(data);
  },(error)=>this.ApiErrors.next(error));
}


SubmitResponse(body:any){
  this.http.post('http://localhost:3000/form/response',body).subscribe((response)=>{
      console.log(response);
  },(error)=>this.ApiErrors.next(error))
}
public deleteCat(id:any): Observable<any> {
  console.log(id)
  return this.http.delete('http://localhost:3000/categories/delete/'+id)
}





}


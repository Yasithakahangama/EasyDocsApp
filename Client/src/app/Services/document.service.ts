import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'
import { documentmodel } from '../Components/model/documents';

@Injectable({
  providedIn: 'root'
})


export class DocumentService {
    // subject = new Subject();
    getdocument = new Subject();
     ApiErrors = new Subject();
     getdocumentBYID=new Subject();

    private documents: documentmodel[] = [];
  private documents$ = new Subject< documentmodel []>();
  readonly url = "http://localhost:3000/documents";
    postId: any;
      constructor(private http:HttpClient) { }


//

addDocument(name:string,uid:any,document: Blob): void {
  
    const DocumentData = new FormData();
    DocumentData.append("name",name);
    DocumentData.append("uid", uid);
    DocumentData.append("document", document, name);

   console.log(DocumentData)

    
    this.http
      .post<{ document: documentmodel }>(this.url, DocumentData)
      .subscribe((DocumentData) => {
        const document: documentmodel = {
          _id: DocumentData.document._id,
          name:name,
          uid: uid,
          
          documentPath: DocumentData.document.documentPath
        };
        this.documents.push(document);
        this.documents$.next(this.documents);
      });
     

  
}


getPastpaperStream() {
  return this.documents$.asObservable();
}

getdocuments(){
        
  this.http.get(`http://localhost:3000/documents`).subscribe((data)=>{
      this.getdocument.next(data);
  },(error)=>this.ApiErrors.next(error));
}

getdocumentsByID(id:any){
  console.log("hello")
        
  this.http.get(`http://localhost:3000/documents/getdocuments/doc/${id}`).subscribe((data)=>{
      this.getdocumentBYID.next(data);
  },(error)=>this.ApiErrors.next(error));
}
public deleteDoc(id:any): Observable<any> {
    console.log(id)
    return this.http.delete('http://localhost:3000/documents/delete/'+id)
  }



//



}
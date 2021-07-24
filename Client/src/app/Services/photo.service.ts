import { Injectable } from '@angular/core';
import { photo } from '../Components/model/photo';
import { Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: photo[] = [];
  private photos$ = new Subject<photo[]>();
  readonly url = "http://localhost:3000/photos";
  getpho= new Subject();
  ApiErrors = new Subject();

  constructor(private http: HttpClient) {}
  getphotoo(){
        
    this.http.get(`http://localhost:3000/photos`).subscribe((data)=>{
        this.getpho.next(data);
    },(error)=>this.ApiErrors.next(error));
  }
  
  // getPhoto() {
  //   this.http
  //     .get<{ photos: photo[] }>(this.url)
  //     .pipe(
  //       map((photoData) => {
  //         return photoData.photos;
  //       })
  //     )
  //     .subscribe((photos) => {
  //       this.photos = photos;
  //       this.photos$.next(this.photos);
  //     });
  // }

  getPhotoStream() {
    return this.photos$.asObservable();
  }

  addPhoto(Uid: any, image: File): void {
 
    // console.log(image)
    const photoData = new FormData();
    photoData.append("Uid", Uid);
     photoData.append("image", image);
    console.log(photoData)

    const  dataArr=[]
    dataArr.push(Uid)
    dataArr.push(image)
   console.log(dataArr)
    this.http
      .post<{ photo: photo }>(this.url, photoData)
      .subscribe((photoData) => {
        const photo: photo = {
          _id: photoData.photo._id,
          Uid: Uid,
          imagePath: photoData.photo.imagePath,
        };
        this.photos.push(photo);
        this.photos$.next(this.photos);
      });
     
  }
  // private _putUrlD = 'http://localhost:3000/photos';
  // deleteAds(_id :any){

  //   return this.http.delete<any>(this._putUrlD + _id )
  //  }



  //  deletephotoo(id :any){
  //    console.log(id)
        
  //   this.http.get(`http://localhost:3000/photos/${id}`).subscribe((data)=>{
  //       this.getpho.next(data);
  //   },(error)=>this.ApiErrors.next(error));
  // }



  public deletePhoto(id:number): Observable<any> {
    return this.http.delete('http://localhost:3000/photos/delete/'+id)
  }


  public deleteAll(id:any): Observable<any> {
    return this.http.delete('http://localhost:3000/photos/deleteAll/'+id)
  }
  
  
}

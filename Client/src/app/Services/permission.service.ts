import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Permission {
  id: number,
  adminId: string,
  pName: string
}

export interface PermissionDetails {
  id: number,
  adminId: string,
  pName: string
}

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  postId: Object;
  userId:any
  pName:any

  constructor(private http:HttpClient) { }

// viewing all permissions
public getPermissions(adminId:string): Observable<any> {
  console.log(adminId)
  return this.http.get('http://localhost:3000/permissions/getPermissions/'+adminId);
}

// deleting permission
public deletePermission(id:number): Observable<any> {
  return this.http.delete('http://localhost:3000/permissions/deletePermission/'+id)
}

// adding permission
addpermission(adminID:any,pName:any){

  const dataArr=[]
  dataArr.push(adminID)
  dataArr.push(pName)
  console.log(dataArr)
  this.http.post('http://localhost:3000/permissions/addPermission',dataArr).subscribe(data => {
    this.postId = data;
})
}


// public canAddAdmins(): boolean{
//   const permission=this.getPermissions(this.userId);
//   if(permission.pName=='Can add Admins'){
//     return true;
//   }else {
//     return false;
//   }

// }



}

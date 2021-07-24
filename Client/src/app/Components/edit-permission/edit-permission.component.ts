import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService , TokenPayLoad } from '../../Services/authentication.service';
import { PermissionService , Permission } from '../../Services/permission.service';



@Component({
  selector: 'app-edit-permission',
  templateUrl: './edit-permission.component.html',
  styleUrls: ['./edit-permission.component.css']
})
export class EditPermissionComponent implements OnInit {
adminId:any
permisson:any
viewPermissions:any
id:any

public pNames =[
  {"pName":"Add Admin"},
  {"pName":"Client List"},
  {"pName":"Admin List"},
  {"pName":"Edit Categories"},
  {"pName":"Delete Permission"},
  {"pName":"Edit Permission"}
];

  constructor(private route:ActivatedRoute,private router: Router,public per:PermissionService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      this.adminId = params['adminId']
      console.log(this.adminId  )

this.per.getPermissions(this.adminId).subscribe((doc)=>{

this.viewPermissions=doc;
console.log(this.viewPermissions)

})



      })




    }

    addPermission(pName:any){
      this.permisson=pName
      console.log(this.permisson)
this.per.addpermission(this.adminId,this.permisson)
this.ngOnInit()
}

removePermission(_id:any){
  this.id=_id
  console.log('pid is '+this.id)
  this.per.deletePermission(this.id).subscribe((result) =>{
    this.ngOnInit()
    console.log('permission deleted')
  })
}



}



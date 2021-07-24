import { Injectable } from '@angular/core'
import { from } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Observable , of } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router' 



// @Injectable({
//   providedIn: 'root'
// })

export interface UserDetails {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
  exp: number
  iat: number
}

interface TokenResponse{
  token: string
}

export interface TokenPayLoad {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}


//
// export interface EditDetails {
  
//   firstName:string
//   lastName:string
//   email:string
// }
//


@Injectable()
export class AuthenticationService {
  private token: string

  constructor(private http: HttpClient , private router: Router) { }
  
  // saving token
  private saveToken (token: string): void {
    localStorage.setItem('userToken', token)
    this.token = token
  }
  
  // getting token
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken')
    }
    return this.token
  }
  

  // getting user details using token
  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload 
    if(token) {
      payload = token.split('.')[1]
      // console.log(payload)
      payload = window.atob(payload)
      // console.log(payload)
      return JSON.parse(payload) 
    }else {
      return null
    }
  }
  
  // checking is an user logged in 
  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if(user) {
      return user.exp > Date.now() / 1000
    }else {
      return false
    }
  }
  

  // registration for a client
  public register (user: any): Observable<any> {
    const base = this.http.post('http://localhost:3000/users/register',user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }
  

  // registration for an admin
  public addAdmin (user: any): Observable<any> {
    const base = this.http.post('http://localhost:3000/users/addAdmin',user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }
  

  // login for a user
  public login (user: any): Observable<any> {
    const base = this.http.post('http://localhost:3000/users/login',user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }
  
  // getting profile details
  public profile(): Observable<any> {
    return this.http.get('http://localhost:3000/users/profile', {
      headers: { authorization:`${this.getToken()}` }
    })
  }

 // remove an admin
 public deleteAdmin(id:number): Observable<any> {
  return this.http.delete('http://localhost:3000/users/deleteAdmin/'+id)
}
  

  // checking if user is an admin
  public isAdmin () : boolean {
    const user = this.getUserDetails();
    if(user.role == "admin"){
      return true;
    }else{
      return false;
    }
  }
  

  // getting list of clientlist
  public getClientlist() : Observable<any>{
    return this.http.get('http://localhost:3000/users/clientlist');


  }

  // getting list of afminlist
  public getAdminlist() : Observable<any>{
    return this.http.get('http://localhost:3000/users/adminlist');

}


 
  
  //05/18

  public checkpassword( password:any,userId:any) : Observable<any>{
    console.log("aaaa "+ password)
    const dataArr=[]
    dataArr.push(password)
    dataArr.push(userId)
    console.log(dataArr+"qqqqqqq")
    return this.http.post('http://localhost:3000/users/checkPassword',dataArr);
  }
// editing login details (email & password)
  public editLogin(userId:any,user:any): Observable<any>{
    // console.log("pass "+newPassword);
    // console.log("mail "+newEmail)
    const dataArr=[]
    dataArr.push(user.password)
    dataArr.push(user.email)
    console.log("dataArr is "+dataArr)
    return this.http.patch('http://localhost:3000/users/editLogin/'+userId,dataArr)
  }
// editing profile
public editProfile(userId:number,user:any): Observable<any> {
  return this.http.patch('http://localhost:3000/users/editProfile/'+userId,user)
}



  //

}

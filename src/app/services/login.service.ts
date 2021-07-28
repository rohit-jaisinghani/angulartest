import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8081";
  constructor(private http:HttpClient) { }
  //calling server to generate token
  generateToken(credentials:any)
  {
    return this.http.post(`${this.url}/token`,credentials); 
  }



  //login user
  loginUser(token:string)
  {
    localStorage.setItem("token",token)
    return true;
  }

  //to check user is login
  isLoggedin()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token==null || token=='')
    {
    return false;
  }
    else
    {
      return true;
    }
  }

  logOut(){
    localStorage.removeItem('token')
    return true;
  }

  //to get token
  getToken(){
    return localStorage.getItem("token")
  }
}

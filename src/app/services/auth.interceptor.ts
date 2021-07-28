import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService:LoginService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        console.log("inside intercepto");
        
        let newReq=req;
        let newReq1:any
        let token=this.loginService.getToken()
        console.log(token);
        
        if(token!=null){
            console.log("inside If");
            
           newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}}); 
            //newReq= newReq.clone({
            //headers: newReq.headers.set('Authorization',`Bearer ${token}`)
          //});
            console.log(newReq);
            
        }
        return next.handle(newReq)
    }

    
}
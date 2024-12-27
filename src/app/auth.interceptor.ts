import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler,HttpEvent, HttpRequest, HttpInterceptorFn, HttpHandlerFn } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { AuthServiceService } from "./Service/auth.service";

//@Injectable()
//export class AuthInterceptor implements HttpInterceptor
//{

    // constructor(private authService: AuthServiceService) { 
        
    // }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     const token = this.authService.getToken();
    //     if(token)
    //     {
    //         req = req.clone({
    //             setHeaders: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //     }
    //     return next.handle(req);
    // }


    
//}



export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {

    // Your interceptor logic here
    const token = localStorage.getItem('token');
    if(token)
    {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next(req);
  
  };
  

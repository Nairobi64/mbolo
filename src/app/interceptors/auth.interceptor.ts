import { HttpEvent, HttpHandler, HttpInterceptor,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/aut.services';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authService.getToken()}`);
    const modifiedReq = req.clone({ headers });
    return next.handle(modifiedReq);
    
  }
}
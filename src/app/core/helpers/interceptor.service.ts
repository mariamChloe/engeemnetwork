import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() { }

  private static executeQuery(rq:HttpRequest<any>):HttpRequest<any>{
    return rq.clone({
      setHeaders: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
        "charset":"utf-8"
      },
    });
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = Interceptor.executeQuery(request);
    return next.handle(request);
  }
}

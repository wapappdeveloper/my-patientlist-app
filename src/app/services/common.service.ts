import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient){
    
  }
  
  loadJSON(url:string, success:Function, fail?:Function){
    this.getJSON(url).subscribe((res)=>{
      success.call(this, res);
    },(err)=>{
      (fail)?fail.call(this, err):'';
    });
  }

  private getJSON(url:string):Observable<any>{
    return this.http.get(url);
  }
}

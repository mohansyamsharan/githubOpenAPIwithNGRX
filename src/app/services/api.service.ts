import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare let toastr: any;

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    getGithubRepos ():Observable <any[]> {
        return this.http.get <any[]> ('https://api.github.com/users');
      }
    private handleError (error: any) {
        let errMsg = error.message || 'Server error'; 
        return Observable.throw(errMsg);
    }
}

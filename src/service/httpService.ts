import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpService {

    constructor(private _http:HttpClient) {

    }

    get(url:string) {
        return this._http.get(url);
    }
}
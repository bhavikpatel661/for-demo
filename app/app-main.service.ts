import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private apiPreText: string = "https://api.stackexchange.com/2.2/";

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<Object> {
        return this.http.get(this.apiPreText + "questions/featured?order=desc&sort=activity&site=stackoverflow");
        // return this.http.get("http://demo3304190.mockable.io/getQuestionsAll");
    }

    getUserData(userId: number): Observable<Object> {
        return this.http.get(this.apiPreText + "users/" + userId + "?order=desc&sort=reputation&site=stackoverflow");

    }

    getUserTopTags(userId: number): Observable<Object> {
        return this.http.get(this.apiPreText + "users/" + userId + "/tags?order=desc&sort=popular&site=stackoverflow");
    }

    getUserQuestions(userId: number): Observable<Object> {
        return this.http.get(this.apiPreText + "/users/" + userId + "/questions?order=desc&sort=activity&site=stackoverflow");
    }

} 
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
providedIn: 'root'
})
export class PostsService {
// TODO injection du service HttpClient
constructor(private http: HttpClient) { }
// TODO ajouter la méthode "recupererTousLesPosts"
recupererTousLesPosts(): Observable<any> {
return this.http.get("https://jsonplaceholder.typicode.com/posts");
}
}
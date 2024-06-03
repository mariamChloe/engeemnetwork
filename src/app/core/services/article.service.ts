import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Article } from '../models/article.model';
import {Observable} from 'rxjs';
import {blogBaseUrl} from "../constants/constants";

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  //private url = ;
  private url = blogBaseUrl+'/articles';
  constructor(
    private http: HttpClient,
  ) {}
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}`);
  }
  public postArticle(article: Article): Observable<Article> {
    return this.http.post<any>(`${this.url}`, article);
  }
  public deleteArticle(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
  public putArticle(article: Article, id: string): Observable<Article> {
    return this.http.put<Article>(`${this.url}/${id}`, article);
  }
  public getOneArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.url}/${id}`);
  }

  public getOneArticleBySlug(slug: string): Observable<Article> {
    return this.http.get<Article>(`${this.url}/slug/${slug}`);
  }



}

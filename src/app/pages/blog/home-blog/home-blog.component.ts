import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ArticleService} from "../../../core/services/article.service";
import {Article} from "../../../core/models/article.model";

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogComponent {

  public articles: Article[] = [];
  public isLoading = false;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {
    this.onGetArticleList();
  }

  public onGetArticleList() {
    this.isLoading = true;
    this.articleService.getArticles().subscribe({
      next: (value) => {
        if (value) {
          console.log('article', value);
          this.articles = value;
        } else {
          this.router.navigate(['/404']).then();
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.router.navigate(['/404']).then();
        console.log(err);
        this.isLoading = false;
      },
    });
  }

  goToArticle(art: Article) {
    this.router.navigate(['/article', art.slug]).then(() => { location.reload(); });
  }
}

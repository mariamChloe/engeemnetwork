import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Article} from "../../../core/models/article.model";
import {ArticleService} from "../../../core/services/article.service";
import {ViewerService} from "../../../core/services/viewer.service";
import {Observable, Subject} from "rxjs";
import {Viewer} from "../../../core/models/Viewer";
import {OgService} from "../../../core/services/og.service";
import {FileDownloadService} from "../../../core/services/file-download.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit,OnDestroy{
  // take the slug from the URL

  slug: string | null = null;
  article: Article | null = null;
  articles: Article[] = [];
  summary: string[] = [];
  public getOneLoading: boolean = false;
  public getListLoading: boolean = false;
  public viewer : Subject<Viewer|null> = new Subject<Viewer | null>()
  public status: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private viewerService: ViewerService,
    private router: Router,
    private ogService: OgService,
    private fileDownloadService: FileDownloadService
  ) {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug');
    if (this.slug) {
      this.onGetOne();
      this.onGetArticleList();
      this.onVerifyStatus();
    } else {
      this.router.navigate(['/404']).then();
    }
  }

  ngOnDestroy(): void {
    this.ogService.build()
  }

  ngOnInit(): void {
     this.viewer = this.viewerService.currentViewer
  }

  public onVerifyStatus(){
    this.viewerService.verifyStatus().subscribe();
  }

  public onGetOne() {
    this.getOneLoading = true;
    this.articleService.getOneArticleBySlug(this.slug!).subscribe({
      next: (value) => {
        if (value) {
          this.article = value;
          this.summary = value.summary.split('%%');
          this.ogService.build(
            value.title,
            value.title,
            value.resume,
            value.bannerImage,
            "https://data.engeem.com/article/"+value.slug
          )
        } else {
          this.router.navigate(['/404']).then();
        }
        this.getOneLoading = false;
      },
      error: (err) => {
        this.router.navigate(['/404']).then();
        console.log(err);
        this.getOneLoading = false;
      },
    });
  }

  public onGetArticleList() {
    this.getListLoading = true;
    this.articleService.getArticles().subscribe({
      next: (value) => {
        if (value) {
          console.log('article', value);
          this.articles = value;
        } else {
          this.router.navigate(['/404']).then();
        }
        this.getListLoading = false;
      },
      error: (err) => {
        this.router.navigate(['/404']).then();
        console.log(err);
        this.getListLoading = false;
      },
    });
  }

  goToArticle(art: Article) {
    this.router.navigate(['/article', art.slug]).then(() => {
      if (art.slug != this.article?.slug) location.reload();
    });
  }

  public downloadFile(): void {
    if(this.article)
      this.fileDownloadService.downloadBase64File( this.article.pdf, this.article.title);
  }

}

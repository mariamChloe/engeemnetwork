export class Article {
  private _id: number|null = null;
  private _title: string|null = null;
  private _content: string|null = null;
  private _slug: string|null = null;
  private _bannerImage: string|null = null;
  private _summary: string|null = null;
  private _resume: string|null = null;
  private _category: string|null = null;
  private _pdf: string|null = null;

  /*private _img1: string;
  private _img2: string;*/
  private _createdDate: string|null = null;
  private _lastModified: string|null = null;


  get id(): number {
    return <number>this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return <string>this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return <string>this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get slug(): string {
    return <string>this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get bannerImage(): string {
    return <string>this._bannerImage;
  }

  set bannerImage(value: string) {
    this._bannerImage = value;
  }

  get summary(): string {
    return <string>this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get resume(): string {
    return <string>this._resume;
  }

  set resume(value: string) {
    this._resume = value;
  }

  get category(): string {
    return <string>this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get createdDate(): string {
    return <string>this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }

  get lastModified(): string {
    return <string>this._lastModified;
  }

  set lastModified(value: string) {
    this._lastModified = value;
  }

  get pdf(): string {
    return <string>this._pdf;
  }

  set pdf(value: string | null) {
    this._pdf = value;
  }

  constructor(id: number, title: string, content: string, slug: string, bannerImage: string, createdDate: string, lastModified: string, summary: string, resume: string, category: string, pdf: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.slug = slug;
    this.bannerImage = bannerImage;
    this.createdDate = createdDate;
    this.lastModified = lastModified;
    this.summary = summary;
    this.category = category;
    this.resume = resume;
    this.pdf = pdf;
  }
}

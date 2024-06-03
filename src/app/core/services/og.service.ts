import {Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
})
export class OgService {

    constructor(
      private title: Title,
      private meta: Meta
    ) { }

  /**
   * Add params to init, and remove it to reset
   * @param name
   * @param title
   * @param description
   * @param image
   * @param url
   */
    public build(
      name: string = "",
      title: string = "Engeem Data Platform",
      description: string = "Build High-Performance Data Analytics Pipelines for Enterprise Operation Automation",
      image: string = "https://data.engeem.com/assets/images/logo/og-home.png",
      url: string = "https://data.engeem.com"
    ){
      console.log(description);
      this.title.setTitle(`${name == ''?'':name+' -'} Engeem Data Platform`);
      this.meta.updateTag({ name: 'description', content: description });

      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ property: 'og:url', content: url });

      this.meta.updateTag({ name: 'twitter:card', content: "summary_large_image" });
      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.meta.updateTag({ name: 'twitter:image', content: image });
      this.meta.updateTag({ property: 'twitter:domain', content: "data.engeem.com" });
      this.meta.updateTag({ property: 'twitter:url', content: url });
      this.meta.updateTag({ rel: 'canonical', href: url });
    }

}

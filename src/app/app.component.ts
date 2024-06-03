import {Component, ViewChild, HostListener, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd, ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IStaticMethods } from 'preline/preline';
import {Title} from "@angular/platform-browser";
import {OgService} from "./core/services/og.service";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  selectedLang: string = 'en';
  TransLang: string[] = ['en', 'fr'];
  isDropdownOpen = false;
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Display the scroll-up button when the user scrolls beyond a certain point
    this.showScrollButton = window.scrollY > window.innerHeight / 2;
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  constructor(
    private translate: TranslateService,
    private router: Router,
    private og: OgService
  ) {

    const lang = localStorage.getItem('lang');
    if (lang) this.selectedLang = lang;
    translate.addLangs(['en', 'fr']);
    translate.use(this.selectedLang);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: string) {
    this.selectedLang = lang;
    this.toggleDropdown();
    this.setTransLanguage();
  }

  setTransLanguage() {
    this.translate.use(this.selectedLang);
    localStorage.setItem('lang', this.selectedLang);
  }

  clickedOutside(): void {
    this.isDropdownOpen = false;
  }

  @ViewChild('paraDiv', { static: false }) paraDiv: any;

  onDocumentClick(event: any) {
    if (!this.paraDiv.nativeElement.contains(event.target)) {
      // outside click
      this.isDropdownOpen = false;
    }
  }

  ngOnInit() {
    //this.og.build()
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}

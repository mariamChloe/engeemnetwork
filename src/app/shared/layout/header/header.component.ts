import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Routes } from '../../../core/constants/routes';
import { IMenu, Menu } from '../../../core/constants/menu';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          display: 'none',
          height: '0',
        }),
      ),
      state(
        'open',
        style({
          height: '100vh-110px',
        }),
      ),
      transition('open => closed', [animate('0.25s')]),
      transition('closed => open', [animate('0.25s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('myDiv1') myDiv1!: ElementRef;
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (
      this.myDiv &&
      !this.myDiv.nativeElement.contains(event.target) &&
      this.myDiv1 &&
      !this.myDiv1.nativeElement.contains(event.target)
    ) {
      this.clickedOutside();
    }
  }

  @Input() selectedLang: string = 'en';
  @Input() TransLang: string[] = ['en', 'fr'];
  @Input() isDropdownOpen = false;

  public menu: IMenu[] = Menu;
  public category!: IMenu;
  public subCategories: IMenu[] = [];
  public isOpen = false;
  public routes = Routes;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
  ) {
    const lang = localStorage.getItem('lang');
    if (lang) this.selectedLang = lang;
    translate.addLangs(['en', 'fr']);
    translate.use(this.selectedLang);
    const menu = this.menu.find((i) => i.children);
    if (menu) this.updateCategories(menu);
  }

  ngOnInit(): void {}

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
  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(document.documentElement, 'overflow-y-hidden');
    } else {
      this.renderer.removeClass(document.documentElement, 'overflow-y-hidden');
    }
  }
  updateCategories(menu: IMenu): void {
    if (menu && menu.children) {
      const cat = menu.children.find((i) => i.children);
      if (cat && cat.children) {
        this.category = cat;
        this.subCategories = cat.children;
      } else {
        this.subCategories = [];
      }
    } else {
      this.subCategories = [];
    }
  }
  updateSubcategories(category: IMenu): void {
    if (category && category.children) {
      this.category = category;
      this.subCategories = category.children;
    } else {
      this.subCategories = [];
    }
  }
}

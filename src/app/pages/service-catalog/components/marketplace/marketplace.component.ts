import {
  AfterViewInit,
  Component,
  ElementRef, HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import KeenSlider, {KeenSliderInstance} from 'keen-slider';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {FullscreenService} from '../../../../core/services/fullscreen.service';
import {ClipboardService} from 'ngx-clipboard';
import {hostUrl} from '../../../../core/constants/constants';
import {TranslateService} from '@ngx-translate/core';
import {
  ICategory,
  IProduct,
  ISubCategory,
  ISupport,
} from '../../../../core/interfaces/IMarketplace';
import {MarketPlaceService} from '../../../../core/services/market-place.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  animations: [
    trigger('fade', [
      state(
        'closed',
        style({
          opacity: 0,
          display: 'none',
        })
      ),
      state(
        'open',
        style({
          opacity: 1,
        })
      ),
      transition('open => closed', [animate('0.25s')]),
      transition('closed => open', [animate('0.25s')]),
    ]),
    trigger('fade-bg', [
      state(
        'closed',
        style({
          opacity: 0,
          display: 'none',
        })
      ),
      state(
        'open',
        style({
          opacity: 0.25,
        })
      ),
      transition('open => closed', [animate('0.25s')]),
      transition('closed => open', [animate('0.25s')]),
    ]),
  ],
})
export class MarketplaceComponent implements OnDestroy, AfterViewInit, OnInit {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('fullscreenCartContainer' /*, { static: true }*/) FullscreenCartContainer!: ElementRef;
  @ViewChild('fullscreenProductContainer', {static: true})
  FullscreenProductContainer!: ElementRef;

  @HostListener("window:resize", [])
  private onResize() {
    this.initSlide();
  }

  public fullscreenCart = false;
  public fullscreenProduct = false;
  public preload = true;
  public id: string | null = null;

  private cart: IProduct[] = [];
  public showModal = false;
  public showCart = false;
  public perView = 1;
  public currentSlide = 0;
  //public dotHelper: Array<Number> = [];
  public slider!: KeenSliderInstance;
  public supports: ISupport[] = [
    {
      id: 1,
      name: 'ngmSAT',
      description:
        'Technical support and expertise assistance provided to customers on day to day for operation and maintenance on the global system. ENGEEM makes available such a Technical Assistance by Email Connection and Interactive Chatbot helpline Available 24/24h, 7/7 days.',
      availabilityTime: '24H/7Days',
    },
    {
      id: 2,
      name: 'ngmCARE',
      description:
        'Technical support and expertise assistance provided to customers on day to day for operation and maintenance on the global system. ENGEEM makes available such a Technical Assistance by Email Connection and Interactive Chatbot helpline Available 24/24h, 7/7 days.',
      availabilityTime: '24H/7Days',
    },
    {
      id: 3,
      name: 'ngmWATCH',
      description:
        'Technical support and expertise assistance provided to customers on day to day for operation and maintenance on the global system. ENGEEM makes available such a Technical Assistance by Email Connection and Interactive Chatbot helpline Available 8h-18h, 5/7 days.',
      availabilityTime: '8-18h, 5/7 Days',
    },
  ];

  public customOrderForm: FormGroup;

  public productsList!: ICategory[];
  public allProducts: IProduct[] = [];
  public currentCategory!: ICategory;
  public currentSubCategory!: ISubCategory;
  public currentProduct!: IProduct;
  public loading: boolean = false;

  constructor(
    private renderer: Renderer2,
    private toast: ToastrService,
    private fb: FormBuilder,
    private fullscreenService: FullscreenService,
    private clipboardApi: ClipboardService,
    private translateService: TranslateService,
    private marketPlaceService: MarketPlaceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.marketPlaceService.getData().subscribe((response) => {
      this.productsList = response;

      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      if(this.id){
        const prod = this.findProductById(this.productsList, this.id)
        if(prod) {
          this.currentProduct = prod;
          this.toggleModal()
        }
      }

      this.currentCategory = this.productsList[0];
      this.currentSubCategory = this.currentCategory.subCategories[0];
      this.currentProduct = this.currentSubCategory.products[0];
      this.fullscreenService.onFullscreenChange().subscribe((isFullscreen) => {
        this.fullscreenCart = isFullscreen;
        this.fullscreenProduct = isFullscreen;
      });
      const cache: any = localStorage.getItem('cart');
      const c: IProduct[] = JSON.parse(cache) ?? [];
      if (c.length > 0) {
        if (
          c.map((p) => {
            this.toggleToCart(p, true);
          })
        ) {
          localStorage.setItem('cart', JSON.stringify(this.cart));
          this.currentCategory = this.productsList[0];
          this.getAll();
          this.initSlide();
        }
      } else {
        this.currentCategory = this.productsList[0];
        this.getAll();
        this.initSlide();
      }
      this.preload = false;
    });
    this.customOrderForm = this.fb.group({
      Firstname: [null, [Validators.required]],
      Lastname: [null, [Validators.required]],
      Email: [null, [Validators.required, Validators.email]],
      Company: [null],
      Country: [null, [Validators.required]],
      City: [null],
      Indicatif: [null],
      Telephone: [null],
    });
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit() {
    if (!this.preload) this.initSlide();
  }

  public ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  public toggleFullscreen(id: string) {
    // = id?.nativeElement;
    const element = document.getElementById(id)
    console.log(element)
    if (this.fullscreenService.getFullscreenStatus()) {
      this.fullscreenService.exitFullscreen();
    } else {
      this.fullscreenService.enterFullscreen(element);
    }
  }

  public getAll() {
    this.allProducts = [];
    this.currentCategory.subCategories.map((subCategory) => {
      this.allProducts = [...this.allProducts, ...subCategory.products];
    });
    this.currentSubCategory = {
      products: [],
      name: 'all',
      id: 999,
    };
  }

  public toggleModal() {
    this.showModal = !this.showModal;
    if (this.showModal) {
      this.renderer.addClass(document.documentElement, 'overflow-y-hidden');
    } else {
      this.renderer.removeClass(document.documentElement, 'overflow-y-hidden');
      if (this.fullscreenService.getFullscreenStatus()) {
        this.fullscreenService.exitFullscreen();
      }
    }
  }

  public toggleCartModal() {
    this.showCart = !this.showCart;
    if (this.showCart) {
      this.renderer.addClass(document.documentElement, 'overflow-y-hidden');
    } else {
      this.renderer.removeClass(document.documentElement, 'overflow-y-hidden');
      if (this.fullscreenService.getFullscreenStatus()) {
        this.fullscreenService.exitFullscreen();
      }
    }
  }

  public getCartContent(): IProduct[] {
    let ret: IProduct[] = [];
    this.productsList.map((category) => {
      category.subCategories.map((subCategory) => {
        subCategory.products.map((product) => {
          if (product.inCart) ret.push(product);
        });
      });
    });
    return ret;
  }

  public toggleToCart(item: IProduct, loadDataFromCache: boolean = false) {
    this.productsList.some((category) => {
      return category.subCategories.some((subCategory) => {
        const product = subCategory.products.find((p) => p.id === item.id);
        if (product) {
          product.inCart = !product.inCart;
          product.selectedPlan = item.selectedPlan;
          product.selectedSupport = item.selectedSupport ?? this.supports[0];
          const found = this.cart.find((i) => i.id == product.id);
          const isInCart = found ? this.cart.indexOf(found) : -1;
          isInCart == -1
            ? this.cart.push(product)
            : this.cart.splice(isInCart, 1);

          if (!loadDataFromCache) {
            product.inCart
              ? this.toast.success(
                this.translateService.instant(
                  'marketplace.Alerts.AddedToCart'
                )
              )
              : this.toast.info(
                this.translateService.instant(
                  'marketplace.Alerts.RemovedFromCart'
                )
              );
            localStorage.setItem('cart', JSON.stringify(this.cart));
          }
          return true; // Pour arrêter la recherche une fois que le produit est trouvé
        }
        return false;
      });
    });
  }

  public getTotal() {
    let sum: number = 0;
    return this.cart.map((p) => {
      sum = sum + p.selectedPlan.price;
    })
      ? new Intl.NumberFormat().format(sum)
      : '0';
  }

  public formatNumb(nb: number) {
    return Intl.NumberFormat().format(nb);
  }

  public getCategory(item: ICategory) {
    this.currentCategory = item;
    this.getAll();
    this.currentSlide = 0;
    this.initSlide();
  }

  public getSubCategory(item: ISubCategory) {
    this.currentSubCategory = item;
    this.allProducts = [];
  }

  public getProduct(item: IProduct) {
    this.currentProduct = item;
    this.toggleModal();
  }

  private getPerView(): number {
    // Adjust the breakpoint as needed
    if (window.innerWidth < /*(768/4)*3)*/ 768) return (this.perView = 1);
    if (window.innerWidth < /*(1000/4)*3*/ 1024) return (this.perView = 2);
    if (window.innerWidth < /*(1500/4)*3*/ 1280) return (this.perView = 3);
    if (window.innerWidth < /*(1500/4)*3*/ 1536) return (this.perView = 4);
    else return (this.perView = 5);
  }

  public buildBanner(img?: string): string {
    if (img) return `background-image: url(${img})`;
    return `background-image: url('assets/images/no-image.png')`;
  }

  public initSlide() {
    this.slider?.destroy();
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        slides: {
          perView: this.getPerView(),
          spacing: 10,
        },
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
      /*this.dotHelper = Array.from(
        {
          length: Math.ceil(
            this.slider.track.details.slides.length / this.getPerView()
          ),
        },
        (_, i) => i
      );*/
    });
  }

  public actualizeCart() {
    const found = this.cart.find((i) => i.id == this.currentProduct.id);
    const isInCart = found ? this.cart.indexOf(found) : -1;
    if (isInCart == -1) {
      this.cart.push(this.currentProduct);
    } else {
      this.cart.splice(isInCart, 1);
      this.cart.push(this.currentProduct);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public onSubmit() {
    if (this.customOrderForm.valid) {
      console.log(this.cart)
      if (this.cart.length > 0) {
        Swal.fire({
          title: this.translateService.instant(
            'marketplace.Alerts.ConfirmationModalTitle'
          ),
          text: this.translateService.instant(
            'marketplace.Alerts.ConfirmationModalQuestion'
          ),
          showDenyButton: false,
          showCancelButton: true,
          reverseButtons: true,
          cancelButtonColor: '#d7dce0',
          confirmButtonText: this.translateService.instant(
            'marketplace.Alerts.ConfirmationModalOK'
          ),
          icon: 'question',
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: this.translateService.instant(
                'marketplace.Alerts.LoadingModalTitle'
              ),
              html: this.translateService.instant(
                'marketplace.Alerts.LoadingModalContent'
              ),
              allowEscapeKey: false,
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
                this.marketPlaceService
                  .SendMails({...this.customOrderForm.value, Cart: this.cart})
                  .subscribe({
                    next: (response) => {
                      console.log("SendMail", response)
                      //Swal.hideLoading();
                      if(response){
                        console.log("SendMail")
                        Swal.fire({
                            html: `
                            ${this.translateService.instant(
                              'marketplace.Alerts.SuccessModalContent'
                            )} </br>
                                    <small style="margin-top: .5rem;">
                                    ${this.translateService.instant(
                              'marketplace.Alerts.SuccessModalSubTitle'
                            )}</small>
                                `,
                            icon: 'success',
                          })
                          .then(() => {
                          });
                        this.reset();
                      }else{
                        Swal.close();
                        this.toast.error(
                          this.translateService.instant(
                            'marketplace.Alerts.TooltipServerError'
                          ),
                          'Oops'
                        );
                      }
                      //Swal.clickConfirm();
                    },
                    error: () => {
                      Swal.close();
                      this.toast.error(
                        this.translateService.instant(
                          'marketplace.Alerts.TooltipServerError'
                        ),
                        'Oops'
                      );
                    },
                    complete: () => {
                    },
                  });
                /*setTimeout(()=>{
                            Swal.hideLoading()
                            Swal.clickConfirm()

                },3000)*/
              },
            }).then();
          }
        });
      } else {
        this.toast.error(
          this.translateService.instant(
            'marketplace.Alerts.TooltipSelectLeastOne'
          )
        );
      }
    } else {
      Object.values(this.customOrderForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.markAsTouched();
          control.markAsPristine();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
      this.toast.error(
        this.translateService.instant('marketplace.Alerts.TooltipFormError')
      );
    }
  }

  public reset() {
    this.toggleCartModal();
    this.productsList.map((cat) => {
      cat.subCategories.map((subCat) => {
        subCat.products.map((prod) => {
          prod.inCart = false;
          prod.selectedPlan = prod.facturationPlans[0];
          prod.selectedSupport = this.supports[0];
        });
      });
    });
    this.getAll();
    this.cart = [];
    localStorage.removeItem('cart');
  }

  public copyServiceLink(product: IProduct) {
    this.clipboardApi.copyFromContent(`${hostUrl}/catalog/${product.id}`);
    this.toast.info(
      this.translateService.instant('marketplace.Alerts.TooltipLinkCopied')
    );
  }

  public findProductById(categories: ICategory[], productId: string): IProduct | null {
    // Parcourir le tableau de catégories
    for (const category of categories) {
      // Parcourir le tableau de sous-catégories
      for (const subCategory of category.subCategories) {
        // Utiliser la méthode find pour rechercher le produit par ID
        const foundProduct = subCategory.products.find(product => product.id === productId);

        // Si le produit est trouvé, le renvoyer
        if (foundProduct) {
          return foundProduct;
        }
      }
    }

    // Renvoyer null si le produit n'est pas trouvé
    return null;
  }

}

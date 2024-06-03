import {
  Component,
  EventEmitter, Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewerService } from '../../../core/services/viewer.service';
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Component({
  selector: 'app-viewer-form',
  templateUrl: './viewer-form.component.html',
  styleUrls: ['./viewer-form.component.css'],
})
export class ViewerFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public isLoading: boolean = false;
  public privacyPolicy: FormControl<boolean|null> = new FormControl(false)

  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title: string =  "Se Connecter";
  @Input() titleClass: string =  "text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center";
  @Input() button: string =  "Lire l'article";
  @Input() isArticle: boolean =  true;
  constructor(
    private viewerService: ViewerService,
    private toast: ToastrService
  ) {
    this.form = new FormGroup<any>({
      firstname: new FormControl(null, { validators: [Validators.required] }),
      lastname: new FormControl(null, { validators: [Validators.required] }),
      email: new FormControl(null, { validators: [Validators.required] }),
      phone: new FormControl(null),
      organization: new FormControl(null, {
        validators: [Validators.required],
      }),
      role: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.onVerifyStatus();
  }

  private onVerifyStatus() {
    this.viewerService.getViewer().subscribe({
      next: (value) => {
        console.log('verifyStatus Response', value);
        this.isLoading = false;
        if (value) {
          this.form = new FormGroup<any>({
            firstname: new FormControl(value.firstname, { validators: [Validators.required] }),
            lastname: new FormControl(value.lastname, { validators: [Validators.required] }),
            email: new FormControl(value.email, { validators: [Validators.required] }),
            phone: new FormControl(value.phone),
            organization: new FormControl(value.organization, {
              validators: [Validators.required],
            }),
            role: new FormControl(value.role, { validators: [Validators.required] }),
          });
          if(this.isArticle){

          }
          this.result.emit(true);
        }
      },
      error: () => {
        this.isLoading = false;
        this.result.emit(true);
      },
    });
  }
  public hubspotEndPoint =
    'https://forms.hubspot.com/uploads/form/v2/143515210/19da8ead-bbac-4bde-a854-1c31342c050b';
  public onSubmit() {
    if (this.form.valid) {
      console.log('dataSend', this.form.value);
      this.isLoading = true;
      // convert form data to JSON
      // const formData = JSON.stringify(this.form.value);
      // Send data to HubSpot
      /*fetch(this.hubspotEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain, *',
        },
      })
        .then((response) => response)
        .then((data) => {
          console.log('Form submitted to HubSpot successfully:', data);
          // Optionally, reset the form after successful submission
          this.form.reset();
        })
        .catch((error:any) => {
          console.log(error);
        });*/



      Swal.fire({
        title: "Chargement...",
        html: "Veuillez patienter...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
          this.viewerService.postViewer(this.form.getRawValue(), this.isArticle).subscribe({
            next: (value) => {
              console.log('onSubmit Response', value);
              this.isLoading = false;
              if(this.isArticle){
                this.toast.success(`Bonne lecture!`, `Bienvenue ${value?.firstname}`);
                Swal.close();
              }else {
                Swal.fire({
                  html: `
                        <strong>Merci ${value?.firstname}, votre Souscription a bien été prise en compte !</strong></br>
                        <small style="margin-top: .5rem;">Vous serez contactés par nos Equipes Projets.</small>
                      `,
                  icon: 'success',
                }).then(() => {
                  this.form.reset()
                });
              }
              this.result.emit(true);
            },
            error: (err) => {
              Swal.hideLoading();
              Swal.close();
              this.toast.error("Une erreur s'est produite","Oops");
              console.log(err);
              this.isLoading = false;
              this.result.emit(false);
            },
          });
        },
      }).then(()=>{

      });


    } else {
      this.toast.warning(
        "Formulaire invalide. Veuillez verifier l'exactitude des informations fournies puis réessayer"
      );
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsTouched({ onlySelf: true });
          control.markAsDirty({ onlySelf: true });
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}

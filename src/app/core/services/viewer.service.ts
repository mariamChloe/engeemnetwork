import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {IViewer, Viewer} from '../models/Viewer';
import {BehaviorSubject, catchError, map, Observable, tap, throwError} from 'rxjs';
import {baseUrl, blogBaseUrl, hubSpotBaseUrl} from "../constants/constants";
import {ToastrService} from "ngx-toastr";
import {ICustomerRequest} from "../interfaces/ICustomerRequest";
import {logoWhite} from "../constants/imageFile";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class ViewerService {

  private url = blogBaseUrl+'/viewers';
  public currentViewer: BehaviorSubject<Viewer|null> = new BehaviorSubject<Viewer | null>(null )

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    @Inject(LOCALE_ID) public locale: string,
  ) {}

  public postViewer(viewer: IViewer, isArticle:boolean): Observable<IViewer> {
    return this.http.post<IViewer>(`${this.url}`, viewer).pipe(
      tap(()=>{
        const customer:ICustomerRequest = {
          Email: viewer.email,
          Company: viewer.organization,
          Firstname: viewer.firstname,
          Lastname: viewer.lastname,
          Telephone: viewer.phone,
          City: "",
          Country: "",
          Cart: [],
          Indicatif: "+225",
        }

        if(!isArticle)this.SendMails(customer).subscribe({
          error: err=>{
            console.log("SendMailsError",err)
          }
        })
        this.postUbSpotForm(viewer).subscribe({
          next: res=>{
            console.log("postUbSpotFormSuccess",res)
          },
          error: err=>{
            console.log("postUbSpotFormError",err)
          }
        })
      })
    );
  }
  public verifyStatus(): Observable<Viewer|null> {
    if(this.currentViewer.value) return this.currentViewer.asObservable();
    return this.getViewer();
  }

  public getViewer(): Observable<Viewer|null>{
    return this.http.get<IViewer>(`${this.url}`).pipe(
      map((res)=>{
        this.currentViewer.next(new Viewer(res));
        return this.currentViewer.value;
      }),
      catchError((error) => {
        if(error.status != 404){
          console.log('Viewer non trouvé')
          this.toast.error("Erreur lors de la récupération des données");
        }
        console.log('onSubmit Error',error)
        return throwError(() => 'Erreur lors de la récupération des données');
      })

    );
  }

  private postUbSpotForm(viewer: IViewer):Observable<any>{
    return this.http.post(hubSpotBaseUrl, viewer)
  }

  /**
   *
   * @param sentData
   * @constructor
   */
  public SendMails(sentData: ICustomerRequest): Observable<any> {

    let data: {
      "to": string,
      "subjectAdmin": string,
      "subjectClient": string,
      "bodyAdmin": string,
      "bodyClient": string,
    } = {
      "to": sentData.Email,
      "subjectAdmin": "Notification de Commande",
      "bodyAdmin": this.adminMailBuilder(sentData),
      "subjectClient": "Bienvenue chez ENGEEM",
      "bodyClient": this.clientMailBuilder(sentData)
    }
    console.log(data);

    return this.http.post<any>(
      `${baseUrl}/contact/send-service`, data
    ).pipe(
      map((response) => {
        console.log(response)
        /* if (response.status_code === STATUS_CODE.SUCCESS) {

         }*/
        return response;
      })
    );
  }


  private adminMailBuilder(sentData: ICustomerRequest,): string {
    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Notification de Commande</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    th{
                      text-align: start;
                      padding: 5px;
                      color: #324B63;
                    }
                    td{
                      padding: 5px;
                    }
                    .container {
                        width: 80%;
                        margin: auto;
                    }
                    .header {
                        background-color: #324B63;
                        color: white;
                        text-align: center;
                        padding: 1em;
                    }
                    .content {
                        padding: 2em;
                    }
                    .footer {
                        background-color: #f4f4f4;
                        padding: 1em;
                        text-align: center;
                        color: #324B63;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img style="max-height: 4rem;" src="${logoWhite}" alt="">
                        <h2 style="margin-top: 0;">Notification de Commande</h2>
                    </div>
                    <div class="content">
                        <p>Cher administrateur,</p>
                        <p>Une nouvelle commande a été effectuée. Voici les détails</p><br>
                        <h3>Informations sur la commande</h3>
                        <br>
                        <ul>
                            <li>
                                <strong>Nom du client :</strong> ${sentData.Firstname} ${sentData.Lastname}
                            </li>
                            <li>
                                <strong>Entreprise du client :</strong> ${sentData.Company}
                            </li>
                            <li>
                                <strong>Email du client :</strong> ${sentData.Email}
                            </li>
                            <li>
                                <strong>Téléphone du client :</strong> ${sentData.Indicatif} ${sentData.Telephone}
                            </li>

                            <li>
                                <strong>Date de la commande :</strong> ${formatDate(Date.now(), "dd/MM/yyyy HH:mm", this.locale)}
                            </li>

                            <li>
                                <strong>Commande effectuée depuis la landing page des offres!</strong>
                            </li>
                        </ul>
                        <br>
                        <p>Merci de prendre les mesures nécessaires pour traiter cette commande.</p>
                        <p>Cordialement</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 ENGEEM. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </body>
            </html>
        `
  }

  private clientMailBuilder(sentData: ICustomerRequest): string {

    return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bienvenue chez ENGEEM</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    th{
                      text-align: start;
                      padding: 5px;
                      color: #324B63;
                    }
                    td{
                      padding: 5px;
                    }
                    .container {
                        width: 80%;
                        margin: auto;
                    }
                    .header {
                        background-color: #324B63;
                        color: white;
                        text-align: center;
                        padding: 1em;
                    }
                    .content {
                        padding: 2em;
                    }
                    .footer {
                        background-color: #f4f4f4;
                        padding: 1em;
                        text-align: center;
                        color: #324B63;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img style="max-height: 4rem;" src="${logoWhite}" alt="">
                        <h2 style="margin-top: 0;">Notification de Commande</h2>
                    </div>
                    <div class="content">
                        <p>Cher(e) ${sentData.Firstname},</p>
                        <p>Merci pour votre Confiance et votre Commande ENGEEM, Plateforme Analytique pour Moderniser votre BI.</p>
                        <p>Notre Equipe Technique Commerciale vous contactera rapidement afin d'affiner vos spécifications projets et planifier le démarrage de votre projet.</p>

                        <br>
                        <p>A bientôt !
                        </p>
                        <p>L'Equipe ENGEEM</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 ENGEEM. Tous droits réservés.</p>
                    </div>
                </div>
            </body>
            </html>
        `
  }
}

import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICustomerRequest} from "../interfaces/ICustomerRequest";
import {map, Observable} from "rxjs";
import {baseUrl} from "../constants/constants";
import {TranslateService} from "@ngx-translate/core";
import {formatDate} from "@angular/common";
import {logoWhite} from "../constants/imageFile";

@Injectable({
    providedIn: 'root'
})
export class MarketPlaceService {

    constructor(
        private httpClient: HttpClient,
        private translateService: TranslateService,
        @Inject(LOCALE_ID) public locale: string,
    ) { }

  /**
   *
   * @param sentData
   * @constructor
   */
    public SendMails(sentData: ICustomerRequest): Observable<any> {
        const isFrench = this.translateService.currentLang === "fr";

        let total = 0;
        sentData.Cart.map((i) => {
            total += i.selectedPlan.price
        })

        let table = "";
        sentData.Cart.map((cat, i) => {
            table += `
                <tr>
                   <th style="max-width: 10px">${i + 1}</th>
                   <td><strong>${cat.name}</strong></td>
                   <td>${cat.selectedPlan.name}</td>
                   <td>${cat.selectedSupport?cat.selectedSupport.name:'ngmSAT'}</td>
                   <td style="text-align: end !important;">
                        ${cat.devise} ${Intl.NumberFormat().format(cat.selectedPlan.price)}/${cat.selectedPlan.period}
                   </td>
               </tr>
            `
        })

        let data: {
            "to": string,
            "subjectAdmin": string,
            "subjectClient": string,
            "bodyAdmin": string,
            "bodyClient": string,
        } = {
            "to": sentData.Email,
            "subjectAdmin": isFrench ? "Nouvelle commande de services" : "New service order",
            "bodyAdmin": this.adminMailBuilder(sentData, isFrench, total, table),
            "subjectClient": isFrench ? "Votre commande à bien été enregistrée" : "Your order has been registered",
            "bodyClient": this.clientMailBuilder(sentData, isFrench, total, table)
        }
      console.log(data);

        return this.httpClient.post<any>(
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

    public getData(): Observable<any> {
      return this.httpClient.get<any>('assets/data/ServicesFormattedInJSON.json');
    }

    private adminMailBuilder(sentData: ICustomerRequest, isFrench: boolean, total: number, table: string): string {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${isFrench ? "Notification de Commande" : "Order Notification"}</title>
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
                        <h2 style="margin-top: 0;">${isFrench ? "Notification de Commande" : "Order Notification"}</h2>
                    </div>
                    <div class="content">
                        <p>${isFrench ? "Cher administrateur," : "Dear administrator"},</p>
                        <p>${isFrench ?
            "Une nouvelle commande a été effectuée. Voici les détails :" :
            "A new order has been placed. Here are the details :"}
                        </p><br>
                        <h3>${isFrench ?
            "Informations sur la commande " :
            "Order information "}
                         :</h3>
                        <br>
                        <ul>
                            <li>
                                <strong>${isFrench ?
            "Nom du client :" :
            "Client name"}
                                </strong> ${sentData.Firstname} ${sentData.Lastname}
                            </li>
                            <li>
                                <strong>${isFrench ?
            "Entreprise du client :" :
            "Client company"}
                                </strong> ${sentData.Company}
                            </li>
                            <li>
                                <strong>${isFrench ?
            "Email du client :" :
            "Client email"}
                                </strong> ${sentData.Email}
                            </li>
                            <li>
                                <strong>${isFrench ?
            "Téléphone du client :" :
            "Client phone number"}
                                </strong> ${sentData.Indicatif} ${sentData.Telephone}
                            </li>
                            <li>
                                <strong>${isFrench ?
            "Adresse du client :" :
            "Client address"}
                                </strong> ${sentData.City}, ${sentData.Country}
                            </li>
                            <li>
                                <strong>${isFrench ?
            "Date de la commande :" :
            "Order date"}
                                </strong> ${formatDate(Date.now(), "dd/MM/yyyy HH:mm", this.locale)}
                            </li>
                        </ul>
                        <table style="width: 100%;"><!-- border: 1px solid #324B63-->
                                    <tr style="border-bottom: 1px solid #324B63; ">
                                        <th>#</th>
                                        <th>Service</th>
                                        <th>${isFrench ?
            "Plan de facturation" :
            "Billing Plan"}
                                        </th>
                                        <th>${isFrench ?
            "Plan de support" :
            "Support Plan"}
                                        </th>
                                        <th style="text-align: end !important;">
                                            ${isFrench ?
            "Prix" :
            "Price"}
                                        </th>
                                    </tr>
                                ${table}
                        </table>
                        <br>
                        <h3 style="text-align: end;">
                            TOTAL : <span style="font-size: x-large; color: #324B63">
                                ${sentData.Cart[0].devise} ${Intl.NumberFormat().format(total)}
                            </span>
                        </h3>
                        <br>
                        <p>${isFrench ?
            "Merci de prendre les mesures nécessaires pour traiter cette commande." :
            "Please take the necessary steps to process this order."}
                        </p>
                        <p>${isFrench ?
            "Cordialement" :
            "Sincerely"}
                        </p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 ENGEEM. ${isFrench ?
            "Tous droits réservés" :
            "All rights reserved"}.
                        </p>
                    </div>
                </div>
            </body>
            </html>
        `
    }

    private clientMailBuilder(sentData: ICustomerRequest, isFrench: boolean, total: number, table: string): string {

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${isFrench ? "Notification de Commande" : "Order Notification"}</title>
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
                        <h2 style="margin-top: 0;">${isFrench ? "Notification de Commande" : "Order Notification"}</h2>
                    </div>
                    <div class="content">
                        <p>${isFrench ? "Cher(e)" : "Dear"} ${sentData.Firstname},</p>
                        <p>${isFrench ?
            "Merci pour votre Confiance et votre Commande sur notre Plateforme de Données ENGEEM pour l'Automatisation des Enterprises." :
            "Thank you for your trust and for ordering from ENGEEM Automation Data Platform"}
                            <br>
                            ${isFrench ?
            "Voici un récapitulatif de votre Projet." :
            "Here is a summary of your Project. "}
                        </p>
                        <p>${isFrench ?
            "Notre Equipe Technique Commerciale vous contactera rapidement afin d'affiner les spécifications et planifier le démarrage de votre Projet :" :
            "Our Sales Representative will Contact you soon for your Project Kick-Off preparation : "}
                        </p><br>
                        <h3>${isFrench ?
            "Votre Récapitulatif de Commande " :
            "Your Order Summary "}
                         :</h3>
                        <br>
                        <table style="width: 100%;"><!-- border: 1px solid #324B63-->
                                    <tr style="border-bottom: 1px solid #324B63; ">
                                        <th>#</th>
                                        <th>Service</th>
                                        <th>${isFrench ?
            "Plan de facturation" :
            "Billing Plan"}
                                        </th>
                                        <th>${isFrench ?
          "Plan de support" :
          "Support Plan"}
                                        </th>
                                        <th style="text-align: end !important;">
                                            ${isFrench ?
            "Prix" :
            "Price"}
                                        </th>
                                    </tr>
                                ${table}
                        </table>
                        <br>
                        <h3 style="text-align: end;">
                            TOTAL : <span style="font-size: x-large; color: #324B63">
                                ${sentData.Cart[0].devise} ${Intl.NumberFormat().format(total)}
                            </span>
                        </h3>
                        <br>
                        <p>${isFrench ?
            "A bientôt !" :
            "See you soon !"}
                        </p>
                        <p>${isFrench ?
            "L'Equipe ENGEEM" :
            "The ENGEEM Team"}</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 ENGEEM. ${isFrench ?
            "Tous droits réservés" :
            "All rights reserved"}.</p>
                    </div>
                </div>
            </body>
            </html>
        `
    }
}

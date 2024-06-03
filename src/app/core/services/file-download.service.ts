import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class FileDownloadService {
  constructor(
    private sanitizer: DomSanitizer,
    private toast: ToastrService
  ) {}

  /*public downloadBase64File(base64Data: string, fileName: string): void {

    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    const sanitizedUrl:any = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob)) as SafeUrl;

    saveAs(sanitizedUrl, `${fileName}.${this.getFileExtension(blob)}`);

    this.toast.success("Votre fichier a été téléchargé avec succès", "Bonne lecture!")
  }*/
  public downloadBase64File(base64Data: string, fileName: string): void {

    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });

    const sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob)) as SafeUrl;

    // Créer un lien d'ancrage pour le téléchargement
    /*const anchor:any = document.createElement('a');
    anchor.href = sanitizedUrl;//.toString();
    anchor.download = `${fileName}.${this.getFileExtension(blob)}`;*/

    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = fileName;


    // Simuler un clic sur le lien d'ancrage pour déclencher le téléchargement
    document.body.appendChild(anchor);
    anchor.click();

    // Supprimer le lien d'ancrage
    document.body.removeChild(anchor);

    // Révoquer l'URL de l'objet blob pour libérer la mémoire
    URL.revokeObjectURL(sanitizedUrl.toString());

    this.toast.success("Votre fichier a été téléchargé avec succès", "Bonne lecture!");
  }

  public getFileExtension(blob: Blob): string {
    const parts = blob.type.split('/');
    return parts[parts.length - 1];
  }
}

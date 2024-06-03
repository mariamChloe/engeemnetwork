// fullscreen.service.ts
import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FullscreenService {
    private isFullscreen = false;
    private fullscreenStatusSubject = new BehaviorSubject<boolean>(this.isFullscreen);

    constructor(
        private ngZone: NgZone
    ) {
        // Écoute l'événement fullscreenchange dans la zone Angular
        this.ngZone.runOutsideAngular(() => {
            document.addEventListener('fullscreenchange', this.handleFullscreenChange.bind(this));
            document.addEventListener('webkitfullscreenchange', this.handleFullscreenChange.bind(this));
            document.addEventListener('mozfullscreenchange', this.handleFullscreenChange.bind(this));
            document.addEventListener('MSFullscreenChange', this.handleFullscreenChange.bind(this));
        });
    }

    private handleFullscreenChange() {
        this.isFullscreen = !!(
            document.fullscreenElement
        );
        this.fullscreenStatusSubject.next(this.isFullscreen);
    }

    enterFullscreen(element: any) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        this.isFullscreen = true;
    }

    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(() => this.handleFullscreenChange());
        }
        this.isFullscreen = false;
    }

    getFullscreenStatus(): boolean {
        return this.isFullscreen;
    }
    onFullscreenChange() {
        return this.fullscreenStatusSubject.asObservable();
    }
}

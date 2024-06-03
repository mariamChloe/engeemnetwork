import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() tooltipText: string = '';
  private tooltipElement: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    // Créer l'élément du tooltip
    this.tooltipElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, text);

    // Ajouter des classes Tailwind CSS au tooltip
    this.renderer.addClass(this.tooltipElement, 'bg-blue-500');
    this.renderer.addClass(this.tooltipElement, 'p-2');
    this.renderer.addClass(this.tooltipElement, 'text-white');
    // Ajoutez d'autres classes Tailwind selon vos besoins

    // Positionner le tooltip par rapport à l'élément hôte
    const hostPosition = this.el.nativeElement.getBoundingClientRect();
    const tooltipPosition = {
      top: hostPosition.top - this.tooltipElement.clientHeight - 10,
      left: hostPosition.left + hostPosition.width / 2 - this.tooltipElement.clientWidth / 2
    };

    // Appliquer les styles de positionnement
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'top', `${tooltipPosition.top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${tooltipPosition.left}px`);

    // Ajouter le tooltip au DOM
    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  private hideTooltip() {
    // Supprimer le tooltip du DOM
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}

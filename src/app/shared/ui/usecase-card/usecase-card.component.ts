import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-usecase-card',
  templateUrl: './usecase-card.component.html',
  styleUrls: ['./usecase-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsecaseCardComponent {
  @Input() number!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Input() subtitle!: string;
  @Input() isLastCard!: boolean;
  @Input() variant: string = 'default'; // Default to 'default' variant

  get variantClass(): string {
    return this.variant === 'smaller' ? 'lg:h-72' : ''; // Apply 'h-72' class if variant is 'smaller'
  }
}

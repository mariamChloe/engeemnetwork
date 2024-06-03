import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input() type:'loader1'|'loader2'|'loader3' = 'loader3';
  @Input() loaderClass:string = 'h-36';
  @Input() containerClass:string = 'flex flex-col justify-center items-center p-12';
}

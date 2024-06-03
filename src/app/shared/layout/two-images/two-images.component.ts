import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-images',
  templateUrl: './two-images.component.html',
  styleUrls: ['./two-images.component.css'],
})
export class TwoImagesComponent {
  @Input() headBlockTitle: string[] = [
    'twoImagesDefaultText.headBlockTitle1',
    'twoImagesDefaultText.headBlockTitle2',
  ];
  @Input() headBlockTitleClass: string =
    'lg:text-5xl font-medium text-brand-old-blue text-center mb-4';
  @Input() headBlockContent: string[] = [];
  @Input() headBlockContentClass: string =
    'text-center text-2xl font-normal mt-4';

  @Input() leftBlockImgUrl: string = '/assets/images/no-image.svg';
  @Input() leftBlockImgClass: string =
    'w-full rounded-2xl max-h-80 lg:max-h-full object-cover';
  @Input() leftBlockImgAlt: string = 'no image';
  @Input() leftBlockImgVisible: boolean = true;
  @Input() leftBlockTitle: string[] = ['twoImagesDefaultText.leftBlockTitle'];
  @Input() leftBlockTitleClass: string = 'text-xl text-center lg:text-left';
  @Input() leftBlockContent: string[] = [
    'twoImagesDefaultText.leftBlockContent1',
    'twoImagesDefaultText.leftBlockContent2',
    'twoImagesDefaultText.leftBlockContent3',
    'twoImagesDefaultText.leftBlockContent4',
  ];
  @Input() leftBlockContentClass: string = 'text-xl text-center lg:text-left';

  @Input() rightBlockPlacement: 'md:flex-col' | 'md:flex-row' = 'md:flex-row';
  @Input() rightBlockImgUrl: string = '/assets/images/no-image.svg';
  @Input() rightBlockImgClass: string =
    'w-full rounded-2xl max-h-80 lg:max-h-full object-cover';
  @Input() rightBlockImgAlt: string = 'no image';
  @Input() rightBlockImgVisible: boolean = true;
  @Input() rightBlockTitle: string[] = ['twoImagesDefaultText.rightBlockTitle'];
  @Input() rightBlockTitleClass: string =
    'text-center lg:text-left text-2xl mb-2 my-6 font-bold';
  @Input() rightBlockContent: string[] = [
    'twoImagesDefaultText.rightBlockContent1',
    'twoImagesDefaultText.rightBlockContent2',
    'twoImagesDefaultText.rightBlockContent3',
    'twoImagesDefaultText.rightBlockContent4',
  ];
  @Input() rightBlockContentClass: string = 'text-xl text-center lg:text-left';
  @Input() rightBlockTextVisible: boolean = true;

  @Input() rightBlockPlacement2: 'md:flex-col' | 'md:flex-row' = 'md:flex-row';
  @Input() rightBlockImgUrl2: string = '/assets/images/no-image.svg';
  @Input() rightBlockImgClass2: string =
    'rounded-2xl max-h-80 lg:max-h-full object-cover';
  @Input() rightBlockImgAlt2: string = 'no image';
  @Input() rightBlockImgVisible2: boolean = false;
  @Input() rightBlockTitle2: string[] = [];
  @Input() rightBlockTitleClass2: string =
    'text-center lg:text-left text-2xl mb-2 my-6 font-bold';
  @Input() rightBlockContent2: string[] = [];
  @Input() rightBlockContentClass2: string = 'text-xl text-center lg:text-left';
  @Input() rightBlockTextVisible2: boolean = false;

  @Input() illustration: 'circles' | 'mascot' = 'mascot';

  @Input() enableButton: boolean = true;
  @Input() buttonLink: string = '';
  @Input() buttonText: string = 'Button.chatWithExperts';
  @Input() buttonClass: string = 'btn-rounded btn-old-blue';

  /*@Input() _headLine: string|string[] = [
    'MANAGE EASILY YOUR CONNECTION',
    ' EXPERIENCE IN THE CLOUD'
  ];
  public headLine: string[] = [];
  @Input() _headLineClass: string = '';

  @Input() _subHeadLine: string|string[] = [];
  public subHeadLine: string[] = [''];
  @Input() _subHeadLineClass: string = '';


  @Input() _smallImgUrl: string = '/assets/images/no-image.svg';
  @Input() _smallImgClass:string = 'rounded-2xl max-h-80 lg:max-h-full';

  @Input() _bigImgUrl: string = '/assets/images/no-image.svg';
  @Input() _bigImgClass:string = 'rounded-2xl max-h-80 lg:max-h-full';

  @Input() _rightTextTitle: string|string[] = 'OUR SECURITY FRAMEWORK & PROTOCOLS';
  public rightTextTitle: string[] = [''];
  @Input() _rightTextTitleClass:string = 'text-center lg:text-left';

  @Input() _rightTextContent: string|string[] = [
    'Periodical Defensive Tests, Scans, and ANSSI-based compliance Checks',
    'Asset and Data Protocol Hardening',
    'Access Control based on Business Roles and Privileges',
    'Security, Encryption, and Logging'
  ];
  public rightTextContent: string[] = [''];
  @Input() _rightTextContentClass:string = 'text-center lg:text-left';


  @Input() _smallImgTitle: string|string[] = 'Configure your network with the required SLA/SLS';
  public smallImgTitle: string[] = [''];
  @Input() _smallImgTitleClass:string = 'text-center lg:text-right';

  @Input() _smallImgContent: string|string[] = [
    'Get you to the better network capabiltiies for operationnal innovation',
    'Communication Service monitoring',
    'Device Location Management',
    'Experience Operation Automation'
  ];
  public smallImgContent: string[] = [''];
  @Input() _smallImgContentClass:string = 'text-center lg:text-right';*/

  constructor() {
    /*this.headLine = this.formatterRowLines(this._headLine);
    this.subHeadLine = this.formatterRowLines(this._subHeadLine);
    this.smallImgTitle = this.formatterRowLines(this._smallImgTitle);
    this.smallImgContent = this.formatterRowLines(this._smallImgContent);
    this.rightTextTitle = this.formatterRowLines(this._rightTextTitle);
    this.rightTextContent = this.formatterRowLines(this._rightTextContent);*/
  }

  private formatterRowLines(input: string | string[]): string[] {
    let output: string[] = [...input];
    if (typeof input == 'string') output = [input];
    return output;
  }
}

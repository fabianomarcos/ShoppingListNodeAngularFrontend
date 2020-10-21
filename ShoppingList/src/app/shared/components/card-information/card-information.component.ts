import { Component, Input, OnInit } from '@angular/core';

interface InformationItem {
  title: string;
  value: number;
  icon: any;
}

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  @Input() item: Array<InformationItem> = [];
  @Input() income: number = 0;
  @Input() outcome: number = 0;
  @Input() balance: number = 0;

  constructor() { }

  ngOnInit(): void {}

}

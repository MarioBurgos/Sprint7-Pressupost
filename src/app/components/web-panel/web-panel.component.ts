import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-web-panel',
  templateUrl: './web-panel.component.html',
  styleUrls: ['./web-panel.component.scss']
})
export class WebPanelComponent implements OnInit {

  @Input() public inputLabel!: string;
  @Output() emitterPanel: EventEmitter<string> = new EventEmitter();

  public nPages = 1;
  public nLang = 1;

  public label = {
    pages: "Número de páginas",
    lang: "Número de idiomas",
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  calcPanelPrice(): string {
    let result = Number(this.nPages) * Number(this.nLang) * 30;
    // console.log(result);
    return String(result);
  }


  emitOnChanges() {
    // console.log(this.calcPanelPrice());
    this.emitterPanel.emit(this.calcPanelPrice());
  }

}

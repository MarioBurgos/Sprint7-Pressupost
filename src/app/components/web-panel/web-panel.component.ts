import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-web-panel',
  templateUrl: './web-panel.component.html',
  styleUrls: ['./web-panel.component.scss']
})
export class WebPanelComponent implements OnInit {

  @Input() public inputLabel!: string;
  @Output() emitterPanel: EventEmitter<string> = new EventEmitter<string>();

  public nPages = 0;
  public nLang = 0;
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
    return String(result);
  }

  emitOnChanges() {

    this.emitterPanel.emit(String(this.calcPanelPrice()));
  }

}

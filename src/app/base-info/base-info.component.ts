import { Component, OnInit } from '@angular/core';
import { WinLossService } from '../services/win-loss.service';
import { WLObject } from '../services/interfaces';

interface CoreObject {
  classes: string;
}

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})

export class BaseInfoComponent implements OnInit {

  core: CoreObject;
  wl: WLObject;

  constructor(private AccountId, private WLService: WinLossService) {
    this.core = {
      classes: 'root'
    };
  }

  ngOnInit(): void {
    this.WLService.getWL('https://api.opendota.com/api/players/254211213/wl')
      .subscribe(value => {
          this.wl = value;
          console.log(this.wl);
        },
        error => {
        console.log(error);
        });
  }
}

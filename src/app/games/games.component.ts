import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  public categories = [
    {value: 'steak-0', label: 'Steak'},
    {value: 'pizza-1', label: 'Pizza'},
    {value: 'tacos-2', label: 'Tacos'}
  ];
  public tabs = [
    {label: 'Recommended', active: true},
    {label: 'Trending Games', active: false},
    {label: 'New Releases', active: false}
  ];
  public category = '';
  public state = 0;

  constructor() { }

  public changeTab(tab, i) {
    this.tabs.forEach(item => item.active = false);
    this.state = i;
    tab.active = true;
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from './providers/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: any = [];
  counts: any = 1;
  pagination: any;
  loaded = true;

  constructor(private _charactersService: CharactersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._charactersService.getAllCharacters()
      .subscribe((response: any) => {
        this.loaded = false;
        this.items = response.results;
        this.pagination = response.info.pages;
      });
  }

  nextPage() {
    this.counts++;
    this.loaded = true;
    if (this.pagination >= this.counts) {
      this._charactersService.getPages(this.counts)
        .subscribe((response: any) => {
          this.loaded = false;
          this.items = response.results;
          this.pagination = response.info.pages;
        });
    }
  }

  prevPage() {
    if (this.counts > 1) {
      this.counts--;
      this.loaded = true;
      this._charactersService.getPages(this.counts)
        .subscribe((response: any) => {
          this.loaded = false;
          this.items = response.results;
          this.pagination = response.info.pages;
        });
    }
  }

}

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

  constructor(private _charactersService: CharactersService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._charactersService.getAllCharacters()
      .subscribe((response: any) => {
        this.items = response.results;
        console.log(response);
      });
  }

}

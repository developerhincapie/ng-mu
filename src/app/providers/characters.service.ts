import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app/api.contants';


@Injectable()
export class CharactersService {

    constructor(private http: HttpClient) { }

    getAllCharacters() {
        return this.http.get(`${AppSettings.Api}character/`);
    }

    getPages(value) {
        return this.http.get(`${AppSettings.Api}character/?page=${value}`);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SearchService {
    readonly PORT = 3000;
    readonly DOMAIN = 'http://localhost:';
    constructor(private httpClient: HttpClient) { }

    getResultsByLanguagePreferences(languagePreferences) {
        return this.httpClient.post(this.DOMAIN + this.PORT + '/searchConnections',languagePreferences, {withCredentials: true});
    }

    getUserInfoById(id) {
        let data = {
            id: id
        }
        return this.httpClient.post(this.DOMAIN + this.PORT + '/getUserInfoById', data);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class SearchService {
    readonly PORT = '';
    readonly DOMAIN = 'https://chatium.herokuapp.com';
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

    getRoomsByLanguage(langCode) {
        let data = {
            langCode: langCode
        }
        return this.httpClient.post(this.DOMAIN + this.PORT + '/getRoomsByLanguage', data);
    }

    getRoomById(id){
        let data = {
            id: id
        }
        return this.httpClient.post(this.DOMAIN + this.PORT + '/getRoomById', data);
    }
}

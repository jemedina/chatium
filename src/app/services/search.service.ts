import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private httpClient: HttpClient) { }

    getResultsByLanguagePreferences(languagePreferences) {
        return this.httpClient.post(environment.host + '/searchConnections',languagePreferences, {withCredentials: true});
    }

    getUserInfoById(id) {
        let data = {
            id: id
        }
        return this.httpClient.post(environment.host + '/getUserInfoById', data);
    }

    getRoomsByLanguage(langCode) {
        let data = {
            langCode: langCode
        }
        return this.httpClient.post(environment.host + '/getRoomsByLanguage', data);
    }

    getRoomById(id){
        let data = {
            id: id
        }
        return this.httpClient.post(environment.host + '/getRoomById', data);
    }
}

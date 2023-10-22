import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getGifsMostUsed(page: number) {
    return this.http.get(`${this.baseUrl}/gifs?page=${page}&order%5Bstats.count_used%5D=desc`);
  }
  getGifsLastUsed(page: number) {
    return this.http.get(`${this.baseUrl}/gifs?page=${page}&order%5Bstats.last_use%5D=desc`);
  }
  getGifsNewest(username: string, page: number) {
    if ('' === username) {
      return this.http.get(`${this.baseUrl}/gifs?page=${page}&order%5Bstats.first_use%5D=desc`);
    }
    return this.http.get(`${this.baseUrl}/gifs?page=${page}&order%5Bstats.first_use%5D=desc&stats.first_use_user.username=${username}`);
  }
  getGifsByTag(tag: string, page: number) {
    return this.http.get(`${this.baseUrl}/gifs?page=${page}&order%5Bstats.last_use%5D=desc&tags.tag=${tag}`);
  }

  getMembers(page: number) {
    return this.http.get(`${this.baseUrl}/users_by_score?page=${page}`);
  }

  getUserDetails(username: string) {
    return this.http.get(`${this.baseUrl}/users/${username}`);
  }

  UpdateTags(gifId:number, tagList: string) {
    return this.http.put(`${this.baseUrl}/gifs/${gifId}/tags`, {"tags" : tagList});
  }

  getAllTags(page: number) {
    return this.http.get(`${this.baseUrl}/tags?page=${page}`);
  }
  getGifById(gif_id: number) {
    return this.http.get(`${this.baseUrl}/gifs/${gif_id}`);
  }
  search(search: string, page: number) {
    return this.http.get(`${this.baseUrl}/gifs?page=${page}&order%5Bstats.count_used%5D=desc&search=${search}`);
  }
}

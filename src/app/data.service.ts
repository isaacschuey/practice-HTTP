import { inject, Injectable, signal } from '@angular/core';
import { posts } from './post-data';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  posts = signal<Post[]>([]);
  private http = inject(HttpClient);

  url = 'https://jsonplaceholder.typicode.com/posts';

  loadPosts = () => {
    this.http
      .get<Post[]>(this.url)
      .subscribe((post: Post[]) => this.posts.set(post));
  };

  getPosts = (): Observable<Post[]> => {
    return this.http.get<Post[]>(this.url);
  };

  getPostById = (id: number) => {
    return this.posts().find((post) => post.id === id);
  };
}

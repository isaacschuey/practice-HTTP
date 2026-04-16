import { Component, computed, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  imports: [RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  dataService = inject(DataService);
  posts = computed(() => this.dataService.posts());
}

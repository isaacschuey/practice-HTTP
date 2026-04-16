import { Component, computed, inject, input } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent {
  id = input.required<number>();

  dataService = inject(DataService);

  post = computed(() => this.dataService.getPostById(Number(this.id())));
}

import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [{
    id: 1,
    title: 'title 1',
    description: 'description1',
    author: 'author1',
    comments: ['comment1', 'comment2', 'comment3']
  },
  {
    id: 2,
    title: 'title 2',
    description: 'description2',
    author: 'author3',
    comments: ['comment1', 'comment2']
  },
  {
    id: 3,
    title: 'title 3',
    description: 'description3',
    author: 'author3',
    comments: ['comment1']
  }
]

  constructor() { }

  getBlogs(){
    console.log(this.blogs);
    return this.blogs;
  }
}

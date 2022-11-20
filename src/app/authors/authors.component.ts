import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  title = '3 Authors';
  authors;

  constructor(author: AuthorsService) {
    this.authors = author.getAuthors();
  }

  ngOnInit() {}
}

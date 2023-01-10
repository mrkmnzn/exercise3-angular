import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './pages/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }

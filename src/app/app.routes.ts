import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { AddUser } from './components/add-user/add-user';
import { DeleteUser } from './components/delete-user/delete-user';
import { Edit } from './components/edit/edit';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'add',
    component: AddUser,
  },
  {
    path: 'delete',
    component: DeleteUser,
  },
  {
    path: 'edit/:id',
    component: Edit,
  },
];

import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})

export class SidebarComponent {
  constructor() {}

  activeItem: string = 'dashboard';
  dropdowns: { [key: string]: boolean } = {};

  menuItems = [
    {
      title: 'Dashboard',
      route: 'dashboard'
    },
    {
      title: 'Products',
      route: 'products',
      submenu: [
        {
          title: 'Product List',
          route: 'product-list'
        },
        {
          title: 'Add Product',
          route: 'add-product'
        },
        {
          title: 'Category List',
          route: 'category-list'
        }
      ]
    },
    {
      title: 'Menus',
      route: 'menus',
      submenu: [
        {
          title: 'Menu List',
          route: 'menu-list'
        },
        {
          title: 'Add Menu',
          route: 'add-menu'
        },

      ]
    },
    {
      title: 'Order',
      route: 'order'
    }
  ];

  setActiveItem(item: string): void {
    this.activeItem = item;
  }

  toggleDropdown(menu: string): void {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  isDropdownOpen(menu: string): boolean {
    return !!this.dropdowns[menu];
  }
}

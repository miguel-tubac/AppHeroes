import { Component } from '@angular/core';
import { SidebarMenu } from '@modules/heroes/models/sidebar-menu';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {
  public sidebarItems: SidebarMenu[]=[
    {label: 'Listado', icon: 'label',url:'./list'},
    {label: 'Anadir', icon: 'add',url:'./new-hero'},
    {label: 'Buscar', icon: 'search',url:'./search'}
  ]
}

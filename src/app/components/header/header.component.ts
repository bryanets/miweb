import { Component, HostListener, ViewChild } from '@angular/core';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DrawerModule, ButtonModule, AvatarModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  visible: boolean = false;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  hiddenSidebar() {
    this.visible = false;
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100; // Ajusta este valor según necesites
  }
}

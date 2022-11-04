import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, HomeComponent],
})
export class EcommerceModule {}

import { Component } from '@angular/core';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

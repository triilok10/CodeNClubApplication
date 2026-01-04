import { Component } from '@angular/core';
import { Footer } from '../Common/footer/footer';
import { Header } from '../Common/header/header';

@Component({
  selector: 'app-pro',
  standalone: true,
  templateUrl: './pro.html',
  styleUrls: ['./pro.css'],
  imports: [Header, Footer]
})
export class Pro { }

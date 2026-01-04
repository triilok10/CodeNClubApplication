import { Component } from '@angular/core';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.html',
  styleUrls: ['./careers.css'],
  imports: [Header, Footer]
})
export class Careers { }

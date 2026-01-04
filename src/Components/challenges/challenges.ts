import { Component } from '@angular/core';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
  selector: 'app-challenges',
  standalone: true,
  templateUrl: './challenges.html',
  styleUrls: ['./challenges.css'],
  imports: [Header, Footer]
})
export class Challenges { }

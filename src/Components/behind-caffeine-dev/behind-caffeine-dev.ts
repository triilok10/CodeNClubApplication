import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../Common/header/header';
import { Footer } from '../Common/footer/footer';

@Component({
    selector: 'app-behind-caffeine-dev',
    standalone: true,
    imports: [CommonModule, Header, Footer],
    templateUrl: './behind-caffeine-dev.html',
    styleUrl: './behind-caffeine-dev.css'
})
export class BehindCaffeineDev { }

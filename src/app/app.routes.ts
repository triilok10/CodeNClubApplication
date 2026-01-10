import { Component } from '@angular/core';
import { Routes } from '@angular/router';

// Component Imports
import { Home } from '../Components/home/home';
import { Courses } from '../Components/courses/courses';
import { Community } from '../Components/community/community';
import { Projects } from '../Components/projects/projects';
import { Events } from '../Components/events/events';
import { Blog } from '../Components/blog/blog';
import { Challenges } from '../Components/challenges/challenges';
import { Pro } from '../Components/pro/pro';
import { Careers } from '../Components/careers/careers';
import { Login } from '../Components/Auth/login/login';
import { GetStarted } from '../Components/Auth/get-started/get-started';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'courses',
    component: Courses,
  },
  {
    path: 'community',
    component: Community,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'events',
    component: Events,
  },
  {
    path: 'blog',
    component: Blog,
  },
  // New Footer Components
  {
    path: 'challenges',
    component: Challenges,
  },
  {
    path: 'pro',
    component: Pro,
  },
  {
    path: 'careers',
    component: Careers,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'get-started',
    component: GetStarted,
  }
];

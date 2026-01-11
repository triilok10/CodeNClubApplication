import { Component } from '@angular/core';
import { Routes } from '@angular/router';

// Component Imports
import { Home } from '../Components/home/home';
import { Courses } from '../Components/courses/courses';
import { Community } from '../Components/community/community';
import { Projects } from '../Components/projects/projects';
import { Blog } from '../Components/blog/blog';
import { Challenges } from '../Components/challenges/challenges';
import { Pro } from '../Components/pro/pro';
import { Careers } from '../Components/careers/careers';
import { Login } from '../Components/Auth/login/login';
import { GetStarted } from '../Components/Auth/get-started/get-started';

import { Learning } from '../Components/learning/learning';
import { ProjectDetail } from '../Components/projects/project-detail/project-detail';
import { EventDetail } from '../Components/community/event-detail/event-detail';

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
    path: 'courses/:id',
    component: Courses,
  },
  {
    path: 'learning/:id',
    component: Learning,
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
    path: 'projects/:id',
    component: ProjectDetail,
  },
  {
    path: 'events',
    component: Community,
  },
  {
    path: 'community/event/:id',
    component: EventDetail,
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

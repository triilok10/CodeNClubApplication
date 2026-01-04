import { Home } from './../Components/home/home';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Courses } from '../Components/courses/courses';
import { Community } from '../Components/community/community';
import { Projects } from '../Components/projects/projects';
import { Events } from '../Components/events/events';
import { Mentorship } from '../Components/mentorship/mentorship';
import { Blog } from '../Components/blog/blog';

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
    path: 'mentorship',
    component: Mentorship,
  },
  {
    path: 'blog',
    component: Blog,
  },
];

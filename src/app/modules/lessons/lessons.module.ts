import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';

import { lessonsRoutes } from './lessons.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lessonsRoutes),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MarkdownModule.forChild(),
  ],
})
export class LessonsModule {}

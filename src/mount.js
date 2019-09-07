import Vue from 'vue';
import NextTodo from './NextTodo';
import TodoCount from './TodoCount';
import TodoEmpty from './TodoEmpty';
import Sample from './Sample';

new Vue(NextTodo).$mount('#nextTodo');
new Vue(TodoCount).$mount('#todoCount');
new Vue(TodoEmpty).$mount('#todoEmpty');
new Vue(Sample).$mount('#sample');

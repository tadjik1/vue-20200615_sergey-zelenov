import Vue from '/vendor/vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события
export const app = new Vue({
  el: '#app',

  data: {
    count: 0,
  },

  methods: {
    increment() {
      this.count++;
    },
  },
});
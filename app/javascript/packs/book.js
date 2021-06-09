import Vue from 'vue/dist/vue.esm';
import axios from 'axios';

new Vue({
  el: '.js-booksIndex',
  data: {
    bookInfo: {},
    bookInfoBool: false
  },
  methods: {
    setBookInfo(id){
      axios.get(`api/books/${id}.json`).then(res => {
        this.bookInfo = res.data;
        this.bookInfoBool = true;
      });
    }
  }
});

// [el: '.js-booksIndex']：book.jsの対象範囲
// [data.bookInfo]：表示する本の詳細情報
// [data.bookInfoBool]：情報の表示有無を判定（デフォルトで非表示設定）
// [setBookInfo(id)：詳細情報を表示するメソッド
// [axios.get(api/books/${id}.json)]により，APIを受け取り，
// [this.bookInfo = res.data;]により，本情報をdataに格納し，
// [this.bookInfoBool = true;]により，非表示を表示に変更して，詳細情報が表示される。
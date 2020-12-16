/* eslint-disable no-undef */
/* eslint-disable strict */
/* Bookmarks, API */
import $ from 'jquery';
import Store from './Store.js';
import api from './api.js';
import bookmarks from './bookmarks';
console.log(bookmarks)

$(function() {
  
  bookmarks.bindEventListeners();
  
  api.getBookmarks(bookMarks => {
    
    bookMarks.forEach(bookmark => Store.addBookmark(bookmark));
    
    bookmarks.render();
  });
});
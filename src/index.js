/* eslint-disable no-undef */
/* eslint-disable strict */
/* Bookmarks, API */
import Store from './store.js';
import API from './api.js';
import Bookmarks from './bookmarks.js';

$(function() {
  
  Bookmarks.bindEventListeners();
  
  API.getBookmarks(bookmarks => {
    
    bookmarks.forEach(bookmark => Store.addBookmark(bookmark));
    
    Bookmarks.render();
  });
});
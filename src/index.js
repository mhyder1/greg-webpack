/* eslint-disable no-undef */
/* eslint-disable strict */
/* Bookmarks, API */
$(function() {
  
  Bookmarks.bindEventListeners();
  
  API.getBookmarks(bookmarks => {
    
    bookmarks.forEach(bookmark => Store.addBookmark(bookmark));
    
    Bookmarks.render();
  });
});
/* eslint-disable no-undef */
/* eslint-disable strict */
$((function(){Bookmarks.bindEventListeners(),API.getBookmarks((o=>{o.forEach((o=>Store.addBookmark(o))),Bookmarks.render();}));}));
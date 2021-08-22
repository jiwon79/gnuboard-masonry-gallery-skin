var msnry = new Masonry('.gall_row', {
  itemSelector: '.gall_box',
  // columnWidth: 200,
  percentPosition: true,
  gutter: 20,
});
imagesLoaded('.grid_row').on('progress', function () {
  msnry.layout();
});

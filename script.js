window.onload = () => {
  const grid = document.querySelector('.gall_row');

  const masonry = new Masonry(grid, {
    itemSelector: '.gall_box',
    columnWidth: '.gall_sizer',
    // gutter: 20
    // columnWidth: 250,
    // isfitWidth: true
  });

}

// var msnry = new Masonry('.gall_row', {
//   itemSelector: '.gall_box',
//   // columnWidth: 200,
//   // percentPosition: true,
//   gutter: 10,
// });
// imagesLoaded('.grid_row').on('progress', function () {
//   msnry.layout();
// });
//
// $(document).ready(function(){
//  window.resizeTo(620, 690);
// });

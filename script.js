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

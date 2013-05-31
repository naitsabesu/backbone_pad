new Pad.App();

// $('#post-list').masonry({
//   itemSelector: '.post',
//   columnWidth: 200
// });

var $container = $('#post-list');
$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector : '.post'
  });
});
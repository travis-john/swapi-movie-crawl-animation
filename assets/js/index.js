let $parent = $('body'),
    $starCount = 250,
    $parentHeight = $parent.height(),
    $parentWidth = $parent.width(),
    $query = 'https://swapi.co/api/films';

for ( let i = 0; i < $starCount; i++){

  let $randPosX = Math.floor((Math.random()*$parentWidth)),
      $randPosY = Math.floor((Math.random()*$parentHeight));
      $parent.append('<div class="star star--position-'+i+'"></div>');

   $('.star--position-'+i).each(function(){
     $(this).css({
     left: $randPosX,
     top: $randPosY
    });
  });
}

$.ajax({
  url: $query,
  method: 'GET'
}).then(function(response) {
  console.log(response);
});

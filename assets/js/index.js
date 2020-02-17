let $body = $('body'),
    $starCount = 250,
    $bodyHeight = $body.height(),
    $bodyWidth = $body.width(),
    $query = 'https://swapi.co/api/films';

for ( let i = 0; i < $starCount; i++){

  let $randPosX = Math.floor((Math.random()*$bodyWidth)),
      $randPosY = Math.floor((Math.random()*$bodyHeight));
      $body.append('<div class="star star--position-'+i+'"></div>');

   $('.star--position-'+i).each(function(){
     $(this).css({
     left: $randPosX,
     top: $randPosY
    });
  });
}

function generateStars() {

  let $parent = $('.crawl'),
      $parentHeight = $parent.height(),
      $parentWidth = $parent.width();

  for ( let i = 0; i < $starCount; i++){

    let $randPosX = Math.floor((Math.random()*$parentWidth)),
        $randPosY = Math.floor((Math.random()*$parentHeight));
        $parent.append('<div class="crawl-star star--position-'+i+'"></div>');

     $('.star--position-'+i).each(function(){
       $(this).css({
       left: $randPosX,
       top: $randPosY
      });
    });
  }

}

$.ajax({
  url: $query,
  method: 'GET'
}).then(function(response) {
  console.log(response);
  let films = response.results;
  for (let i = 0; i < films.length; i++) {
    $('.movie-title-row').append(`
        <div class='col-12 col-sm-6 col-md-4'>
          <div class ='film'>
            <h2 class='film-title'>${films[i].title.toLowerCase()}</h2>
            <div class='crawl d-none'>
              <div class='logo'>S</div>
              <h2 class='crawl-title'>${films[i].title}</h2>
              <p class='crawl-text'>${films[i].opening_crawl.toLowerCase()}</p>
            </div>
          </div>
        </div>
      `);
  }
  $('.film').on('click', function() {

    // generateStars();

    $(this).find('.crawl').toggleClass('d-none');
    $('body').toggleClass('no-scroll');
  });
});

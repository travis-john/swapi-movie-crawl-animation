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

function getMovies() {
  $.ajax({
    url: $query,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    for (let i = 0; i < response.results.length; i++) {
      $('.movie-title-row').append(`
          <div class='col-12 col-sm-6 col-md-4'>
            <div class ='film'>
              <h2 class='film-title'>${response.results[i].title.toLowerCase()}</h2>
              <div class='crawl d-none'>
                <h2 class='crawl-title'>${response.results[i].title}</h2>
                <p class='crawl-text'>${response.results[i].opening_crawl}</p>
              </div>
            </div>
          </div>
        `)
    }
  });
}

getMovies();

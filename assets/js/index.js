let $body = $('body'),
    $bodyHeight = $body.height(),
    $bodyWidth = $body.width(),
    $query = 'https://swapi.dev/api/films',
    $audio = $('audio');

function generateStars($starCount) {
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
            <h2 class='film-title'>${films[i].title}</h2>
            <div class='crawl d-none'>
              <section>
                <p class='intro'>A long time ago, in a galaxy far, far away...</p>
              </section>
              <section>
                <img class='logo' src='assets/images/logo.svg'>
              </section>
              <section class='crawl-section'>
                <div class='crawl-text'>
                  <h2 class='crawl-title'>${films[i].title}</h2>
                  <p>${films[i].opening_crawl}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      `);
  }

  generateStars(250);

  $('.film').on('click', function() {
    $(this).find('.crawl').toggleClass('d-none');
    $($body).toggleClass('no-scroll');
    if ($body.hasClass('no-scroll')) {
      $audio.get(0).play();
    } else {
      $audio.get(0).pause();
      $audio.get(0).currentTime = 0;
    }
  });

  function detectMobile(){
    var $isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
    var $isAndroid = navigator.userAgent.match(/android/i);
    if ($isIOS || $isAndroid) {
      generateStars(150);
    }
    if($isIOS){
      console.log(navigator.userAgent);
      $('.film').addClass('active');
    }
    if($isAndroid){
      console.log(navigator.userAgent);
      $('.film').addClass('active');
    }
  }

  detectMobile();
});

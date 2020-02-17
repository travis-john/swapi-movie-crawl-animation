let $parent = $('body'),
    $starCount = 250,
    $parentHeight = $parent.height(),
    $parentWidth = $parent.width();

    for (i=0; i<$starCount; i++){
        var $randPosX = Math.floor((Math.random()*$parentWidth)),
            $randPosY = Math.floor((Math.random()*$parentHeight));
        // console.log($randPosY);
        $parent.append('<div class="star star--position-'+i+'"></div>');

        $('.star--position-'+i).each(function(){
        $(this).css({
          left: $randPosX,
          top: $randPosY
        });
      });
    }

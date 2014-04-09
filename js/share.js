var shareModule = (function() {


    return {
        openShareWindow: function() {
            FB.ui({
                    method: 'feed',
                    name: 'Ilmainen suklaalevy',
                    link: 'http://fb-sovellus.fi/suklaapatukka/index.html',
                    picture: 'http://fb-sovellus.fi/suklaapatukka/img/suklaapatukka.jpg',
                    caption: 'Ilmainen suklaapatukka',
                    description: 'Hain ilmaisen suklaapatukan liikkeestä XXX. Myös sinä voit lunastaa ilmaiset suklaapatukkasi XXX myymälästä klikkaamalla linkkiä.'
                },
                function(response) {
                	console.log(response);
                    if (response && response.post_id) {
                        window.location ='http://fb-sovellus.fi/suklaapatukka/thanks.html';
                    } else {
                        console.log('Post was not published.');
                    }
                }
            );
        }
    };
})();

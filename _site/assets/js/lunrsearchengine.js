
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": " Hello! Welcome to my website.  My name is Joe and I’ve been throwing pottery since 2018.  It began as a group birthday event over at Clayroom Studio in Potrero District and then became a passion and hobby. I hope you enjoy the pieces I’ve put up.  I only do this part-time as a way to express myself artistically.  Each piece is very special and thoughtfully put together. Currently, I’ve worked on a limited series of donut bud vases inspired by a shirt and a subversive message which I feel is quite appropriate in these times. I’ll post more projects as they come to me.  If you have any suggestions, please feel free to reach out and share your ideas! Much appreciation and love, Joe josemarix@gmail. com "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Collections:                                                                                                                                                                                                           Donut Judge                              :               So, why donuts? I feel that donuts are a universally regarded as a happy treat. I wanted to take something that lasts mere seconds (at. . . :                                                   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/donut-judge/",
    "title": "Donut Judge",
    "body": "2024/03/25 - So, why donuts? I feel that donuts are a universally regarded as a happy treat.  I wanted to take something that lasts mere seconds (at least when I get my hands on them) and set them in ceramic to last a lifetime.  I’ve sculpted and shaped each donut into ones with sprinkles, abstract designs and inspiration from the French cruller (my personal favorite)! Here’s the process:: 1. Each donut starts as a mound of clay approximately 1 lb in weight: 2. They then get centered on a wheel before it gets opened up: 3. After getting centered, the mound is then opened up all the way through to the bottom of the wheel: 4. Two wall are then brought up carefully: 5. And then lifted evenly so they can then be collared: 6. Collaring is where it starts to get difficult and I lost a few pieces at this stage: 7. Closing the two walls together is a magical feeling and I guess that’s why I made so many of them! To feel that magic over and over again: 8. Finally, the donut gets a clean-up job before it’s cut off the wheel: 9. These have been lightly covered with plastic and drying slowly on my shelf for a bout a week: 10. Waiting to get trimmed: 11. Sculpting and adding sprinkles: 12.  Glazed and ready!: "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    var check;
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

       
        it('URL feeds', function() {
            // loop on all feeds 
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined(); // check that url of feed is defined
                expect(feed.url).not.toBeNull(); // check that url of feed is not empty
            });
        });

       
        it('Name feeds', function() {
             // loop on all feeds 
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();// check that name of feed is defined
                expect(feed.name).not.toBeNull();// check that name of feed is not empty
            });
        });
        
    });

    // craete new test suite named "The menu"
    describe('menu', function(){
        
         it('menu element is hidden by default', function(){
            // check that  the menu element is hidden by default
            check = $('body').hasClass('menu-hidden'); // check that body has class menu-hidden
             expect(check).toBe(true); // expect that body has class menu-hidden
         });
        
          //test that ensures the menu changes visibility when the menu icon is clicked
          it("menu changes  visibility when the menu icon is clicked" , function(){
              $('.menu-icon-link').click(); // click to show 
              check = $('body').hasClass('menu-hidden');
              expect($('body').hasClass('menu-hidden')).toBe(false); // expect that body has not class'meue-hidden'
              $('.menu-icon-link').click(); // click to hide
              check = $('body').hasClass('menu-hidden');
              expect($('body').hasClass('menu-hidden')).toBe(true);// expect that body has class 'meue-hidden'
          });
    });

    // create new test suite named "Initial Entries"
    describe('Initial Entries',function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // call load feed befor check 
        beforeEach(function (Is_done){
            loadFeed(0, Is_done);
        });
        /*test that when the loadFeed function is called and completes its work, there is at least a single .entry    element within the .feed container.*/
        it("check if the container has at least one element",function(){
            var theLength =  $('.feed .entry').length;
            expect(theLength).not.toBe(0); // expect that Length of feed entery not to be (0) should greater than 0
        });
        
    });
    
    // craete a new test suite named "New Feed Selection"
    describe('New Feed Selection',function(){
        
        // bring old feed 
        var feed;
        beforeEach(function(Is_done){
            loadFeed(2, function(){
                feed = $('.feed').html();
                loadFeed(1, Is_done);
            });
        });
        it("check that the content actually changes ",function(){
             expect($('.feed').html()).not.toBe(feed); // expect that old feed not to be new feed
        });
        
         
    });
    
}());

# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.




# how to start the application?
To strat the application open index.html file,
then test will performs on application automatically.

# How will I complete this project?
in feedreader.js file:
1- test on RSS Feeds.

 - test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

 - test that loops through each feedin the allFeeds object and ensures it has a name defined and that the name is not empty.

2- test on menu.
 - test that ensures the menu element is hidden by default.
 - test that ensures the menu changesvisibility when the menu icon is clicked.

3- test on Initial Entries.
 - test that ensures when the loadFeed function is called and completes its work, there is at least
   a single .entry element within the .feed container.

4- test on New Feed Selection.
  - test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
 


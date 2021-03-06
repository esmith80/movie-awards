MARCH 3RD, 2021
spent 2-3 hours re-doing the layout so the nominations are at the top and also changed the colour scheme

MARCH 1, 2021
spent about 3 hours on CSS breakpoints and different browser window widths and heights
there is undoubtedly a better way to do this, but i managed to align the type-ahead results 
with the search bar - the nominations area needs to change its positioning based on 

FEB 28, 2021
adding typeahead with a result click was harder than i thought... it involved multiple events (onBlur, onMouseEnter, onMouseLeave) to manage the 
state of the typeahead and when it should be shown... i ended up putting another piece of state 'inTypeAhead' to track if the user was in the 
typeahead area... this in combination with onFocus and onBlur from the search input seemed to work... also debugged a little with limitations from the 
API where certain characters don't allow you to search (+ sign and * and & sign were triggering odd results)yarn 

FEB 26, 2021
found out that you can: 
1) set up an onClick on a div that is supposed to update an input field (id=searchBarInput) with the text contained in that div
2) set up on onBlur on an input field (id=SearchBarInput) that hides the div
3) BUT the div disappears with onBlur and so the onClick event doesn't fire on the div because it has disappeared

if there are two spaces between words or a minus sign (-) in the movie name and you click it, the text says 'no results'; the two spaces show in 
the input field but not in typeahead results

FEB 25, 2021
deployed new release with type-ahead but still have warnings from react
need to fix this eventually, but it is working

FEB 19, 2021

adding packages to deploy this project today
I haven't worked on the project in a week as I was so busy with other work

FEB 11th, 2021
I spent most of yesterday morning on type-ahead CSS trying to get a search results area to neatly drop below the search input. Once that was done I set up more code in a seperate place in the app to do the call to the API to get results specifically for type-ahead. 
I feel like I should only be calling the API once to get those first 10 results for both the typeahead and search result area. But the way I have the initial request to API, that function also processes results (puts movies into an array and sets the state of movies); that function could be broken out into the request part and seperately the functions to put the movies in arrays could be broken out... something for later...

Right now, I need to look at type-ahead like a mini project with a set of requirements. From a user perspective...
SEARCH INPUT box
- after typing 3 characters and stop typing, a spinner appears for 1 second and results are shown based on 3 characters
- if a user types more than 3 characters, a search may be executed every 1 second IF the text has changed since it was last looked at (1 second ago)
- a search only executes every 1 second at a maximum and the first interval is started after there are 3 characters in the input field
- if a user types backspace the search should not run again (as long as the last character typed was backspace sometime in the last 1 second, the interval should be put on pause?)

So, it seems I need this running inside setInterval, checking for new text once per second. but i only want that setInterval running if the user types text. I only want it to keep running if the user types more text. if there is no text present in the search field, I don't want it to run at all.

SET INTERVAL
- SET INTERVAL is currently running thousands of times due to scrolling; is it OK for that to happen? 
I added some console logs to watch the flow of code with the scroll event handler goes like this:
1. Search component is rendered
2. Event listener is created
3. on the first scroll, the handleScroll event fires and setInterval begins executing at the interval
4. on the second scroll, handleScroll fires again, and another setInterval loop begins - there are now 2 setInterval loops happening
5. ... every new scroll movement adds a setInterval loop - the setInterval loop persists through renders EVEN though the component re-renders and the Event handler that triggered the setInterval function also is removed and added... the setInterval persists!!! 100% sure I tested with 2 second intervals and eyeballed it (was this the performance problem with BeatJuice?)
6. When scroll reaches a point where it triggers a call to the API, which in turn updates the state of 'movies', which causes a rerender of APP and a rerender of SearchList, which removes the old event listener and adds a new event listener
SOMETIMES APP re-renders and SearchList does not... why is this? 

I need a loop (set interval) for typeahead results. The loop should be initiated on text change

Type-ahead RESULTS area (seperate problem from the input box)
- When I hover on a result for 1 second, that area gets bigger, reveals more information as well as a nomination button
- OR the search results show 10 results with pictures, info etc.
- OR clicking the text seen in a type-ahead runs the search so results are displayed in the search area
----------------
FEB 10th, 2021 
Getting around to implementing type-ahead...
To do this, I need to track the last search text to compare it against the new search text to see if a search should be executed
I have the state for searchText living in the SearchBar component but the last searched text living in App.js - App.js is using the lastSearchText in the getMovies function
Work incrementally...
1. get a search result to render based on input of first full word or first 4 characters or something (just name of movie) from the search bar downward 
2. (start with only the first 10 results, name only, no controls in the searchBar results)
3. only worry about the biggest screen size for now

build a component called SearchBarResults
build a component called SearchBarResultItem
Pass data to these components from App (because that is where getMovies runs - the search may need to be run seperately from the search that is run for the main search area)
worry about debouncing, restricting the call to the function later

So to the the above steps... for a search result to render I need to create an area where searchBarResults can render (is that bunch of divs? how do i position that?)

1. position a hard coded search result area that is hidden but displayed if the word 'star' is typed in the searchBar

---------------
DAY X + 8
After a week, I finally got infinite scroll figured out.
It had to do with the need to remove event listeners explicityly in React inside the useEffect hook

---------------
DAY X + 1
visualViewport is useful on mobile, apparently, where you have other things like the OS keyboard taking up the screen, where you have the user pinching the screen to zoom in; these things change the viewport size
console.log('window.visualViewport = ', window.visualViewport.height);
it is an experimental technology, according to 

Do i need a seperate event handler to listen for resizing the window?

having a problem with how to track the last known position of the scrollY... i tried to do it with useState, but that
causes a re-render every time it changes (I think) and so the entire event handler is being re-registered every time it changes;
so i tried a global variable; but now there is no re-render and i have stale state with teh last search term

I read from the React Docs: "Why am I seeing stale props or state inside my function?
Any function inside a component, including event handlers and effects, “sees” the props and state from the render it was created in. "

-----------------
DAY X

I've decided to tackle infinite-scroll first. To this, I need to refactor my code so that the API is not called multiple times unnecessarily. It should only be called if the user scrolls down the page. Each time it is called, it should show 10 more results (but this call should happen automatically based on the user's scrolling).

So, to do this, I'll need to keep track of their position on the page, how many results have they scrolled past? How far down the page are they? I'll also need to keep the search results that are on the page to things that have actually had a full search executed for... not the type ahead stuff. That area of the page should only populate if the user hits Enter or hits the Search button. Therefore, this area of the page can be worked on independently of the planned type-ahead feature

So this feature will be a mini-program with these inputs:
- user scroll position
- search term
- array of search results passed (composed of the current list + one more page)

this is a refactor of the getMovies function
- now need to track page to return and listen for a scroll event past a certain point
- if the scroll happens, call getMovies again with the new page to return
- getMovies gets the movies and sets the movies but i will need two different search result containers: the regular results and the type-ahead results; i need two different pieces of state, the type ahead API call vs the search results API call 

UNKNOWNS:
- how to measure the distance scrolled? 
- look at browser API to see what info can I get from scroll
- where do you put the event listener? (well, how do you handle other events in react? - do you put the event handler in the searchresults area? or in App? 
----------------------------------------------------------------------------------------------
EVERYTHING BELOW THIS LINE IS FROM THE FIRST DAYS OF THE INITIAL PROJECT - mid-January 2021...
----------------------------------------------------------------------------------------------
DAY 1
- I wanted to get up and running quickly, so I used create-react-app to easily get all the dependecies and whatnot installed.
- when using logic to return all page results, I found myself asking "Is this the RIGHT thing to do?" and also "Is this the right way to do it?" when using that for loop
- is it the right thing... would a user actually want to see 250 results ever? or would they prefer to type characters until the results are narrowed to something specific? probably the latter
- i could have an advanced search if the user sees too many results
- discovering some quirks of async await and wasted some time with that, could have used callbacks to make it work in a way i better understand

- excited to use an API and get it working quickly


DAY 2
- realized that async/await isn't really used to return values and need to set values i want using functions inside async/await block
- ran into an odd thing where some years have a dash '-' after the year; looking forward to using some regex to trim those
- decided on tables to layout search results and nominations
- what's better: a) removing a nominated movie entirely from search results? or b) disabling a button? I think removing it entirely might be better
- thinking i'll try to brand it with shopify colours/fonts
- fixing broken windows as I go... little errors about keys required and React DOM element nesting rules annoy me. I've been fixing them as I go (<tr> cannot be a child of <table>)
- i've decided to use github pull requests as a workflow (just to show I'm aware of that workflow)
- looking at search results and realizing the 'add nomination' button should be in the same eye-space as the name of the movie (not near the year of the movie)
- thinking over the right thing to do for a user who is selecting a nomination... what would be most intuitive? should the selected movie disappear from the search results as it appears in the nomination listing? or should it stay visible but the appearance change in some way to show that it is selected? since this is a single page app with only 5 possible selected results, it might be ok to make it dissappear; could i code it in such a way so that making it dissappear is done first and then if i don't like that it is easy to modify it to make the item look different (i.e. 'selected')? if i make it dissappear, it shouldn't be returned with search results either...... (a few minutes later) the project requirements say that the button should be visible but disabled, so i'm going with that
- - thinking more and more about the pagination and how it is not necessary (and in fact worse than just returning 10 results). why would a user want to page through search results when they can just type a little more text to make things more specific? more logic, more effort for no reward (in fact, you could argue for a WORSE user experience)
- Early on in this process, I was confounded when I tried to store an object with useState and through some fault of my own, came away from the experience thinking I couldn't put an object in there... not fully believing this was true, I went on to seperate data into single values and store in handmade arrays anyway... and it turns out, I could have done the object all along??? Now I have to refactor. There is no way I can leave it as is and turn it in...
- Getting strange behaviour as I pass down the shiny new object I have for props... when i search for some movies, it takes a very long time and some movies cause an error (title not found? when in fact the title does exist...)
- during the refactor, saw a couple of ways to populate the nominees table now that i have all the omdb info... thought about doing axios call based on id for each entry in nominees table, but probably best to pass the data around locally if you've got it i'd think?
- loving the errors that react throws, clear, concise, plain-speak

Day 3
- not much time to work today, just need to implement the banner for the core feature... I did get to think about it though. I think it would make sense to have a configurable global variable called 'maxNominations' ... if the nominations are equal to the max, they can't add any more movies... the logic would need to be used in the 'onClick' function, disabling all nomination buttons if the max is reached... a banner needs to be shown as well and i'm thinking the banner is always there (but hidden) and is set to display if the user reaches the max
- also i'm thinking about usability... there should no point of confusion on how to proceed at any point (there should be a no search results message... and a reminder if someone clicks the nominate button when they've reached all 5)
- another thing on usability - the API search doesn't do partial searches... this is annoying and it also doesn't return something with a white space (no fuzzy searching it seems?)
- not too much time on this today... only about 2 hrs... thinking about the layout and options as to where to store the nominees list... i could pin it to the top corner of the page as it is being built out and when its done, display a single div that says 'youre done, here are your nominees - see you at the Shoppies' so it's very clear the process is finished... i could also give them an option to return to the nomination lists
Day 4
- have basic functionality up and running but layout is next major consideration. 
- TODOs are 
-- getting each section laid out appropriately spaced 
-- my nominations should go down below if the viewwindow gets too small
-- and also returning a message that says 'no search results'
-- creating a masthead/banner for Shoppies
-- experiment with image added
-- give user a logical clear path away from "congrats you've selected nominations"
-- table cells should never move (buttons should never move, always remain in same place)
-- box shadow on buttons
- partial search is done... had a weird bug where i was getting an array every now and then that was 2 elements longer than the actual results as compared with a get request in the browser... very weird, couldn't trace it so had to put a band-aid on it

Day 5
- TODO
- look at intern applicaiton and estimate how long it will take 1 hr
- add storage for that user's noms (so if they navigate away they come back and noms are in place)
- get background image for noms
- adjust layout of noms with image in place
- create a single div for a nom (don't use table?)
- add image to search results
- adjust layout (at biggest breakpoint) so everything is visible
- adjust layout at smallest breakpoint so noms get pushed to top above search results (with a message that says 'search results down below')
- add a reset button or clear noms button?
- clean up code

- deploy (2 hrs?)

- write application
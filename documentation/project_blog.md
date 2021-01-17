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
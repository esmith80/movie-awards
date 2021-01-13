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

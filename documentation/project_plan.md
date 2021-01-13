END RESULT
We'd like a simple to use interface that makes it easy to:
Search OMDB and display the results (movies only)
Add a movie from the search results to our nomination list
View the list of films already nominated
Remove a nominee from the nomination list


**MY PLAN**
Build the bare minimum (as detailed in the picture on the assignment)
Make it look useable (not necessarily pretty or flashy, just useable and intuitive)
Give it more functionality (save nom list if user leaves page, animations for adding/deleting, shareable links)
Make it prettier

**TODO**
- [ ] build functionality using data store in the project (no API - just simulate the API bit)
  - [ ] create mock data file
  - [x] API docs: http://www.omdbapi.com/
  - [ ] create helper functions
  - [ ] learn async / await
    - [ ] add movie to nomination list
      - [ ] assign ID to movie in nom list
      - [ ] create component
    - [x] return list of movies function (getMovies)
      - [x] takes two parameters (string of searchText and pages to return)
    - [ ] remove movie from nomination list
      - [ ] movie ID? need to store ID for movie in list
- [ ] get logic to work to return correct info from API
  - [x] read API docs
  - [x] what do i need from API?
  - [ ] 
- [ ] refresh on how to begin creating react app (use npm or start from scratch?)
- [ ] make component hierarchy
- [ ] create react app
- [ ] determine where state is kept
- [ ] draw app interface
- [ ] read API docs
- [ ] Components
  - [ ] app
  - [ ] search bar
  - [ ] nomination list
  - [ ] nomination list item
  - [ ] search result list
  - [ ] search result list item
- [ ] look at scheduler for loading images
  - [ ] setTimout to simulate loading?
  - [ ] 

  **UNKNOWNS**
- [ ] look at previous projects to see how React was used to  API
- [ ] watch video on music library iTunes implementation
- [ ] CSS framework to use?
- [ ] Bootstrap?
- [ ] Material UI?
- [ ] pagination for search results - how to do that? is there built-in material UI for that?

- [ ] Show how I'm a lifelong learner


**STRETCH**
- [ ] use the html tags i read about recently to show plot if user clicks into title (details summary? what was that tag)
- [ ] get info not asked for (plot summary, etc.)
- [ ] make a funny search (plots that have the word "fart")
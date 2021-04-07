**Author: Edward Smith**

**Status: Under Construction**

This project is based on a ficticious movie awards show. This site allows a user to nominate up to 5 movies for an award. 

The app is live here: https://esmith80.github.io/movie-awards/

Functionality:
- uses the omdb API (http://www.omdbapi.com/) to get movie information
- a user can search for movies by title
- a user can view a list of movies to nominate
- infinite scroll lets a user keep scrolling based on their initial search term
- a user may nominate movies for an award
- a user can close the browser or shut down their computer and nominations are saved (local storage)
- starts-with search (search term has wildcard at end of by default)
- clickable type-ahead search results (click a result to trigger search for title of movie)

Under construction:
- More info in search results and in nominations area (picture in search, short synopsis in nominations area)
- Button to nominate will be a Toggle button (i.e. also cancels a nomination)
- Layout: There are various things that don't look good on mobile right now (e.g. the nominations area becomes cluttered at small screen sizes if 5 movies have been added to the nominations list). The Layout is being redone for a future release.
- Styles: The dark theme with purple and green accents will be redone as well.

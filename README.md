# HerokuFullStack
##LIVE LINK: https://lockhaim-project-2.herokuapp.com/onlyjams

OnlyJams
The First thing I did when approaching this project was determine what functionality I wanted.

I started off just doing the setup for all the files and pages I would need. Setting up the EJS files, installing the dependencies, set up my models and controllers, etc.

I wanted this to be almost a showcase where you could showcase your favorite subject matter, add content to it, and then add subcontent to that page.

I started by getting the basic functionality working e.g. the add an artist page, index page, and show page. After that I created and implemented functionality to be able to edit and delete the artists. After this I wanted to be able to register a user and log in.

Currently, the edit and delete buttons only are visible when a user is logged in.

When an artist is selected, you can then see that artists information as well as any albums with a (hidden) album_artist_id attribute that matches the artist ID attribute.

Upon adding an album, that album shows up similarly to how an artist would show up, except when clicking on that album, a modal opens up with the album information.

//unsolved problems//

I really wanted to make this a soundcloud clone with being able to actually search and play songs but unfortunately the soundcloud API is closed at the moment. I spent a lot of time working on the CSS styling and wanted to make this site look pretty close to what could be a real app both on desktop and mobile. I'm disappointed that we dont have the ability to actually play the songs, but hopefully they reopen their API. I also would've liked to do a 1-to-many relationship with likes on artists or albums, as well as a searchbar, but wasn't able to get it done within the alloted time.

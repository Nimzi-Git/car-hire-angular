# Car Hire Angular Project

Car Hire UI application developed in Angular 7


## Run Server

````Terminal/CLI
ng serve --port 4400
This will start a new server at port 4400. Open a browser and launch localhost:4400 to run the application
````

## Application Feature

Application starts with a Home page
On click of Find A Car tab in the navigation bar, it opens up a page with list of available cars with filter panel at left hand side.
+ Button is available to add a particular car. A user can add multiple cars. If there is any car selected, a green badge will appear on the next navigation tab Book Cars. 
- Button is available in the Booking page to remove any selected car from the list
Book Cars button is available at the bottom of the booking page. On click of Book Cars button, user will be navigated to the Confirmation page that those selected cars have been booked.

n.b.: This is only the FE application and there is no BE implementation. The selected data will be removed with application reload. There is no Login features due to no backend implementation. It was presumed that the application is used by one user without storing/retrieving any data.

## Browser Support

To get the best view of the application, please use Chrome V 71 and with 80% page zoom. Not considered for the mobile for the moment. More work required in styling of the page.

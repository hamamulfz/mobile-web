# mobile-web-app

This project is a part of [Google Developer Kejar](https://events.withgoogle.com/googledeveloperskejar/) - Mobile Web Specialist Training collaborated with Inixindo.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

Things you need to install the software is by using a hosting like [firebase](https://firebase.google.com/?hl=id) hosting feature



### Installing

install this project in firebase hosting by using [Node.js](https://nodejs.org/en/)


## Assigment List

* [Home](https://mws-hamamul.firebaseapp.com/)
* [Responsive CSS Grid](https://mws-hamamul.firebaseapp.com/css_grid_index.html)
* [Calculator DevTool - Javascript](https://mws-hamamul.firebaseapp.com/kalkulator_add2number.html)
* [Mapbox - Leaflet](https://mws-hamamul.firebaseapp.com/leaflet_index.html)
* [Fetch JSON](https://mws-hamamul.firebaseapp.com/fetch_json_index.html)
* [Offline App](https://mws-hamamul.firebaseapp.com/offline_app_index.html)
* [Add to Homescreen](https://mws-hamamul.firebaseapp.com/add2homescreen_index.html) 


## Deployment
* Login to firebase in node.js
```
firebase login
```
this automatically login if your default browser already logged in firebase
* init directory 
```
firebase init
```

agree to select your directory by type "y"
```
     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\yourDirectory\

? Are you ready to proceed? Yes
```
then select Hosting Feature
```
? Which Firebase CLI features do you want to setup for this folder? Press Space
 to select features, then Enter to confirm your choices. (Press <space> to sele
ct)
 ( ) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
>(*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
```
select your firebase project to use or create new project
```
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: (Use arrow keys)
   [don't setup a default project]
   arduino-6c774 (Arduino)
   mws-hamamul (mws-hamamul)
>  mws-project-b1c67 (MWS-Project)
  [create a new project]
```
set as public
```
=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? (public)

? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N
```
then you will see this 
```
+  Wrote public/404.html
+  Wrote public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

+  Firebase initialization complete!
```
Congratulation, you have succesfully configure your local directory as firebase hosting material



* deploy project
```
firebase deploy
```


## Built With

* [HTML Code]
* [Node.Js]
* [JavaScript]
* [CSS Script]
* [Mapbox](https://www.mapbox.com/) - [Leaflet](https://leafletjs.com/)
* [Developer Tools]
* [JSON]
* [Progresive Web App]


## Versioning

This is final version of homework list. See [My Firebase Web](https://mws-hamamul.firebaseapp.com/) for the result. 

## Authors

* **Hamamul Fauzi** - *Initial work* - [hamamulfz](https://github.com/hamamulfz)


## License

No licence. Just ask if you wanna copy this repo

## Acknowledgments

* Google Developer Kejar
* Inixindo
* Facilitator
* W3school

[![Go To My Firebase Web App](https://www.ccapp.us/site_media/media/attachments/flatpages_flatpage/24/large-Go-Now-Button-0-102481.png)](https://mws-hamamul.firebaseapp.com/)

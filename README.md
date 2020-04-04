# Virtual Host

Virtual Host is an application that takes an event and transforms it into an educative experience.  Based on your proximity, a host can convey information via notifications to a logged-in user. Perhaps you want to give a virtual tour of a large-scale facility. Or you could be a vendor at an expo using this application as a virtual business card. Maybe you’re even a recent grad at a demo day wanting recruiters to have quick links to your portfolio and resume. Using innovative technologies such as Beacon, Virtual Host can do all of this and more!

## Deployed Project
[Link to deployed project](https://virtual-host.herokuapp.com/)

## Getting Started 

### Prerequisites

In order to run this on your local device, user must download git and node.js.

### Installing
* Begin by forking the Virtual Host respository.

<img width="106" alt="Screen Shot 2020-04-04 at 12 16 54 AM" src="https://user-images.githubusercontent.com/55072295/78418389-b0ba3d00-7609-11ea-81f8-fceb0e63d822.png">

* Clone the repository

<img width="154" alt="Screen Shot 2020-04-04 at 12 18 55 AM" src="https://user-images.githubusercontent.com/55072295/78418421-e2330880-7609-11ea-9598-8374f02146af.png">

Run the following command in your command line interface:

```
git clone <clone link here>
```

And install all dependencies in the root directory and client folder by running:

```
npm install
```

To start the application, user can run the following line in the CLI:

```
npm start
```

## Deployment
This application was deployed using Heroku and mLab.
* [Heroku](https://www.heroku.com/)  
* [mLab](https://mlab.com/) 

## Key Features

### Demo
![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/55072295/78451409-72e20680-7653-11ea-867f-8a3a1309446e.gif)

### User can...
* Log in with existing Google Account
* Host their own events and add vendors
* Make notes and favorites at specific booths 
* Enable/disable their own beacons
* Receive push notifications within certain proximity of beacons

### Sleek user interface
![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/55072295/78418789-adc14b80-760d-11ea-98c0-e5a264b57053.gif)

### Mobile Responsive
![screenshot_20200404-090143](https://user-images.githubusercontent.com/55072295/78451604-75912b80-7654-11ea-844e-f847c70308f7.png)


### Consistent Styling
<img width="553" alt="Screen Shot 2020-04-04 at 12 42 22 AM" src="https://user-images.githubusercontent.com/55072295/78418746-44d9d380-760d-11ea-84ea-f0571f243dd6.png">


## Built With

* [React](https://reactjs.org/)
* [React Semantic UI](https://react.semantic-ui.com/)
* [styled components](https://styled-components.com/)
* [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
* [Passport](http://www.passportjs.org/)
* [Eddystone API](https://developers.google.com/beacons/eddystone)
* [Eddystone UID Beacons](https://developers.google.com/beacons)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/docs/)
* [Axios](https://www.npmjs.com/package/axios)
* [Express](https://expressjs.com/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/taylormbruno/virtualHost/blob/master/Good-CONTRIBUTING.md-template.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Taylor Bruno** - *Full Stack Developer* - [Portfolio](https://taylorbruno.herokuapp.com/)
* **Kacie Hatley** - *Full Stack Developer* - [Portfolio](https://kaciehatley.github.io/project-portfolio/)
* **Jodi Rhoades** - *Full Stack Developer* - [Portfolio](https://jodirhoades.github.io/portfolio/)


## License

MIT License

Copyright (c) 2020 Virtual Host

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align='center'>
  <a href="https://mike.works" target='_blank'>
    <img height=40 src='https://assets.mike.works/img/login_logo-33a9e523d451fb0d902f73d5452d4a0b.png' />
  </a> 
</p>
<p align='center'>
  <a href="https://mike.works/course/ember-pro-16c648c" target='_blank'>
    <img height=150 src='https://cloud.githubusercontent.com/assets/558005/25771570/e48c9e0c-3255-11e7-97f2-da82911ee1be.png' />
  </a>
</p> 

<p align='center'>
  <a  href="https://greenkeeper.io/" title="Dependencies">
    <img src="https://badges.greenkeeper.io/mike-works/ember-pro.svg"/>
  </a>
  <a href="https://travis-ci.org/mike-works/ember-pro" title="Build Status">
    <img title="Build Status" src="https://travis-ci.org/mike-works/ember-pro.svg?branch=master"/>
  </a>
  <a href="https://mike.works/course/ember-pro-16c648c" title="Ember Pro">
    <img title="Course Outline" src="https://img.shields.io/badge/mike.works-course%20outline-blue.svg"/>
  </a>
  <a href="https://docs.mike.works/ember-pro" title="Slides">
    <img title="Slides" src="https://img.shields.io/badge/mike.works-slides-blue.svg"/>
  </a>
</p>
<p align='center'>
This is the  project used for the <a title="Mike.Works" href="https://mike.works">Mike.Works</a> <a title="Ember Pro" href="https://mike.works/course/ember-pro-16c648c">Ember Pro</a> course.
</p>

# Course outline and slides
 * [View course outline here](https://mike.works/course/ember-pro-16c648c)
 * [View slides here](https://docs.mike.works/ember-pro)
 
# What are the pieces? 
* The `master` branch represents the starting point for the course.
* The `solution` branch represents the state of the project after all exercises are completed.
* There are several git tags representing the state of the project after exercises are completed.
* Depending on whether you attended an in-person workshop or watched a video course, you may have a dedicated branch that represents the code I actually wrote during class

## Installing
You'll need to install several dependencies, including node.js, ember-cli and more. This project includes a command to check whether you're set up with appropriate versions of everything. If you're missing a dependency, please google for instructions regarding installation on your operating system.


#### Instructions
* `git clone https://github.com/mike-works/ember-pro` this repository
* `cd ember-pro`
* `./checksetup`
* Resolve any problems detected by the setup validator
* `yarn`
* `bower install`
* `./checksetup` - one more time, to validate that everything still works with node modules installed

**PLEASE NOTE** We will be using some typescript and a few ruby gems. Even if you're an experienced ember developer, you may not have these on your system.

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


---
&copy; 2018 Mike Works Inc., All Rights Reserved

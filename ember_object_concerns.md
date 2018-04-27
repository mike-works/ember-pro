# Ember Object Roles & Concerns
## Adapters
Handle all particulars having to do with request
- URL building
- ajax Options
- Auth (`Authorization` header)
- Actually making the request

## Serializers
Client JSON <- -> API JSON
Preparing hasMany, belongsTo properly

## Models
Represent persist able records
DO NOT put non-persisted state here


## Store
Single source of truth for persisted state
Caches records (see: identity map)
Decides whether to make requests or use cached data or both
Main point of interaction for E-D

## Router
Finite state machine
(Now a service)
Uses a `location` to listen to the URL, and kick off transitions between routes

## Routes
Transition application state from A -> B
	- often includes loading data
	- kicking unauthorized/unauthenticated users out (for usability reasons)
	- responsible for setting up controllers, kicking off rendering of templates
	- responsible for configuring queryParams
	

## Controllers
- Are not dead
- Are not deprecated
- Yes you may use them
- A fine place for actions used in top-level (non-component) templates
- Own queryParam property state, setup their default values
- WATCH OUT FOR
		- resetting state in Route#setupController

## Components
- Modular pieces of UI
- Come with a free handlebars helper
- Not singletons
- Wrap around the interesting part of your app

## Services
- lazily instantiated, singletons
- ember object + 0.0000001
- only necessary to hold state
- cross-cut many app concerns, but encapsulate stuff for one concept
	- example: auth stuff that is use for making requests, showing an avatar on the screen, etc…
	
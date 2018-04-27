## Ember-concurrency

* Iterator, Iterable, Generators ✅
* Ember-concurrency task ✅
  * Cancellation ✅
* Async/Await best practices ✅

## Component architecture

* {{yield}}
* Partial application w/ {{component}}
* Higher order components

## Building components

## 1. Select

* Actions
  * selectNone
  * selectAll
* Contextual component
  * List of selectable items

```html
  {{#x-select items=[] as |select|}} {{!-- smart --}}
    <button onClick={{select.actions.selectNone}}>
      Clear
    </button>
    <ul>
      {{#select.items as |item|}}   {{!-- dumb --}}
        <li>{{item}} </li>
      {{/select.items}}
    </ul>
  {{/x-select}}
```
    - Single/Multi select mode
    - Optional summary contextual component (number selected)

### Autocomplete
URL: https://api.mike.works/api/v1/search?
  types=course,talk,course-stage,course-agenda-item,event,blog-post  &
  q=ember

- Actions
  - clear

- Debounced (use ember-concurrency)
- Custom "autocomplete result item"
  - Defaults to a `<div>{{item}}</div>`
- inProgress state

```html
{{#x-autocomplete url='' onSelect=(action 'didSelect') as |autocomplete|}}
  {{#if autocomplete.inProgress}}
    Working...
  {{else}}
    <button onClick={{autocomplete.actions.clear}}>Clear</button>
    {{#each ....}}
  {{/if}}
{{/x-autocomplete}}
```

### Modal

- Actions
  - cancel
  - success

- Contextual components
  - header (should have a reasonable default)
  - footer (should have a reasonable default)

- Default buttons: "Ok" (success) and "Cancel" (cancel)

```html
{{#x-modal as |modal|}}
  {{#modal.header as |header|}}
    <h4>{{header.title}}</h4>
  {{/modal.header}}
  <div class='modal-body'>

  </div>
  {{modal.footer}} <-- the default w/ ok and cancel buttons
{{/x-modal}}

```

# Testing
  - Async/Await
  - Test selectors
  - PageObjects

# Modular architecture with in-repo addons
  * A UI kit
  * A broccoli plugin
  * Extending ember-cli
  * Engines
    * Route-less
    * Routed
    * Sharing state via services
    * {{link-to-external }}
    * A layered architecture

# Animation

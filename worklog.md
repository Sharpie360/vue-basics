# Vue.js Basics Work Log

# NOTES
- have access to all the properties and methods without using "this" keyword
.
- string interpolation must output a string at the end of render, no
- undefined, no non-value return, no complex data, no functions.
-- must be able to be converted to a string to output to DOM
.
- vue proxies the properties of objects into their methods so they can
- be accessed using the "this" keyword
.
- templates dont need "this", while the methods do need "this"
.
- use v-bind:href to dynamically insert the link into the href attr
.
# Vue Directives
-- directives are basically instructions for vue to follow
-- v-on, v-for, v-bind, v-once, v-html, etc followed by :
-- then dependant logic
.
- v-once prevents re-rendering of the element, even if the value or
- data changes elsewhere in the application
.
- v-html renders and outputs the link in the dom, use for only
- sanitary code, not for users
- vue default renders only text.
.
# Event modifiers!
- allows for modification of events "eventName.modifier"
-- v-on:mousemove.stop - modifies by stop propagation
-- allows for chaining of mods eventName.stop.prevent=""
-- stops propagation and prevents default behavior for links
.
# Keyboard Events
- listen for keyboard and keypress events the same way
-- .enter.space - can chain and control different keys to listen to
-- very handy - will only listen to the specified keys
.
# V-MODEL directive
- use syntax v-model="propName"


# data object is NOT reactive, cannot eval logic inside it

# everything stored in computed, can be used like a data property
#   these are functions that eval expressions beyond that of string
#   interpolation evaluation
    must run syncronously

# Shorthands] @ for events '@click'] : for v-bind ':href' 

# Simple Toggle Logic for Boolean values
    v-on:click="isActive = !isActive"
    on click set true to false, or false to true

# Dynamic CSS Styles with VueJS
- start by binding to the element class, :class="" (v-bind:)
-- static use of the class attr is okay to do, wont effect it
-- behind the scenes vuejs merge these together

-- pass in an object with condition :class="{className: true}"
---- need to use quotes if class name contains special chars (-)

# Styling with Objects 
-- computer props function that returns an object with the prop 
-- and the condition value, gets passed into the :class attr

# Styling without Classes
-- binding to the style attr allows for dynamic styling without the need for class names
-- use syntax :style="{styleName: condition}"

# Styling using Array Syntax
-- :style="[{backgroundColor: color}, myStyle]"
### Containers Folder

A container is what they call a "Smart Component" in Redux.  It is a component
which knows about Redux.  They are usually used as "Screens".

Also located in here are 2 special containers: `App.js` and `RootContainer.js`.

`App.js` is the first component loaded after `index.ios.js` or `index.android.js`. The purpose of this file is to setup Redux or any other non-visual "global" modules.  Having Redux setup here helps with the hot-reloading process in React Native during development as it won't try to reload your sagas and reducers should your colors change (for example).

`RootContainer.js` is the first visual component in the app. It is the ancestor of all other screens and components.

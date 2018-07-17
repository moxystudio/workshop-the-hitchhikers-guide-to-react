# THE HITCHHIKERS GUIDE TO REACT

## Authors

- António Capelo ([@antoniocapelo](https://github.com/antoniocapelo))
- Vasco Santos ([@vasco-santos](https://github.com/vasco-santos))

## Project structure

1. `/spectatacle-boilerplate` - workshop introductory presentation
3. `/base-project` - base project for the pratical component of the workshop

### Introductory presentation

We used a ReactJS based presentation library called [spectacle](https://github.com/FormidableLabs/spectacle) for powering our presentation with JS.

#### Usage

```
npm install
npm run start
```

### Base project

For the pratical part of the workshop, we will create a set of components, in order to have the restaurant application ready (using [react-with-moxy](https://github.com/moxystudio/react-with-moxy))

#### Usage

```
npm install
npm run start-dev
```

#### Guide

The project provided has almost all the building blocks needed for a restaurant to operate, that is, a kitchen (and obviously a cooker) and a waiter. However, we would not like to go to a restaurant where we have to sit on the floor and eat there.

In the first part of this workshop, we will need to implement the following UI components:

- Bench
- Table (with 4 Benchs)
- Room (with 4 Tables)

After having the UI components ready, it's time to eat something and enjoy a fresh beer. For this part, the acceptance criterias are listed below:

- When clicking on a table, the waiter drawer should open
- The UI should act according to the actions of the drawer
    - Order: Kitchen should receive the order and process it (orders may be visualized there). When the order is finished, the total of the order must be incremenented in the table
    - Sit: A set of people may join the restaurant and sit on the table. When the sits are being used, they should have a different color.
    - Leave: When people from a table intend to leave it, we should reset the table total and guests.

Bonus points for having a free meal:

- Drawer opening when clicking in a table, should be context aware. In other words, the drawer options should be filtered according to the possible actions for that table.
- Option to allow joining other people to the table, if it is not full.
- Option to leave the table for a specific number of guests, instead of all of them.
- Add a new step to the app like payment, where the total is reset to 0, but people can still hang out in the table.

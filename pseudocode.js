/*
// PSEUDO CODE
// - wire framing —> 
// how I want the app to look, 

  screen that takes orders (no login) - index.ejs
    - form will have all of the coffee options
    - customer name
  login page for all of the baristas to log in
  profile.ejs page
    - shows all of the orders in an ordered queue
    - allows for the barista to mark down what has been completed
    - done column that shows which orders have been completed and by which barista

// what I want it to do / how users will interact
  screen that takes orders (no login) - index.ejs
    - form will have all of the coffee options
  login page for all of the baristas to log in
  profile.ejs page
    - shows all of the orders in an ordered queue
    - allows for the barista to mark down what has been completed
    - done column that shows which orders have been completed and by which barista
  
// properties to send to post method
  - coffee order
  - customer name
  - potentially a null property for the barista name?
// - run server 
// - create new collection in MongoDB --> change collection names in code (db.collection('<order>'))
// - check connection to my server 
// - set up front end (inputs, where I want things to be positioned (affects childnodes))
/////// Routes
//--> GET(index.ejs/order page) rename res.render('index.ejs')
// - POST —> form inside of index.ejs -> what inputs / request body information do I want to send to the database? 
      - order
      - customer name
// - GET —> how many pages in my app? how many collections? 
    - 2 pages
    - 2 collections (order, barista/user from login)
//--> GET(profile.ejs / barista page) rename res.render('profile.ejs', {<collectionName>: result}) - pulls it on to page
//--> rename arry inside of profile.ejs to  <collectionName>[i].length, <collectionName>[i].<property>, etc.
// - PUT —> fetch call through main.js | what am I updating? what identifiers will I use to find that specific document?
    - updating the order as complete
// --> send idenitifier information inside of fetch body. every property inside of JSON body request = req.body.<property> in server.js
// - DELETE —> fetch call through main.js | what identifiers will I use to find that specific document?
*/
const http = require("http");

http.createServer((req, res)=>{

    // res.write("Hello World");

   // res.write (JSON.stringify({id:1, name:"Abhay", year:2022}))

  // res.write (JSON.stringify({id:1, name:"Abhay", age: 24, email: "abhaygangwar0807@gmail.com", joining_date : "December2021"}))

    res.write("<html> <head>server Response</head><body><h1> The Explanation of Node.JS</h1><p>Any javascript application can be run only on browser, because to execute JS code we need JS engine that is present only in browsers like Chrome has V8, Explorer has Chakra. But Ryan Dahl, wrote some code using C, C++, Javascript and executed it using V8 engine, this code is now commonly known as Node.JS, this allows us to execute the JS code outside the browser. Node.js is an open-source, cross-platform, JavaScript runtime environment built on Chrome's V8 JavaScript engine that executes JavaScript code outside a web browser. </p></body></html>")
    res.end();


}).listen(8000);
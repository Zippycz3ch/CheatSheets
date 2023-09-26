// POST - CREATE
// GET - RETRIVE
// HEAD - RETRIVE HEADER
// PUT - UPDATE
// PATCH - REPLACE
// DELETE - DELETE

// Postman stores variables as strings. If you store objects or arrays, remember to 
JSON.stringify() 
// them before storing, and
 JSON.parse()
// them when you retrieve them.



// Postman request with Query Params & Path var

{{baseUrl}}/1/boards/:id?key={{trelloKey}}&token={{trelloToken}}

// Basic 200OK

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Parsing json response
var jsonData = pm.response.json();

const idBoard = jsonData.id;

// Set and get for collection variables
const constnameX = pm.collectionVariables.get("constnameX");

pm.collectionVariables.set("variableName", variableValue);

// Set and get for env variables
const constName = pm.environment.get("constName");

pm.environment.set("toDoListId", toDoListId);

// Test of elmnt in jsonData
    
pm.test("Element is disabled", () => {
    const jsonData = pm.response.json();
    pm.expect(jsonData.prefs.calendarFeedEnabled).to.eql(false);
});

// Contains iteration data

pm.test("Should contain the customer id", function () {
    pm.expect(response.json.customerId).to.eql(pm.iterationData.get("customerId"));
});

// With parseInt
pm.test("Should contain the product id", function () {
    pm.expect(response.json.productId).to.eql(parseInt(pm.variables.get("productId")));
});    

// Length of array

pm.test("length of array is 1", () => {
    pm.response.json().length == 1;    
});

// Get request ID
pm.info.requestId

// Set next request
postman.setNextRequest("Request Name");

// Stoping workflow
postman.setNextRequest(null);

// Headers

pm.response.headers.get('X-Cache') 

// Header exists: 
pm.response.to.have.header('X-Cache'); 

//Header has value: 
pm.expect(pm.response.headers.get('X-Cache')).to.eql('HIT'); 

// Cookies

// Cookie exists:

pm.expect(pm.cookies.has('sessionId')).to.be.true; 

// Cookie has value:

pm.expect(pm.cookies.get('sessionId')).to.eql('ad3se3ss8sg7sg3');

//This
const person = {
    firstName: 'Jamie',
    lastName: 'Scott',
    age: 29,
    isMaried: false,
    sayHello: function (){return 'Hello, my name is ' + this.firstName; }
};

var requestBody = JSON.parse(pm.request.body.raw);
let jobName = requestBody.jobs[0].name
console.log(jobName)

pm.globals.set("jobName",jobName)

pm.collectionVariables.set("firstname", pm.variables.replaceIn("{{$randomFirstName}}"));
pm.collectionVariables.set("lastname", pm.variables.replaceIn("{{$randomLastName}}"));
pm.collectionVariables.set("username", pm.variables.replaceIn("{{$randomUserName}}"));
pm.collectionVariables.set("useremail", pm.variables.replaceIn("{{$randomEmail}}"));
// Postman request with Query Params & Path var

{{baseUrl}}/1/boards/:id?key={{trelloKey}}&token={{trelloToken}}

// Basic 200OK

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Handling response JSON

// Use JSON editor for large JSON and to find variable path
// https://jsoneditoronline.org/#right=local.jolugi&left=local.niyihi
// Parsing JSON response
// JSON response
{
    "idBoard": 24,
    "boardname": "Board",
    "success": true
}

var jsonData = pm.response.json();

const idBoard = jsonData.id;

// Parsing request
// Use when you generate data in pre-request scripts when roger returns just 200 for data validation

{
    "idBoard": 24,
    "boardname": "Board",
    "success": true
}

var requestBody = JSON.parse(pm.request.body.raw);

let idBoard = requestBody.id

// Variables
// https://learning.postman.com/docs/sending-requests/variables/

// Scope usage
// Collection  - data from calls, and tests
// Enviroment - baseUrl
// Globals - exported values for later calls/tests - access tokens, ids, etc

// Setting variables

// Set collection variable
// First is name of variable, second is the value. Dont use double or any qoutes on the value
pm.collectionVariables.set("idBoard", idBoard);     // Saves 24 as int
pm.collectionVariables.set("idBoard", "idBoard");     // Saves "idBoard" as string

// Use scopes for setting different scope variable
// Set global variable
pm.globals.set("idBoard", idBoard);

// Set environment variable
pm.environment.set("toDoListId", toDoListId);

// Getting variables

// Get collection variable
// Dont use double or any qoutes on the value
let idBoard = pm.collectionVariables.get("idBoard"); // Returns value
let idBoard = pm.collectionVariables.get(idBoard);  // Returns undefined

// Accesing variables with different scopes
// pm.variables.get will get variable from any available scope
// https://learning.postman.com/docs/sending-requests/variables/#variable-scopes

pm.variables.get("variable_key");
pm.globals.get("variable_key");
pm.collectionVariables.get("variable_key");
pm.environment.get("variable_key");

// Use let to create local variable 
let variable = pm.collectionVariables.get("variable_key");

// Basic test for Roger valid response

var jsonData = pm.response.json();

pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});

pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test('Success is true', function () {
    pm.expect(jsonData.success).to.be.true;
});

pm.test('unAuthorizedRequest is false', function () {
    pm.expect(jsonData.unAuthorizedRequest).to.be.false;
});

pm.test('Error is null', function () {
    pm.expect(jsonData.error).to.be.null;
});

// JSON Scheme validation

pm.test("Response matches schema", function () {
    pm.expect(jsonData).to.have.jsonSchema(schema);
});
// Postman request with Query Params & Path var

{{baseUrl}}/1/boards/:id?key={{trelloKey}}&token={{trelloToken}}


// Use console.log() to write stuff into console

var jsonData = pm.response.json();
let jobName = requestBody.Jobs[0].Name
console.log(jobName)

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

// Alternative way how to declare more variables at once, if they have same parrent

const { fileName, fileType, fileToken } = jsonData.result;


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

// Alternative way to set variable from JSON response
pm.collectionVariables.set("AbpTenantId", pm.response.json().result.items[0].id);


// Postman stores variables as strings. If you store objects or arrays, remember to stringify them before storing, 
JSON.stringify()

// and parse them when you retrieve them.
JSON.parse()


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

schema = {
    "type": "object",
    "properties": {
        "result": { "type": "null" },
        "targetUrl": { "type": "null" },
        "success": { "type": "boolean", "enum": [true] },
        "error": { "type": "null" },
        "unAuthorizedRequest": { "type": "boolean" },
        "__abp": { "type": "boolean" }
    },
    "required": ["result", "targetUrl", "success", "unAuthorizedRequest", "__abp"]
};

pm.test("Response matches schema", function () {
    pm.expect(jsonData).to.have.jsonSchema(schema);
});

// Tests
// Docs https://learning.postman.com/docs/writing-scripts/script-references/test-examples/

// Extraction and comparing of response

// To access the response, first create the object from it using

var jsonData = pm.response.json();

// Checking boolean status of response variable

pm.test("Element is disabled", () => {
    pm.expect(jsonData.prefs.calendarFeedEnabled).to.eql(false);
});

// Testing if string equals 

pm.test("Error matches", () => {
    pm.expect(jsonData.error).to.equal("authorization_pending");
});

// Testting if array is empty

pm.test("length of array is 1", () => {
    pm.response.json().length == 1;    
});

//  Check if something is or isnt null

pm.test('Error is null', function () {
    pm.expect(jsonData.error).to.be.null;
});

pm.test('Error is not null', function () {
    pm.expect(jsonData.error).not.to.be.null;
});

pm.test('Variable is not null', function () {
    pm.expect(jsonData.error).not.to.be.null;
});

// Checking data types

pm.test("Status code is 200", function () {
    pm.expect(jsonData.error).to.be.string;
});

pm.test("Status code is 200", function () {
    pm.expect(jsonData.error).to.be.object;
});

// Checking more variables inside one response in  one test

// Example One - Checks more variables of response

pm.test("The response has all properties", () => {
    //parse the response JSON and test three properties
    const responseJson = pm.response.json();
    pm.expect(responseJson.type).to.eql('vip');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.id).to.have.lengthOf(1);
});

// Example Two

pm.test("User role is correct", () => {
    pm.expect(jsonData.result.roles.some(role => role.roleName === ("Admin") && role.isAssigned)).to.eql(true);
});


// Example Three

pm.test("user_code is a non-empty string", function () {
    pm.expect(jsonData.user_code).to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});

// Example Four

pm.test('fileName exists, is not empty and has the correct format', function () {
    pm.expect(fileName).to.exist.and.not.to.be.empty;
    pm.expect(fileName).to.match(/\.xlsx$/);
});

// Comparing agains collection data

pm.test("ID matches", () => {
    pm.expect(jsonData.result.user.id).to.eql(pm.collectionVariables.get("userId"));
});

// Comparing agains iteration data

pm.test("adGroupID is correct", () => {
    pm.expect(pm.iterationData.get("adGroupID")).to.eql(jsonData.result.userSynchronizationDto.adGroupID);
});

// Extracting all ids from response array

const printerIdArray = jsonData.result.items.map(item => item.printer.id);

// Generating random variables for calls using 
// Docs https://learning.postman.com/docs/writing-scripts/script-references/variables-list/


pm.collectionVariables.set("firstname", pm.variables.replaceIn("{{$randomFirstName}}"));
pm.collectionVariables.set("lastname", pm.variables.replaceIn("{{$randomLastName}}"));
pm.collectionVariables.set("username", pm.variables.replaceIn("{{$randomUserName}}"));
pm.collectionVariables.set("useremail", pm.variables.replaceIn("{{$randomEmail}}"));
pm.collectionVariables.set("printerID", pm.variables.replaceIn("{{$guid}}"));

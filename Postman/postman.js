// Basic 200OK

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Parsing json response
var jsonData = pm.response.json();

const idBoard = jsonData.id;

// Set and get for env variables
const boardName2 = pm.environment.get("boardName");

pm.environment.set("toDoListId", toDoListId);

// Test of elmnt in jsonData

pm.test("Calendar is disabled", () => {
    const jsonData = pm.response.json();
    pm.expect(jsonData.prefs.calendarFeedEnabled).to.eql(false);
});

// Length of array

pm.test("length of array is 1", () => {
    pm.response.json().length == 1;    
});

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
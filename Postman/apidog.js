var jsonData = pm.response.json();

if (((jsonData.result.remoteCloudUsersToSynchronizeCount) - (jsonData.result.synchronizedUsersCountInRoger) !== 0) || ((jsonData.result.remoteCloudUsersToSynchronizeCount) - ((jsonData.result.synchronizedUsersCountInRoger) + (jsonData.result.skippedUsersCount))!== 0)) {
    postman.setNextRequest("Get info about user synchronization process(Success Copy)");
    setTimeout(() => {}, 1000);
} else {
    if (jsonData.result.skippedUsersCount > 0 ) {
        pm.test("remoteCloudUsersToSynchronizeCount and ( synchronizedUsersCountInRoger + skippedUsersCount) are equal", function () {
            pm.expect(jsonData.result.remoteCloudUsersToSynchronizeCount).to.eql((jsonData.result.synchronizedUsersCountInRoger) + (jsonData.result.skippedUsersCount));
        });
        console.log("Users skipped during synch: " + jsonData.result.skippedUsersCount)
    } else {
        pm.test("remoteCloudUsersToSynchronizeCount and synchronizedUsersCountInRoger are equal", function () {
            pm.expect(jsonData.result.remoteCloudUsersToSynchronizeCount).to.eql(jsonData.result.synchronizedUsersCountInRoger);
        });
        pm.test("No skipped users durring synch", function () {
            pm.expect(jsonData.result.skippedUsersCount).to.eql(0);
        });
    }
}



let admin_access_token = jsonData.result.accessToken;
pm.globals.set("admin_user_id", admin_user_id);

// Assertions

pm.test("Response has the required properties", function () {
    pm.expect(jsonData).to.have.property("result");
});

pm.test("User is active", () => {
    pm.expect(jsonData.result.user.isActive).to.eql(true);
});

// Standard Roger 200 repsonse body test

pm.test("Success field is true", function () {
    pm.expect(jsonData.success).to.be.true;
});

pm.test("Error field is null", function () {
    pm.expect(jsonData.error).to.be.null;
});

pm.test("unAuthorizedRequest is false", function () {
    pm.expect(jsonData.unAuthorizedRequest).to.eql(false);
});

// 200 & 40x

pm.test("Response status is 404", function () {
    pm.response.to.have.status(404);
});

// replace and set variables
let firstname = pm.globals.replaceIn("{{$randomFirstName}}");
let useremail = firstname + "." + lastname + "@rogertest.dev"

pm.globals.set("firstname", firstname);
pm.globals.set("useremail", useremail);

// Get iteration variables

var expectedErrorMsg = pm.iterationData.get("expectedValidationErrorMember");

// Extraction of status code and error

pm.test("Error matches", () => {
    pm.expect(pm.response.json().error.message).to.equal(pm.iterationData.get("expectedErrorMsg"));
});

pm.test("Status matches", () => {
    pm.expect(pm.response.code).to.equal(parseInt(pm.iterationData.get("expectedStatus")));
});

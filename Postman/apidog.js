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


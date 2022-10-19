${#Project#custom_property}         // Project custom property
${#TestCase#custom_property}        // Test Case custom property

def tc = context.getTestCase().getLabel()       // Takes name of current Test case as stores it in tc
def ts = context.getCurrentStep().getLabel()    // Takes name of current Test step as stores it in ts

def valueUser = context.testCase.testSuite.project.getPropertyValue("User")     // takes value User from project level and store it in valueUser
def testPreferenceKey = context.testCase.getPropertyValue("preference-key")     // takes value preference-key from Test case level and store it in testPreferenceKey

assert json.userNumber == testUser : log.error ("monitoring: Error on TC:"+ tc + " Step:" + ts + ". Incorrect userNumber")
assert json.userNumber == [testUser] : log.error ("monitoring: Error on TC:"+ tc + " Step:" + ts + ". Incorrect userNumber")
assert json.applicationId == testAppID.toInteger() : log.error ("monitoring: Error on TC:"+ tc + " Step:" + ts + ". Incorrect applicationId")
assert json.applicationId == [testAppID.toInteger()] : log.error ("monitoring: Error on TC:"+ tc + " Step:" + ts + ". Incorrect applicationId")
assert json.response.size() ==  size.toInteger() : log.error ("monitoring: Error on TC:"+ tc + " Step:" + ts + ". wrong size was returned")
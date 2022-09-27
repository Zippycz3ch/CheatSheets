import com.eviware.soapui.support.XmlHolder
import com.eviware.soapui.impl.wsdl.testcase.WsdlTestRunContext

// Shortcuts 
def project = testRunner.testCase.testSuite.project
def suite = testRunner.testCase.testSuite

// Hit Add employ Request from propertioes from testCase level
// definuje kde brát data
def test_name = suite.testCases["addEmployee TestCase"].getPropertyValue("name")
def test_id = suite.testCases["addEmployee TestCase"].getPropertyValue("id")
def test_dept = suite.testCases["addEmployee TestCase"].getPropertyValue("department")
def test_age = suite.testCases["addEmployee TestCase"].getPropertyValue("age")

// Objects
def addReq = suite.testCases["addEmployee TestCase"].testSteps["add"].getPropertyValue("Request") // Vytvoří objekt addReq který obsahuje data z property Request v test stepu v testcasu
def xmlAdd = new XmlHolder(addReq) // vytvoří xml z objektu addReq

xmlAdd.setNodeValue("//typ:addEmployee/typ:name",test_name) //přidá hodnotu test_name do AddEmployee/name v xmlAdd
xmlAdd.setNodeValue("//typ:addEmployee/typ:id",test_id)
xmlAdd.setNodeValue("//typ:addEmployee/typ:Department",test_dept)
xmlAdd.setNodeValue("//typ:addEmployee/typ:age",test_age)

def newAddXml = xmlAdd.getXml(); // Uloží nové xml newAddXml s hodnotami z xmlAdd.setNodevalue

suite.testCases["addEmployee TestCase"].testSteps["add"].setPropertyValue("Request",newAddXml) // uloží data z newAddXml jako property ve stepu v test casu

def addTestStep = suite.testCases["addEmployee TestCase"].testSteps["add"] // objekt pro kontrolu kde spustit step
def contextAddEmployee = new WsdlTestRunContext(addTestStep); //objekt pro context stepu
addTestStep.run(testRunner,contextAddEmployee) // spuštění testu s contextem

// End of Hit Add employ Request from propertioes from testCase level

// Hit getEmployeeDetails TestCase and generate response.

def getReq = suite.testCases["getEmployeeDetails TestCase"].testSteps["get_test_step"].getPropertyValue("Request")
def getInfoXml = new XmlHolder(getReq)

getInfoXml.setNodeValue("//typ:getEmployeeDetails//typ:employeeName",test_name)

def newGetInfoXml = getInfoXml.getXml(); 

suite.testCases["getEmployeeDetails TestCase"].testSteps["get_test_step"].setPropertyValue("Request",newGetInfoXml)

def get_test_step = suite.testCases["getEmployeeDetails TestCase"].testSteps["get_test_step"] // objekt pro kontrolu kde spustit step
def contextGetEmployeeDet = new WsdlTestRunContext(get_test_step); //objekt pro context stepu
get_test_step.run(testRunner,contextGetEmployeeDet) // spuštění testu s contextem

// Validate
def getRes = suite.testCases["getEmployeeDetails TestCase"].testSteps["get_test_step"].getPropertyValue("Response")

def getEmpResp = new XmlHolder(getRes)
def GetResponse = getEmpResp.getNodeValue("//ns:name")

log.info GetResponse
log.info test_name

assert GetResponse==test_name

// Delete

def deleteEmp = suite.testCases["deleteEmployee TestCase"].testSteps["deleteEmployee"].getPropertyValue("Request")
def deleteEmpXml = new XmlHolder(deleteEmp)

deleteEmpXml.setNodeValue("//typ:deleteEmployee//typ:employeeName",test_name)

def newDeleteEmpXml = deleteEmpXml.getXml()

suite.testCases["deleteEmployee TestCase"].testSteps["deleteEmployee"].setPropertyValue("Request",newDeleteEmpXml)

def del_test_step = suite.testCases["deleteEmployee TestCase"].testSteps["deleteEmployee"]
def contextDelEmp = new WsdlTestRunContext(del_test_step)
del_test_step.run(testRunner,contextDelEmp)

// Validate deleteion
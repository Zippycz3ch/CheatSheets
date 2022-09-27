// Rest


// CRUD 
// POST - CREATE
// GET - RETRIVE
// PUT - UPDATE
// DELETE - DELETE


// JSONPAth Expresions
status //select root object status
photos.photo[4].title //selectne title 

// Script assertion

def response = messageExchange.response.responseContent  // pomocí  messageExchange vytáhne obsah reponsu
def json = new JsonSlurper()                             // vytvoří objekt json pro parsování dat
def jsonParser = json.parseText(response)                // vytvoří objekt jsonParser který obsahuje strukturovaná data z response

log.info jsonParser.place_id
assert jsonParser.status == "OK" //Checks if the status in json response is OK. Hard stop if not.

context.getTestCase()setPropertyValue("place_id",jsonParser.place_id)           //pastne place_id z jsonParser do test casu do custom property place_id

${#TestCase#place_id}                                                           // property value for query

photos.photo[?(@.id == '52364399074')].server // JSONPatch Match - vyhledá hodnotu oobjektu server pokud je id stejné jako v assertion

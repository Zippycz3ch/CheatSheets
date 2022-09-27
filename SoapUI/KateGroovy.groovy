//generate SID - 32 length

def currentTM = new java.util.Date();

def propertySID = "xSoapUIxTrungx" + (new java.text.SimpleDateFormat("yyyyMMddHHmmss")).format(currentTM) + "x";

def retRnd = String.valueOf(Math.round(Math.random()*999999))

def count = 32 - propertySID.length() - retRnd.length()

for(i=0; i<count; i++)  propertySID += '0';

propertySID += retRnd

testRunner.getTestCase().setPropertyValue("SID", propertySID)

 

//generate CreateDateTime - 2001-12-17T09:30:47.0

def propertyCDT =  (new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss")).format(currentTM)

testRunner.getTestCase().setPropertyValue("CreateDateTime", propertyCDT)



//generate random NamePrefix

import org.apache.commons.lang.RandomStringUtils
int randomStringLength = 5
String charset = (('a'..'z') + ('A'..'Z') ).join()
String randomString = RandomStringUtils.random(randomStringLength, charset.toCharArray())

testRunner.getTestCase().setPropertyValue("NamePrefix", randomString) 



//generate BirthNumber

public randomBetween(a, b){
    Random random = new Random();
    value = random.nextInt(b-a) + a;
    return value;
}

public clientBirthNumberYear(fullYear){
        def year = 0;

        if (fullYear > 1899 && fullYear < 2000){
            year = fullYear - 1900;
        }
        else if (fullYear > 1999){
            year = fullYear - 2000;

        }
        return year;
    }

public clientBirthNumberMaxNumberOfDay(month){
        if (month == 4 || month == 6 || month == 9 || month == 11){
            return 31;
        }
        else if (month == 2){
            return 29
        }
        else {
            return 32;
        }
    }

public clientBirthNumberLastDigits(year){
        if (year > 1953){
            return randomBetween(1000,9999);
        }
        else {
            return randomBetween(100,999);
        }
    }

public getClientBirthNumber(min,max){

  def fullYear = randomBetween(min,max);
  def year = clientBirthNumberYear(fullYear);
  def month = randomBetween(1,13);
  def day =
  randomBetween(1,clientBirthNumberMaxNumberOfDay(month));
  def lastDigits = clientBirthNumberLastDigits(fullYear);
  def complete = year + month + day + lastDigits;
  def identListA;
  def identListB;
  
  def mod = complete.mod(11);
  
  while (mod !=0){
    fullYear = randomBetween(min,max);
    year = clientBirthNumberYear(fullYear);
    month = randomBetween(1,13);
    day =
    randomBetween(1,clientBirthNumberMaxNumberOfDay(month));
    lastDigits = clientBirthNumberLastDigits(fullYear)
    complete = year + month + day + lastDigits;
    mod = complete.mod(11);
  }
  
  if (month < 10){
      month = '0' + month;
  }
  if (year < 10){
      year = '0' + year;
  }
  if (day < 10){
      day = '0' + day;
  }

  identListA = [fullYear,"-",month,"-",day];
  clientBirthDate = identListA.join('');
  
  identListB = [year,month,day,lastDigits];
  clientBirthNumber = identListB.join('');

  testRunner.getTestCase().setPropertyValue("BirthDate", clientBirthDate)
  testRunner.getTestCase().setPropertyValue("BirthNumber", clientBirthNumber)
  return clientBirthNumber;
  
  }

def BirthNum = getClientBirthNumber(1970,1999)


// generovani nahodne krestni jmeno
class Person {
    def name
}

def nameList = ["Karina", "Radmila", "Diana", "Dalimil", "Vilma", "Čestmír", "Vladan", "Břetislav", "Bohdana", "Pravoslav", "Edita", "Radovan", "Alice", "Hynek", "Nela", "Blažej", "Jarmila", "Dobromila", "Vanda", "Veronika", "Milada", "Apolena", "Mojmír", "Božena", "Slavěna", "Věnceslav", "Valentýn", "Jiřina", "Bedřich", "Anežka", "Kamil", "Stela", "Kazimír", "Miroslav", "Tomáš", "Gabriela", "Františka", "Viktorie", "Anděla", "Řehoř", "Růžena", "Rút", "Matylda", "Ida", "Hugo", "Erika", "Richard", "Ivana", "Miroslava", "Vendula", "Heřman", "Hermína", "Ema", "Dušan", "Darja", "Izabela", "Julius", "Aleš", "Vincenc", "Anastázie", "Zikmund", "Alexej", "Květoslav", "Klaudie", "Radoslav", "Stanislav", "Ctibor", "Blažena", "Svatava", "Pankrác", "Servác", "Bonifác", "Žofie", "Laura", "Jarmil", "Tamara", "Dalibor", "Dobroslav", "Norbert", "Iveta", "Slavoj", "Medard", "Stanislava", "Gita", "Bruno", "Antonie", "Antonín", "Roland", "Vít", "Jaroslava", "Patricie", "Radomír", "Prokop", "Bohuslava", "Nora", "Drahoslava", "Libuše", "Amálie", "Olga", "Bořek", "Markéta", "Karolína", "Jindřich", "Oskar", "Gustav", "Miluše", "Dominik", "Dominika", "Kristián", "Oldřiška", "Lada", "Soběslav", "Roman", "Vavřinec", "Zuzana", "Klára", "Alena", "Alan", "Sylva", "Hana", "Linda", "Samuel", "Adéla", "Bronislav", "Bronislava", "Jindřiška", "Rozálie", "Boris", "Boleslav", "Regína", "Mariana", "Daniela", "Irma", "Denisa", "Denis", "Marie", "Lubor", "Radka", "Jolana", "Igor", "Olivie", "Oliver", "Galina", "Bohumil", "František", "Eliška", "Hanuš", "Justýna", "Sergej", "Věra", "Štefan", "Sára", "Marina", "Andrej", "Marcel", "Renáta", "Agáta", "Tereza", "Felix", "Hubert", "Karel", "Karla", "Miriam", "Liběna", "Saskie", "Bohumír", "Bohdan", "Evžen", "Martin", "Benedikt", "Tibor", "Sáva", "Leopold", "Iva", "Blanka", "Svatoslav", "Barbora", "Barbara", "Jitka", "Mikuláš", "Ambrož", "Benjamín", "Květoslava", "Vratislav", "Vratislava", "Julie", "Dana", "Simona", "Lucie", "Lýdie", "RadanaRadan", "Ctirad", "Drahoslav", "Vladislav", "Doubravka", "Ilona", "Sebastian", "Běla", "Slavomír", "Zdeněk", "Milena", "Miloš", "Zora", "Ingrid", "Otýlie", "Zdislava", "Robin", "Marika", "Ljuba", "Miloslava", "Gizela", "Patrik", "Oldřich", "Lenka", "Eleonora", "Petr", "Svatopluk", "Matěj", "Liliana", "Dorota", "Alexandr", "Lumír", "Horymír", "Elena", "Herbert", "Vlastimil", "Eduard", "Josef", "Světlana", "Radek", "Leona", "Ivona", "Gabriel", "Marián", "Emanuel", "Dita", "Soňa", "Taťána", "Arnošt", "Kvido", "Irena", "Rudolf", "Valérie", "Rostislav", "Marcela", "Alexandra", "Evženie", "Vojtěch", "Jiří", "Marek", "Oto", "Jaroslav", "Vlastislav", "Robert", "Blahoslav", "Přemysl", "Aneta", "Nataša", "Ivo", "Zbyšek", "Monika", "Emil", "Vladimír", "Jana", "Vanesa", "Viola", "Filip", "Valdemar", "Vilém", "Maxmilián", "Maxim", "Ferdinand", "Kamila", "Zbyněk", "Adolf", "Milan", "Leoš", "Květa", "Alois", "Pavla", "Zdeňka", "Jan", "Ivan", "Adriana", "Ladislav", "Lubomír", "Petr", "Pavel", "Šárka", "Luboš", "Martina", "Drahomíra", "Čeněk", "Ilja", "Vítězslav", "Magdaléna", "Libor", "Kristýna", "Jakub", "Anna", "Anita", "Věroslav", "Viktor", "Svatomír", "Marta", "Bořivoj", "Ignác", "Jáchym", "Petra", "Helena", "Ludvík", "Luisa", "Bernard", "Johana", "Bohuslav", "Sandra", "Bartoloměj", "Radim", "Luděk", "Otakar", "Augustýn", "Evelína", "Vladěna", "Pavlína", "Ludmila", "Naděžda", "Kryštof", "Zita", "Oleg", "Matouš", "Darina", "Berta", "Jaromír", "Zlata", "Andrea", "Jonáš", "Václav", "Michal", "Jeroným", "Havel", "Hedvika", "Heda", "Lukáš", "Michaela", "Vendelín", "Brigita", "Sabina", "Teodor", "Nina", "Beáta", "Erik", "Šarlota", "Zoe", "Zoja", "Silvie", "Tadeáš", "Štěpánka", "Otmar", "Mahulena", "Romana", "Alžběta", "Nikola", "Nikolas", "Albert", "Cecílie", "Klement", "Emílie", "Kateřina", "Artur", "Xenie", "René", "Zina", "Ondřej", "Albína", "Daniel", "Miloslav", "Ester", "Dagmar", "Natálie", "Šimon", "Vlasta", "Adam", "Eva", "Štěpán", "Žaneta", "Bohumila", "Judita", "David", "Silvestr"]
def nameListSize = nameList.size()
def r = new Random()

    Person person = new Person(
        name: nameList.get(r.nextInt(nameListSize))
    )
    return person.name



// input 
def ui = com.eviware.soapui.support.UISupport;
ui.prompt("Vlozte CUIDr","Answer");


//This will display an information message
def alert = com.eviware.soapui.support.UISupport;
def cuid = context.expand( '${PrepareOrderForSigning 2#Response#declare namespace NS1=\'http://www.csob.cz/distribution/OrderManagement/prepareOrderForSigning/v1/res\'; //NS1:PrepareOrderForSigningRes[1]/NS1:Order[1]/NS1:Persons[1]/NS1:Person[1]/NS1:Cuid[1]}' )
def account = context.expand( '${PrepareOrderForSigning 2#Response#declare namespace NS1=\'http://www.csob.cz/distribution/OrderManagement/prepareOrderForSigning/v1/res\'; //NS1:PrepareOrderForSigningRes[1]/NS1:Order[1]/NS1:Persons[1]/NS1:Person[1]/NS1:OrderItems[1]/NS1:OrderItem[1]/NS1:ProductNumber[1]}' )
def name = context.expand( '${PrepareOrderForSigning 2#Response#declare namespace NS1=\'http://www.csob.cz/distribution/OrderManagement/prepareOrderForSigning/v1/res\'; //NS1:PrepareOrderForSigningRes[1]/NS1:Order[1]/NS1:Persons[1]/NS1:Person[1]/NS1:FirstName[1]}' )
def surname = context.expand( '${PrepareOrderForSigning 2#Response#declare namespace NS1=\'http://www.csob.cz/distribution/OrderManagement/prepareOrderForSigning/v1/res\'; //NS1:PrepareOrderForSigningRes[1]/NS1:Order[1]/NS1:Persons[1]/NS1:Person[1]/NS1:Surname[1]}' )

alert.showInfoMessage("Stav objednavky: Dokoncena \nJmeno Prijmeni: $name $surname  \nCUID: $cuid \nProductNumber: $account");
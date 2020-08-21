import random from "./random-utils";

const STUDIES = [ "High School", "Bachelor's Degree", "Master's Degree", "Doctor's Degree", "Postdoctoral Studies" ];

const MALE_NAMES = [ "James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph" ];
const FEMALE_NAMES = [ "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan" ];
const LAST_NAMES = [ "Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Wilson", "Anderson", "Taylor" ];

const STREET_TITLES = [ "Ale.", "Bvd.", "Str." ];
const STREET_NAMES = [ "Parcului", "Trandafirului", "Tineretului", "Mihai Viteazu", "Mircea cel Batran" ];
const CITY_NAMES = [ "Sibiu", "Bucuresti", "Rm. Valcea", "Craiova", "Cluj" ];

function generateRandomPerson() {
    const isFemale = random.getRandomBoolean();
    const name = getRandomName(isFemale);
    const startDate = random.getRandomDate(new Date("2000-01-01"), new Date("2020-01-01"));
    const isActive = random.getRandomBoolean();
    const postalCode = random.getRandomNumber(100000, 999999);

    return {
        isFemale,
        firstName: name.firstName,
        lastName: name.lastName,
        isManager: random.getRandomBoolean(),
        startDate,
        endDate: getRandomEndDate(startDate),
        isActive,
        address: getRandomAddress(),
        postalCode,
        telephone: getRandomTelephoneNumber(),
        email: getEmailAddress(name),
        birthday: random.getRandomDate(new Date("1960-01-01"), new Date("1999-01-01")),
        noChildren: random.getRandomNumber(1, 3),
        salary: random.getRandomDecimal(2400, 12000),
        studies: random.getRandomFromArray(STUDIES),
        socialSecurityNumber: getSocialSecurityNumber(isFemale),
        hasDrivingLicense: random.getRandomBoolean()
    };
}

function getRandomName(isFemale) {
    const firstNameArray = (isFemale ? FEMALE_NAMES : MALE_NAMES);
    return {
        firstName: random.getRandomFromArray(firstNameArray),
        lastName: random.getRandomFromArray(LAST_NAMES)
    }
}

function getRandomEndDate(startDate) {
    const hasEndDate = random.getRandomBoolean();
    if (!hasEndDate) {
        return null;
    }

    return random.getRandomDate(startDate, new Date("2020-01-01"));
}

function getRandomAddress() {
    const streetTitle = random.getRandomFromArray(STREET_TITLES);
    const streetName = random.getRandomFromArray(STREET_NAMES);
    const streetNumber = random.getRandomNumber(1, 80);
    const cityName = random.getRandomFromArray(CITY_NAMES);
    return `${streetTitle} ${streetName}, nr. ${streetNumber}, ${cityName}`;    
}

function getRandomTelephoneNumber() {
    return "07" + random.getRandomNumber(10000000, 99999999);
}

function getEmailAddress(fullName) {
    return `${fullName.firstName}.${fullName.lastName}@example.com`.toLowerCase();
}

function getSocialSecurityNumber(isFemale) {
    let gender = (isFemale ? "2" : "1");
    let year = random.getRandomNumber(60, 99);
    let month = random.pad2(random.getRandomNumber(1, 12));
    let day = random.pad2(random.getRandomNumber(1, 25));
    let code = random.getRandomNumber(100000, 999999);

    return `${gender}${year}${month}${day}${code}`;
}

export default generateRandomPerson;
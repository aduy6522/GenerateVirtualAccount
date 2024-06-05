const fs = require('fs');

const industries = [
  'IT Services', 'Healthcare', 'Retail', 'Construction', 'Education', 'Finance', 'Hospitality',
  'Manufacturing', 'Transportation', 'Real Estate', 'Food & Beverage', 'Telecommunications',
  'Energy', 'Agriculture', 'Media', 'Entertainment', 'Legal', 'Consulting', 'Advertising',
  'Marketing', 'Automotive', 'Aerospace', 'Biotechnology', 'Pharmaceuticals', 'Insurance',
  'Tourism', 'Environmental Services', 'Non-Profit', 'Government', 'Defense', 'Publishing',
  'Textiles', 'Fashion', 'Beauty', 'Electronics', 'Chemicals', 'Mining', 'Metals', 'Utilities',
  'Packaging', 'Wholesale'
];

const suburbs = [
  'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Darwin',
  'Hobart', 'Newcastle', 'Wollongong', 'Geelong', 'Cairns', 'Toowoomba', 'Ballarat',
  'Bendigo', 'Launceston', 'Mackay', 'Rockhampton', 'Bunbury', 'Coffs Harbour', 'Wagga Wagga',
  'Hervey Bay', 'Mildura', 'Shepparton', 'Gladstone', 'Tamworth', 'Traralgon', 'Orange',
  'Bowral', 'Albany', 'Bathurst', 'Geraldton', 'Port Macquarie', 'Dubbo', 'Nowra', 'Lismore',
  'Kalgoorlie', 'Busselton', 'Warrnambool', 'Alice Springs'
];

const businessNames = [
  'ABC Company', 'XYZ Corporation', '123 Enterprises', 'Sunshine Services', 'Golden Industries',
  'Dynamic Solutions', 'Tech Innovators', 'Prime Logistics', 'Elite Consulting', 'Silver Linings',
  'Alpha & Omega', 'Global Ventures', 'United Enterprises', 'Pinnacle Partners', 'Nova Holdings',
  'Infinity Group', 'Apex Solutions', 'Summit Strategies', 'Bright Future', 'Premier Properties',
  'NextGen Technologies', 'True North', 'Visionary Ventures', 'Epic Innovations', 'Synergy Systems',
  'Blue Horizon', 'Vertex Industries', 'Quantum Leap', 'Ascend Enterprises', 'Radiant Solutions',
  'Excel Innovations', 'Frontline Solutions', 'Ambition Unlimited', 'Momentum Inc', 'Prime Movers',
  'Keystone Enterprises', 'Zenith Group', 'Nexus Solutions', 'Optimum Enterprises', 'Vital Strategies'
];

const firstNames = [
  'John', 'Emma', 'Michael', 'Sophia', 'Chris', 'Olivia', 'David', 'Mia', 'James', 'Isabella',
  'Alexander', 'Ava', 'Ethan', 'Charlotte', 'Daniel', 'Amelia', 'Matthew', 'Harper', 'Joseph',
  'Evelyn', 'William', 'Abigail', 'Benjamin', 'Lily', 'Samuel', 'Grace', 'Henry', 'Hannah', 'Jackson',
  'Ellie', 'Gabriel', 'Chloe', 'Elijah', 'Victoria', 'Lucas', 'Zoe', 'Ryan', 'Aria', 'Nathan', 'Scarlett',
  'Liam', 'Ella', 'Andrew', 'Penelope', 'Isaac', 'Riley', 'Joshua', 'Aubrey', 'Sebastian', 'Addison'
];

const lastNames = [
  'Smith', 'Johnson', 'Brown', 'Miller', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris',
  'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker',
  'Hall', 'Allen', 'Young', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
  'Adams', 'Nelson', 'Baker', 'Perez', 'Mitchell', 'Roberts', 'Carter', 'Phillips', 'Campbell', 'Parker',
  'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan'
];

const emailDomains = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'companydomain.com',
  'example.com', 'testmail.com', 'mailinator.com', 'fakemail.com', 'tempmail.com',
  'dispostable.com', 'yopmail.com', 'mail.com', 'email.com', 'fastmail.com',
  'protonmail.com', 'zoho.com', 'icloud.com', 'gmx.com', 'aol.com',
  'hushmail.com', 'inbox.com', 'mail.ru', 'qq.com', 'yandex.com',
  'live.com', 'msn.com', 'comcast.net', 'verizon.net', 'sbcglobal.net',
  'att.net', 'bellsouth.net', 'earthlink.net', 'juno.com', 'aim.com',
  'rocketmail.com', 'rediffmail.com', 'lycos.com', 'mail2web.com', 'bigstring.com'
];

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

const generateRandomEmail = (firstName, lastName) => {
  const domain = getRandomItem(emailDomains);
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}

const generateRandomPhone = () => {
  const phoneNumber = Math.floor(Math.random() * 900000000) + 100000000;
  return `0${phoneNumber}`;
}

const generateRandomPassword = (length = 10) => {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()-_+=<>?/.,';

  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

  let password = '';

  // Ensure at least one lowercase letter
  password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];

  // Ensure at least one uppercase letter
  password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];

  // Ensure at least one number
  password += numbers[Math.floor(Math.random() * numbers.length)];

  // Ensure at least one special character
  password += symbols[Math.floor(Math.random() * symbols.length)];

  // Generate the remaining characters randomly
  for (let i = 4; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
  }

  // Shuffle the password to randomize the positions of characters
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

const generateRandomFormData = () => {
  const industry = getRandomItem(industries);
  const suburb = getRandomItem(suburbs);
  const businessName = getRandomItem(businessNames);
  const firstName = getRandomItem(firstNames);
  const lastName = getRandomItem(lastNames);
  const email = generateRandomEmail(firstName, lastName);
  const phone = generateRandomPhone();
  const password = generateRandomPassword(); // Generate password here

  return {
    Industry: industry,
    Suburb: suburb,
    BusinessName: businessName,
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Phone: phone,
    Password: password // Include the generated password
};
}

// Update the file path to the correct location
const filePath = 'data/randomFormData.json';

// Read existing data from the file
let existingData = [];
try {
const data = fs.readFileSync(filePath, 'utf8');
existingData = JSON.parse(data);
} catch (err) {
console.error('Error reading file:', err);
}

const generatedData = new Set(existingData.map(JSON.stringify));

// Generate new data that does not overlap with existing data
const newGeneratedData = [];
while (newGeneratedData.length < 2000) {
const formData = generateRandomFormData();
const formDataString = JSON.stringify(formData);
if (!generatedData.has(formDataString)) {
newGeneratedData.push(formData);
generatedData.add(formDataString);
}
}

// Merge existing data with new data
const mergedData = existingData.concat(newGeneratedData);

// Write merged data back to the file
const jsonData = JSON.stringify(mergedData, null, 2);
fs.writeFileSync(filePath, jsonData, 'utf-8');
console.log('Random form data has been logged to randomFormData.json');
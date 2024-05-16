// accesses the users from the database

const fs = require('fs/promises');

const fileName = __dirname + '/../data/users.json';


const dataPromise = fs
    // tests if the file exists and is visible for the calling process
  .access(fileName, fs.constants.F_OK)
  .then(() => fs.readFile(fileName, 'utf8'))
//   parses what's in the json into a javascript object
  .then(content => JSON.parse(content))

async function save() {
    // await makes the code wait until the promise is returned
    // in this case I believe it is waiting for dataPromise to have the data it's accessing
    const data = await dataPromise
    // saves the data by writing it to the users.json file
    return fs.writeFile(fileName, JSON.stringify(data, null, 2))
}

async function getAll() {
    const data = await dataPromise
    return data.items
    // this should have something that maps undefined onto variables of the data we want to hide from users, but I'm not quite sure how that implementation will be done with other parts of the project
}

async function get(handle) {
    const data = await dataPromise;
    return data.items.find(item => item.handle == handle);
}

// filters the users and returns only those that match the inputted parameter
async function search(q) {
    return (await getAll()).filter(item => 
        // second parameter is a flag
        new RegExp(q, 'i').test(item.firstName) ||
        new RegExp(q, 'i').test(item.lastName) ||
        new RegExp(q, 'i').test(item.email) );
}

// adds a user to the json file
async function add(user) {
    const data = await dataPromise
    // make sure they have a unique id
    user.id = data.items.length + 1;
    data.items.push(user);
    console.log("2: About to save");
    
    await save()        
    console.log("3: Saved")

    console.log("4: About to return user");
    return user;
}

async function update(user) {
    console.log('update() called in model: ' + JSON.stringify(user));

    const data = await dataPromise
    
    console.log('user.id: ' + user.id);
    
    // the user.id works and is properly passed in from the client

    const index = data.items.findIndex(item => item.id == user.id);

    // the index keeps being -1 for some reason even though users in the json data have the same id
    console.log('index: ' + index);

    if (index >= 0) {
        data.items[index] = {
            ...data.items[index],
            ...user,
        };
        // just so it doesn't cause type errors
        user.id = parseInt(user.id)
        await save()
        return user;
    }
    return null;
}

async function remove(id) {
    const data = await dataPromise
    const index = data.items.findIndex(item => item.id == id);
    if (index >= 0) {
        const deleted = data.items.splice(index, 1);
        await save()
        return deleted[0];
    }
    return null;
}

async function login(email) {
    const data = await dataPromise;    
        
    const user = data.items.find(item => item.email === email);

    if(!user) throw new Error("Invalid email");
    //if(user.password !== password) throw new Error("Invalid password");

    return user
}

async function typeahead(currentUserInput) {
    // need to filter the user data with values that start with the same character
    const data = await dataPromise
    const filteredUsers = data.filter(item => item.handle.startsWith(currentUserInput))

    return filteredUsers
}

module.exports = {
    getAll, get, search, add, update, remove, login, typeahead
}
/* B"H
*/
const fs = require('fs/promises');

const fileName = __dirname + '/../data/activities.json';


const dataPromises = fs
    .access(fileName, fs.constants.F_OK)
    .then(() => fs.readFile(fileName, 'utf8'))
    .then(content => JSON.parse(content))


async function save() {
    const data = await dataPromises;
    return fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

async function getAll() {
    console.log('getAll in activities model called!');
    const data = await dataPromises;
    const buffer = data.items.map(x=> ({
        ...x, 
    }))
    console.log('data.items in getAll() activities: ' + JSON.stringify(data.items));
    return buffer
}

async function get(id) {
    const data = await dataPromises;
    return data.items.find(item => item.id == id);
}

// not sure what this is doing or if it's doing it right
async function search(q) {
    return (await getAll()).filter(item => 
        new RegExp(q, 'i').test(item.originalPoster) ||
        new RegExp(q, 'i').test(item.text) ||
        new RegExp(q, 'i').test(item.location) );
}

async function add(activity) {
    const data = await dataPromises;
    activity.id = data.items.length + 1;
    data.items.push(activity);
    console.log("2: About to save");
    
    await save()        
    console.log("3: Saved")

    console.log("4: About to return activity");
    return activity;
}

async function update(activity) {
    const data = await dataPromises;
    const index = data.items.findIndex(item => item.id == activity.id);
    if (index >= 0) {
        data.items[index] = {
            ...data.items[index],
            ...activity
        };
        await save()
        return activity;
    }
    return null;
}

async function remove(id) {
    const data = await dataPromises;
    const index = data.items.findIndex(item => item.id == id);
    if (index >= 0) {
        const deleted = data.items.splice(index, 1);
        await save()
        return deleted[0];
    }
    return null;
}


module.exports = {
    getAll, get, search, add, update, remove
}
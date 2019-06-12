const setup = require('./controller/setup');
const display = require('./controller/display');
const db = require('./models');

let log = console.log;

let firstRun = async () => {
    await setup.setupDB(db);
    await setup.setupRoles(db);
    await setup.setupUsers(db);
    await setup.setupTokens(db);
};

let showResults = async (paranoid = true) => {
    log(await display.roles(db));
    log(await display.users(db, paranoid));
    log(await display.tokens(db, paranoid));
};

let deleteRandomUser = async () => {
    return db.user.findAll({
        order: db.sequelize.literal('random()'),
        limit: 1
    }).then(user => user[0].destroy());
};

let steps = async () => {
    await firstRun();
    await showResults();
    await deleteRandomUser();
    await showResults(false);
};

steps().then();

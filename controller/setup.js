let names = ['John', 'Doe', 'Mike', 'Tyson'];

module.exports.setupDB = db => {
    return db.connection.sync({force: true});
};

module.exports.setupRoles = db => {
    let roles = [{
        name: 'admin'
    }, {
        name: 'user'
    }];
    return db.role.bulkCreate(roles);
};

module.exports.setupUsers = db => {
    return db.user.bulkCreate(names.map((name, index) => {
        return {
            roleId: (index % 2) + 1,
            name: name
        }
    }));
};
module.exports.setupTokens = db => {
    return db.token.bulkCreate(names.map(name => {
        return {
            token: Buffer.from(name, 'utf-8').toString('hex')
        }
    }));
};
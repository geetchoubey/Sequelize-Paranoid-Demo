module.exports.users = (db, paranoid = true) => {
    return db.user.findAll({
        raw: true,
        paranoid: paranoid
    });
};

module.exports.roles = db => {
    return db.role.findAll({
        raw: true
    });
};

module.exports.tokens = (db, paranoid = true) => {
    return db.token.findAll({
        raw: true,
        paranoid: paranoid
    });
};
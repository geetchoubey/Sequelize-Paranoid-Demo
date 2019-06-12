module.exports = (seq, Sequelize) => {
    return seq.define('token', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        token: {
            type: Sequelize.STRING
        }
    });
};
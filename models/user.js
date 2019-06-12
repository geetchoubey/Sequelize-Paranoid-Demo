module.exports = (seq, Sequelize) => {
    const user = seq.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true
    });
    user.associate = models => {
        models.user.belongsTo(models.role);
    };
    return user;
};
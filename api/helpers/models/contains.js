module.exports = function (sequelize, Sequelize) {
    return sequelize.define('contains', {
        contains_id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        occurrences: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};



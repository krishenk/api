module.exports = function (sequelize, Sequelize) {
    return sequelize.define('pages', {
        page_id: {
            type: Sequelize.UUID,
            primaryKey: true
        },
        url: {
            type: Sequelize.TEXT
        },
        filelocation: {
            type: Sequelize.TEXT
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });
};
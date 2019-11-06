module.exports = {
    selectMan(id) {
        return `select * from manager where id = '${id}';`
    },

    getRoomInfo() {
        return `select * from room`
    }
};
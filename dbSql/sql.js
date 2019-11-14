module.exports = {
    selectMan(id) {
        return `select * from manager where id = '${id}';`
    },

    getRoomInfo() {
        return `select * from room`
    },

    getUserInfo(){
        return `select * from user`
    },

    // 获得最近数据统计的日期
    getRecentRecordDate() {
        return `select * from edb.recorddate where date = ( select max(date) from edb.recorddate);`
    },

    // 获取最近时间的房间记录
    getRecentRoomRecord(){
        return `select * from record where date = (select max(date) from recorddate);`
    }
};
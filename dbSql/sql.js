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
    },

    // 获取所有住户信息
    getAllRoomUser() {
        return 'select * from room;'
    },

    // 向roomExpense表中插入数据
    insertDataToRoomExpense(dataObj, date) {
        let keys = Object.keys(dataObj);
        let sql = 'insert into roomexpense (`rid`, `water`, `elec`, `date`) VALUES ';
        for ( let i=0; i<keys.length; i++ ) {
            // ('123', '123', '123', '123')
            i === 0 ? sql += ` ('${keys[i]}', ${dataObj[keys[i]]["nowWaterCost"]}, ${dataObj[keys[i]]["nowWaterCost"]}, '${date}') `
                : sql += `, ('${keys[i]}', ${dataObj[keys[i]]["nowWaterCost"]}, ${dataObj[keys[i]]["nowWaterCost"]}, '${date}') `;
        }
        return sql;
    },

    //
    insertDataToRecord(dataObj, date) {
        let keys = Object.keys(dataObj);
        let sql = 'insert into record (`rid`, `water`, `elec`, `date`) VALUES ';
        for ( let i=0; i<keys.length; i++ ) {
            i === 0 ? sql += ` ('${keys[i]}', ${dataObj[keys[i]]["nowWaterSpd"]}, ${dataObj[keys[i]]["nowElecSpd"]}, '${date}') `
                : sql += `, ('${keys[i]}', ${dataObj[keys[i]]["nowWaterSpd"]}, ${dataObj[keys[i]]["nowElecSpd"]}, '${date}') `;
        }
        return sql;
    }
};
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
    insertDataToRoomExpense(roomData, date) {
        let keys = Object.keys(roomData);
        let sql = 'insert into roomexpense (`rid`, `water`, `elec`, `waterSpd`, `elecSpd`,  `date`) VALUES ';
        for ( let i=0; i<keys.length; i++ ) {
            let addBefore = '';
            addBefore = i === 0 ? ' ' : ' , ';
            sql += addBefore + ` ('${keys[i]}', ${roomData[keys[i]]["nowWaterSpd"]}, ${roomData[keys[i]]["nowElecSpd"]},
            ${roomData[keys[i]]["nowWaterCost"]}, ${roomData[keys[i]]["nowElecCost"]}, '${date}') `;
            // sql += addBefore + ` ('${keys[i]}', 1, 1, 1, 1, '${date}') `;

        }
        return sql;
    },

    // 向record表中插入数据
    insertDataToRecord(roomData, date) {
        let keys = Object.keys(roomData);
        let sql = 'insert into record (`rid`, `water`, `elec`, `date`) VALUES ';
        for ( let i=0; i<keys.length; i++ ) {
            let addBefore = '';
            addBefore = i === 0 ? ' ' : ' , ';
            sql +=  addBefore + ` ('${keys[i]}', ${roomData[keys[i]]["water"]}, ${roomData[keys[i]]["elec"]}, '${date}') `;
            // sql += addBefore + ` ('${keys[i]}', 1, 1, '${date}') `;
        }
        return sql;
    },

    // 向userExpense表中插入数据
    insertDataToUserExpense(userRecord,  date) {
        let keys = Object.keys(userRecord);
        let sql = 'insert into userexpense (`uid`, `water`, `elec`, `total`, `days`, `startDate`, `endDate`, `date`) values ';
        for ( let i=0; i<keys.length; i++ ) {
            let addBefore = '';
            addBefore = i === 0 ? ' ' : ' , ';
            sql += addBefore + ` (${userRecord[keys[i]]["uid"]},
             ${userRecord[keys[i]]["waterSpd"]}, ${userRecord[keys[i]]["elecSpd"]}, ${userRecord[keys[i]]["totalSpd"]},
             ${userRecord[keys[i]]["days"]}, '${userRecord[keys[i]]["startDate"]}', '${userRecord[keys[i]]["endDate"]}', '${date}') `

            // sql += addBefore + ` (${userRecord[keys[i]]["uid"]}, 1, 1, 2, ${userRecord[keys[i]]["days"]}, '${userRecord[keys[i]]["startDate"]}', '${userRecord[keys[i]]["endDate"]}', '${date}') `
        }
        return sql;
    },

    // 向recordDate表中插入数据
    insertDataToRecordDate(date) {
        return 'insert into recorddate ( `date` ) values ' + `( '${date}' )` ;
    }
};
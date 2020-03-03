const express = require( 'express' );
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

// 根据rid获取房间的消费信息
router.get('/', (req, res)=> {
    let token = req.cookies["token"];
    let uname = req.cookies["uname"];
    let rid = req.query.rid;
    if ( rid ) {
        try {
            jwt.verify(token, uname);
            db.query(sql.getRoomInfoByRid(rid), [], (err, roomData) => {
                if( err ) {
                    res.json({
                        state: "error",
                        msg: "请求出错！"
                    })
                } else {
                    db.query(sql.getRecordByRid(rid), [], (err, recordData)=> {
                        if ( err ) {
                            res.json({
                                state: "error",
                                msg: "请求出错！"
                            })
                        } else {
                            for ( let i=0; i<roomData.length; i++ ) {
                                for ( let j=0; j<recordData.length; j++ ) {
                                    if ( roomData[i].date === recordData[j].date ) {
                                        roomData[i].waterRecord = recordData[j].water;
                                        roomData[i].elecRecord = recordData[j].elec;
                                        break;
                                    }
                                }
                            }
                            res.json({
                                state: "ok",
                                msg: "操作成功！",
                                data: roomData
                            })
                        }
                    })
                    
                }
            })
        } catch (e) {
            res.json({
                state: "error", 
                msg: "未登录！"
            })
        }
    } else {
        res.json({
            state: "error", 
            msg: "请输入正确房间号！"
        })
    }
   
})

module.exports = router;
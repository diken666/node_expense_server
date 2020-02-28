const express = require( 'express' );
const router = express.Router();
const db = require('../db/dbConnect');
const sql = require('../dbSql/sql');
const jwt = require('jsonwebtoken');

// 获取默认房间信息
// 房间号 上期水表数 本期水表数	本期电表数	本期电表数	本期用水(吨) 本期用电(度) 本期水费(元) 本期电费(元)	费用总计(元)
router.get('/', (req, res) => {
    let uname = req.cookies["uname"];
    let token = req.cookies["token"];
    try {
        jwt.verify(token, uname);
        db.query(sql.getRecentRecordInfo(), [], (err, recordInfoData)=> {
            if ( err ) { 
                return res.json( {
                    state: "error",
                    msg: "请求错误！"
                })
            } else {
                db.query(sql.getRecentREInfo(), [], (err, REInfoData)=> {
                    if ( err ) {
                        return res.json({
                            state: "error",
                            msg: "请求错误！"
                        })
                    } else {
                        for ( let i=0; i<recordInfoData.length; i++ ) {
                            for ( let j=0; j<REInfoData.length; j++ ) {
                                if(recordInfoData[i].rid === REInfoData[j].rid) {
                                    recordInfoData[i].waterCost = REInfoData[j].water;
                                    recordInfoData[i].elecCost = REInfoData[j].elec;
                                    recordInfoData[i].waterPrice = REInfoData[j].waterSpd;
                                    recordInfoData[i].elecPrice = REInfoData[j].elecSpd;
                                    recordInfoData[i].totalPrice = REInfoData[j].waterSpd + REInfoData[j].elecSpd;
                                    recordInfoData[i].date = REInfoData[j].date;
                                    break;
                                }
                            }
                        }
                        res.json({
                            state: "ok",
                            msg: "操作成功！",
                            data: recordInfoData
                        })
                    }
                })
                
            }
        })
    } catch( e ) {
        res.json({
            state: "error",
            msg: "未登录"
        })
    }
})

module.exports = router;
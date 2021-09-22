const config = require('./config.js');
const axios = require('axios');
const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const moment = require('moment');
const path = require('path');

const app = express();
const connection = mysql.createConnection(config.sql);

app.set("view engine", "ejs");
//bodyParser API
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', '3.2.1')
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
// login——————————————————————————————————————————————————————————————————
app.post(config.port.login, function(req, res) {
    let id = req.body.id;
    let password = req.body.password;
    //连接mysql
    connection.connect();
    connection.query('SELECT * FROM login Where id="' + id + '" and password="' + password + '" ;', (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            ret.state = '500';
            res.send(ret);
        }
        //connection.end();
    });
});
// 获取仓库全部信息——————————————————————————————————————————————————————————————————
app.post(config.port.warehouse, function(req, res) {
    //连接mysql
    connection.connect();
    connection.query('SELECT * FROM data ;', (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
// 更具wid获取仓库全部信息——————————————————————————————————————————————————————————————————
app.post(config.port.warehouse_wid, function(req, res) {
    let wid = req.body.wid;
    //连接mysql
    connection.connect();
    connection.query('SELECT * FROM data WHERE wid=' + wid + ' ;', (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            res.send(result[0]);
        }
        //connection.end();
    });
});
//根据时间段获取日出货记录———————————————————————————————————————————————————————————
app.post(config.port.output, function(req, res) {
    let date_max = req.body.date_max;
    let date_mix = req.body.date_mix;
    if (date_max < date_mix) {
        date_max = req.body.date_mix;
        date_mix = req.body.date_max;
    }
    //连接mysql
    connection.connect();
    connection.query("SELECT * from output where date BETWEEN date('" + date_mix + "') and date('" + date_max + "');", (err, result) => {
        for (let i = 0; i < result.length; i++) result[i].date = new Date(result[i].date + "UTC");
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//库存模糊查询————————————————————————————————————————————————————————————
app.post(config.port.warehouse_post, function(req, res) {
    let text = req.body.text;
    //连接mysql
    connection.connect();
    connection.query("SELECT * FROM data WHERE wname LIKE '%" + text + "%';", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//入库明细查询————————————————————————————————————————————————————————————
app.post(config.port.input, function(req, res) {
    let date_max = req.body.date_max;
    let date_mix = req.body.date_mix;
    if (date_max < date_mix) {
        date_max = req.body.date_mix;
        date_mix = req.body.date_max;
    }
    //连接mysql
    connection.connect();
    connection.query("SELECT * from input where date BETWEEN date('" + date_mix + "') and date('" + date_max + "');", (err, result) => {
        for (let i = 0; i < result.length; i++) result[i].date = new Date(result[i].date + "UTC");
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//获取员工————————————————————————————————————————————————————————————
app.post(config.port.user, function(req, res) {
    let uid = req.body.uid;
    //连接mysql
    connection.connect();
    connection.query("SELECT * FROM user;", (err, result) => {
        for (let i = 0; i < result.length; i++) result[i].date = new Date(result[i].date + "UTC");
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        }
        if (result.length == 0) {
            ret.state = '400';
            res.send(ret);
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//添加新员工————————————————————————————————————————————————————————————
app.post(config.port.adduser, function(req, res) {
    let name = req.body.name;
    //连接mysql
    connection.connect();
    connection.query("INSERT INTO user (name) VALUES('" + name + "');", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//删除员工————————————————————————————————————————————————————————————
app.post(config.port.deluser, function(req, res) {
    let uid = req.body.uid;
    //连接mysql
    connection.connect();
    connection.query("DELETE FROM user WHERE uid=" + uid + ";", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//添加仓库新物品————————————————————————————————————————————————————————————
app.post(config.port.addclass, function(req, res) {
    let name = req.body.name;
    let model = req.body.model;
    let factory = req.body.factory;
    let u_pice = req.body.u_pice;
    let unit = req.body.unit;
    let ew = req.body.ew;
    let xy = req.body.xy;
    //连接mysql
    connection.connect();
    connection.query("INSERT INTO `data` (wname,model,factory,u_pice,unit,ew,xy) VALUES('" + name + "','" + model + "','" + factory + "','" + u_pice + "','" + unit + "','" + ew + "','" + xy + "');", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//删除物品类型————————————————————————————————————————————————————————————
app.post(config.port.delclass, function(req, res) {
    let wid = req.body.wid;
    //连接mysql
    connection.connect();
    connection.query("DELETE FROM data WHERE wid=" + wid + ";", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//编辑物品类型（库布预警，位置）————————————————————————————————————————————————————————————
app.post(config.port.editclass, function(req, res) {
    let wid = req.body.wid;
    let ew = req.body.ew;
    let xy = req.body.xy;
    //连接mysql
    connection.connect();
    connection.query("UPDATE data SET ew = " + ew + " , xy = '" + xy + "' WHERE wid = " + wid + ";", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//输出库存预警————————————————————————————————————————————————————————————
app.post(config.port.ew, function(req, res) {
    //连接mysql
    connection.connect();
    connection.query("SELECT * FROM data WHERE i<=ew", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//出库————————————————————————————————————————————————————————————
app.post(config.port.out, function(req, res) {
    let wid = req.body.wid;
    let wname = req.body.wname;
    let model = req.body.model;
    let factory = req.body.factory;
    let i = req.body.i;
    let unit = req.body.unit;
    let u_pice = req.body.u_pice;
    let date = req.body.date;
    let user_admin = req.body.user_admin;
    let user = req.body.user;
    //连接mysql
    connection.connect();
    connection.query("UPDATE data SET i =i-" + i + "  WHERE wid = " + wid + ";INSERT INTO output (wname,model,factory,i,unit,u_pice,user_admin,user,date,wid) VALUES('" + wname + "','" + model + "','" + factory + "'," + i + ",'" + unit + "','" + u_pice + "','" + user_admin + "','" + user + "','" + date + "'," + wid + ");", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});
//入库————————————————————————————————————————————————————————————
app.post(config.port.in, function(req, res) {
    let wid = req.body.wid;
    let wname = req.body.wname;
    let model = req.body.model;
    let factory = req.body.factory;
    let i = req.body.i;
    let unit = req.body.unit;
    let u_pice = req.body.u_pice;
    let date = req.body.date;
    let ps = req.body.ps;
    console.log("UPDATE data SET i =i+" + i + "  WHERE wid = " + wid + ";INSERT INTO input (wname,model,factory,i,unit,u_pice,date,wid,ps) VALUES('" + wname + "','" + model + "','" + factory + "'," + i + ",'" + unit + "','" + u_pice + "','" + date + "'," + wid + ",'" + ps + "');");
    //连接mysql
    connection.connect();
    connection.query("UPDATE data SET i =i+" + i + "  WHERE wid = " + wid + ";INSERT INTO input (wname,model,factory,i,unit,u_pice,date,wid,ps) VALUES('" + wname + "','" + model + "','" + factory + "'," + i + ",'" + unit + "','" + u_pice + "','" + date + "'," + wid + ",'" + ps + "');", (err, result) => {
        let ret = new Object;
        if (err) {
            ret.state = '400';
            res.send(ret);
            //connection.end();
        } else {
            res.send(result);
        }
        //connection.end();
    });
});

app.listen('8080');
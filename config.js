const config = {
    port: { //端口
        login: "/login", //获取仓库所有库存信息
        warehouse: "/warehouse", //获取仓库所有库存信息
        warehouse_wid: "/warehouse_wid",
        output: "/output", //更具时间段获取出货信息
        warehouse_post: "/warehouse_post", //搜索仓库库存
        input: "/input",
        user: "/user",
        adduser: "/adduser",
        deluser: "/deluser",
        addclass: "/addclass",
        delclass: "/delclass",
        editclass: "/editclass",
        ew: "/ew",
        out: "/out",
        in: "/in"

    },
    sql: { //数据库配置
        host: '81.70.146.135',
        port: 3306,
        database: 'job',
        user: 'root',
        password: '20001111',
        multipleStatements: true // 支持执行多条 sql 语句
    }
}
module.exports = config;
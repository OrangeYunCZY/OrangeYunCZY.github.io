function up(){
    var obj={};
    obj.ypgw=document.getElementById("ypgw-text").value;
    if(obj.ypgw=="") {alert("应聘岗位还未填写...");return 0;}
    obj.tbsj=document.getElementById("tbrq-date").value;
    if(obj.tbsj=="") {alert("填表时间还未填写...");return 0;}
    obj.xm=document.getElementById("xm-date").value;
    if(obj.xm=="") {alert("姓名还未填写...");return 0;}
    obj.xb=document.getElementById("xb-select").value;
    if(obj.xb=="") {alert("性别还未填写...");return 0;}
    obj.csrq=document.getElementById("csrq-date").value;
    if(obj.csrq=="") {alert("出生日期还未填写...");return 0;}
    obj.mz=document.getElementById("mz-text").value;
    if(obj.mz=="") {alert("名族位还未填写...");return 0;}
    obj.zzmm=document.getElementById("zzmm-text").value;
    if(obj.zzmm=="") {alert("政治面貌还未填写...");return 0;}
    obj.hf=document.getElementById("hf-select").value;
    if(obj.hf=="") {alert("婚否还未填写...");return 0;}
    obj.jkzk=document.getElementById("jkzk-text").value;
    if(obj.jkzk=="") {alert("健康状况还未填写...");return 0;}
    obj.jg=document.getElementById("jg-text").value;
    if(obj.jg=="") {alert("籍贯还未填写...");return 0;}
    obj.lxfs=document.getElementById("lxfs-text").value;
    if(obj.lxfs=="") {alert("联系方式还未填写...");return 0;}
    obj.dzyx=document.getElementById("dzyx-text").value;
    if(obj.dzyx=="") {alert("电子邮箱还未填写...");return 0;}
    obj.xl=document.getElementById("xl-text").value;
    if(obj.xl=="") {alert("学历还未填写...");return 0;}
    obj.xzd=document.getElementById("xzd-text").value;
    if(obj.xzd=="") {alert("现住地还未填写...");return 0;}
    obj.mqsfzz=document.getElementById("mqsfzz-text").value;
    if(obj.mqsfzz=="") {alert("目前是否在职还未填写...");return 0;}
    obj.yjdgsj=document.getElementById("yjdgsj-date").value;
    if(obj.yjdgsj=="") {alert("预计到岗时间还未填写...");return 0;}
    obj.qwxz=document.getElementById("qwxz-text").value;
    if(obj.qwxz=="") {alert("期望薪资还未填写...");return 0;}
    obj.wysp=document.getElementById("wysp-text").value;
    if(obj.wysp=="") {alert("外语水平还未填写...");return 0;}
    obj.jsjsp=document.getElementById("jsjsp-text").value;
    if(obj.jsjsp=="") {alert("计算机水平还未填写...");return 0;}
    obj.jyjl=jyjl();//教育经历信息
    obj.gzjl=gzjl();//工作经历信息
    obj.grry=document.getElementById("grry-text").value;
    obj.xqtc=document.getElementById("xqtc-text").value;
    obj.zwpj=document.getElementById("zwpj-textarea").value;
    if(obj.zwpj=="") {alert("自我评价还未填写...");return 0;}
    show(obj);
}

function jyjl(){//教育经历表格数据
    var jyjl=new Array(3);
    
    jyjl[0]={};
    jyjl[1]={};
    jyjl[2]={};
    
    jyjl[0].sj=document.getElementById("jyjl-1-sj").value;
    jyjl[0].byxx=document.getElementById("jyjl-1-byxx").value;
    jyjl[0].zy=document.getElementById("jyjl-1-zy").value;
    jyjl[0].xxqk=document.getElementById("jyjl-1-xxqk").value;
    
    jyjl[1].sj=document.getElementById("jyjl-2-sj").value;
    jyjl[1].byxx=document.getElementById("jyjl-2-byxx").value;
    jyjl[1].zy=document.getElementById("jyjl-2-zy").value;
    jyjl[1].xxqk=document.getElementById("jyjl-2-xxqk").value;
    
    jyjl[2].sj=document.getElementById("jyjl-3-sj").value;
    jyjl[2].byxx=document.getElementById("jyjl-3-byxx").value;
    jyjl[2].zy=document.getElementById("jyjl-3-zy").value;
    jyjl[2].xxqk=document.getElementById("jyjl-3-xxqk").value;

    return jyjl;//retun一个数组，数组中包含对象
}
function gzjl(){//工作经历表格数据
    var gzjl=new Array(3);
    
    gzjl[0]={};
    gzjl[1]={};
    gzjl[2]={};
    
    gzjl[0].sj=document.getElementById("gzjl-1-sj").value;
    gzjl[0].byxx=document.getElementById("gzjl-1-gsmc").value;
    gzjl[0].zy=document.getElementById("gzjl-1-zw").value;
    gzjl[0].xxqk=document.getElementById("gzjl-1-zz").value;
    
    gzjl[1].sj=document.getElementById("gzjl-2-sj").value;
    gzjl[1].byxx=document.getElementById("gzjl-2-gsmc").value;
    gzjl[1].zy=document.getElementById("gzjl-2-zw").value;
    gzjl[1].xxqk=document.getElementById("gzjl-2-zz").value;
    
    gzjl[2].sj=document.getElementById("gzjl-3-sj").value;
    gzjl[2].byxx=document.getElementById("gzjl-3-gsmc").value;
    gzjl[2].zy=document.getElementById("gzjl-3-zw").value;
    gzjl[2].xxqk=document.getElementById("gzjl-3-zz").value;

    return gzjl;//retun一个数组，数组中包含对象
}


function show(text){
    alert(JSON.stringify(text));
}
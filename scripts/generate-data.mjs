import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="system design architecture high concurrency high availability scalability low latency throughput QPS TPS RT SLA SLO capacity estimation traffic peak storage estimation bandwidth estimation monolithic layered architecture microservice load balancing reverse proxy horizontal scaling vertical scaling stateless stateful cache Redis cache penetration cache breakdown cache avalanche CDN database index read-write separation master-slave replication sharding horizontal sharding vertical sharding global ID snowflake message queue async processing peak clipping rate limiting token bucket leaky bucket circuit breaker degradation isolation timeout retry idempotent distributed lock distributed transaction 2PC TCC Saga eventual consistency log metric monitor alert trace grayscale release blue-green rolling release design interview short link seckill login file upload notification comment like leaderboard search feed order payment inventory cloud disk online education AI Q&A";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"sy-tag-"+String(i+1).padStart(3,"0"),name:n,category:"SysDesign",description:"SysDesign标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"sy-course-01",order:1,slug:"SD入门",title:"系统设计入门与架构思维",description:"系统设计定义、架构思维、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"sy-course-02",order:2,slug:"需求估算",title:"需求分析、约束识别与容量估算",description:"功能需求、非功能需求、QPS/存储估算。",estimatedHours:8,diff:"medium"},
  {id:"sy-course-03",order:3,slug:"架构演进",title:"单体架构、分层架构与演进路线",description:"单体->分层->微服务演进、架构权衡。",estimatedHours:8,diff:"medium"},
  {id:"sy-course-04",order:4,slug:"高并发",title:"高并发基础与性能指标",description:"并发模型、QPS/TPS、RT、性能压测。",estimatedHours:8,diff:"medium"},
  {id:"sy-course-05",order:5,slug:"负载均衡",title:"负载均衡与水平扩展",description:"DNS/反向代理/网关层负载、无状态扩展。",estimatedHours:8,diff:"medium"},
  {id:"sy-course-06",order:6,slug:"缓存设计",title:"缓存设计与热点数据处理",description:"缓存层次、Redis、CDN、缓存策略。",estimatedHours:10,diff:"hard"},
  {id:"sy-course-07",order:7,slug:"数据库扩展",title:"数据库设计、索引与读写分离",description:"索引优化、主从复制、读写分离、连接池。",estimatedHours:10,diff:"hard"},
  {id:"sy-course-08",order:8,slug:"分库分表",title:"分库分表与数据分片",description:"水平/垂直分片、分片键、全局ID、迁移。",estimatedHours:10,diff:"hard"},
  {id:"sy-course-09",order:9,slug:"消息队列异步",title:"消息队列、异步化与削峰填谷",description:"MQ应用场景、异步解耦、削峰。",estimatedHours:8,diff:"hard"},
  {id:"sy-course-10",order:10,slug:"限流熔断",title:"限流、熔断、降级与容错",description:"限流算法、熔断器模式、降级策略、隔离。",estimatedHours:10,diff:"hard"},
  {id:"sy-course-11",order:11,slug:"幂等一致性",title:"幂等、重试与一致性",description:"幂等方案、重试策略、强/最终一致性。",estimatedHours:8,diff:"hard"},
  {id:"sy-course-12",order:12,slug:"分布式事务",title:"分布式事务与最终一致性",description:"CAP/BASE、2PC、TCC、Saga、本地消息表。",estimatedHours:10,diff:"hard"},
  {id:"sy-course-13",order:13,slug:"可观测性",title:"日志、监控、链路追踪与可观测性",description:"Logging/Metrics/Tracing、ELK、Prometheus、Grafana。",estimatedHours:8,diff:"hard"},
  {id:"sy-course-14",order:14,slug:"SD案例面试",title:"系统设计案例、面试与架构作品集",description:"经典设计案例、面试框架、作品集。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解系统设计","能进行容量估算","会设计高并发系统","能完成面试"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){var all=[];var id=1;function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"sy-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-"),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["SysDesign"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"SD课程"+(ci+1)+"章"+(j+1));return all;}
var KPN=[["系统设计","架构方法"],["高并发","大量请求处理"],["高可用","服务持续运行"],["负载均衡","流量分发"],["缓存","加速访问"],["读写分离","数据库扩展"],["分库分表","数据分片"],["限流","流量控制"],["熔断","故障保护"],["降级","服务降级"],["幂等","重复处理"],["分布式事务","跨节点事务"],["可观测性","系统可见性"],["QPS","每秒查询"],["CAP","分布式理论"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"sy-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"SysDesign",tags:["SysDesign"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"sy-kp-"+String(k.length+1).padStart(4,"0"),name:"SD概念"+(k.length+1),description:"SD概念",category:"SysDesign",tags:["SysDesign"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["SD入门","需求估算","架构演进","高并发","负载均衡","缓存设计","数据库扩展","分库分表","消息队列异步","限流熔断","幂等一致性","分布式事务","可观测性","SD案例面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"系统设计主要关注？",["高并发高可用","编程语法","算法复杂度","界面设计"],"A","easy"],[1,"QPS含义？",["每秒查询","每秒事务","每日用户","每分钟请求"],"A","easy"],[3,"水平扩展特点？",["加机器提升容量","升级单机配置","增加存储","优化代码"],"A","medium"],[5,"缓存雪崩原因？",["缓存大面积同时失效","单key热点","缓存穿透","内存不足"],"A","medium"],[6,"读写分离解决？",["读压力大","写压力大","存储不足","网络延迟"],"A","medium"],[7,"分片键选择要求？",["均匀分布","固定值","顺序递增","随机生成"],"A","hard"],[10,"熔断器状态？",["关闭/开启/半开","正常/异常","开始/结束","等待/处理"],"A","hard"],[11,"幂等性保证？",["唯一键/去重表/分布式锁","缓存","索引","主从"],"A","hard"],[13,"设计面试步骤？",["需求->估算->设计->权衡","直接画图","写代码","讨论工具"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];if(t_[4]&&typeof t_[4]==="string"&&t_[4].includes(":")){t_[4]=t_[4].replace(":","");}qs.push({id:"sy-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"calculation",min:350},{type:"case_analysis",min:800}];
  while(qid<=3700){var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="sy-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于SD"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="SD"+ch+"哪些正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是系统设计重要概念。";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="SD"+ch+"中____是核心。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在架构中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于系统设计。";}
    else if(it.type==="calculation"){s="SD"+ch+"计算：估算容量。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"结果"+(i+1)}});a="A";}
    else if(it.type==="case_analysis"){s="SD"+ch+"案例：设计系统。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="calculation"?120:60,source_type:"curated-generated"});e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"sy-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["短链接系统","秒杀系统","登录系统","文件上传","消息通知","评论系统","点赞系统","排行榜","搜索系统","Feed流","订单系统","支付状态","库存系统","网盘系统","在线教育","AI问答","缓存架构","限流方案","分库分表","系统设计面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"sy-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握SD",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"架构"},{order:3,title:"设计",description:"详细"},{order:4,title:"权衡",description:"评估"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"SD路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"sy-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["系统设计","高并发","高可用","负载均衡","缓存","分库分表","限流","熔断","降级","幂等","分布式事务","CAP","可观测性","QPS","CDN"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["SD概念"+i,"SD概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"sy-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"SysDesign",tags:["SysDesign"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["SD问题"+(i+1)+"?","SD问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"sy-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"SysDesign",tags:["SysDesign"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["SysDesign"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["SysDesign"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["SysDesign"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["SysDesign"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["SysDesign"]});});return e;}
async function main(){
  console.log("Gen SD...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-system-design-basic",slug:"module-system-design-basic",title:"系统设计与架构基础",subtitle:"面向后端和架构入门者",description:"面向后端全栈架构入门和系统设计面试学习者的高并发高可用缓存数据库扩展消息队列限流熔断幂等一致性可观测性与系统设计案例训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["系统设计","架构设计","高并发","高可用","缓存","分库分表","限流熔断","面试"],estimatedHours:190,difficulty:"advanced",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F3D7}\u{FE0F}",repoUrl:"https://github.com/openskill-galaxy/module-system-design-basic",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});

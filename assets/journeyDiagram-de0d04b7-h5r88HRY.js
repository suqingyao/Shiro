import{c as I,n as yt,o as pt,s as ft,g as dt,b as gt,a as mt,p as xt,h as kt}from"./index.demo-BWxddmhe.js";import{s as W}from"./isEmpty-DrOE0CRk.js";import{d as _t,f as bt,a as vt,g as nt}from"./svgDrawCommon-9d162435-DfcDeVUf.js";import"./owner-DP2ujv_O.js";import{d as Q}from"./arc-DEIJu9Le.js";import"./index-BeruYqlq.js";import"./util-CVD_c193.js";import"./viewport-DH-I-8hX.js";import"./use-ref-value-LJGxjPkn.js";import"./Shiki-FDvSO5Pf.js";import"./index-Ch4SJQPy.js";import"./StyledButton-BXrwZkLW.js";import"./proxy-DJMatoTb.js";import"./spring-C80N1tKa.js";import"./use-event-callback-Bhwn3ola.js";import"./dom-BowoBODo.js";import"./index-Djivm970.js";import"./index-CU0cbbFu.js";import"./use-motion-template-DKuQYB9y.js";import"./visual-element-DBrrQU-Q.js";import"./provider-BIFAntKB.js";import"./use-is-unmounted-F2cS0ppq.js";import"./use-drag-controls-C7347hqm.js";import"./use-is-dark-BBrnlEAi.js";import"./LinkCard-BaFs5GrK.js";import"./image-DsS-QZYo.js";import"./Gallery-CYrDZbm5.js";import"./useQuery-QDrF4ceH.js";import"./alert-BVGTJqlY.js";import"./index-CgBFOfa7.js";import"./FloatPopover-D2JD9v5P.js";import"./SocialSourceLink-BNt_ysYw.js";import"./Collapse-DHiirC7x.js";import"./CodeEditor-Bo0o7lof.js";import"./index-LAI3pait.js";import"./cookie-BdEvHbwk.js";import"./Mermaid-iM3XuoF8.js";import"./path-CbwjOpE9.js";var G=function(){var t=function(d,i,r,a){for(r=r||{},a=d.length;a--;r[d[a]]=i);return r},e=[6,8,10,11,12,14,16,17,18],n=[1,9],l=[1,10],s=[1,11],h=[1,12],c=[1,13],p=[1,14],y={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:function(i,r,a,u,f,o,w){var k=o.length-1;switch(f){case 1:return o[k-1];case 2:this.$=[];break;case 3:o[k-1].push(o[k]),this.$=o[k-1];break;case 4:case 5:this.$=o[k];break;case 6:case 7:this.$=[];break;case 8:u.setDiagramTitle(o[k].substr(6)),this.$=o[k].substr(6);break;case 9:this.$=o[k].trim(),u.setAccTitle(this.$);break;case 10:case 11:this.$=o[k].trim(),u.setAccDescription(this.$);break;case 12:u.addSection(o[k].substr(8)),this.$=o[k].substr(8);break;case 13:u.addTask(o[k-1],o[k]),this.$="task";break}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:l,14:s,16:h,17:c,18:p},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:n,12:l,14:s,16:h,17:c,18:p},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:function(i,r){if(r.recoverable)this.trace(i);else{var a=new Error(i);throw a.hash=r,a}},parse:function(i){var r=this,a=[0],u=[],f=[null],o=[],w=this.table,k="",R=0,Z=0,lt=2,J=1,ct=o.slice.call(arguments,1),x=Object.create(this.lexer),S={yy:{}};for(var z in this.yy)Object.prototype.hasOwnProperty.call(this.yy,z)&&(S.yy[z]=this.yy[z]);x.setInput(i,S.yy),S.yy.lexer=x,S.yy.parser=this,typeof x.yylloc>"u"&&(x.yylloc={});var Y=x.yylloc;o.push(Y);var ht=x.options&&x.options.ranges;typeof S.yy.parseError=="function"?this.parseError=S.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ut(){var T;return T=u.pop()||x.lex()||J,typeof T!="number"&&(T instanceof Array&&(u=T,T=u.pop()),T=r.symbols_[T]||T),T}for(var _,E,b,O,A={},N,$,K,B;;){if(E=a[a.length-1],this.defaultActions[E]?b=this.defaultActions[E]:((_===null||typeof _>"u")&&(_=ut()),b=w[E]&&w[E][_]),typeof b>"u"||!b.length||!b[0]){var q="";B=[];for(N in w[E])this.terminals_[N]&&N>lt&&B.push("'"+this.terminals_[N]+"'");x.showPosition?q="Parse error on line "+(R+1)+`:
`+x.showPosition()+`
Expecting `+B.join(", ")+", got '"+(this.terminals_[_]||_)+"'":q="Parse error on line "+(R+1)+": Unexpected "+(_==J?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(q,{text:x.match,token:this.terminals_[_]||_,line:x.yylineno,loc:Y,expected:B})}if(b[0]instanceof Array&&b.length>1)throw new Error("Parse Error: multiple actions possible at state: "+E+", token: "+_);switch(b[0]){case 1:a.push(_),f.push(x.yytext),o.push(x.yylloc),a.push(b[1]),_=null,Z=x.yyleng,k=x.yytext,R=x.yylineno,Y=x.yylloc;break;case 2:if($=this.productions_[b[1]][1],A.$=f[f.length-$],A._$={first_line:o[o.length-($||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-($||1)].first_column,last_column:o[o.length-1].last_column},ht&&(A._$.range=[o[o.length-($||1)].range[0],o[o.length-1].range[1]]),O=this.performAction.apply(A,[k,Z,R,S.yy,b[1],f,o].concat(ct)),typeof O<"u")return O;$&&(a=a.slice(0,-1*$*2),f=f.slice(0,-1*$),o=o.slice(0,-1*$)),a.push(this.productions_[b[1]][0]),f.push(A.$),o.push(A._$),K=w[a[a.length-2]][a[a.length-1]],a.push(K);break;case 3:return!0}}return!0}},m=function(){var d={EOF:1,parseError:function(r,a){if(this.yy.parser)this.yy.parser.parseError(r,a);else throw new Error(r)},setInput:function(i,r){return this.yy=r||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var r=i.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var r=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===u.length?this.yylloc.first_column:0)+u[u.length-a.length].length-a[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),r=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+r+"^"},test_match:function(i,r){var a,u,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),u=i[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],a=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var o in f)this[o]=f[o];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,r,a,u;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),o=0;o<f.length;o++)if(a=this._input.match(this.rules[f[o]]),a&&(!r||a[0].length>r[0].length)){if(r=a,u=o,this.options.backtrack_lexer){if(i=this.test_match(a,f[o]),i!==!1)return i;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(i=this.test_match(r,f[u]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,a,u,f){switch(u){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return d}();y.lexer=m;function g(){this.yy={}}return g.prototype=y,y.Parser=g,new g}();G.parser=G;const wt=G;let C="";const H=[],V=[],F=[],$t=function(){H.length=0,V.length=0,C="",F.length=0,xt()},Tt=function(t){C=t,H.push(t)},Mt=function(){return H},St=function(){let t=D();const e=100;let n=0;for(;!t&&n<e;)t=D(),n++;return V.push(...F),V},Et=function(){const t=[];return V.forEach(n=>{n.people&&t.push(...n.people)}),[...new Set(t)].sort()},Pt=function(t,e){const n=e.substr(1).split(":");let l=0,s=[];n.length===1?(l=Number(n[0]),s=[]):(l=Number(n[0]),s=n[1].split(","));const h=s.map(p=>p.trim()),c={section:C,type:C,people:h,task:t,score:l};F.push(c)},It=function(t){const e={section:C,type:C,description:t,task:t,classes:[]};V.push(e)},D=function(){const t=function(n){return F[n].processed};let e=!0;for(const[n,l]of F.entries())t(n),e=e&&l.processed;return e},At=function(){return Et()},tt={getConfig:()=>I().journey,clear:$t,setDiagramTitle:yt,getDiagramTitle:pt,setAccTitle:ft,getAccTitle:dt,setAccDescription:gt,getAccDescription:mt,addSection:Tt,getSections:Mt,getTasks:St,addTask:Pt,addTaskOrg:It,getActors:At},Ct=t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,Vt=Ct,U=function(t,e){return _t(t,e)},Ft=function(t,e){const l=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),s=t.append("g");s.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function h(y){const m=Q().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(y){const m=Q().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function p(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return e.score>3?h(s):e.score<3?c(s):p(s),l},rt=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),n.class!==void 0&&n.attr("class",n.class),e.title!==void 0&&n.append("title").text(e.title),n},at=function(t,e){return bt(t,e)},Lt=function(t,e){function n(s,h,c,p,y){return s+","+h+" "+(s+c)+","+h+" "+(s+c)+","+(h+p-y)+" "+(s+c-y*1.2)+","+(h+p)+" "+s+","+(h+p)}const l=t.append("polygon");l.attr("points",n(e.x,e.y,50,20,7)),l.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,at(t,e)},Rt=function(t,e,n){const l=t.append("g"),s=nt();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),s.height=n.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,U(l,s),ot(n)(e.text,l,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},n,e.colour)};let et=-1;const Nt=function(t,e,n){const l=e.x+n.width/2,s=t.append("g");et++;const h=300+5*30;s.append("line").attr("id","task"+et).attr("x1",l).attr("y1",e.y).attr("x2",l).attr("y2",h).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Ft(s,{cx:l,cy:300+(5-e.score)*30,score:e.score});const c=nt();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=n.width,c.height=n.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,U(s,c);let p=e.x+14;e.people.forEach(y=>{const m=e.actors[y].color,g={cx:p,cy:e.y,r:7,fill:m,stroke:"#000",title:y,pos:e.actors[y].position};rt(s,g),p+=10}),ot(n)(e.task,s,c.x,c.y,c.width,c.height,{class:"task"},n,e.colour)},Bt=function(t,e){vt(t,e)},ot=function(){function t(s,h,c,p,y,m,g,d){const i=h.append("text").attr("x",c+y/2).attr("y",p+m/2+5).style("font-color",d).style("text-anchor","middle").text(s);l(i,g)}function e(s,h,c,p,y,m,g,d,i){const{taskFontSize:r,taskFontFamily:a}=d,u=s.split(/<br\s*\/?>/gi);for(let f=0;f<u.length;f++){const o=f*r-r*(u.length-1)/2,w=h.append("text").attr("x",c+y/2).attr("y",p).attr("fill",i).style("text-anchor","middle").style("font-size",r).style("font-family",a);w.append("tspan").attr("x",c+y/2).attr("dy",o).text(u[f]),w.attr("y",p+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),l(w,g)}}function n(s,h,c,p,y,m,g,d){const i=h.append("switch"),a=i.append("foreignObject").attr("x",c).attr("y",p).attr("width",y).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(s),e(s,i,c,p,y,m,g,d),l(a,g)}function l(s,h){for(const c in h)c in h&&s.attr(c,h[c])}return function(s){return s.textPlacement==="fo"?n:s.textPlacement==="old"?t:e}}(),jt=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},L={drawRect:U,drawCircle:rt,drawSection:Rt,drawText:at,drawLabel:Lt,drawTask:Nt,drawBackgroundRect:Bt,initGraphics:jt},zt=function(t){Object.keys(t).forEach(function(n){j[n]=t[n]})},M={};function Yt(t){const e=I().journey;let n=60;Object.keys(M).forEach(l=>{const s=M[l].color,h={cx:20,cy:n,r:7,fill:s,stroke:"#000",pos:M[l].position};L.drawCircle(t,h);const c={x:40,y:n+7,fill:"#666",text:l,textMargin:e.boxTextMargin|5};L.drawText(t,c),n+=20})}const j=I().journey,P=j.leftMargin,Ot=function(t,e,n,l){const s=I().journey,h=I().securityLevel;let c;h==="sandbox"&&(c=W("#i"+e));const p=h==="sandbox"?W(c.nodes()[0].contentDocument.body):W("body");v.init();const y=p.select("#"+e);L.initGraphics(y);const m=l.db.getTasks(),g=l.db.getDiagramTitle(),d=l.db.getActors();for(const o in M)delete M[o];let i=0;d.forEach(o=>{M[o]={color:s.actorColours[i%s.actorColours.length],position:i},i++}),Yt(y),v.insert(0,0,P,Object.keys(M).length*50),qt(y,m,0);const r=v.getBounds();g&&y.append("text").text(g).attr("x",P).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const a=r.stopy-r.starty+2*s.diagramMarginY,u=P+r.stopx+2*s.diagramMarginX;kt(y,a,u,s.useMaxWidth),y.append("line").attr("x1",P).attr("y1",s.height*4).attr("x2",u-P-4).attr("y2",s.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const f=g?70:0;y.attr("viewBox",`${r.startx} -25 ${u} ${a+f}`),y.attr("preserveAspectRatio","xMinYMin meet"),y.attr("height",a+f+25)},v={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,l){t[e]===void 0?t[e]=n:t[e]=l(n,t[e])},updateBounds:function(t,e,n,l){const s=I().journey,h=this;let c=0;function p(y){return function(g){c++;const d=h.sequenceItems.length-c+1;h.updateVal(g,"starty",e-d*s.boxMargin,Math.min),h.updateVal(g,"stopy",l+d*s.boxMargin,Math.max),h.updateVal(v.data,"startx",t-d*s.boxMargin,Math.min),h.updateVal(v.data,"stopx",n+d*s.boxMargin,Math.max),h.updateVal(g,"startx",t-d*s.boxMargin,Math.min),h.updateVal(g,"stopx",n+d*s.boxMargin,Math.max),h.updateVal(v.data,"starty",e-d*s.boxMargin,Math.min),h.updateVal(v.data,"stopy",l+d*s.boxMargin,Math.max)}}this.sequenceItems.forEach(p())},insert:function(t,e,n,l){const s=Math.min(t,n),h=Math.max(t,n),c=Math.min(e,l),p=Math.max(e,l);this.updateVal(v.data,"startx",s,Math.min),this.updateVal(v.data,"starty",c,Math.min),this.updateVal(v.data,"stopx",h,Math.max),this.updateVal(v.data,"stopy",p,Math.max),this.updateBounds(s,c,h,p)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},X=j.sectionFills,it=j.sectionColours,qt=function(t,e,n){const l=I().journey;let s="";const h=l.height*2+l.diagramMarginY,c=n+h;let p=0,y="#CCC",m="black",g=0;for(const[d,i]of e.entries()){if(s!==i.section){y=X[p%X.length],g=p%X.length,m=it[p%it.length];let a=0;const u=i.section;for(let o=d;o<e.length&&e[o].section==u;o++)a=a+1;const f={x:d*l.taskMargin+d*l.width+P,y:50,text:i.section,fill:y,num:g,colour:m,taskCount:a};L.drawSection(t,f,l),s=i.section,p++}const r=i.people.reduce((a,u)=>(M[u]&&(a[u]=M[u]),a),{});i.x=d*l.taskMargin+d*l.width+P,i.y=c,i.width=l.diagramMarginX,i.height=l.diagramMarginY,i.colour=m,i.fill=y,i.num=g,i.actors=r,L.drawTask(t,i,l),v.insert(i.x,i.y,i.x+i.width+l.taskMargin,300+5*30)}},st={setConf:zt,draw:Ot},Ee={parser:wt,db:tt,renderer:st,styles:Vt,init:t=>{st.setConf(t.journey),tt.clear()}};export{Ee as diagram};

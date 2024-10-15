import{A as vt,c as yt,x as D,l as lt,s as Lt,g as Ct,n as zt,o as bt,a as Et,b as Dt,p as It,h as Bt,d as wt}from"./index.demo-BWxddmhe.js";import{s as gt}from"./isEmpty-DrOE0CRk.js";import"./owner-DP2ujv_O.js";import{l as _t}from"./linear-CedLLJJa.js";import"./index-BeruYqlq.js";import"./util-CVD_c193.js";import"./viewport-DH-I-8hX.js";import"./use-ref-value-LJGxjPkn.js";import"./Shiki-FDvSO5Pf.js";import"./index-Ch4SJQPy.js";import"./StyledButton-BXrwZkLW.js";import"./proxy-DJMatoTb.js";import"./spring-C80N1tKa.js";import"./use-event-callback-Bhwn3ola.js";import"./dom-BowoBODo.js";import"./index-Djivm970.js";import"./index-CU0cbbFu.js";import"./use-motion-template-DKuQYB9y.js";import"./visual-element-DBrrQU-Q.js";import"./provider-BIFAntKB.js";import"./use-is-unmounted-F2cS0ppq.js";import"./use-drag-controls-C7347hqm.js";import"./use-is-dark-BBrnlEAi.js";import"./LinkCard-BaFs5GrK.js";import"./image-DsS-QZYo.js";import"./Gallery-CYrDZbm5.js";import"./useQuery-QDrF4ceH.js";import"./alert-BVGTJqlY.js";import"./index-CgBFOfa7.js";import"./FloatPopover-D2JD9v5P.js";import"./SocialSourceLink-BNt_ysYw.js";import"./Collapse-DHiirC7x.js";import"./CodeEditor-Bo0o7lof.js";import"./index-LAI3pait.js";import"./cookie-BdEvHbwk.js";import"./Mermaid-iM3XuoF8.js";import"./init-Gi6I4Gst.js";var pt=function(){var e=function(K,n,s,o){for(s=s||{},o=K.length;o--;s[K[o]]=n);return s},r=[1,3],h=[1,4],x=[1,5],f=[1,6],d=[1,7],c=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],g=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],i=[32,33,34],y=[2,7],p=[1,13],B=[1,17],N=[1,18],V=[1,19],I=[1,20],b=[1,21],M=[1,22],X=[1,23],C=[1,24],it=[1,25],at=[1,26],nt=[1,27],U=[1,30],Q=[1,31],q=[1,32],_=[1,33],T=[1,34],t=[1,35],A=[1,36],S=[1,37],k=[1,38],F=[1,39],P=[1,40],v=[1,41],L=[1,42],O=[1,57],Y=[1,58],z=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],ht={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(n,s,o,l,m,a,et){var u=a.length-1;switch(m){case 12:this.$=a[u].trim(),l.setDiagramTitle(this.$);break;case 13:this.$=a[u].trim(),l.setAccTitle(this.$);break;case 14:case 15:this.$=a[u].trim(),l.setAccDescription(this.$);break;case 16:l.addSection(a[u].substr(8)),this.$=a[u].substr(8);break;case 17:l.addPoint(a[u-3],a[u-1],a[u]);break;case 18:l.setXAxisLeftText(a[u-2]),l.setXAxisRightText(a[u]);break;case 19:a[u-1].text+=" ⟶ ",l.setXAxisLeftText(a[u-1]);break;case 20:l.setXAxisLeftText(a[u]);break;case 21:l.setYAxisBottomText(a[u-2]),l.setYAxisTopText(a[u]);break;case 22:a[u-1].text+=" ⟶ ",l.setYAxisBottomText(a[u-1]);break;case 23:l.setYAxisBottomText(a[u]);break;case 24:l.setQuadrant1Text(a[u]);break;case 25:l.setQuadrant2Text(a[u]);break;case 26:l.setQuadrant3Text(a[u]);break;case 27:l.setQuadrant4Text(a[u]);break;case 31:this.$={text:a[u],type:"text"};break;case 32:this.$={text:a[u-1].text+""+a[u],type:a[u-1].type};break;case 33:this.$={text:a[u],type:"text"};break;case 34:this.$={text:a[u],type:"markdown"};break;case 35:this.$=a[u];break;case 36:this.$=a[u-1]+""+a[u];break}},table:[{3:1,4:2,5:r,6:h,32:x,33:f,34:d},{1:[3]},{3:8,4:2,5:r,6:h,32:x,33:f,34:d},{3:9,4:2,5:r,6:h,32:x,33:f,34:d},e(c,[2,4],{7:10}),e(g,[2,28]),e(g,[2,29]),e(g,[2,30]),{1:[2,1]},{1:[2,2]},e(i,y,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:p,13:B,15:N,17:V,19:I,20:b,25:M,27:X,28:C,29:it,30:at,31:nt,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L}),e(c,[2,5]),{4:43,32:x,33:f,34:d},e(i,y,{10:14,11:15,12:16,21:28,35:29,9:44,5:p,13:B,15:N,17:V,19:I,20:b,25:M,27:X,28:C,29:it,30:at,31:nt,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L}),e(i,[2,9]),e(i,[2,10]),e(i,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},e(i,[2,15]),e(i,[2,16]),{21:48,35:29,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L},{21:49,35:29,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L},{21:50,35:29,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L},{21:51,35:29,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L},{21:52,35:29,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L},{21:53,35:29,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L},{5:O,22:[1,54],35:56,36:55,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y},e(z,[2,31]),e(z,[2,33]),e(z,[2,34]),e(z,[2,37]),e(z,[2,38]),e(z,[2,39]),e(z,[2,40]),e(z,[2,41]),e(z,[2,42]),e(z,[2,43]),e(z,[2,44]),e(z,[2,45]),e(z,[2,46]),e(z,[2,47]),e(c,[2,6]),e(i,[2,8]),e(i,[2,12]),e(i,[2,13]),e(i,[2,14]),e(i,[2,20],{36:55,35:56,5:O,26:[1,59],40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,23],{36:55,35:56,5:O,26:[1,60],40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,24],{36:55,35:56,5:O,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,25],{36:55,35:56,5:O,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,26],{36:55,35:56,5:O,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,27],{36:55,35:56,5:O,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),{23:[1,61]},e(z,[2,32]),e(z,[2,48]),e(z,[2,49]),e(z,[2,50]),e(i,[2,19],{35:29,21:62,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L}),e(i,[2,22],{35:29,21:63,37:U,38:Q,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L}),{24:[1,64]},e(i,[2,18],{36:55,35:56,5:O,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,21],{36:55,35:56,5:O,40:q,41:_,42:T,43:t,44:A,45:S,46:k,47:F,48:P,49:v,50:L,51:Y}),e(i,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(n,s){if(s.recoverable)this.trace(n);else{var o=new Error(n);throw o.hash=s,o}},parse:function(n){var s=this,o=[0],l=[],m=[null],a=[],et=this.table,u="",rt=0,mt=0,St=2,qt=1,kt=a.slice.call(arguments,1),E=Object.create(this.lexer),Z={yy:{}};for(var dt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,dt)&&(Z.yy[dt]=this.yy[dt]);E.setInput(n,Z.yy),Z.yy.lexer=E,Z.yy.parser=this,typeof E.yylloc>"u"&&(E.yylloc={});var ut=E.yylloc;a.push(ut);var Ft=E.options&&E.options.ranges;typeof Z.yy.parseError=="function"?this.parseError=Z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Pt(){var j;return j=l.pop()||E.lex()||qt,typeof j!="number"&&(j instanceof Array&&(l=j,j=l.pop()),j=s.symbols_[j]||j),j}for(var W,J,H,xt,tt={},st,$,Tt,ot;;){if(J=o[o.length-1],this.defaultActions[J]?H=this.defaultActions[J]:((W===null||typeof W>"u")&&(W=Pt()),H=et[J]&&et[J][W]),typeof H>"u"||!H.length||!H[0]){var ft="";ot=[];for(st in et[J])this.terminals_[st]&&st>St&&ot.push("'"+this.terminals_[st]+"'");E.showPosition?ft="Parse error on line "+(rt+1)+`:
`+E.showPosition()+`
Expecting `+ot.join(", ")+", got '"+(this.terminals_[W]||W)+"'":ft="Parse error on line "+(rt+1)+": Unexpected "+(W==qt?"end of input":"'"+(this.terminals_[W]||W)+"'"),this.parseError(ft,{text:E.match,token:this.terminals_[W]||W,line:E.yylineno,loc:ut,expected:ot})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+W);switch(H[0]){case 1:o.push(W),m.push(E.yytext),a.push(E.yylloc),o.push(H[1]),W=null,mt=E.yyleng,u=E.yytext,rt=E.yylineno,ut=E.yylloc;break;case 2:if($=this.productions_[H[1]][1],tt.$=m[m.length-$],tt._$={first_line:a[a.length-($||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-($||1)].first_column,last_column:a[a.length-1].last_column},Ft&&(tt._$.range=[a[a.length-($||1)].range[0],a[a.length-1].range[1]]),xt=this.performAction.apply(tt,[u,mt,rt,Z.yy,H[1],m,a].concat(kt)),typeof xt<"u")return xt;$&&(o=o.slice(0,-1*$*2),m=m.slice(0,-1*$),a=a.slice(0,-1*$)),o.push(this.productions_[H[1]][0]),m.push(tt.$),a.push(tt._$),Tt=et[o[o.length-2]][o[o.length-1]],o.push(Tt);break;case 3:return!0}}return!0}},At=function(){var K={EOF:1,parseError:function(s,o){if(this.yy.parser)this.yy.parser.parseError(s,o);else throw new Error(s)},setInput:function(n,s){return this.yy=s||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var s=n.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var s=n.length,o=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===l.length?this.yylloc.first_column:0)+l[l.length-o.length].length-o[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),s=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+s+"^"},test_match:function(n,s){var o,l,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),l=n[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],o=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var a in m)this[a]=m[a];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,s,o,l;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),a=0;a<m.length;a++)if(o=this._input.match(this.rules[m[a]]),o&&(!s||o[0].length>s[0].length)){if(s=o,l=a,this.options.backtrack_lexer){if(n=this.test_match(o,m[a]),n!==!1)return n;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(n=this.test_match(s,m[l]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(s,o,l,m){switch(l){case 0:break;case 1:break;case 2:return 32;case 3:break;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 22:this.popState();break;case 23:this.begin("string");break;case 24:this.popState();break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 28:this.popState();break;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:return 46;case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return K}();ht.lexer=At;function ct(){this.yy={}}return ct.prototype=ht,ht.Parser=ct,new ct}();pt.parser=pt;const Rt=pt,R=vt();class Vt{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var r,h,x,f,d,c,g,i,y,p,B,N,V,I,b,M,X,C;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:((r=D.quadrantChart)==null?void 0:r.chartWidth)||500,chartWidth:((h=D.quadrantChart)==null?void 0:h.chartHeight)||500,titlePadding:((x=D.quadrantChart)==null?void 0:x.titlePadding)||10,titleFontSize:((f=D.quadrantChart)==null?void 0:f.titleFontSize)||20,quadrantPadding:((d=D.quadrantChart)==null?void 0:d.quadrantPadding)||5,xAxisLabelPadding:((c=D.quadrantChart)==null?void 0:c.xAxisLabelPadding)||5,yAxisLabelPadding:((g=D.quadrantChart)==null?void 0:g.yAxisLabelPadding)||5,xAxisLabelFontSize:((i=D.quadrantChart)==null?void 0:i.xAxisLabelFontSize)||16,yAxisLabelFontSize:((y=D.quadrantChart)==null?void 0:y.yAxisLabelFontSize)||16,quadrantLabelFontSize:((p=D.quadrantChart)==null?void 0:p.quadrantLabelFontSize)||16,quadrantTextTopPadding:((B=D.quadrantChart)==null?void 0:B.quadrantTextTopPadding)||5,pointTextPadding:((N=D.quadrantChart)==null?void 0:N.pointTextPadding)||5,pointLabelFontSize:((V=D.quadrantChart)==null?void 0:V.pointLabelFontSize)||12,pointRadius:((I=D.quadrantChart)==null?void 0:I.pointRadius)||5,xAxisPosition:((b=D.quadrantChart)==null?void 0:b.xAxisPosition)||"top",yAxisPosition:((M=D.quadrantChart)==null?void 0:M.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:((X=D.quadrantChart)==null?void 0:X.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:((C=D.quadrantChart)==null?void 0:C.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:R.quadrant1Fill,quadrant2Fill:R.quadrant2Fill,quadrant3Fill:R.quadrant3Fill,quadrant4Fill:R.quadrant4Fill,quadrant1TextFill:R.quadrant1TextFill,quadrant2TextFill:R.quadrant2TextFill,quadrant3TextFill:R.quadrant3TextFill,quadrant4TextFill:R.quadrant4TextFill,quadrantPointFill:R.quadrantPointFill,quadrantPointTextFill:R.quadrantPointTextFill,quadrantXAxisTextFill:R.quadrantXAxisTextFill,quadrantYAxisTextFill:R.quadrantYAxisTextFill,quadrantTitleFill:R.quadrantTitleFill,quadrantInternalBorderStrokeFill:R.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:R.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),lt.info("clear called")}setData(r){this.data={...this.data,...r}}addPoints(r){this.data.points=[...r,...this.data.points]}setConfig(r){lt.trace("setConfig called with: ",r),this.config={...this.config,...r}}setThemeConfig(r){lt.trace("setThemeConfig called with: ",r),this.themeConfig={...this.themeConfig,...r}}calculateSpace(r,h,x,f){const d=this.config.xAxisLabelPadding*2+this.config.xAxisLabelFontSize,c={top:r==="top"&&h?d:0,bottom:r==="bottom"&&h?d:0},g=this.config.yAxisLabelPadding*2+this.config.yAxisLabelFontSize,i={left:this.config.yAxisPosition==="left"&&x?g:0,right:this.config.yAxisPosition==="right"&&x?g:0},y=this.config.titleFontSize+this.config.titlePadding*2,p={top:f?y:0},B=this.config.quadrantPadding+i.left,N=this.config.quadrantPadding+c.top+p.top,V=this.config.chartWidth-this.config.quadrantPadding*2-i.left-i.right,I=this.config.chartHeight-this.config.quadrantPadding*2-c.top-c.bottom-p.top,b=V/2,M=I/2;return{xAxisSpace:c,yAxisSpace:i,titleSpace:p,quadrantSpace:{quadrantLeft:B,quadrantTop:N,quadrantWidth:V,quadrantHalfWidth:b,quadrantHeight:I,quadrantHalfHeight:M}}}getAxisLabels(r,h,x,f){const{quadrantSpace:d,titleSpace:c}=f,{quadrantHalfHeight:g,quadrantHeight:i,quadrantLeft:y,quadrantHalfWidth:p,quadrantTop:B,quadrantWidth:N}=d,V=!!this.data.xAxisRightText,I=!!this.data.yAxisTopText,b=[];return this.data.xAxisLeftText&&h&&b.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:y+(V?p/2:0),y:r==="top"?this.config.xAxisLabelPadding+c.top:this.config.xAxisLabelPadding+B+i+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:V?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&h&&b.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:y+p+(V?p/2:0),y:r==="top"?this.config.xAxisLabelPadding+c.top:this.config.xAxisLabelPadding+B+i+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:V?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&x&&b.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+y+N+this.config.quadrantPadding,y:B+i-(I?g/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:I?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&x&&b.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+y+N+this.config.quadrantPadding,y:B+g-(I?g/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:I?"center":"left",horizontalPos:"top",rotation:-90}),b}getQuadrants(r){const{quadrantSpace:h}=r,{quadrantHalfHeight:x,quadrantLeft:f,quadrantHalfWidth:d,quadrantTop:c}=h,g=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f+d,y:c,width:d,height:x,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f,y:c,width:d,height:x,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f,y:c+x,width:d,height:x,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f+d,y:c+x,width:d,height:x,fill:this.themeConfig.quadrant4Fill}];for(const i of g)i.text.x=i.x+i.width/2,this.data.points.length===0?(i.text.y=i.y+i.height/2,i.text.horizontalPos="middle"):(i.text.y=i.y+this.config.quadrantTextTopPadding,i.text.horizontalPos="top");return g}getQuadrantPoints(r){const{quadrantSpace:h}=r,{quadrantHeight:x,quadrantLeft:f,quadrantTop:d,quadrantWidth:c}=h,g=_t().domain([0,1]).range([f,c+f]),i=_t().domain([0,1]).range([x+d,d]);return this.data.points.map(p=>({x:g(p.x),y:i(p.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:p.text,fill:this.themeConfig.quadrantPointTextFill,x:g(p.x),y:i(p.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}}))}getBorders(r){const h=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:x}=r,{quadrantHalfHeight:f,quadrantHeight:d,quadrantLeft:c,quadrantHalfWidth:g,quadrantTop:i,quadrantWidth:y}=x;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c-h,y1:i,x2:c+y+h,y2:i},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c+y,y1:i+h,x2:c+y,y2:i+d-h},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c-h,y1:i+d,x2:c+y+h,y2:i+d},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c,y1:i+h,x2:c,y2:i+d-h},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:c+g,y1:i+h,x2:c+g,y2:i+d-h},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:c+h,y1:i+f,x2:c+y-h,y2:i+f}]}getTitle(r){if(r)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const r=this.config.showXAxis&&!!(this.data.xAxisLeftText||this.data.xAxisRightText),h=this.config.showYAxis&&!!(this.data.yAxisTopText||this.data.yAxisBottomText),x=this.config.showTitle&&!!this.data.titleText,f=this.data.points.length>0?"bottom":this.config.xAxisPosition,d=this.calculateSpace(f,r,h,x);return{points:this.getQuadrantPoints(d),quadrants:this.getQuadrants(d),axisLabels:this.getAxisLabels(f,r,h,d),borderLines:this.getBorders(d),title:this.getTitle(x)}}}const Wt=yt();function G(e){return wt(e.trim(),Wt)}const w=new Vt;function Nt(e){w.setData({quadrant1Text:G(e.text)})}function Ut(e){w.setData({quadrant2Text:G(e.text)})}function Qt(e){w.setData({quadrant3Text:G(e.text)})}function Ht(e){w.setData({quadrant4Text:G(e.text)})}function Mt(e){w.setData({xAxisLeftText:G(e.text)})}function Xt(e){w.setData({xAxisRightText:G(e.text)})}function Ot(e){w.setData({yAxisTopText:G(e.text)})}function Yt(e){w.setData({yAxisBottomText:G(e.text)})}function $t(e,r,h){w.addPoints([{x:r,y:h,text:G(e.text)}])}function jt(e){w.setConfig({chartWidth:e})}function Gt(e){w.setConfig({chartHeight:e})}function Kt(){const e=yt(),{themeVariables:r,quadrantChart:h}=e;return h&&w.setConfig(h),w.setThemeConfig({quadrant1Fill:r.quadrant1Fill,quadrant2Fill:r.quadrant2Fill,quadrant3Fill:r.quadrant3Fill,quadrant4Fill:r.quadrant4Fill,quadrant1TextFill:r.quadrant1TextFill,quadrant2TextFill:r.quadrant2TextFill,quadrant3TextFill:r.quadrant3TextFill,quadrant4TextFill:r.quadrant4TextFill,quadrantPointFill:r.quadrantPointFill,quadrantPointTextFill:r.quadrantPointTextFill,quadrantXAxisTextFill:r.quadrantXAxisTextFill,quadrantYAxisTextFill:r.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:r.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:r.quadrantInternalBorderStrokeFill,quadrantTitleFill:r.quadrantTitleFill}),w.setData({titleText:bt()}),w.build()}const Zt=function(){w.clear(),It()},Jt={setWidth:jt,setHeight:Gt,setQuadrant1Text:Nt,setQuadrant2Text:Ut,setQuadrant3Text:Qt,setQuadrant4Text:Ht,setXAxisLeftText:Mt,setXAxisRightText:Xt,setYAxisTopText:Ot,setYAxisBottomText:Yt,addPoint:$t,getQuadrantData:Kt,clear:Zt,setAccTitle:Lt,getAccTitle:Ct,setDiagramTitle:zt,getDiagramTitle:bt,getAccDescription:Et,setAccDescription:Dt},te=(e,r,h,x)=>{var f,d,c;function g(t){return t==="top"?"hanging":"middle"}function i(t){return t==="left"?"start":"middle"}function y(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const p=yt();lt.debug(`Rendering quadrant chart
`+e);const B=p.securityLevel;let N;B==="sandbox"&&(N=gt("#i"+r));const I=(B==="sandbox"?gt(N.nodes()[0].contentDocument.body):gt("body")).select(`[id="${r}"]`),b=I.append("g").attr("class","main"),M=((f=p.quadrantChart)==null?void 0:f.chartWidth)||500,X=((d=p.quadrantChart)==null?void 0:d.chartHeight)||500;Bt(I,X,M,((c=p.quadrantChart)==null?void 0:c.useMaxWidth)||!0),I.attr("viewBox","0 0 "+M+" "+X),x.db.setHeight(X),x.db.setWidth(M);const C=x.db.getQuadrantData(),it=b.append("g").attr("class","quadrants"),at=b.append("g").attr("class","border"),nt=b.append("g").attr("class","data-points"),U=b.append("g").attr("class","labels"),Q=b.append("g").attr("class","title");C.title&&Q.append("text").attr("x",0).attr("y",0).attr("fill",C.title.fill).attr("font-size",C.title.fontSize).attr("dominant-baseline",g(C.title.horizontalPos)).attr("text-anchor",i(C.title.verticalPos)).attr("transform",y(C.title)).text(C.title.text),C.borderLines&&at.selectAll("line").data(C.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);const q=it.selectAll("g.quadrant").data(C.quadrants).enter().append("g").attr("class","quadrant");q.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),q.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>g(t.text.horizontalPos)).attr("text-anchor",t=>i(t.text.verticalPos)).attr("transform",t=>y(t.text)).text(t=>t.text.text),U.selectAll("g.label").data(C.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>g(t.horizontalPos)).attr("text-anchor",t=>i(t.verticalPos)).attr("transform",t=>y(t));const T=nt.selectAll("g.data-point").data(C.points).enter().append("g").attr("class","data-point");T.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill),T.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>g(t.text.horizontalPos)).attr("text-anchor",t=>i(t.text.verticalPos)).attr("transform",t=>y(t.text))},ee={draw:te},We={parser:Rt,db:Jt,renderer:ee,styles:()=>""};export{We as diagram};

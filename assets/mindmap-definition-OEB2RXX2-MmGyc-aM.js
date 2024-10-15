import{_ as g,l as B,T as yt,H as Et,d as rt,F as mt,O as _t,A as K,i as tt}from"./mermaid.core-opzlkL7c.js";import{c as lt}from"./cytoscape.esm-BJx63wfR.js";import{c as Lt,g as vt}from"./index-BeruYqlq.js";import{r as Nt}from"./cose-base-D3xy1FDs.js";import{s as Dt,n as Tt,o as St,q as bt}from"./isEmpty-DrOE0CRk.js";import"./owner-DP2ujv_O.js";import"./StyledButton-BXrwZkLW.js";import"./proxy-DJMatoTb.js";import"./line-Ci9EUk7u.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var ht={exports:{}};(function(e,h){(function(r,s){e.exports=s(Nt())})(Lt,function(t){return function(r){var s={};function n(c){if(s[c])return s[c].exports;var u=s[c]={i:c,l:!1,exports:{}};return r[c].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=r,n.c=s,n.i=function(c){return c},n.d=function(c,u,y){n.o(c,u)||Object.defineProperty(c,u,{configurable:!1,enumerable:!0,get:y})},n.n=function(c){var u=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(u,"a",u),u},n.o=function(c,u){return Object.prototype.hasOwnProperty.call(c,u)},n.p="",n(n.s=1)}([function(r,s){r.exports=t},function(r,s,n){var c=n(0).layoutBase.LayoutConstants,u=n(0).layoutBase.FDLayoutConstants,y=n(0).CoSEConstants,S=n(0).CoSELayout,b=n(0).CoSENode,V=n(0).layoutBase.PointD,v=n(0).layoutBase.DimensionD,H={ready:function(){},stop:function(){},quality:"default",nodeDimensionsIncludeLabels:!1,refresh:30,fit:!0,padding:10,randomize:!0,nodeRepulsion:4500,idealEdgeLength:50,edgeElasticity:.45,nestingFactor:.1,gravity:.25,numIter:2500,tile:!0,animate:"end",animationDuration:500,tilingPaddingVertical:10,tilingPaddingHorizontal:10,gravityRangeCompound:1.5,gravityCompound:1,gravityRange:3.8,initialEnergyOnIncremental:.5};function k(L,d){var m={};for(var a in L)m[a]=L[a];for(var a in d)m[a]=d[a];return m}function x(L){this.options=k(H,L),U(this.options)}var U=function(d){d.nodeRepulsion!=null&&(y.DEFAULT_REPULSION_STRENGTH=u.DEFAULT_REPULSION_STRENGTH=d.nodeRepulsion),d.idealEdgeLength!=null&&(y.DEFAULT_EDGE_LENGTH=u.DEFAULT_EDGE_LENGTH=d.idealEdgeLength),d.edgeElasticity!=null&&(y.DEFAULT_SPRING_STRENGTH=u.DEFAULT_SPRING_STRENGTH=d.edgeElasticity),d.nestingFactor!=null&&(y.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=u.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR=d.nestingFactor),d.gravity!=null&&(y.DEFAULT_GRAVITY_STRENGTH=u.DEFAULT_GRAVITY_STRENGTH=d.gravity),d.numIter!=null&&(y.MAX_ITERATIONS=u.MAX_ITERATIONS=d.numIter),d.gravityRange!=null&&(y.DEFAULT_GRAVITY_RANGE_FACTOR=u.DEFAULT_GRAVITY_RANGE_FACTOR=d.gravityRange),d.gravityCompound!=null&&(y.DEFAULT_COMPOUND_GRAVITY_STRENGTH=u.DEFAULT_COMPOUND_GRAVITY_STRENGTH=d.gravityCompound),d.gravityRangeCompound!=null&&(y.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=u.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR=d.gravityRangeCompound),d.initialEnergyOnIncremental!=null&&(y.DEFAULT_COOLING_FACTOR_INCREMENTAL=u.DEFAULT_COOLING_FACTOR_INCREMENTAL=d.initialEnergyOnIncremental),d.quality=="draft"?c.QUALITY=0:d.quality=="proof"?c.QUALITY=2:c.QUALITY=1,y.NODE_DIMENSIONS_INCLUDE_LABELS=u.NODE_DIMENSIONS_INCLUDE_LABELS=c.NODE_DIMENSIONS_INCLUDE_LABELS=d.nodeDimensionsIncludeLabels,y.DEFAULT_INCREMENTAL=u.DEFAULT_INCREMENTAL=c.DEFAULT_INCREMENTAL=!d.randomize,y.ANIMATE=u.ANIMATE=c.ANIMATE=d.animate,y.TILE=d.tile,y.TILING_PADDING_VERTICAL=typeof d.tilingPaddingVertical=="function"?d.tilingPaddingVertical.call():d.tilingPaddingVertical,y.TILING_PADDING_HORIZONTAL=typeof d.tilingPaddingHorizontal=="function"?d.tilingPaddingHorizontal.call():d.tilingPaddingHorizontal};x.prototype.run=function(){var L,d,m=this.options;this.idToLNode={};var a=this.layout=new S,i=this;i.stopped=!1,this.cy=this.options.cy,this.cy.trigger({type:"layoutstart",layout:this});var o=a.newGraphManager();this.gm=o;var p=this.options.eles.nodes(),f=this.options.eles.edges();this.root=o.addRoot(),this.processChildrenList(this.root,this.getTopMostNodes(p),a);for(var l=0;l<f.length;l++){var O=f[l],E=this.idToLNode[O.data("source")],C=this.idToLNode[O.data("target")];if(E!==C&&E.getEdgesBetween(C).length==0){var G=o.add(a.newEdge(),E,C);G.id=O.id()}}var X=function(_,$){typeof _=="number"&&(_=$);var P=_.data("id"),F=i.idToLNode[P];return{x:F.getRect().getCenterX(),y:F.getRect().getCenterY()}},W=function q(){for(var _=function(){m.fit&&m.cy.fit(m.eles,m.padding),L||(L=!0,i.cy.one("layoutready",m.ready),i.cy.trigger({type:"layoutready",layout:i}))},$=i.options.refresh,P,F=0;F<$&&!P;F++)P=i.stopped||i.layout.tick();if(P){a.checkLayoutSuccess()&&!a.isSubLayout&&a.doPostLayout(),a.tilingPostLayout&&a.tilingPostLayout(),a.isLayoutFinished=!0,i.options.eles.nodes().positions(X),_(),i.cy.one("layoutstop",i.options.stop),i.cy.trigger({type:"layoutstop",layout:i}),d&&cancelAnimationFrame(d),L=!1;return}var j=i.layout.getPositionsData();m.eles.nodes().positions(function(w,Z){if(typeof w=="number"&&(w=Z),!w.isParent()){for(var T=w.id(),I=j[T],D=w;I==null&&(I=j[D.data("parent")]||j["DummyCompound_"+D.data("parent")],j[T]=I,D=D.parent()[0],D!=null););return I!=null?{x:I.x,y:I.y}:{x:w.position("x"),y:w.position("y")}}}),_(),d=requestAnimationFrame(q)};return a.addListener("layoutstarted",function(){i.options.animate==="during"&&(d=requestAnimationFrame(W))}),a.runLayout(),this.options.animate!=="during"&&(i.options.eles.nodes().not(":parent").layoutPositions(i,i.options,X),L=!1),this},x.prototype.getTopMostNodes=function(L){for(var d={},m=0;m<L.length;m++)d[L[m].id()]=!0;var a=L.filter(function(i,o){typeof i=="number"&&(i=o);for(var p=i.parent()[0];p!=null;){if(d[p.id()])return!1;p=p.parent()[0]}return!0});return a},x.prototype.processChildrenList=function(L,d,m){for(var a=d.length,i=0;i<a;i++){var o=d[i],p=o.children(),f,l=o.layoutDimensions({nodeDimensionsIncludeLabels:this.options.nodeDimensionsIncludeLabels});if(o.outerWidth()!=null&&o.outerHeight()!=null?f=L.add(new b(m.graphManager,new V(o.position("x")-l.w/2,o.position("y")-l.h/2),new v(parseFloat(l.w),parseFloat(l.h)))):f=L.add(new b(this.graphManager)),f.id=o.data("id"),f.paddingLeft=parseInt(o.css("padding")),f.paddingTop=parseInt(o.css("padding")),f.paddingRight=parseInt(o.css("padding")),f.paddingBottom=parseInt(o.css("padding")),this.options.nodeDimensionsIncludeLabels&&o.isParent()){var O=o.boundingBox({includeLabels:!0,includeNodes:!1}).w,E=o.boundingBox({includeLabels:!0,includeNodes:!1}).h,C=o.css("text-halign");f.labelWidth=O,f.labelHeight=E,f.labelPos=C}if(this.idToLNode[o.data("id")]=f,isNaN(f.rect.x)&&(f.rect.x=0),isNaN(f.rect.y)&&(f.rect.y=0),p!=null&&p.length>0){var G;G=m.getGraphManager().add(m.newGraph(),f),this.processChildrenList(G,p,m)}}},x.prototype.stop=function(){return this.stopped=!0,this};var Y=function(d){d("layout","cose-bilkent",x)};typeof cytoscape<"u"&&Y(cytoscape),r.exports=Y}])})})(ht);var xt=ht.exports;const It=vt(xt);var it=function(){var e=g(function(m,a,i,o){for(i=i||{},o=m.length;o--;i[m[o]]=a);return i},"o"),h=[1,4],t=[1,13],r=[1,12],s=[1,15],n=[1,16],c=[1,20],u=[1,19],y=[6,7,8],S=[1,26],b=[1,24],V=[1,25],v=[6,7,11],H=[1,6,13,15,16,19,22],k=[1,33],x=[1,34],U=[1,6,7,11,13,15,16,19,22],Y={trace:g(function(){},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,MINDMAP:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,ICON:15,CLASS:16,nodeWithId:17,nodeWithoutId:18,NODE_DSTART:19,NODE_DESCR:20,NODE_DEND:21,NODE_ID:22,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"MINDMAP",11:"EOF",13:"SPACELIST",15:"ICON",16:"CLASS",19:"NODE_DSTART",20:"NODE_DESCR",21:"NODE_DEND",22:"NODE_ID"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,2],[12,2],[12,2],[12,1],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[18,3],[17,1],[17,4]],performAction:g(function(a,i,o,p,f,l,O){var E=l.length-1;switch(f){case 6:case 7:return p;case 8:p.getLogger().trace("Stop NL ");break;case 9:p.getLogger().trace("Stop EOF ");break;case 11:p.getLogger().trace("Stop NL2 ");break;case 12:p.getLogger().trace("Stop EOF2 ");break;case 15:p.getLogger().info("Node: ",l[E].id),p.addNode(l[E-1].length,l[E].id,l[E].descr,l[E].type);break;case 16:p.getLogger().trace("Icon: ",l[E]),p.decorateNode({icon:l[E]});break;case 17:case 21:p.decorateNode({class:l[E]});break;case 18:p.getLogger().trace("SPACELIST");break;case 19:p.getLogger().trace("Node: ",l[E].id),p.addNode(0,l[E].id,l[E].descr,l[E].type);break;case 20:p.decorateNode({icon:l[E]});break;case 25:p.getLogger().trace("node found ..",l[E-2]),this.$={id:l[E-1],descr:l[E-1],type:p.getType(l[E-2],l[E])};break;case 26:this.$={id:l[E],descr:l[E],type:p.nodeType.DEFAULT};break;case 27:p.getLogger().trace("node found ..",l[E-3]),this.$={id:l[E-3],descr:l[E-1],type:p.getType(l[E-2],l[E])};break}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:h},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:h},{6:t,7:[1,10],9:9,12:11,13:r,14:14,15:s,16:n,17:17,18:18,19:c,22:u},e(y,[2,3]),{1:[2,2]},e(y,[2,4]),e(y,[2,5]),{1:[2,6],6:t,12:21,13:r,14:14,15:s,16:n,17:17,18:18,19:c,22:u},{6:t,9:22,12:11,13:r,14:14,15:s,16:n,17:17,18:18,19:c,22:u},{6:S,7:b,10:23,11:V},e(v,[2,22],{17:17,18:18,14:27,15:[1,28],16:[1,29],19:c,22:u}),e(v,[2,18]),e(v,[2,19]),e(v,[2,20]),e(v,[2,21]),e(v,[2,23]),e(v,[2,24]),e(v,[2,26],{19:[1,30]}),{20:[1,31]},{6:S,7:b,10:32,11:V},{1:[2,7],6:t,12:21,13:r,14:14,15:s,16:n,17:17,18:18,19:c,22:u},e(H,[2,14],{7:k,11:x}),e(U,[2,8]),e(U,[2,9]),e(U,[2,10]),e(v,[2,15]),e(v,[2,16]),e(v,[2,17]),{20:[1,35]},{21:[1,36]},e(H,[2,13],{7:k,11:x}),e(U,[2,11]),e(U,[2,12]),{21:[1,37]},e(v,[2,25]),e(v,[2,27])],defaultActions:{2:[2,1],6:[2,2]},parseError:g(function(a,i){if(i.recoverable)this.trace(a);else{var o=new Error(a);throw o.hash=i,o}},"parseError"),parse:g(function(a){var i=this,o=[0],p=[],f=[null],l=[],O=this.table,E="",C=0,G=0,X=2,W=1,q=l.slice.call(arguments,1),_=Object.create(this.lexer),$={yy:{}};for(var P in this.yy)Object.prototype.hasOwnProperty.call(this.yy,P)&&($.yy[P]=this.yy[P]);_.setInput(a,$.yy),$.yy.lexer=_,$.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var F=_.yylloc;l.push(F);var j=_.options&&_.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function w(A){o.length=o.length-2*A,f.length=f.length-A,l.length=l.length-A}g(w,"popStack");function Z(){var A;return A=p.pop()||_.lex()||W,typeof A!="number"&&(A instanceof Array&&(p=A,A=p.pop()),A=i.symbols_[A]||A),A}g(Z,"lex");for(var T,I,D,et,z={},Q,M,ct,J;;){if(I=o[o.length-1],this.defaultActions[I]?D=this.defaultActions[I]:((T===null||typeof T>"u")&&(T=Z()),D=O[I]&&O[I][T]),typeof D>"u"||!D.length||!D[0]){var nt="";J=[];for(Q in O[I])this.terminals_[Q]&&Q>X&&J.push("'"+this.terminals_[Q]+"'");_.showPosition?nt="Parse error on line "+(C+1)+`:
`+_.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[T]||T)+"'":nt="Parse error on line "+(C+1)+": Unexpected "+(T==W?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(nt,{text:_.match,token:this.terminals_[T]||T,line:_.yylineno,loc:F,expected:J})}if(D[0]instanceof Array&&D.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+T);switch(D[0]){case 1:o.push(T),f.push(_.yytext),l.push(_.yylloc),o.push(D[1]),T=null,G=_.yyleng,E=_.yytext,C=_.yylineno,F=_.yylloc;break;case 2:if(M=this.productions_[D[1]][1],z.$=f[f.length-M],z._$={first_line:l[l.length-(M||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(M||1)].first_column,last_column:l[l.length-1].last_column},j&&(z._$.range=[l[l.length-(M||1)].range[0],l[l.length-1].range[1]]),et=this.performAction.apply(z,[E,G,C,$.yy,D[1],f,l].concat(q)),typeof et<"u")return et;M&&(o=o.slice(0,-1*M*2),f=f.slice(0,-1*M),l=l.slice(0,-1*M)),o.push(this.productions_[D[1]][0]),f.push(z.$),l.push(z._$),ct=O[o[o.length-2]][o[o.length-1]],o.push(ct);break;case 3:return!0}}return!0},"parse")},L=function(){var m={EOF:1,parseError:g(function(i,o){if(this.yy.parser)this.yy.parser.parseError(i,o);else throw new Error(i)},"parseError"),setInput:g(function(a,i){return this.yy=i||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:g(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var i=a.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:g(function(a){var i=a.length,o=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===p.length?this.yylloc.first_column:0)+p[p.length-o.length].length-o[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},"unput"),more:g(function(){return this._more=!0,this},"more"),reject:g(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:g(function(a){this.unput(this.match.slice(a))},"less"),pastInput:g(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:g(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:g(function(){var a=this.pastInput(),i=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+i+"^"},"showPosition"),test_match:g(function(a,i){var o,p,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),p=a[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],o=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var l in f)this[l]=f[l];return!1}return!1},"test_match"),next:g(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,i,o,p;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),l=0;l<f.length;l++)if(o=this._input.match(this.rules[f[l]]),o&&(!i||o[0].length>i[0].length)){if(i=o,p=l,this.options.backtrack_lexer){if(a=this.test_match(o,f[l]),a!==!1)return a;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(a=this.test_match(i,f[p]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:g(function(){var i=this.next();return i||this.lex()},"lex"),begin:g(function(i){this.conditionStack.push(i)},"begin"),popState:g(function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:g(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:g(function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},"topState"),pushState:g(function(i){this.begin(i)},"pushState"),stateStackSize:g(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:g(function(i,o,p,f){switch(p){case 0:return i.getLogger().trace("Found comment",o.yytext),6;case 1:return 8;case 2:this.begin("CLASS");break;case 3:return this.popState(),16;case 4:this.popState();break;case 5:i.getLogger().trace("Begin icon"),this.begin("ICON");break;case 6:return i.getLogger().trace("SPACELINE"),6;case 7:return 7;case 8:return 15;case 9:i.getLogger().trace("end icon"),this.popState();break;case 10:return i.getLogger().trace("Exploding node"),this.begin("NODE"),19;case 11:return i.getLogger().trace("Cloud"),this.begin("NODE"),19;case 12:return i.getLogger().trace("Explosion Bang"),this.begin("NODE"),19;case 13:return i.getLogger().trace("Cloud Bang"),this.begin("NODE"),19;case 14:return this.begin("NODE"),19;case 15:return this.begin("NODE"),19;case 16:return this.begin("NODE"),19;case 17:return this.begin("NODE"),19;case 18:return 13;case 19:return 22;case 20:return 11;case 21:this.begin("NSTR2");break;case 22:return"NODE_DESCR";case 23:this.popState();break;case 24:i.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 25:return i.getLogger().trace("description:",o.yytext),"NODE_DESCR";case 26:this.popState();break;case 27:return this.popState(),i.getLogger().trace("node end ))"),"NODE_DEND";case 28:return this.popState(),i.getLogger().trace("node end )"),"NODE_DEND";case 29:return this.popState(),i.getLogger().trace("node end ...",o.yytext),"NODE_DEND";case 30:return this.popState(),i.getLogger().trace("node end (("),"NODE_DEND";case 31:return this.popState(),i.getLogger().trace("node end (-"),"NODE_DEND";case 32:return this.popState(),i.getLogger().trace("node end (-"),"NODE_DEND";case 33:return this.popState(),i.getLogger().trace("node end (("),"NODE_DEND";case 34:return this.popState(),i.getLogger().trace("node end (("),"NODE_DEND";case 35:return i.getLogger().trace("Long description:",o.yytext),20;case 36:return i.getLogger().trace("Long description:",o.yytext),20}},"anonymous"),rules:[/^(?:\s*%%.*)/i,/^(?:mindmap\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{CLASS:{rules:[3,4],inclusive:!1},ICON:{rules:[8,9],inclusive:!1},NSTR2:{rules:[22,23],inclusive:!1},NSTR:{rules:[25,26],inclusive:!1},NODE:{rules:[21,24,27,28,29,30,31,32,33,34,35,36],inclusive:!1},INITIAL:{rules:[0,1,2,5,6,7,10,11,12,13,14,15,16,17,18,19,20],inclusive:!0}}};return m}();Y.lexer=L;function d(){this.yy={}}return g(d,"Parser"),d.prototype=Y,Y.Parser=d,new d}();it.parser=it;var At=it,R=[],gt=0,at={},kt=g(()=>{R=[],gt=0,at={}},"clear"),Ot=g(function(e){for(let h=R.length-1;h>=0;h--)if(R[h].level<e)return R[h];return null},"getParent"),$t=g(()=>R.length>0?R[0]:null,"getMindmap"),Rt=g((e,h,t,r)=>{B.info("addNode",e,h,t,r);const s=rt();let n=s.mindmap?.padding??K.mindmap.padding;switch(r){case N.ROUNDED_RECT:case N.RECT:case N.HEXAGON:n*=2}const c={id:gt++,nodeId:tt(h,s),level:e,descr:tt(t,s),type:r,children:[],width:s.mindmap?.maxNodeWidth??K.mindmap.maxNodeWidth,padding:n},u=Ot(e);if(u)u.children.push(c),R.push(c);else if(R.length===0)R.push(c);else throw new Error('There can be only one root. No parent could be found for ("'+c.descr+'")')},"addNode"),N={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},Ct=g((e,h)=>{switch(B.debug("In get type",e,h),e){case"[":return N.RECT;case"(":return h===")"?N.ROUNDED_RECT:N.CLOUD;case"((":return N.CIRCLE;case")":return N.CLOUD;case"))":return N.BANG;case"{{":return N.HEXAGON;default:return N.DEFAULT}},"getType"),wt=g((e,h)=>{at[e]=h},"setElementForId"),Pt=g(e=>{if(!e)return;const h=rt(),t=R[R.length-1];e.icon&&(t.icon=tt(e.icon,h)),e.class&&(t.class=tt(e.class,h))},"decorateNode"),Ft=g(e=>{switch(e){case N.DEFAULT:return"no-border";case N.RECT:return"rect";case N.ROUNDED_RECT:return"rounded-rect";case N.CIRCLE:return"circle";case N.CLOUD:return"cloud";case N.BANG:return"bang";case N.HEXAGON:return"hexgon";default:return"no-border"}},"type2Str"),Mt=g(()=>B,"getLogger"),Ut=g(e=>at[e],"getElementById"),Gt={clear:kt,addNode:Rt,getMindmap:$t,nodeType:N,getType:Ct,setElementForId:wt,decorateNode:Pt,type2Str:Ft,getLogger:Mt,getElementById:Ut},Bt=Gt,Vt=12,Ht=g(function(e,h,t,r){h.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),h.append("line").attr("class","node-line-"+r).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},"defaultBkg"),Yt=g(function(e,h,t){h.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("height",t.height).attr("width",t.width)},"rectBkg"),jt=g(function(e,h,t){const r=t.width,s=t.height,n=.15*r,c=.25*r,u=.35*r,y=.2*r;h.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("d",`M0 0 a${n},${n} 0 0,1 ${r*.25},${-1*r*.1}
      a${u},${u} 1 0,1 ${r*.4},${-1*r*.1}
      a${c},${c} 1 0,1 ${r*.35},${1*r*.2}

      a${n},${n} 1 0,1 ${r*.15},${1*s*.35}
      a${y},${y} 1 0,1 ${-1*r*.15},${1*s*.65}

      a${c},${n} 1 0,1 ${-1*r*.25},${r*.15}
      a${u},${u} 1 0,1 ${-1*r*.5},0
      a${n},${n} 1 0,1 ${-1*r*.25},${-1*r*.15}

      a${n},${n} 1 0,1 ${-1*r*.1},${-1*s*.35}
      a${y},${y} 1 0,1 ${r*.1},${-1*s*.65}

    H0 V0 Z`)},"cloudBkg"),zt=g(function(e,h,t){const r=t.width,s=t.height,n=.15*r;h.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("d",`M0 0 a${n},${n} 1 0,0 ${r*.25},${-1*s*.1}
      a${n},${n} 1 0,0 ${r*.25},0
      a${n},${n} 1 0,0 ${r*.25},0
      a${n},${n} 1 0,0 ${r*.25},${1*s*.1}

      a${n},${n} 1 0,0 ${r*.15},${1*s*.33}
      a${n*.8},${n*.8} 1 0,0 0,${1*s*.34}
      a${n},${n} 1 0,0 ${-1*r*.15},${1*s*.33}

      a${n},${n} 1 0,0 ${-1*r*.25},${s*.15}
      a${n},${n} 1 0,0 ${-1*r*.25},0
      a${n},${n} 1 0,0 ${-1*r*.25},0
      a${n},${n} 1 0,0 ${-1*r*.25},${-1*s*.15}

      a${n},${n} 1 0,0 ${-1*r*.1},${-1*s*.33}
      a${n*.8},${n*.8} 1 0,0 0,${-1*s*.34}
      a${n},${n} 1 0,0 ${r*.1},${-1*s*.33}

    H0 V0 Z`)},"bangBkg"),Xt=g(function(e,h,t){h.append("circle").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("r",t.width/2)},"circleBkg");function ut(e,h,t,r,s){return e.insert("polygon",":first-child").attr("points",r.map(function(n){return n.x+","+n.y}).join(" ")).attr("transform","translate("+(s.width-h)/2+", "+t+")")}g(ut,"insertPolygonShape");var Wt=g(function(e,h,t){const r=t.height,n=r/4,c=t.width-t.padding+2*n,u=[{x:n,y:0},{x:c-n,y:0},{x:c,y:-r/2},{x:c-n,y:-r},{x:n,y:-r},{x:0,y:-r/2}];ut(h,c,r,u,t)},"hexagonBkg"),qt=g(function(e,h,t){h.append("rect").attr("id","node-"+t.id).attr("class","node-bkg node-"+e.type2Str(t.type)).attr("height",t.height).attr("rx",t.padding).attr("ry",t.padding).attr("width",t.width)},"roundedRectBkg"),Zt=g(async function(e,h,t,r,s){const n=s.htmlLabels,c=r%(Vt-1),u=h.append("g");t.section=c;let y="section-"+c;c<0&&(y+=" section-root"),u.attr("class",(t.class?t.class+" ":"")+"mindmap-node "+y);const S=u.append("g"),b=u.append("g"),V=t.descr.replace(/(<br\/*>)/g,`
`);await yt(b,V,{useHtmlLabels:n,width:t.width,classes:"mindmap-node-label"},s),n||b.attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle");const v=b.node().getBBox(),[H]=Et(s.fontSize);if(t.height=v.height+H*1.1*.5+t.padding,t.width=v.width+2*t.padding,t.icon)if(t.type===e.nodeType.CIRCLE)t.height+=50,t.width+=50,u.append("foreignObject").attr("height","50px").attr("width",t.width).attr("style","text-align: center;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+c+" "+t.icon),b.attr("transform","translate("+t.width/2+", "+(t.height/2-1.5*t.padding)+")");else{t.width+=50;const k=t.height;t.height=Math.max(k,60);const x=Math.abs(t.height-k);u.append("foreignObject").attr("width","60px").attr("height",t.height).attr("style","text-align: center;margin-top:"+x/2+"px;").append("div").attr("class","icon-container").append("i").attr("class","node-icon-"+c+" "+t.icon),b.attr("transform","translate("+(25+t.width/2)+", "+(x/2+t.padding/2)+")")}else if(n){const k=(t.width-v.width)/2,x=(t.height-v.height)/2;b.attr("transform","translate("+k+", "+x+")")}else{const k=t.width/2,x=t.padding/2;b.attr("transform","translate("+k+", "+x+")")}switch(t.type){case e.nodeType.DEFAULT:Ht(e,S,t,c);break;case e.nodeType.ROUNDED_RECT:qt(e,S,t,c);break;case e.nodeType.RECT:Yt(e,S,t,c);break;case e.nodeType.CIRCLE:S.attr("transform","translate("+t.width/2+", "+ +t.height/2+")"),Xt(e,S,t,c);break;case e.nodeType.CLOUD:jt(e,S,t,c);break;case e.nodeType.BANG:zt(e,S,t,c);break;case e.nodeType.HEXAGON:Wt(e,S,t,c);break}return e.setElementForId(t.id,u),t.height},"drawNode"),Qt=g(function(e,h){const t=e.getElementById(h.id),r=h.x||0,s=h.y||0;t.attr("transform","translate("+r+","+s+")")},"positionNode");lt.use(It);async function st(e,h,t,r,s){await Zt(e,h,t,r,s),t.children&&await Promise.all(t.children.map((n,c)=>st(e,h,n,r<0?c:r,s)))}g(st,"drawNodes");function dt(e,h){h.edges().map((t,r)=>{const s=t.data();if(t[0]._private.bodyBounds){const n=t[0]._private.rscratch;B.trace("Edge: ",r,s),e.insert("path").attr("d",`M ${n.startX},${n.startY} L ${n.midX},${n.midY} L${n.endX},${n.endY} `).attr("class","edge section-edge-"+s.section+" edge-depth-"+s.depth)}})}g(dt,"drawEdges");function ot(e,h,t,r){h.add({group:"nodes",data:{id:e.id.toString(),labelText:e.descr,height:e.height,width:e.width,level:r,nodeId:e.id,padding:e.padding,type:e.type},position:{x:e.x,y:e.y}}),e.children&&e.children.forEach(s=>{ot(s,h,t,r+1),h.add({group:"edges",data:{id:`${e.id}_${s.id}`,source:e.id,target:s.id,depth:r,section:s.section}})})}g(ot,"addNodes");function pt(e,h){return new Promise(t=>{const r=Dt("body").append("div").attr("id","cy").attr("style","display:none"),s=lt({container:document.getElementById("cy"),style:[{selector:"edge",style:{"curve-style":"bezier"}}]});r.remove(),ot(e,s,h,0),s.nodes().forEach(function(n){n.layoutDimensions=()=>{const c=n.data();return{w:c.width,h:c.height}}}),s.layout({name:"cose-bilkent",quality:"proof",styleEnabled:!1,animate:!1}).run(),s.ready(n=>{B.info("Ready",n),t(s)})})}g(pt,"layoutMindmap");function ft(e,h){h.nodes().map((t,r)=>{const s=t.data();s.x=t.position().x,s.y=t.position().y,Qt(e,s);const n=e.getElementById(s.nodeId);B.info("Id:",r,"Position: (",t.position().x,", ",t.position().y,")",s),n.attr("transform",`translate(${t.position().x-s.width/2}, ${t.position().y-s.height/2})`),n.attr("attr",`apa-${r})`)})}g(ft,"positionNodes");var Jt=g(async(e,h,t,r)=>{B.debug(`Rendering mindmap diagram
`+e);const s=r.db,n=s.getMindmap();if(!n)return;const c=rt();c.htmlLabels=!1;const u=mt(h),y=u.append("g");y.attr("class","mindmap-edges");const S=u.append("g");S.attr("class","mindmap-nodes"),await st(s,S,n,-1,c);const b=await pt(n,c);dt(y,b),ft(s,b),_t(void 0,u,c.mindmap?.padding??K.mindmap.padding,c.mindmap?.useMaxWidth??K.mindmap.useMaxWidth)},"draw"),Kt={draw:Jt},te=g(e=>{let h="";for(let t=0;t<e.THEME_COLOR_LIMIT;t++)e["lineColor"+t]=e["lineColor"+t]||e["cScaleInv"+t],Tt(e["lineColor"+t])?e["lineColor"+t]=St(e["lineColor"+t],20):e["lineColor"+t]=bt(e["lineColor"+t],20);for(let t=0;t<e.THEME_COLOR_LIMIT;t++){const r=""+(17-3*t);h+=`
    .section-${t-1} rect, .section-${t-1} path, .section-${t-1} circle, .section-${t-1} polygon, .section-${t-1} path  {
      fill: ${e["cScale"+t]};
    }
    .section-${t-1} text {
     fill: ${e["cScaleLabel"+t]};
    }
    .node-icon-${t-1} {
      font-size: 40px;
      color: ${e["cScaleLabel"+t]};
    }
    .section-edge-${t-1}{
      stroke: ${e["cScale"+t]};
    }
    .edge-depth-${t-1}{
      stroke-width: ${r};
    }
    .section-${t-1} line {
      stroke: ${e["cScaleInv"+t]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return h},"genSections"),ee=g(e=>`
  .edge {
    stroke-width: 3;
  }
  ${te(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles"),ne=ee,pe={db:Bt,renderer:Kt,parser:At,styles:ne};export{pe as diagram};

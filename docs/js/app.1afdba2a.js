(function(){"use strict";var t={877:function(t,e,a){var n=a(5471),s=a(5353),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"game-container-wrapper",attrs:{draggable:"true"}},[e("div",{staticClass:"github-corner"},[e("a",{attrs:{href:"https://github.com/setube/vue-XiuXianGame","aria-label":"View source on GitHub"}},[e("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"2"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"game-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"game-box"},[e("h1",[t._v("Vue 文字修仙游戏")]),e("div",{staticClass:"story"},[t.ismonster?e("p",{domProps:{innerHTML:t._s(t.storyText)},on:{click:t.openMonsterInfo}}):e("p",[t._v(t._s(t.storyText))])]),e("div",{staticClass:"attributes"},[e("div",{staticClass:"attribute-box"},[e("div",{staticClass:"tag attribute"},[t._v("境界: "+t._s(t.levelName))]),e("div",{staticClass:"tag attribute"},[t._v("修为: "+t._s(t.player.cultivation)+"/"+t._s(t.player.maxCultivation))]),e("div",{staticClass:"tag attribute"},[t._v("血量: "+t._s(t.player.health||0)+"/"+t._s(t.player.maxHealth||0))]),e("div",{staticClass:"tag attribute"},[t._v("法力: "+t._s(t.player.mana)+"/"+t._s(t.player.maxMana))]),e("div",{staticClass:"tag attribute"},[t._v("攻击: "+t._s(t.player.attack))]),e("div",{staticClass:"tag attribute"},[t._v("防御: "+t._s(t.player.defense))])])]),e("div",{staticClass:"equip-box"},[e("div",{staticClass:"tag equip-item"},[e("span",{staticClass:"equip"},[e("span",[t._v("武器: ")]),t.player.equipment.weapon?.name?e("el-tag",{attrs:{type:t.player.equipment.weapon?.quality,closable:!!t.player.equipment.weapon?.name},on:{close:function(e){return t.equipmentClose("weapon")},click:function(e){return t.equipmentInfo("weapon")}}},[t._v(t._s(t.player.equipment.weapon?.name||"无"))]):e("span",[t._v("无")])],1),e("span",{staticClass:"equip"},[e("span",[t._v("护甲: ")]),t.player.equipment.armor?.name?e("el-tag",{attrs:{type:t.player.equipment.armor?.quality,closable:!!t.player.equipment.armor?.name},on:{close:function(e){return t.equipmentClose("armor")},click:function(e){return t.equipmentInfo("armor")}}},[t._v(t._s(t.player.equipment.armor?.name||"无"))]):e("span",[t._v("无")])],1)]),e("div",{staticClass:"tag equip-item"},[e("span",{staticClass:"equip"},[e("span",[t._v("饰品: ")]),t.player.equipment.accessory?.name?e("el-tag",{attrs:{type:t.player.equipment.accessory?.quality,closable:!!t.player.equipment.accessory?.name},on:{close:function(e){return t.equipmentClose("accessory")},click:function(e){return t.equipmentInfo("accessory")}}},[t._v(t._s(t.player.equipment.accessory?.name||"无"))]):e("span",[t._v("无")])],1),e("span",{staticClass:"equip"},[e("span",[t._v("法宝: ")]),t.player.equipment.sutra?.name?e("el-tag",{attrs:{type:t.player.equipment.sutra?.quality,closable:!!t.player.equipment.sutra?.name},on:{close:function(e){return t.equipmentClose("sutra")},click:function(e){return t.equipmentInfo("sutra")}}},[t._v(t._s(t.player.equipment.sutra?.name))]):e("span",[t._v("无")])],1)]),t.player.inventory.length>0?e("div",{staticClass:"tag inventory-box"},[e("span",[t._v("背包: ")]),t._l(t.player.inventory,(function(a,n){return e("el-tag",{key:n,staticClass:"inventory-item",attrs:{type:a?.quality,closable:""},on:{close:function(e){return t.inventoryClose(n)},click:function(e){return t.inventory(n,a.type)}}},[t._v(t._s(a?.name))])}))],2):e("div",{staticClass:"tag inventory-box"},[t._v("背包: 空")])]),e("div",{staticClass:"actions"},t._l(t.actions,(function(a,n){return e("el-button",{key:n,attrs:{type:a.type?a.type:""},on:{click:a.handler}},[t._v(t._s(a.text))])})),1)])]),e("div",{staticClass:"wm_bg_1"}),e("div",{staticClass:"wm_bg_2"})])},r=[];a(4114),a(4603),a(7566),a(8721);const o={monster_Names(t){const e=["影魅狸奴","幽谷灵蛇","雾隐狐仙","松间灵猴","月影蝠妖","山涧蛟童","林涧鹿灵","岩隙石精","风鸣鹤怪","翠竹蛙仙"],a=["青龙啸天","白虎破晓","朱雀焚翼","玄武镇海","麒麟踏瑞","凤凰涅槃","毕方炽焰","貔貅吞金","白泽知世","狻猊御火"],n=["伏羲天帝","女娲圣母","昊天玉皇","太上老君","东华帝君","西王母后","神农炎帝","轩辕黄帝","瑶姬仙子","真武大帝"];return t>=1||t<=5?e[Math.floor(Math.random()*e.length)]:t>=6||t<=10?a[Math.floor(Math.random()*a.length)]:n[Math.floor(Math.random()*n.length)]},monster_Attack(t){return t>=1||t<=5?this.getRandomInt(50,150)*t:t>=6||t<=10?this.getRandomInt(300,500)*t:this.getRandomInt(1e3,5e3)*t},monster_Health(t){return t>=1||t<=5?this.getRandomInt(100,500)*t:t>=6||t<=10?this.getRandomInt(1e3,1500)*t:this.getRandomInt(5e3,1e4)*t},monster_Defense(t){return t>=1||t<=5?this.getRandomInt(1,15)*t:t>=6||t<=10?this.getRandomInt(15,30)*t:this.getRandomInt(30,50)*t},getRandomInt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}};var l=o;const h={drawPrize(t,e,a){const n=Object.values(a).reduce(((t,{probability:e})=>t+e),0),s=Math.floor(Math.random()*n);let i=0;for(const[r,{names:o,probability:l}]of Object.entries(a))if(i+=l,s<i){const a={name:o[Math.floor(Math.random()*o.length)],type:e,level:t,attack:["weapon","accessory","sutra"].includes(e)?this.equip_Attack(t):0,health:["armor","accessory","sutra"].includes(e)?this.equip_Health(t):0,quality:r,defense:["accessory","sutra"].includes(e)?this.equip_Attack(t):0},n={info:1,success:1.5,warning:3,danger:10},s=n[r];return a.attack=Math.floor(a.attack*s),a.health=Math.floor(a.health*s),a.defense=Math.floor(a.defense*s),a}},equip_Weapons(t){const e=["白玉净尘剑","雪魄寒冰枪","白龙吟风弓","月华流光扇","白玉玄灵笛","霜雪无痕鞭","云隐白凰刃","净世白莲杖","冰魄寒光轮","白玉玲珑塔"],a=["翠玉青藤剑","碧影灵蛇鞭","绿叶风暴弓","青木长生杖","翡翠灵犀刃","藤蔓缠绕索","翠竹清风扇","生命之泉壶","绿野仙踪笛","森罗万象轮"],n=["金煌剑","炽焰长枪","琥珀流光弓","龙鳞金斧","破晓黄玉锤","炎阳鞭","流光扇","战神金戟","黄芒闪电刃","日曜乾坤轮"],s=["赤焰凤凰剑","血玉红莲枪","烈焰焚天弓","赤霄神火戟","火舞流云扇","朱雀炎翼鞭","赤龙焚世刃","炎狱魔瞳镰","炽血星辰杖","红莲业火轮"],i={info:{names:e,probability:60},success:{names:a,probability:30},warning:{names:n,probability:9},danger:{names:s,probability:1}};return this.drawPrize(t,"weapon",i)},equip_Armors(t){const e=["瑶池仙绡羽衣","广寒玉兔霜甲","昆仑玉璧战袍","白龙吐珠云裳","九天玄女素绫","瑶光星辰织锦","冰魄银丝战衣","凌霄琼华宝衣","雪域神女雪绒","云隐龙鳞轻铠"],a=["翠竹幽兰轻衫","碧落青藤云裳","碧眼麒麟战衣","青鸾翔翼织锦","苍梧古木灵袍","绿野仙踪羽衣","灵蛇翠蔓软甲","翡翠琉璃长裙","松风竹影轻裘","春水碧于天衣"],n=["金辉流光锦袍","琥珀流光战衣","黄土龙纹长袍","日炎金鳞铠甲","秋菊金缎华服","蜜蜡黄绸云裳","凤凰涅槃黄衫","黄沙漫天披风","金穗流光纱裙","辉煌金羽战袍"],s=["烈焰红莲战甲","赤霄火凤云裳","朱雀焚天织锦","赤焰龙鳞宝衣","血色蔷薇华服","丹霞流光长袍","炎阳炽烈战袍","炽火红莲披风","火舞凤凰羽衣","红莲业火锦衣"],i={info:{names:e,probability:60},success:{names:a,probability:30},warning:{names:n,probability:9},danger:{names:s,probability:1}};return this.drawPrize(t,"armor",i)},equip_Accessorys(t){const e=["瑶池白玉簪","月华流光坠","寒霜凝露链","九天玄女玉佩","云锦织梦镯","龙涎润雪环","白鹤衔珠珮","昆仑仙山雪莲花链","瑶台仙露耳环","银河织梦项链"],a=["翠竹凝露簪","碧泉幽兰链","青藤绕梦镯","翡翠灵叶耳环","灵山仙草玉佩","松柏长青戒","翠影轻舞项链","绿野仙踪手环","碧波荡漾珠链","春回大地玉珮"],n=["金辉日冕簪","琥珀流光链","黄粱一梦镯","皇天后土玉佩","蜜蜡福瑞戒","秋收万颗项链","暖阳照耀耳环","炎黄子孙玉珮","金色麦田手环","盛世繁华珠链"],s=["赤焰凤凰翎","血珀琉璃坠","烈焰红宝石链","朱雀之翼耳环","红莲业火镯","丹霄火凤戒","玛瑙赤焰项链","炽天使之泪珮","绯红织锦手环","火凤涅槃珠链"],i={info:{names:e,probability:60},success:{names:a,probability:30},warning:{names:n,probability:9},danger:{names:s,probability:1}};return this.drawPrize(t,"accessory",i)},equip_Sutras(t){const e=["白玉净瓶","寒霜琉璃镜","瑶池雪莲珠","九天玄冰尺","月华宝莲灯","白云隐龙笛","玉清昆仑扇","净世白莲座","银河落雪琴","碧落瑶光盘"],a=["翠玉葫芦","青木长生杖","碧落灵珠","幽冥鬼藤鞭","万木回春图","绿绮琴音笛","青鸾火凤羽扇","翠影追魂剑","草木皆兵符","碧泉灵泉壶"],n=["金蛟剪","乾坤圈","黄金玲珑塔","戊己杏黄旗","轩辕黄帝鼎","镇妖伏魔镜","落日熔金轮","万寿无疆葫芦","金翅大鹏羽扇","地黄玄玉珠"],s=["炽焰灵珠阵图","火凤涅槃炉鼎","红莲业火净世碑","血玉轮回盘","朱雀翔天翼","烈焰焚天炉","丹霄火域图","赤龙炼魂珠","火灵炽心镜","九转炎灵祭坛"],i={info:{names:e,probability:60},success:{names:a,probability:30},warning:{names:n,probability:9},danger:{names:s,probability:1}};return this.drawPrize(t,"sutra",i)},equip_Attack(t){return t>=1||t<=5?this.getRandomInt(10,50)*t:t>=6||t<=10?this.getRandomInt(50,100)*t:this.getRandomInt(100,500)*t},equip_Health(t){return t>=1||t<=5?this.getRandomInt(100,500)*t:t>=6||t<=10?this.getRandomInt(500,1e3)*t:this.getRandomInt(1e3,5e3)*t},getRandomInt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}};var c=h,p={data(){return{player:{mana:50,level:1,attack:10,health:100,defense:10,maxMana:50,maxHealth:100,inventory:[],equipment:{sutra:null,armor:null,weapon:null,accessory:null},cultivation:0,maxCultivation:100},monster:{name:"",health:0,attack:0},loading:!1,actions:[],levelName:"筑基",storyText:"",ismonster:!1}},watch:{"player.attack":function(t){null==t||t<=0?(this.player.attack=10,this.equipmentClose("attack"),this.storyText="攻击属性出错, 已重置属性, 请重新装备"):this.player.attack=t},"player.health":function(t){null==t||t<=0?(this.player.health=100,this.equipmentClose("health"),this.storyText="血量属性出错, 已重置属性, 请重新装备"):this.player.health=t},"player.defense":function(t){null==t||t<=0?(this.player.defense=10,this.equipmentClose("defense"),this.storyText="防御属性出错, 已重置属性, 请重新装备"):this.player.defense=t},"player.maxHealth":function(t){null==t||t<=0?(this.player.maxHealth=100,this.storyText="血量属性出错, 已重置属性, 请重新装备"):this.player.maxHealth=t},"player.level":function(t){const e=t>=18?18:t,a={1:"筑基",2:"开光",3:"胎息",4:"辟谷",5:"金丹",6:"元婴",7:"出窍",8:"分神",9:"合体",10:"大乘",11:"渡劫",12:"地仙",13:"天仙",14:"金仙",15:"大罗金仙",16:"九天玄仙",17:"仙君",18:"仙帝"};this.player.level=t,this.levelName=a[e]},actions(t){this.actions=t,this.loading=!0,setTimeout((()=>{this.loading=!1}),500)}},mounted(){this.$store.state.player&&(this.player=this.$store.state.player),this.startGame()},methods:{exportdata(){const t=new Date,e=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),s=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),r=String(t.getSeconds()).padStart(2,"0"),o=new Blob([localStorage.getItem("vuex")],{type:"application/json;charset=utf-8"}),l=URL.createObjectURL(o),h=document.createElement("a");h.href=l,h.download=`文字修仙小游戏存档${e}-${a}-${n} ${s}:${i}:${r}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h)},deleteData(t){this.$confirm(t?"你确定要清空包括身上和背包里的所有道具吗?":"你确定要删除存档吗?建议数据出问题的时候再删除",t?"道具清空提示":"数据删除提示",{center:!0,cancelButtonText:"我点错了",confirmButtonText:"确定以及肯定"}).then((()=>{if(t){this.player.inventory=[];const t=this.player.equipment;Object.keys(t).forEach((e=>{const a=t[e]?.health??0,n=t[e]?.attack??0,s=t[e]?.defense??0;this.player.health-=a,this.player.attack-=n,this.player.defense-=s,this.player.maxHealth-=a,t[e]=null})),this.$store.commit("setPlayer",this.player)}else localStorage.removeItem("vuex"),location.reload()})).catch((()=>{}))},startGame(){this.player.cultivation||(this.storyText="欢迎来到《文字修仙游戏》，你的修仙之旅开始了。"),this.actions=[{text:"开始修炼",handler:this.cultivate},{text:"开始探索",handler:this.explore},{text:"清空道具",type:"warning",handler:()=>this.deleteData(1)},{text:"删档重练",type:"danger",handler:()=>this.deleteData(0)},{text:"导出存档",type:"success",handler:this.exportdata}],this.player.health=this.player.maxHealth,this.breakThrough(),this.$store.commit("setPlayer",this.player)},breakThrough(){this.player.cultivation>=this.player.maxCultivation&&(this.player.level++,this.player.attack+=5,this.player.health=this.player.maxHealth,this.player.mana=this.player.maxMana,this.player.maxCultivation=Math.floor(100*Math.pow(2,this.player.level)),this.storyText=`恭喜你突破了！当前等级：${this.player.level}，修为：${this.player.cultivation}/${this.player.maxCultivation}`,this.$store.commit("setPlayer",this.player))},cultivate(){this.ismonster=!1,this.player.cultivation<this.player.maxCultivation?(this.player.cultivation+=10,this.storyText="你开始冥想，吸收周围的灵气。修为提升了！"):this.storyText="你已经达到了当前等级的修为上限，需要突破到下一个等级。",this.breakThrough(),this.actions=[{text:"继续修炼",handler:this.cultivate},{text:"开始探索",handler:this.explore}]},explore(){c.getRandomInt(0,1)?this.encounterMonster():this.findTreasure()},encounterMonster(){const t=this.player.level;this.monster={name:l.monster_Names(t),health:l.monster_Health(t),attack:l.monster_Attack(t),defense:l.monster_Attack(t)},this.ismonster=!0,this.storyText=`你遇到了<span class="el-tag el-tag--danger">${this.monster.name}</span>`,this.actions=[{text:"干他娘的",handler:()=>this.fightMonster(this.monster)},{text:"提桶跑路",handler:this.runAway}]},openMonsterInfo(){this.$alert("",this.monster.name,{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>等级: ${this.player.level}</p>\n                            <p>血量: ${this.monster.health}</p>\n                            <p>攻击: ${this.monster.attack}</p>\n                            <p>防御: ${this.monster.defense}</p>\n                        </div>\n                    </div>`,confirmButtonText:"知道了",dangerouslyUseHTMLString:!0})},fightMonster(t){this.ismonster=!0;const e=t.attack,a=this.player.defense,n=Math.max(0,Math.floor(e-a))??1;this.player.health-=n;const s=this.player.attack,i=t.defense,r=Math.max(0,Math.floor(s-i))??1;if(t.health-=r,this.player.mana--,!this.player.mana)return this.storyText="你的法力已经用光了, 请回家升级补充法力",void(this.actions=[{text:"回到家里",handler:this.startGame}]);if(t.health<=0){const e=Math.floor(this.player.maxCultivation/c.getRandomInt(1,10));if(c.getRandomInt(0,1)){const a=["九转还魂丹","太上老君仙丹","蟠桃玉露丸","瑶池金丹","龙凤呈祥丹","万年灵芝丸","玄冰碧火丹","天罡地煞丹","麒麟血玉丹","幽冥黄泉丹"],n=a[Math.floor(Math.random()*a.length)];this.storyText=`你击败了${t.name}获得了${e}点修为和一颗${n}。`,this.actions=[{text:"食用灵丹",handler:()=>{const t=this.player.level;let e=0;e=t>=1||t<=5?c.getRandomInt(10,50)*t:t>=6||t<=10?c.getRandomInt(100,150)*t:c.getRandomInt(150,300)*t,this.player.mana+=e,this.player.maxMana+=e,this.storyText=`食用${n}后你增加了${e}点法力`,this.actions=[{text:"继续修炼",handler:this.cultivate},{text:"继续探索",handler:this.explore}]}}]}else this.storyText=`你击败了${t.name}获得了${e}点修为`;this.player.cultivation+=e,this.breakThrough()}else this.player.health<=0?(this.storyText="你死了, 弱。",this.actions=[{text:"回到家里",handler:this.startGame}]):(this.storyText=`你攻击了${t.name}，造成了${r}点伤害。${t.name}攻击了你，造成了${n}点伤害。`,this.actions=[{text:"干他娘的",handler:()=>this.fightMonster(t)},{text:"提桶跑路",handler:()=>this.runAway(t)}]);this.$store.commit("setPlayer",this.player)},runAway(){const t=c.getRandomInt(0,1);this.storyText=t?"逃跑失败，请继续战斗。":"你选择了逃跑，安全返回了修炼地点。",this.actions=t?[{text:"发起攻击",handler:()=>this.fightMonster(this.monster)}]:[{text:"继续修炼",handler:this.cultivate},{text:"继续探索",handler:this.explore}]},findTreasure(){const t=c.getRandomInt(1,4);let e=null;1==t?e=c.equip_Weapons(this.player.level):2==t?e=c.equip_Armors(this.player.level):3==t?e=c.equip_Accessorys(this.player.level):4==t&&(e=c.equip_Sutras(this.player.level)),this.storyText=e?.name?`你发现了一个宝箱，打开后获得了${e.name}。`:"你发现了一个宝箱，打开后箱子里是空的。",e?.name&&this.player.inventory.push(e),this.actions=[{text:"继续修炼",handler:this.cultivate},{text:"继续探索",handler:this.explore}],this.$store.commit("setPlayer",this.player)},inventoryClose(t){this.$confirm(`你确定要丢弃${this.player.inventory[t].name}吗?`,"道具丢弃通知",{center:!0,cancelButtonText:"取消",confirmButtonText:"确定"}).then((()=>{this.player.inventory.splice(t,1),this.$store.commit("setPlayer",this.player)})).catch((()=>{}))},inventory(t,e){const a={info:"C",danger:"S",success:"B",warning:"A"},n={sutra:"法宝",armor:"护甲",weapon:"武器",accessory:"饰品"},s=this.player.inventory[t];this.$confirm("",s.name,{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>类型: ${n[e]??"未知"}</p>\n                            <p>等级: ${s.level??"未知"}</p>\n                            <p>品质: ${a[s.quality]??"未知"}</p>\n                            <p>血量: ${s.health}</p>\n                            <p>攻击: ${s.attack}</p>\n                            <p>防御: ${s.defense}</p>\n                        </div>\n                    </div>`,cancelButtonText:"知道了",confirmButtonText:"立即装备",dangerouslyUseHTMLString:!0}).then((()=>{this.equipItem(t,e)})).catch((()=>{}))},equipmentInfo(t){const e=this.player.equipment[t];if(!e)return;const a={info:"C",danger:"S",success:"B",warning:"A"},n={sutra:"法宝",armor:"护甲",weapon:"武器",accessory:"饰品"};this.$confirm("",e.name,{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>类型: ${n[t]??"未知"}</p>\n                            <p>等级: ${e.level??"未知"}</p>\n                            <p>品质: ${a[e.quality]??"未知"}</p>\n                            <p>血量: ${e.health}</p>\n                            <p>攻击: ${e.attack}</p>\n                            <p>防御: ${e.defense}</p>\n                        </div>\n                    </div>`,dangerouslyUseHTMLString:!0}).catch((()=>{}))},equipItem(t,e){const a=this.player.inventory;if(this.player.equipment[e]){const t=this.player.equipment[e];this.player.health-=t.health,this.player.attack-=t.attack,this.player.defense-=t.defense,this.player.maxHealth-=t.health,a.push(t)}this.player.equipment[e]=a[t],this.player.health+=a[t].health,this.player.attack+=a[t].attack,this.player.defense+=a[t].defense,this.player.maxHealth+=a[t].health,a.splice(t,1),a.forEach(((t,e)=>{t.name||a.splice(e,1)})),this.$store.commit("setPlayer",this.player)},equipmentClose(t){const{inventory:e,equipment:a}=this.player;this.player.health-=a[t].health,this.player.attack-=a[t].attack,this.player.defense-=a[t].defense,this.player.maxHealth-=a[t].health,e.push(a[t]),a[t]=null,this.$store.commit("setPlayer",this.player)}}},u=p,m=a(1656),y=(0,m.A)(u,i,r,!1,null,"464773dc",null),d=y.exports,f=a(406);n.Ay.use(s.Ay);var v=new s.Ay.Store({state:{player:{mana:50,level:1,attack:10,health:100,defense:10,maxMana:50,maxHealth:100,inventory:[],equipment:{sutra:null,armor:null,weapon:null,accessory:null},cultivation:0,maxCultivation:100}},mutations:{setPlayer(t,e){t.player=e}},plugins:[(0,f.A)({storage:window.localStorage,reducer(t){return{player:t.player}}})]}),g=a(1473),x=a.n(g);n.Ay.use(s.Ay).use(x()),n.Ay.config.productionTip=!1,new n.Ay({store:v,render:t=>t(d)}).$mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,n,s,i){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],s=t[c][1],i=t[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(c--,1);var h=s();void 0!==h&&(e=h)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,i,r=n[0],o=n[1],l=n[2],h=0;if(r.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var c=l(a)}for(e&&e(n);h<r.length;h++)i=r[h],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(c)},n=self["webpackChunkxiuxian_game"]=self["webpackChunkxiuxian_game"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(877)}));n=a.O(n)})();
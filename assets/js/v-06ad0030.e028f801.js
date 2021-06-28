(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[120],{8818:(e,n,i)=>{"use strict";i.r(n),i.d(n,{data:()=>a});const a={key:"v-06ad0030",path:"/play-and-office/play.html",title:"娱乐软件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Steam安装",slug:"steam安装",children:[]},{level:2,title:"配置wine玩windows游戏",slug:"配置wine玩windows游戏",children:[]},{level:2,title:"手游解决方案（待补充）",slug:"手游解决方案-待补充",children:[]}],filePathRelative:"play-and-office/play.md",git:{updatedTime:1623398153e3,contributors:[{name:"LINUXP",email:"66715738+LagrangeOranges@users.noreply.github.com",commits:2},{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},858:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>b});var a=i(6252);const l=(0,a.uE)('<h1 id="娱乐软件" tabindex="-1"><a class="header-anchor" href="#娱乐软件" aria-hidden="true">#</a> 娱乐软件</h1><h2 id="steam安装" tabindex="-1"><a class="header-anchor" href="#steam安装" aria-hidden="true">#</a> Steam安装</h2><p>有条件的朋友尽量在steam上购买正版游戏，这不仅是对正版的支持，更是能帮助你节省大量折腾的时间。</p><h2 id="配置wine玩windows游戏" tabindex="-1"><a class="header-anchor" href="#配置wine玩windows游戏" aria-hidden="true">#</a> 配置wine玩windows游戏</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S wine wine-mono wine_gecko <span class="token comment"># 安装wine及相关字体</span>\nwinecfg <span class="token comment"># 输入这条命令后会弹出个小窗口，可对wine进行配置，其默认路径为“~/.wine”</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>wine对于大多<strong>较新的windows10程序支持都很好</strong>，但wine仍然存在着各种各样的问题</p><blockquote></blockquote>',7),s=(0,a.Uk)("-"),r={href:"https://wiki.archlinux.org/title/Wine",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("Wine"),o=(0,a.Uk)("这是Archwiki上关于wine的部分"),d=(0,a.Uk)("-"),w={href:"https://wiki.winehq.org/Main_Page",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("WineWiki"),u=(0,a.Uk)("这是wine官方的wiki"),c=(0,a.Wm)("li",null,"由于windows不开源，因而wine的开发是一种“逆向开发”，简而言之就是照葫芦画瓢。所以和windows的差异性不会小。windows上一些涉及到硬件调用加速（如Adobe系列）或硬件扫描（如LOL）的软件难以在wine上有良好的表现。Wine的能力很有限，从功能对比上来说，比不上微软搞的WSL。",-1),h=(0,a.Wm)("li",null,"由于windowsXP到7再到10有着奇奇怪怪的历史包袱，所以一些老的windows软件也无法在wine上良好运行（某些老的galgame在win10上都得好好折腾一番才能玩，在wine上成功运行难度可想而知）",-1),p=(0,a.Wm)("li",null,[(0,a.Uk)("最最重要的一点，"),(0,a.Wm)("strong",null,"wine不是个虚拟机，也不是个容器(container)"),(0,a.Uk)("，所以它无法与你的linux系统隔绝。理论上一个wimdows的病毒程序是可以在wine上运行并对你的电脑产生危害，所以请悉心呵护自己的系统。")],-1),g=(0,a.Wm)("p",null,"言归正传，许多普通的小游戏仍可以在wine上良好运行，笔者测试过并且将不断测试许多galgame或其它windows游戏。目前成功运行的几款游戏（破解版）如下：",-1),k=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,"[ATRI-MY-Dear-Moments]"),(0,a.Wm)("li",null,"[Mini-Metro]"),(0,a.Wm)("li",null,"[SenRenBanKa] 后续将继续补充")],-1),W=(0,a.Wm)("h2",{id:"手游解决方案-待补充",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#手游解决方案-待补充","aria-hidden":"true"},"#"),(0,a.Uk)(" 手游解决方案（待补充）")],-1),b={render:function(e,n){const i=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[s,(0,a.Wm)("a",r,[t,(0,a.Wm)(i)]),o]),(0,a.Wm)("li",null,[d,(0,a.Wm)("a",w,[m,(0,a.Wm)(i)]),u]),c,h,p]),g,k,W],64)}}}}]);
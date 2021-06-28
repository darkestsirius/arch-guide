(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[802],{2397:(l,n,e)=>{"use strict";e.r(n),e.d(n,{data:()=>s});const s={key:"v-fa8b044c",path:"/advanced/power-ctl.html",title:"功耗控制",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"⚡️ 千山鸟飞绝，万径人踪灭",slug:"⚡️-千山鸟飞绝-万径人踪灭",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"使用 TLP 延长电池寿命及续航",slug:"使用-tlp-延长电池寿命及续航",children:[{level:3,title:"安装与配置",slug:"安装与配置",children:[]},{level:3,title:"使用 TLP 显示相关系统信息",slug:"使用-tlp-显示相关系统信息",children:[]}]},{level:2,title:"电压下探",slug:"电压下探",children:[]},{level:2,title:"降低功率墙",slug:"降低功率墙",children:[]}],filePathRelative:"advanced/power-ctl.md",git:{updatedTime:1624547145e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:2}]}}},9560:(l,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>bn});var s=e(6252);const a=e.p+"assets/img/tlp-1.b4512c45.png",t=e.p+"assets/img/tlpui.93672d20.png",m=e.p+"assets/img/tlp-2.0a8b0fda.png",r=e.p+"assets/img/intel-undervolt-1.ceef73c6.png",i=e.p+"assets/img/intel-undervolt-2.2ec9e455.png",u=(0,s.Wm)("h1",{id:"功耗控制",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#功耗控制","aria-hidden":"true"},"#"),(0,s.Uk)(" 功耗控制")],-1),c=(0,s.Wm)("blockquote",null,[(0,s.Wm)("h3",{id:"⚡️-千山鸟飞绝-万径人踪灭",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#⚡️-千山鸟飞绝-万径人踪灭","aria-hidden":"true"},"#"),(0,s.Uk)(" ⚡️ 千山鸟飞绝，万径人踪灭")]),(0,s.Wm)("p",null,"针对散热不好的设备或者续航能力不佳的笔记本，功耗控制显得非常必要")],-1),o=(0,s.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,s.Uk)(" 🔖 这一节将会讨论：")],-1),W={class:"table-of-contents"},p=(0,s.Uk)("# ⚡️ 千山鸟飞绝，万径人踪灭"),d=(0,s.Uk)("# 🔖 这一节将会讨论："),k=(0,s.Uk)("# 使用 TLP 延长电池寿命及续航"),h=(0,s.Uk)("# 安装与配置"),b=(0,s.Uk)("# 使用 TLP 显示相关系统信息"),g=(0,s.Uk)("# 电压下探"),U=(0,s.Uk)("# 降低功率墙"),f=(0,s.Wm)("h2",{id:"使用-tlp-延长电池寿命及续航",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#使用-tlp-延长电池寿命及续航","aria-hidden":"true"},"#"),(0,s.Uk)(" 使用 TLP 延长电池寿命及续航")],-1),v=(0,s.Wm)("h4",{id:"⛓-相关链接",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#⛓-相关链接","aria-hidden":"true"},"#"),(0,s.Uk)(" ⛓ 相关链接")],-1),w=(0,s.Uk)("如有需要可参阅 "),_={href:"https://linrunner.de/tlp/settings/index.html",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("TLP 官方文档"),P=(0,s.Uk)(" 和 "),y={href:"https://wiki.archlinux.org/title/TLP_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},T=(0,s.Uk)("archwiki 相关内容"),L=(0,s.Uk)("。"),C=(0,s.Wm)("p",null,"多年来，Linux 在电池优化方面取得了很大进步，但仍然有一些可选步骤改善笔记本电脑的电池寿命并且延长续航。",-1),S=(0,s.Wm)("p",null,"TLP 作为一款自由开源的高级电源管理工具提供开箱即用的默认配置。同时也可以高度定制化，以满足特定需求。",-1),E=(0,s.Wm)("h3",{id:"安装与配置",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#安装与配置","aria-hidden":"true"},"#"),(0,s.Uk)(" 安装与配置")],-1),I=(0,s.Uk)("安装 "),B={href:"https://linrunner.de/tlp/index.html",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)("TLP"),D=(0,s.Wm)("sup",null,"community / aur",-1),q=(0,s.Uk)("、"),O={href:"https://archlinux.org/packages/community/any/tlp-rdw/",target:"_blank",rel:"noopener noreferrer"},N=(0,s.Wm)("code",null,"tlp-rdw",-1),R=(0,s.Wm)("sup",null,"community / aur",-1),G=(0,s.Uk)(" 以及可选安装图形界面 "),H={href:"https://github.com/d4nj1/TLPUI",target:"_blank",rel:"noopener noreferrer"},M=(0,s.Uk)("TLPUI"),j=(0,s.Wm)("sup",null,"aur",-1),z=(0,s.Uk)("："),K=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S tlp tlp-rdw\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Y=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"yay -S tlp-git tlp-rdw-git\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),F=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"yay -S tlpui\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),J=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"yay -S tlpui-git\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Q={class:"custom-container tip"},V=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),X=(0,s.Uk)("另外请参阅 "),Z=(0,s.Uk)("Smartmontools"),$=(0,s.Uk)(" 安装 Smartmontools 以显示 "),ll=(0,s.Wm)("code",null,"tlp-stat",-1),nl=(0,s.Uk)(" 中的 S.M.A.R.T. 数据。"),el={class:"custom-container tip"},sl=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),al=(0,s.Uk)("若是 ThinkPad 机型请查阅 "),tl={href:"https://linrunner.de/tlp/installation/arch.html#thinkpads-only",target:"_blank",rel:"noopener noreferrer"},ml=(0,s.Uk)("TLP 官方安装说明"),rl=(0,s.Uk)("。"),il=(0,s.Wm)("p",null,[(0,s.Uk)("为了防止 Btrfs 文件系统损坏，需要修改 "),(0,s.Wm)("code",null,"/etc/etc/tlp.conf"),(0,s.Uk)(" 配置文件：")],-1),ul=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token function"},"vim"),(0,s.Uk)(" /etc/tlp.conf\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),cl=(0,s.Wm)("p",null,"将对应行改为如下内容：",-1),ol=(0,s.Wm)("div",{class:"language-conf ext-conf line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-conf"},[(0,s.Wm)("code",null,"SATA_LINKPWR_ON_BAT=max_performance\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Wl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:a,alt:"tlp-1"})],-1),pl=(0,s.Wm)("div",{class:"custom-container danger"},[(0,s.Wm)("p",{class:"custom-container-title"},"☢️ 警告"),(0,s.Wm)("p",null,"若使用 Btrfs 文件系统请务必进行配置，否则可能造成数据丢失。")],-1),dl=(0,s.Wm)("h4",{id:"⛓-相关链接-1",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#⛓-相关链接-1","aria-hidden":"true"},"#"),(0,s.Uk)(" ⛓ 相关链接")],-1),kl=(0,s.Uk)("如有需要可参阅 "),hl={href:"https://wiki.archlinux.org/title/TLP_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)#Btrfs",target:"_blank",rel:"noopener noreferrer"},bl=(0,s.Uk)("archwiki 相关内容"),gl=(0,s.Uk)("。"),Ul=(0,s.uE)('<li><p>相关服务设置：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> tlp.service\n<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> NetworkManager-dispatcher.service\n<span class="token function">sudo</span> systemctl mask systemd-rfkill.service <span class="token comment"># 屏蔽以下服务以避免冲突，确保 TLP 无线设备的开关选项可以正确运行</span>\n<span class="token function">sudo</span> systemctl mask systemd-rfkill.socket\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>安装后，TLP 将在开机时自动启动。为了避免第一次重启系统，可以使用以下命令手动启动：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> tlp start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>还可以使用此命令在编辑配置后应用更改。</p><p>所有 TLP 设置都存储在 <code>/etc/tlp.conf</code> 中。一般情况下默认配置即可满足需求。</p></div></li>',2),fl=(0,s.Wm)("div",{class:"custom-container tip"},[(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,s.Wm)("p",null,[(0,s.Uk)("若安装了 TLPUI 可在图形界面进行相关配置。语言可在菜单栏 "),(0,s.Wm)("code",null,"Language"),(0,s.Uk)(" 处更改：")]),(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:t,alt:"tlpui"})])],-1),vl=(0,s.Wm)("h3",{id:"使用-tlp-显示相关系统信息",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#使用-tlp-显示相关系统信息","aria-hidden":"true"},"#"),(0,s.Uk)(" 使用 TLP 显示相关系统信息")],-1),wl=(0,s.Wm)("p",null,"通过 TLP 相关命令也可查看系统信息：",-1),_l=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" tlp-stat -b "),(0,s.Wm)("span",{class:"token comment"},"# 显示电池信息"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" tlp-stat -d "),(0,s.Wm)("span",{class:"token comment"},"# 显示磁盘信息"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" tlp-stat -e "),(0,s.Wm)("span",{class:"token comment"},"# 显示 PCI 设备信息"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" tlp-stat -g "),(0,s.Wm)("span",{class:"token comment"},"# 显示 GPU 信息"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" tlp-stat -p "),(0,s.Wm)("span",{class:"token comment"},"# 显示 CPU 信息"),(0,s.Uk)("\ntlp-stat -s "),(0,s.Wm)("span",{class:"token comment"},"# 显示系统数据信息 / 验证 TLP 服务运行状况"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"3"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"4"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"5"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"6"),(0,s.Wm)("br")])],-1),xl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:m,alt:"tlp-2"})],-1),Pl=(0,s.Wm)("h2",{id:"电压下探",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#电压下探","aria-hidden":"true"},"#"),(0,s.Uk)(" 电压下探")],-1),yl=(0,s.Wm)("h4",{id:"⛓-相关链接-2",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#⛓-相关链接-2","aria-hidden":"true"},"#"),(0,s.Uk)(" ⛓ 相关链接")],-1),Tl=(0,s.Uk)("如有需要可参阅 "),Ll={href:"https://wiki.archlinux.org/index.php/Undervolting_CPU",target:"_blank",rel:"noopener noreferrer"},Cl=(0,s.Uk)("archWiki 相关内容"),Sl=(0,s.Uk)("。"),El=(0,s.Wm)("p",null,"对处理器的电压进行最大限度的下探，在挖掘 CPU 体质的极限的同时，起到既能降低发热，又能最大限度保持性能的效果。",-1),Il=(0,s.Wm)("p",null,[(0,s.Uk)("如果正常操作，降低电压"),(0,s.Wm)("strong",null,"一般"),(0,s.Uk)("不会损害 CPU，一般建议从 50 毫伏进行尝试，每次降压尝试多增加 10 毫伏。只要确保在降低电压前，系统中任务均被正确保存即可。")],-1),Bl={class:"custom-container tip"},Al=(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),Dl=(0,s.Uk)("以下方法"),ql=(0,s.Wm)("strong",null,"仅适用于 Intel 四代酷睿 ™ Haswell 及更新 CPU",-1),Ol=(0,s.Uk)("。有关 AMD CPU 和 Intel 四代酷睿 ™ Haswell 之前的 CPU 请参考 "),Nl={href:"https://wiki.archlinux.org/index.php/Undervolting_CPU",target:"_blank",rel:"noopener noreferrer"},Rl=(0,s.Uk)("archWiki 相关内容"),Gl=(0,s.Uk)("。"),Hl=(0,s.Uk)("使用 "),Ml={href:"https://github.com/kitsunyan/intel-undervolt",target:"_blank",rel:"noopener noreferrer"},jl=(0,s.Wm)("code",null,"intel-undervolt",-1),zl=(0,s.Wm)("sup",null,"community / aur",-1),Kl=(0,s.Uk)(" 即可降压。"),Yl=(0,s.Wm)("div",{class:"custom-container danger"},[(0,s.Wm)("p",{class:"custom-container-title"},"☢️ 警告"),(0,s.Wm)("p",null,[(0,s.Wm)("code",null,"intel-undervolt"),(0,s.Uk)(" 可能会损坏您的硬件，因为它使用了一些逆向工程得到的方法。")]),(0,s.Wm)("p",null,"使用它的风险自负。")],-1),Fl=(0,s.Wm)("p",null,[(0,s.Uk)("安装 "),(0,s.Wm)("code",null,"intel-undervolt"),(0,s.Uk)("：")],-1),Jl=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" pacman -S intel-undervolt\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Ql=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"yay -S intel-undervolt-git\n")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),Vl=(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:r,alt:"intel-undervolt-1"})],-1),Xl=(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("编辑 "),(0,s.Wm)("code",null,"intel-undervolt.conf"),(0,s.Uk)(" 配置文件：")]),(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token function"},"vim"),(0,s.Uk)(" /etc/intel-undervolt.conf\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])]),(0,s.Wm)("p",null,"对于其配置文件中降压部分的五个参数含义如下:"),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"0"),(0,s.Uk)(" —— CPU 核心电压")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"1"),(0,s.Uk)(" —— CPU 核芯显卡电压")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"2"),(0,s.Uk)(" —— CPU 缓存电压")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"3"),(0,s.Uk)(" —— 系统周边电压，与内存等设备相关")]),(0,s.Wm)("li",null,[(0,s.Wm)("code",null,"4"),(0,s.Uk)(" —— 模拟 I/O 电压")])]),(0,s.Wm)("p",null,[(0,s.Wm)("img",{src:i,alt:"intel-undervolt-2"})]),(0,s.Wm)("p",null,[(0,s.Uk)("一般来说只调整 "),(0,s.Wm)("code",null,"0"),(0,s.Uk)("（CPU 核心电压）和 "),(0,s.Wm)("code",null,"2"),(0,s.Uk)("（CPU 缓存电压）两项电压即可。")])],-1),Zl=(0,s.Wm)("li",null,[(0,s.Wm)("p",null,"保存并退出 vim，使用以下命令应用配置："),(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" intel-undervolt apply "),(0,s.Wm)("span",{class:"token comment"},"# 应用配置"),(0,s.Uk)("\n"),(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" intel-undervolt "),(0,s.Wm)("span",{class:"token builtin class-name"},"read"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token comment"},"# 复查是否成功降压"),(0,s.Uk)("\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br")])])],-1),$l=(0,s.Uk)("可以尝试使用 "),ln={href:"https://archlinux.org/packages/community/any/s-tui/",target:"_blank",rel:"noopener noreferrer"},nn=(0,s.Uk)("s-tui"),en=(0,s.Uk)(" 这个工具进行烤机测试，同时观察温度、频率、TDP 的数据。"),sn=(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[(0,s.Uk)("在调整到一个合适的降压配置后，开启 "),(0,s.Wm)("code",null,"intel-undervolt.service"),(0,s.Uk)(" 服务即可：")]),(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"sudo"),(0,s.Uk)(" systemctl "),(0,s.Wm)("span",{class:"token builtin class-name"},"enable"),(0,s.Uk)(" --now intel-undervolt\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])])],-1),an=(0,s.Wm)("h2",{id:"降低功率墙",tabindex:"-1"},[(0,s.Wm)("a",{class:"header-anchor",href:"#降低功率墙","aria-hidden":"true"},"#"),(0,s.Uk)(" 降低功率墙")],-1),tn=(0,s.Wm)("p",null,"除了电压的下探，同时也可以尝试对处理器的功率墙（TDP）做出降低的限制。比如考虑这种情况 —— 在 CPU 满睿频时，其实不需要默认的那么多功耗来维持，也许在默认功耗的基础上减几瓦，也能维持满睿频，这样就又可以进一步降低温度。对功率墙进行限制不同于对电压进行下探，若限制功率墙的参数较低，这会不可避免的损失较多的性能，但是在散热过差的设备上这也是一个好办法。",-1),mn=(0,s.Wm)("p",null,"对于功率墙的调整，有些主板在 BIOS 中提供了设置项可以直接调整。对于没有设置项的主板，有的主板是锁定了瞬时和长时功率墙，这种情况就无法调整功率墙了。有的主板 BIOS 随没有提供功率墙调整项，但依旧可以通过命令行设置。",-1),rn=(0,s.Wm)("p",null,"通过以下的命令可以查看主板是否可以调整功率墙：",-1),un=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,[(0,s.Wm)("span",{class:"token function"},"grep"),(0,s.Uk)(),(0,s.Wm)("span",{class:"token builtin class-name"},"."),(0,s.Uk)(" /sys/class/powercap/intel-rapl/intel-rapl:0/* "),(0,s.Wm)("span",{class:"token operator"},[(0,s.Wm)("span",{class:"token file-descriptor important"},"2"),(0,s.Uk)(">")]),(0,s.Uk)(" /dev/null\n")])]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br")])],-1),cn=(0,s.Wm)("p",null,[(0,s.Uk)("如果在输出中看到了如下的 "),(0,s.Wm)("code",null,"enable"),(0,s.Uk)(" 值为 "),(0,s.Wm)("code",null,"1"),(0,s.Uk)("，即可以调整。第一行的数字代表现有的功率墙限制：")],-1),on=(0,s.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s.Wm)("pre",{class:"language-bash"},[(0,s.Wm)("code",null,"/sys/class/powercap/intel-rapl/intel-rapl:0/constraint_0_power_limit_uw:100000000\n/sys/class/powercap/intel-rapl/intel-rapl:0/enabled:1\n")]),(0,s.Wm)("div",{class:"highlight-lines"},[(0,s.Wm)("br"),(0,s.Wm)("div",{class:"highlight-line"}," ")]),(0,s.Wm)("div",{class:"line-numbers"},[(0,s.Wm)("span",{class:"line-number"},"1"),(0,s.Wm)("br"),(0,s.Wm)("span",{class:"line-number"},"2"),(0,s.Wm)("br")])],-1),Wn=(0,s.Uk)("具体的调整步骤参考 "),pn={href:"https://askubuntu.com/questions/1226254/set-max-tdp-of-intel-h-series-cpu",target:"_blank",rel:"noopener noreferrer"},dn=(0,s.Uk)("askubuntu"),kn=(0,s.Uk)("。"),hn=(0,s.Wm)("div",{class:"custom-container tip"},[(0,s.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,s.Wm)("p",null,[(0,s.Uk)("此外，"),(0,s.Wm)("code",null,"intel-undervolt"),(0,s.Uk)(" 也可直接进行功率墙限制。")]),(0,s.Wm)("p",null,[(0,s.Uk)("如看到 "),(0,s.Wm)("code",null,"package power limit is locked"),(0,s.Uk)("，则说明这台电脑不可更改功率墙。")])],-1),bn={render:function(l,n){const e=(0,s.up)("RouterLink"),a=(0,s.up)("OutboundLink"),t=(0,s.up)("CodeGroupItem"),m=(0,s.up)("CodeGroup");return(0,s.wg)(),(0,s.j4)(s.HY,null,[u,c,(0,s.Wm)("blockquote",null,[o,(0,s.Wm)("nav",W,[(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#⚡️-千山鸟飞绝-万径人踪灭"},{default:(0,s.w5)((()=>[p])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#🔖-这一节将会讨论"},{default:(0,s.w5)((()=>[d])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#使用-tlp-延长电池寿命及续航"},{default:(0,s.w5)((()=>[k])),_:1}),(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#安装与配置"},{default:(0,s.w5)((()=>[h])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#使用-tlp-显示相关系统信息"},{default:(0,s.w5)((()=>[b])),_:1})])])]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#电压下探"},{default:(0,s.w5)((()=>[g])),_:1})]),(0,s.Wm)("li",null,[(0,s.Wm)(e,{to:"#降低功率墙"},{default:(0,s.w5)((()=>[U])),_:1})])])])]),f,(0,s.Wm)("blockquote",null,[v,(0,s.Wm)("p",null,[w,(0,s.Wm)("a",_,[x,(0,s.Wm)(a)]),P,(0,s.Wm)("a",y,[T,(0,s.Wm)(a)]),L])]),C,S,E,(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[I,(0,s.Wm)("a",B,[A,(0,s.Wm)(a)]),D,q,(0,s.Wm)("a",O,[N,(0,s.Wm)(a)]),R,G,(0,s.Wm)("a",H,[M,(0,s.Wm)(a)]),j,z]),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(t,{title:"community"},{default:(0,s.w5)((()=>[K])),_:1}),(0,s.Wm)(t,{title:"aur（git）"},{default:(0,s.w5)((()=>[Y])),_:1})])),_:1}),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(t,{title:"aur"},{default:(0,s.w5)((()=>[F])),_:1}),(0,s.Wm)(t,{title:"aur（git）"},{default:(0,s.w5)((()=>[J])),_:1})])),_:1}),(0,s.Wm)("div",Q,[V,(0,s.Wm)("p",null,[X,(0,s.Wm)(e,{to:"/advanced/advanced/system-ctl.html#smartmontools"},{default:(0,s.w5)((()=>[Z])),_:1}),$,ll,nl])]),(0,s.Wm)("div",el,[sl,(0,s.Wm)("p",null,[al,(0,s.Wm)("a",tl,[ml,(0,s.Wm)(a)]),rl])])]),(0,s.Wm)("li",null,[il,ul,cl,ol,Wl,pl,(0,s.Wm)("blockquote",null,[dl,(0,s.Wm)("p",null,[kl,(0,s.Wm)("a",hl,[bl,(0,s.Wm)(a)]),gl])])]),Ul]),fl,vl,wl,_l,xl,Pl,(0,s.Wm)("blockquote",null,[yl,(0,s.Wm)("p",null,[Tl,(0,s.Wm)("a",Ll,[Cl,(0,s.Wm)(a)]),Sl])]),El,Il,(0,s.Wm)("div",Bl,[Al,(0,s.Wm)("p",null,[Dl,ql,Ol,(0,s.Wm)("a",Nl,[Rl,(0,s.Wm)(a)]),Gl])]),(0,s.Wm)("p",null,[Hl,(0,s.Wm)("a",Ml,[jl,(0,s.Wm)(a)]),zl,Kl]),Yl,(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[Fl,(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Wm)(t,{title:"community"},{default:(0,s.w5)((()=>[Jl])),_:1}),(0,s.Wm)(t,{title:"aur（git）"},{default:(0,s.w5)((()=>[Ql])),_:1})])),_:1}),Vl]),Xl,Zl,(0,s.Wm)("li",null,[(0,s.Wm)("p",null,[$l,(0,s.Wm)("a",ln,[nn,(0,s.Wm)(a)]),en])]),sn]),an,tn,mn,rn,un,cn,on,(0,s.Wm)("p",null,[Wn,(0,s.Wm)("a",pn,[dn,(0,s.Wm)(a)]),kn]),hn],64)}}}}]);
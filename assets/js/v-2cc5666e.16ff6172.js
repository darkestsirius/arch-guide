(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[917],{2566:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>l});const l={key:"v-2cc5666e",path:"/apps/android.html",title:"安卓刷机",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"🐲 沉舟侧畔千帆过，病树前头万木春",slug:"🐲-沉舟侧畔千帆过-病树前头万木春",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"1. 解锁 BootLoader",slug:"_1-解锁-bootloader",children:[]},{level:2,title:"2. 刷入 TWRP 并进行刷机",slug:"_2-刷入-twrp-并进行刷机",children:[]}],filePathRelative:"apps/android.md",git:{updatedTime:1625662413e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},4024:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>ie});var l=n(6252);const o=(0,l.Wm)("h1",{id:"安卓刷机",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#安卓刷机","aria-hidden":"true"},"#"),(0,l.Uk)(" 安卓刷机")],-1),r=(0,l.Wm)("blockquote",null,[(0,l.Wm)("h3",{id:"🐲-沉舟侧畔千帆过-病树前头万木春",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#🐲-沉舟侧畔千帆过-病树前头万木春","aria-hidden":"true"},"#"),(0,l.Uk)(" 🐲 沉舟侧畔千帆过，病树前头万木春")]),(0,l.Wm)("p",null,"本小节讨论如何通过 archlinux 给安卓手机刷机。")],-1),s=(0,l.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,l.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,l.Uk)(" 🔖 这一节将会讨论：")],-1),t={class:"custom-container details"},i=(0,l.Wm)("summary",null,"目录",-1),c={class:"table-of-contents"},d=(0,l.Uk)("# 🐲 沉舟侧畔千帆过，病树前头万木春"),p=(0,l.Uk)("# 🔖 这一节将会讨论："),m=(0,l.Uk)("# 1. 解锁 BootLoader"),u=(0,l.Uk)("# 2. 刷入 TWRP 并进行刷机"),h=(0,l.Wm)("div",{class:"custom-container tip"},[(0,l.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,l.Wm)("p",null,"以下内容未经验证，内容和原教程基本相同。")],-1),b=(0,l.Wm)("p",null,"🔗 相关链接：",-1),W={href:"https://wiki.archlinux.org/title/Android_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},k=(0,l.Uk)("archWiki 相关内容"),f=(0,l.Uk)("买可以刷机的手机最好买知名度大的品牌、有可能解锁 BootLoader 的手机以及较热门的机型，这样在刷机时可以方便的找到官方的 TWRP 和知名的 ROM 包（如 "),v={href:"https://download.mokeedev.com/",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("魔趣"),U=(0,l.Uk)("、"),x={href:"https://lineageos.org/",target:"_blank",rel:"noopener noreferrer"},R=(0,l.Uk)("LineageOS"),_=(0,l.Uk)("、"),w={href:"https://crdroid.net/",target:"_blank",rel:"noopener noreferrer"},L=(0,l.Uk)("crDroid"),P=(0,l.Uk)("、 "),T={href:"https://resurrectionremix.com/",target:"_blank",rel:"noopener noreferrer"},B=(0,l.Uk)("Resurrection Remix"),O=(0,l.Uk)(" 和 "),E={href:"https://download.pixelexperience.org/devices",target:"_blank",rel:"noopener noreferrer"},M=(0,l.Uk)("PixelExperience"),y=(0,l.Uk)("等）。"),A=(0,l.uE)('<p>如果是较冷门的品牌，官方可能没有提供 ROM，只能在网上自行寻找个人改造过的 TWRP 和上述 ROM 包的非官方（unofficial）ROM。这种个人改造版本的安全性比较难说，而且还可能有更多的 🐛 Bug。也有可能翻遍全网，也找不到冷门机型能用（指好用的、非硬件提供商的官方 ROM）的 TWRP 和 ROM。</p><p>硬件方面，一般推荐买高通骁龙的 CPU，不要买联发科的，因为更多 ROM 的版本都是适配高通硬件的。</p><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>若为华为设备，如果没有在 18 年华为关闭 BootLoader 解锁码申请前拿到解锁码，那刷机在现在将变得基本不可能，尤其是近一年左右的新设备（用鸿蒙了还刷个 🔨）。</p></div><p>首先需要安装 Linux 上的安卓工具包：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S android-tools\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_1-解锁-bootloader" tabindex="-1"><a class="header-anchor" href="#_1-解锁-bootloader" aria-hidden="true">#</a> 1. 解锁 BootLoader</h2><p>一般来说像小米这种品牌，官方会提供解锁 BootLoader 的途径和工具，但是这些工具基本只能在 Windows 下用。</p><p>除此之外，如果你能通过其它方法获取，或通过很硬核的方式拿到 BootLoader 的解锁码，那么也可以使用 Android 调试桥（adb）在 fastboot 模式下进行解锁。</p><ol><li><p>手机先通过数据线连接电脑，重启到 fastboot 模式：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adb <span class="token function">reboot</span> bootloader\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>注意要连到 USB 2.0 的接口，否则可能有兼容性问题。</p></div></li><li><p>解锁 BootLoader：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>fastboot oem unlock xxxxxxx <span class="token comment"># 使用 BootLoader 解锁码在 fastboot 模式下解锁</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>要使用正确的 BootLoader 解锁码才能解锁，否则会报错：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FAILED <span class="token punctuation">(</span>remote: <span class="token string">&#39;check password failed!&#39;</span><span class="token punctuation">)</span>\nfastboot: error: Command failed\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></li></ol><h2 id="_2-刷入-twrp-并进行刷机" tabindex="-1"><a class="header-anchor" href="#_2-刷入-twrp-并进行刷机" aria-hidden="true">#</a> 2. 刷入 TWRP 并进行刷机</h2>',10),D=(0,l.Uk)("在 "),C={href:"https://twrp.me/Devices/",target:"_blank",rel:"noopener noreferrer"},S=(0,l.Uk)("TWRP 官网"),q=(0,l.Uk)(" 搜索并下载机型对应的 TWRP"),F={class:"custom-container tip"},I=(0,l.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),N=(0,l.Uk)("没有官方 TWRP 的设备，可以在 "),H={href:"https://unofficialtwrp.com/devices/",target:"_blank",rel:"noopener noreferrer"},X=(0,l.Uk)("UNofficialtwrp"),j=(0,l.Uk)(" 查看下是否有。"),z=(0,l.Wm)("p",null,"如果没有相关信息有几个论坛和网站可以看看：",-1),Y={href:"https://forum.xda-developers.com/",target:"_blank",rel:"noopener noreferrer"},G=(0,l.Uk)("XDA Forums"),J={href:"https://www.cusrom.com/",target:"_blank",rel:"noopener noreferrer"},K=(0,l.Uk)("CusROM"),Q={href:"https://androidfilehost.com/",target:"_blank",rel:"noopener noreferrer"},V=(0,l.Uk)("ANDROID FILE HOST"),Z=(0,l.Uk)(" —— 搜索 "),$=(0,l.Wm)("code",null,"开发代号",-1),ee=(0,l.Uk)(" + "),ae=(0,l.Wm)("code",null,"你想要的系统名字",-1),ne=(0,l.Wm)("div",{class:"custom-container tip"},[(0,l.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,l.Wm)("p",null,[(0,l.Uk)("一般 TWRP 的版本和 ROM 包有对应关系，刷机前先确认你的两个版本是兼容的，否则刷机过程可能报奇怪的错误，如 "),(0,l.Wm)("code",null,"unable to mount /system"),(0,l.Uk)("。")])],-1),le=(0,l.Uk)("同上 "),oe=(0,l.Uk)("1. 解锁 BootLoader"),re=(0,l.Uk)("，通过数据线连接电脑，重启到 fastboot 模式"),se=(0,l.uE)('<li><p>执行以下命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>fastboot flash recovery /path/of/your_twrp.img\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>看到命令执行完毕的时候，就可以让手机重启了</p><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>执行 <code>fastboot reboot</code> 可以重启，但是许多设备会在首次启动时自动覆盖替换你刷入的自定义 recovery，如乐视的 Le 2（X620）。直接重启会报不是官方系统或类似错误。</p><p>为防止这种情况，在手机上通过硬件按键重启进入 recovery，TWRP 将给 ROM 打上 patch，以防止 ROM 替换 TWRP。</p></div></li><li><p>剩下的步骤就是普通的进入 TWRP &gt; 双清 &gt; 刷机即可</p><div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>有时双清或者进入 TWRP 可能看到报错。这时尝试使用高级清理，从 ext4 改一下格式，再改回 ext4 问题可能就解决了。</p></div></li>',3),te=(0,l.uE)('<div class="custom-container tip"><p class="custom-container-title">ℹ️ 提示</p><p>可能需要用到的更多命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adb shell <span class="token comment"># 打开 adb shell</span>\nadb root <span class="token comment"># 在手机已经 root 的情况下打开 root 权限的 adb shell</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>',1),ie={render:function(e,a){const n=(0,l.up)("RouterLink"),ie=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[o,r,(0,l.Wm)("blockquote",null,[s,(0,l.Wm)("details",t,[i,(0,l.Wm)("nav",c,[(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)(n,{to:"#🐲-沉舟侧畔千帆过-病树前头万木春"},{default:(0,l.w5)((()=>[d])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(n,{to:"#🔖-这一节将会讨论"},{default:(0,l.w5)((()=>[p])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(n,{to:"#_1-解锁-bootloader"},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l.Wm)("li",null,[(0,l.Wm)(n,{to:"#_2-刷入-twrp-并进行刷机"},{default:(0,l.w5)((()=>[u])),_:1})])])])])]),h,(0,l.Wm)("blockquote",null,[b,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",W,[k,(0,l.Wm)(ie)])])])]),(0,l.Wm)("p",null,[f,(0,l.Wm)("a",v,[g,(0,l.Wm)(ie)]),U,(0,l.Wm)("a",x,[R,(0,l.Wm)(ie)]),_,(0,l.Wm)("a",w,[L,(0,l.Wm)(ie)]),P,(0,l.Wm)("a",T,[B,(0,l.Wm)(ie)]),O,(0,l.Wm)("a",E,[M,(0,l.Wm)(ie)]),y]),A,(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[D,(0,l.Wm)("a",C,[S,(0,l.Wm)(ie)]),q]),(0,l.Wm)("div",F,[I,(0,l.Wm)("p",null,[N,(0,l.Wm)("a",H,[X,(0,l.Wm)(ie)]),j]),z,(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,[(0,l.Wm)("a",Y,[G,(0,l.Wm)(ie)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",J,[K,(0,l.Wm)(ie)])]),(0,l.Wm)("li",null,[(0,l.Wm)("a",Q,[V,(0,l.Wm)(ie)]),Z,$,ee,ae])])]),ne]),(0,l.Wm)("li",null,[(0,l.Wm)("p",null,[le,(0,l.Wm)(n,{to:"/apps/android.html#_1-%E8%A7%A3%E9%94%81-bootloader"},{default:(0,l.w5)((()=>[oe])),_:1}),re])]),se]),te],64)}}}}]);
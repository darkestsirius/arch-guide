---
title: 常见问题
---

# 常见问题排除与解决

> ### 🏔️ 山重水复疑无路，柳暗花明又一村
>
> 本节介绍日常使用 archlinux 时可能会遇到的问题以及解决方法

> ### 🔖 这一节将会讨论：
>
> ::: details 目录
>
> [[toc]]
>
> :::

## 硬件相关

### 系统没有声音

### 键盘没有反应

若为联想小新 Pro14 / YOGA 14s 2021 或相似机型，可能发现笔记本内建键盘没有反应。

请参阅 [🥙 杂七杂八](../rookie/basic-install-detail.md#🥙-杂七杂八) 解决。

## 服务相关

### 关闭出错服务（错误启动项）

### 关机时卡住很久才能关机

一般屏幕会出现形如 `A stop job is running for...(1m30s)` 的信息，这是经常会遇到的关机卡住 1 分 30 秒的问题，一般来说这种情况是出现了某个进程在关机时不愿停止，需要等到超时时间到达强行停止。

通用的解决办法是调整缩短这个等待时间，建议从 1 分 30 秒调整至 30 秒，30 秒已经足够几乎所有进程正常结束。

1. 编辑 `/etc/systemd/system.conf`：

   ```bash
   sudo vim /etc/systemd/system.conf
   ```

   找到其中 `DefaultTimeoutStopSec` 一项，将其前方的井号去掉，并赋值为 30s 即可

2. 最后执行 daemon-reload 使其生效。

```bash
sudo systemctl daemon-reload
```

上述解决方案其实只是将这个等待时间缩小了，并没有解决实际问题。如果你想排查问题真正的原因所在，耐心等待其结束关机，然后重新启动电脑，执行以下命令：

```bash
journalctl -p5
```

按/(斜杠键)搜索`Killing`关键字，找到你关机的时间附近所在的匹配行，你可以在附近看到到底是哪一个进程导致了 timeout,然后再去排查这个进程有什么问题即可。

## 软件包相关

### 软件包降级

在 archlinux 上偶尔会出现某一个包的最新版本有各种问题的情况，此时需要降级该包以正常使用，包可以是普通软件，也可以是内核。

```bash
yay -S downgrade
```

安装此包即可，使用方法也很简单，downgrade 后加上需要降级的包名即可，随后会提示你选择需要降级到的版本，点选即可。

### 升级系统时

可能存在升级系统时异常关机或程序异常退出的情况，移除 pacman 的 db 锁即可

```bash
sudo rm /var/lib/pacman/db.lck
```

## KDE 桌面环境相关

### 手动开关显示特效混合器（混成器）

有时显示特效混合器会因为某些原因需要手动开启或关闭，但是目前在 KDE 下显示特效混合器在设置里无法在不关机的情况下直接关闭，下面命令提供手动开关混成器的效果：

```bash
qdbus org.kde.KWin /Compositor suspend # 禁用
qdbus org.kde.KWin /Compositor resume # 开启
```

## deepin-wine5 相关

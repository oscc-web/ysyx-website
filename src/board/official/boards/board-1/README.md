---
title: "wiki"
copyright: false
breadcrumb: false
pageInfo: false
toc: false
---
## 开发入门
### 开箱检查
同学们收到板卡后，请先按照下面的列表检查板卡和配件是否齐全：
- 板卡包装盒 x1
- 开发板+FPGA核心板 **(使用网格防静电袋包装)**
- 耗材 **(使用硬质防静电袋包装)**
  - 正方形晶振 x2
  - W25Q128JVSIQ x2
- Type-C USB线缆 x1
- FPGA JTAG烧写器和线缆 x1

包装所有内容可以见下图：

### 板卡介绍

主要介绍，先放一张图，然后依照图序分别展开介绍每个功能外设。

板卡正面.png

板卡反面.png



### 上电测试
板卡在发放前已经提前烧录好了测试程序，可以用来检测硬件是否能够正常工作，以下wiki均采用 **Win11专业版** 作为测试平台，Win10 和 Win11 均可以。

* 安装串口驱动

我们三期板卡上用的串口芯片是CP2102，所以需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出CP2102的串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。具体检查方法如下：

同学们先将配件中的 Type-C USB 线缆的一头插入到三期PCB板卡的 USB 口中，另一头插入到电脑的 USB 口中，然后按下 ***WIN+X*** 组合键，在弹出的选项中点击 ***设备管理器*** 选项，如果 ***设备管理器--->端口(COM和LPT)*** 中显示类似下图中带有 `CP210x` 字样的端口图标，则说明串口驱动已经安装成功，不需要再安装 CP2102 驱动：

![设备管理器显示CP2102端口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-1.png)

::: tip
上图端口图标后圆括号中的 **`COMx`** 后接着的数字不一定是图中的 **`15`**，这个是电脑自动分配的，对测试没有影响。
:::

如果在 ***其他设备*** 选项中出现类似下图中的黄色叹号图标，则说明电脑没有安装过CP2102的驱动，需要使用我们提供的软件包安装相应的CP2102驱动：

![在其他设备中出现黄色叹号](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-2.png)

CP2102驱动的具体安装方法如下：同学们需要先进入 `ysyx3_pcb_software/cp2102 driver` 目录中，然后双击 `CP2102xVCPInstaller_x64.exe` 来安装64位驱动。同学们的电脑如果只支持32位的话，则双击 `CP2102xVCPInstaller_x86.exe` 来安装32位驱动：

![安装CP2102驱动程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-3.png)

之后按照安装程序引导界面来安装驱动。当驱动安装完成后，再次使用前面介绍的方法打开设备管理器，如果在 ***端口(COM和LPT)*** 中显示出CP2102的端口号，则说明驱动安装成功。

::: details CP2102 设备识别问题
如果在 ***其他设备*** 选项中显示 **Verifone USB to Printer** 或者 **Verifone USB to Modem** ，则说明电脑已经安装过CP2102的驱动，但是没有被成功识别出来：

![CP2102设备识别问题](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-1.png)

此时需要更新下驱动，具体方法如下：

- 右键 **Verifone USB to Printer** 或者 **Verifone USB to Modem** 并点击更新驱动选项：

![右键点击更新驱动](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-2.png)

- 然后在弹出的窗口中点击 ***让我从计算机上的可用驱动程序程序列表中选取*** ：

![从电脑上选取驱动程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-3.png)

- 在弹出的窗口中，选择显示 ***所有设备*** ，并点击 ***下一页*** ：

![选择设备类型](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-4.png)


- 在弹出的窗口的左边设备列表中选择 ***Silicon Labs*** ，然后在右边详细列表中选择第一个，然后点击 ***下一页*** ：

![选择驱动程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-5.png)

- 在弹出的警告框中，点击 ***是*** ：

![更新驱动](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-prb-6.png)

这样重新插入 USB 线缆后，就可以在设备管理器中显示出端口号了。

:::

- 安装串口调试软件

当电脑能够成功识别出 CP2102 端口号后，需要使用串口调试软件来和板卡进行通信。目前市场上常用的串口调试软件有很多，比如Minicom、MobaXterm、Xshell、SecureCRT、Cutecom和WindTerm 等等，**本wiki选择的串口调试软件是MobaXterm**。

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-1.png)

MobaXterm是一款面向Window平台的，支持 SSH、X11、VNC、FTP和SERIAL等多种协议的强大终端工具。可以访问 [MobaXterm的官网](https://mobaxterm.mobatek.net/) 获得更加详细的信息。同学们需要从官网上下载。


::: tip Implicit CR in every LF 选项含义
由于我们板卡上的测试程序是使用 **`"\n"(LF)`** 进行换行的，但是Win下换行格式是 **`"\r\n"(CR LF)`** ，所以需要设置PuTTY在每次接收到 **`"\n"(LF)`** 时在其前面隐式添加 **`"\r"(CR)`** ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。
:::


至此，板卡的硬件测试完成，下面将更加详细地介绍板卡。

::: info 板卡或者耗材损坏/缺失/丢失怎么办？
* 每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。
* 项目组会在板卡中额外提供若干耗材 (晶振和Flash)，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买。
:::

### 硬件设计
::: info 设计
:::

::: info 设计插曲

:::

::: tip
板卡上的机械开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用带尖头的拨动。
:::

::: danger 调试注意事项
请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经历的同学，请务必遵守下面的各注意事项：
:::

::: danger 机械开关切换
简单说的话，就是上电后，除了三期SoC板卡和黑金FPGA核心板上的复位按钮可以按动之外，板卡的机械开关和接插件都不要带电按动和插接。带电操作可能会导致板卡的电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡，而非正确的热插拔操作可能会使得芯片出现闩锁效应，可能会损坏芯片。
:::


::: warning 复位功能注意事项
- 由于测试板卡上没有**上电自动复位电路**，所以需要同学们在板卡上电后按动复位开关执行**一次手动复位**。
- 由于复位开关是机械开关，且板卡**没有设计去抖电路**，另外FPGA板卡侧复位和SoC测试板卡侧复位是**异步的**，如果三期SoC板卡的复位在FPGA板卡复位之前完成，则会由于发送的访存请求得不到响应而卡死，进而导致串口只输出 `Loading program size ...` 。此时只需再次按动三期SoC板卡上的复位开关即可。但是强烈建议每次执行程序前先按一下FPGA核心板上的复位按钮，然后再按一下三期板卡上的复位开关，这样能够尽可能确保复位的正确性。另外复位开关的按动时间需要长一些。

:::

::: danger Custom Title

A custom danger container with `code`, [link](#demo).

```js
const a = 1;
```

:::


## 其他资源
## 常见问题
## 硅后测试
## 致谢
- 感谢粟金伦同学在测试板卡时发现的板卡插接深度不够可能导致板卡信号断路问题，现在已经补充到相关注意事项中。
- 感谢粟金伦同学建议使用 PuTTY/MobaXterm 软件来做板卡测试流程演示用的串口上位机软件，本文档已经使用 MobaXterm 重写了有关章节。

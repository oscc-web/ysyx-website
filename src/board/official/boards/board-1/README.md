---
title: "文档"
copyright: false
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

::: info
包装中配发的Type-C USB线缆可能对于某些同学来说不够长，可以选用更长线材长度的Type-C线，但是需要自行确认Type-C线材的质量符合板卡的通信和供电能力。
:::
### 板卡介绍

主要介绍，先放一张图，然后依照图序分别展开介绍每个功能外设。可以参考正点原子的文档。

- 尺寸

板卡正面.png

板卡反面.png



### 上电测试

::: warning 调试注意事项
请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经历的同学，请务必遵守下面的各注意事项：
- 接触板卡和其他物料前请确认双手已经保持干燥。
- 接触板卡之前，先找一个金属物体摸一下，以释放人体上可能带有的静电。
- 拿取板卡时，请拿电路板的板边，而不要捏着芯片，以防止人体多余的静电传导到芯片上。
- 使用Type-C线缆供电时，请优先使用PC的USB3.0接口，以尽可能保证供电稳定。
- 板卡上有电源选择开关和滑动开关，上电前请确认它们都被正确拨动到某一侧，而非中间位置。
- SoC板卡和FPGA核心板不要在带电情况下插接，以防止这种非正确的热插拔操作导致的栓锁效应，损坏芯片。
- 微动拨码开关不要在带电情况下拨动。
- 电源一经接通，若观察到有如冒烟、异常气味、放电的声光、元器件发烫等异常现象时，尤其当听到“滋滋滋”的**噪声啸叫**时，请立即**切断电源**。
:::

::: info 噪声啸叫
噪声啸叫英文为Acoustic Noise，常分为电感啸叫和电容啸叫。其中电感啸叫最常见，电感啸叫多是由于未正确选择器件参数，负载不稳定或轻载过载等导致的，而**负载不稳定**往往是主因，这意味着板卡上某个地方可能存在短路。
:::

- 硬件操作

首先，同学们需要从**网格防静电袋**中拿出板卡，并从**硬质防静电袋**中取出一个25MHz的晶振，然后将晶振按照正确方向插入到三期板卡的晶振插座中。晶振管脚要比插座的插槽深度要长一些，当发现用手插入晶振时稍用力已无法再进一步插入后即可，插入的方向见下图：

晶振正确插入时方向.png

晶振正确插入时深度.png

::: warning
- 不要将晶振的方向插反了，**这个上电前同学们需要再确认下**。
- 可以用手直接取出和插拔晶振，但是要注意手尽量不要触碰到晶振的管脚。
- 推荐通过抓住晶振的金属外壳来取出和插拔晶振。
:::

晶振正确插入后，硬件上还需要使用微动拨码开关正确设置SoC芯片的工作状态，具体来说需要两步：
- 使能PLL输出，选择PLL输出核时钟的频率。
- 选通特定学号的处理器核。

在做三期SoC的后端集成时，我们给每个同学的核都分配了一个序号，可以通过这个序号选通到同学们自己的核。首选请同学们先打开 [三期处理器核序号和学号对应表](https://oscc-ysyx-web-project.github.io/ysyx-website/board/official/)，然后按照自己的学号来查找核序号是多少，比如学号为`ysyx_210000`的核序号为`1`。

现在解释下拨码开关的每个位的定义和功能，板卡上共有两个拨码开关，左边的拨码开关有4位拨码，是用来**设置时钟输出状态的**。右边的拨码开关有6位拨码，是用来**设置核选通状态的**。

![拨码开关位功能定义](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-1.png)

4位拨码开关功能定义(从左到右)：
- PLL时钟使能位(1位)
- PLL输出时钟频率选择位(3位)

6位拨码开关功能定义(从左到右)：
- 未定义(1位)
- 处理器核选择位(5位)

::: warning
6位拨码开关的最高位 **(左边数第一个)** 没有定义功能。
:::

拨码开关设置分成两部分，第一部分是设置PLL时钟使能位和PLL输出核的时钟频率，我们建议**先将PLL输出核时钟频率设置成25MHz，并先从低频率开始测试**。当同学们的核能够在25MHz核时钟下跑通我们提供的所有测试程序后，可以再去尝试逐步提高处理器核时钟频率。现在介绍下拨码开关位和SoC上信号的对应关系，其中三期SoC的RCG(全局时钟复位模块)如下图所示：

![三期SoC的RCG模块](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/rcg-intro.png)

其中拨码开关的PLL时钟使能位对应于上图左上角红框中的`clk_sel`，当使能该位后，处理器核时钟`clk_core`使用PLL的输出时钟，此时需要将拨码开关上的PLL时钟使能位设置为`ON`。失能该位时，`clk_core`直接使用外部晶振时钟，此时需要将拨码开关上的PLL时钟使能位设置为`OFF`。PLL输出时钟频率选择位对应于上图左上角红框中的`pll_cfg[2:0]`，用于设置PLL输出时钟的频率，也就是处理器核时钟频率。**拨码开关位和PLL输出核时钟频率对应**关系如下表格所示：

<style>
.freq_table_center
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="freq_table_center">

| PLL输出时钟频率选择位(0表示OFF档位, 1表示ON档位) | 处理器核时钟频率 |
| :-: | :-: |
| 3'b000 | 25MHz  |
| 3'b001 | 50MHz  |
| 3'b010 | 100MHz |
| 3'b011 | 150MHz |
| 3'b100 | 200MHz |
| 3'b101 | 250MHz |
| 3'b110 | 300MHz |
| 3'b111 | 350MHz |

</div>

比如当PLL输出位拨码调整到`OFF-OFF-OFF`时，表示此时PLL输出核时钟频率为25MHz，事实上 ***拨码开关位功能定义*** 一图中的时钟设置就恰好是25MHz。

::: tip
上面 ***拨码开关位和核时钟频率对应表*** 中拨PLL输出时钟频率选择位**设置的最低位对应于板子上拨码开关的4号位**。所以如果要将PLL输出时钟频率倍频到200MHz，则需要将PLL输出时钟选择位拨码调整到ON-OFF-OFF(对应拨码开关的2位-3位-4位)，如下图所示：

![使能PLL并将PLL倍频到200MHz的拨码开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-2.png)
:::

::: tip
- 拨码开关上面**如果**带有**黄色防尘薄膜**，需要先撕下来。
- 板卡上的机械开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用镊子，曲别针等带尖头的物品拨动，**当使用尖头物品请注意使用安全**。
:::

拨码开关设置的第二部分是选通自己的处理器核，一生一芯三期将多个同学们的核集成到一个SoC中，并使用外部信号线的高低电平来选通不同的核，该外部信号线由拨码开关上的**处理器核选择位**实现，**处理器核选择位**对应于下面三期SoC架构图中左边红框中的`core_dip[4:0]`：

![三期SoC架构图](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/soc-intro.png)

处理器核选择位的拨码仍然采用的是**正逻辑**。结合下图例子更方便理解，比如同学们要选择序号为3的核，此时拨码开关应该设置成下图中的样子：

![拨码开关与序号对应关系](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-3.png)

选通核的五位拨码开关从左到右**位权**依次为`16, 8, 4, 2, 1`。这样选择序号为`1`的核，则其对应的编码为`5'b00001`。由于是**正逻辑**，所以对应拨码位设置从左到右依次为`OFF-OFF-OFF-OFF-ON`。如果要选择序号为`6`的核，则其对应的编码为`5'b00110`，对应拨码位设置从左到右依次为`OFF-OFF-ON-ON-OFF`。

再举个完整拨码开关设置的例子，比如要选择核序号为`7`的核进行测试，并希望处理器核时钟工作在25MHz，则拨码开关的设置应如下图所示：

![使能PLL，PLL输出核时钟为25MHz，选择核序号为7的拨码开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-4.png)

::: danger 拨码开关切换
- 拨码开关也需要和滑动开关一样上电前被正确拨动到某一侧，而非中间位置（机械死区），以防止拨码状态电平的不稳定。
- 不要带电拨动拨码开关，带电操作可能会导致板卡电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡。
:::

至此已经介绍完所有的硬件操作内容，下面蒋介绍软件工具的使用。板卡在发放给同学们前已经提前烧录好了测试程序，可以用来检测板卡和SoC芯片是否能够正常工作，文档以下均采用 **Win11专业版** 作为软件测试平台。

- 安装串口驱动

我们三期板卡上用的串口芯片是CP2102，所以需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出CP2102的串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。具体检查方法如下：

同学们先将配件中的 Type-C USB 线缆的一头插入到SoC板卡的 **`VBUS1`** 口中，另一头插入到电脑的 USB 口中，确认滑动开关 **`SW1`** 和 **`SW2`** 拨动到了上侧，而 **`HFP-MODE`** 拨动到了右侧：

![滑动开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-1.png)

然后按下 **`PWR`** 自锁开关给板卡供电，当正确供电时，板卡上 **`SW2`** 上侧的红色 **`LED`**  会被点亮：

![给板卡供电](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-2.png)

接着 ***WIN+X*** 组合键，在弹出的选项中点击 ***设备管理器*** 选项，如果 ***设备管理器--->端口(COM和LPT)*** 中显示类似下图中带有 `CP210x` 字样的端口图标，则说明串口驱动已经安装成功，不需要再安装 CP2102 驱动：

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

当电脑能够成功识别出 CP2102 端口号后，需要使用串口调试软件来和板卡进行通信。目前市场上常用的串口调试软件有很多，比如Minicom、MobaXterm、Xshell、SecureCRT、Cutecom和WindTerm 等等，**本文档选择的串口调试软件是MobaXterm**。

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-1.png)

MobaXterm是一款面向Window平台的，支持 SSH、X11、VNC、FTP和SERIAL等多种协议的强大终端工具。可以访问 [MobaXterm的官网](https://mobaxterm.mobatek.net/) 获得更加详细的信息。

::: info 串口调试软件选择
推荐同学们使用MobaXterm软件，但是同学们也可以自行选择其他串口调试软件使用。
:::

首先，同学们需要访问MobaXterm的[官网](https://putty.org/) 并下载符合自己电脑版本的安装包，并按照指引成功安装完MobaXterm。当安装完MobaXterm后，打开该软件，会显示类似下图的界面：

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-2.png)

然后需要按照下图创建一个串口会话(Serial Session)，具体步骤如下：

![新建串口会话](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-3.png)

1. 点击MobaXterm工具栏第一个的 ***Session***。
2. 然后在弹出的窗口中选择 ***Serial***。
3. 在 ***Basic Serial settings*** 中的 ***Serial port*** 下拉框中选择前面识别出的带有 ***Silicon Labs CP210x USB to UART xxx*** 字样的串口。
4. 在 ***Speed(bps)*** 下拉框中设置波特率为 ***115200***。
5. 在下面 ***Advanced Serial settings*** 的确认参数为：
    1. ***Data bits:*** 8
    2. ***Stop bits:*** 1
    3. ***Parity:*** None
    4. ***Flow control:*** None

将板卡用Type-C线缆和电脑相连，然后使用上面介绍的方法打开已经配置过的串口Session，如果没问题，则会打开黑色背景的窗口：

![正确打开串口Session](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-3-1.png)

至此串口Session配置完成，但为了能够**在窗口中正确地显示换行**，还需要对会话进行设置，具体步骤如下图所示：

![修改串口换行显示1](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-4.png)

![修改串口换行显示2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-5.png)

1. 在打开的窗口中任意地方鼠标右击，在弹出的选项中点击 ***Change terminal settings...*** 。
2. 然后在弹出的窗口中勾选 ***Implicit CR in every LF*** 复选框。

::: tip Implicit CR in every LF 选项含义
由于我们板卡上的测试程序是使用 **`"\n"(LF)`** 进行换行的，但是Win下换行格式是 **`"\r\n"(CR LF)`** ，所以需要设置PuTTY在每次接收到 **`"\n"(LF)`** 时在其前面隐式添加 **`"\r"(CR)`** ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。
:::

当能够正确使用MobaXterm打开串口Session后，请先按动电源开关 **`PWR`** 以关闭电源，然后确认FPGA核心板的启动模式选择拨码开关 **`FPGA-BOOT`** 拨到了 **`FLASH`** 档位，表示此时FPGA核心板从自己板载的Flash中加载硬件系统，因为FPGA板卡在发给同学们之前已经将访存必须的FPGA侧的硬件系统固化在了核心板板载的Flash上，所以需要将档位设置到 **`FLASH`**。具体档位含义在拨码开关右侧的白色丝印上：

![FPGA核心板启动模式设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-3.png)

- 板卡复位
确认完FPGA启动模式后，按照上面介绍的步骤启动板卡电源，并正确打开串口Session窗口。然后按动开关 **`CORE-RESET`** 对SoC板卡执行一次复位：

![按动复位开关执行SoC复位](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-4.png)

::: warning 复位功能注意事项
- 由于SoC板卡上没有**上电自动复位电路**，所以需要同学们在板卡上电后按动复位开关执行**一次手动复位**。
- 复位信号是通过机械开关产生的，**没有设计去抖电路**，而且FPGA核心板侧复位**异步于**SoC板卡侧复位，如果SoC板卡的复位在FPGA核心板复位之前完成，则会由于访存请求得不到响应而卡死，现象是串口只输出 `Loading program size ...` 。**此时只需再次按动板卡上的复位开关即可**。
- 复位开关的按动时间可以长一些，以产生稳定的低电平复位信号。
:::

当复位开关被按下后，如果一切设置都正确，串口会打印出Rt-Thread测试程序的加载和执行过程。串口打印出 **`msh />`** 之后会停止，并开始接受用户的输入。同学们可以直接使用键盘在窗口中键入命令。比如输入 **`help`** 会打印Rt-Thread支持的命令，输入 **`list_timer`** 则会打印Rt-Thread正在运行中的所有定时器。和其他shell一样，**`msh`** 在键入命令时也是支持 **`tab`** 补全的：

![运行RT-Thread测试程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/rtthread.png)

至此，板卡的硬件测试完成，下面将更加详细地介绍板卡。

::: info 板卡或者耗材损坏/缺失/丢失怎么办？
* 每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。
* 项目组会在板卡中额外提供若干耗材 (晶振和Flash)，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买。
:::

::: info 安装/拆卸FPGA核心板
本SoC配套的FPGA核心板是一种 [SoM(System on Module)](https://en.wikipedia.org/wiki/System_on_module)，采用的是SODIMM 204P接口(DDR3兼容标准接口)。这种接口常用于笔记本电脑内存模组，默认FPGA核心板已经插入到插槽中，一般不需要拆卸，如果确有需要，需要同学们自己操作，具体方法如下：

![安装FPGA核心板](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sodimm-1.png)

安装FPGA核心板时把FPGA核心板以30度倾角插入到插槽中，**并确保所有金手指插入的深度都一致**，然后两手同时抓住两边往下按，直到两边被压到插槽的**固定簧片**之下，听到“卡塔”一声就可以了。拆卸核心板过程则相反，轻轻向两侧拨动固定簧片，FPGA核心板会自动弹起，然后向外取出即可。
:::

::: danger Custom Title

A custom danger container with `code`, [link](#demo).

```js
const a = 1;
```

:::

### 硬件设计
::: info 设计约束
:::

::: info 设计插曲

:::


### 程序烧写和测试
### FPGA板卡外设

## 其他资源
对接PPT内容，你可以从这里获得。

### 硅后测试
## 文档勘误与致谢
项目组鼓励和欢迎同学们对本文档提出宝贵的意见和反馈，目前项目组使用 [Github issue](https://github.com/oscc-ysyx-web-project/ysyx-website/issues) 来追踪这些反馈，本文档致力于遵守开源软件开发中公认的最佳实践，所以当你觉得有提出的必要时，请大胆地发起issue吧！:smile:

### 致谢列表
- 感谢粟金伦同学在测试板卡时发现的板卡插接深度不够可能导致板卡信号断路问题，现在已经补充到相关注意事项中。
- 感谢粟金伦同学建议使用 PuTTY/MobaXterm 软件来做板卡测试流程演示用的串口上位机软件，本文档已经使用 MobaXterm 重写了有关章节。

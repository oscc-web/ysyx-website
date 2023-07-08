---
title: "文档"
copyright: false
breadcrumb: false
pageInfo: false
toc: false
# headerDepth: 3
---
## 开发入门
### 开箱检查

同学们收到板卡后，请先按照下面的列表检查板卡和配件**是否齐全并且无破损情况**：
- 板卡包装盒 x1
- 开发板+FPGA核心板 **(使用网格防静电袋包装)**
- 耗材 **(使用硬质防静电袋包装)**
  - 正方形晶振 x2
  - W25Q128JVSIQ x2
- Type-C USB线缆 x1
- FPGA JTAG烧写器和线缆 x1

包装所有内容可以见下图：

![包装和配件内容](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/package-cont.png)

::: info 板卡或者耗材损坏/缺失/丢失怎么办？
* 每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。
* 项目组会在板卡中额外提供若干耗材 **(晶振和Flash)**，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买 **(额外的耗材一般用不完，而且另行采购的成本很低，大概在十几块这样)**。
:::

星空系列板卡配套的软硬件资源**均开源**在Github上，可以在下面介绍的两个repo中找到星空系列板卡所有版本的资料。同学们可以提前下载下来，方便后面使用，其中：
- [StarrySky](https://github.com/maksyuki/StarrySky)：星空系列开发板所有的**硬件资源**，包括原理图，PCB设计，制造文件等。
- [StarrySky-res](https://github.com/maksyuki/StarrySky-res)：星空系列开发板所有的**软件资源**，包括必须的串口驱动，测试程序，FPGA外设硬件工程等。

::: info 资料更新
目前上面介绍的板卡软硬件资料仍在持续更新中，推荐使用`git`管理仓库并使用`git pull`来获取最新的内容。
:::

::: info Type-C线缆长度
包装中配发的Type-C USB线缆可能对于某些同学使用来说不太够长，同学们可以自行选用更长的Type-C数据线，但是需要自行确认Type-C线材的质量符合板卡的数据和供电能力 **(市面上售卖的Type-C线一般都没问题)**。
:::
### 板卡介绍

星空开发板采用的是SoC底板+FPGA核心板的设计，FPGA核心板采用的是ZYNQ7010芯片，其中SoC底板板载资源如下图所示：

![SoC底板板载资源](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/board-func-color.png)

从上图可以看到，SoC部分的外设和接口基本上都分布在板卡的中下侧 **(紫色)**，而FPGA部分的PL和PS外设则主要分布在板子的上侧和两边 **(绿色和蓝色)**。外设和接口的详细介绍如下表所示：
- SoC
  - 1个有源晶振插座
  - 1个SPI模式的TF卡插座
  - 1个板载烧写器(HFPLink)
  - 1个Flash插座，内置NOR Flash芯片，SoC复位后会从该Flash芯片中取指
  - 1个UART接口，使用CP2102芯片
  - 1个外置5V直流电源接口，使用Type-C接口
  - 2个电源模式切换开关
  - 1个自锁式电源开关
  - 2个拨码开关，用于设置PLL时钟输出和核选通
- 系统
  - 1个红色电源指示LED
  - 1个PS功能复位按键，1个PS调试复位按键
  - 1个FPGA启动模式切换开关
  - 1个FPGA JTAG调试接口
  - 1个FPGA外设功能切换开关
- PS侧外设
  - 1个UART接口，使用CP2102芯片
  - 1个SDIO接口，SD能启动PetaLinux，eMMC可以固化程序
  - 1个SDIO WiFi，使用AP6212模组，支持独立电源开关控制
  - 1个CAN接口，CAN使用TJA1050芯片
  - 1个USB Host，使用USB3320C芯片
  - 1个6位的PMOD扩展口
  - 2个用户自定义按键
  - 2个用户自定义蓝色LED
  - 4个WS2812C LED炫彩灯珠
- PL侧外设
  - 1个VGA接口，使用电阻网络实现DAC
  - 1个PS/2接口，用于连接PS/2兼容键盘
  - 1个RTC时钟，使用PCF8563芯片
  - 1个EEPROM，使用AT24C64芯片
  - 1个SPI Flash，使用W25Q128JVSIQ芯片
  - 1个I2S接口，使用WM8960芯片，支持音频输入/输出，支持使用MIC录音
  - 1个用户自定义按键
  - 1个用户自定义蓝色LED
  - 1个通用IO，常用于输出时钟调频使用
  - 4个WS2812C LED炫彩灯珠
- 1个外设功能切换开关
- 1个SO-DIMM 204P接口，用于连接ZYNQ7010/7020 FPGA核心板

SoC底板搭配使用的FPGA核心板如下图所示：

![FPGA核心板正面](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/som-black-1.png)

![FPGA核心板背面](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/som-black-2.png)

FPGA核心板板载资源如下所示：
- 主芯片：XC7Z010CLG400
- DDR3：MT41K128M16JT-125*2片 **(512MB)**
- eMMC：KLM8G1GETF-B041 **(8GB)**
- Flash：W25Q128JVSQ **(16MB)**

星空开发板设计上的主要特点如下：
- 星空开发板的外形尺寸为**110X84mm**，面积约为标准信用卡大小的**2倍**。
- 重新设计了电源网络，将供电能力从1.2A电流提高到2A，支持外置5V**电源适配器**供电，支持多路电源管理。
- FPGA采用SO-DIMM 204P接口的核心板设计，硬件规格为：**XC7Z010-1CLG400C+512MB DDR3+8GB eMMC**。
- 板载NOR Flash烧写器 **(HFPLink)**，实现了拖拽式烧录功能，烧写器支持固件升级 **(USB接口)**。
- 使用多路**模拟开关**实现FPGA侧PL端口**IO的复用**，以挂载尽可能多的外设，并引出了FPGA核心板上所有的IO。
- 设计上将处理器核切换和频率选择开关分开，并使用**正选通逻辑**，方便拨码。
- 充分考虑几何约束关系，按键开关选择低压力克数器件 **(160gf)**，提升硬件操作体验。
- **板卡上为拨码开关和重要接口都设置有丝印和标注**，方便同学们使用。

星空V1.2开发板的硬件资源框图如下所示：

![硬件资源](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/board-res.png)

FPGA核心板的PS侧的BANK有BANK502，BANK500，BNAK501，其中BANK502电平标准为1.5V，用于连接两片DDR3颗粒，BANK500电平标准为3.3V，用于连接符合3.3V电气标准的外设，比如UART，LED和按键等。而BANK501电平标准为1.8V，用于连接符合1.8V电气标准的外设，比如USB HOST，I2S等。

::: danger 供电负载和通路说明
- 目前星空开发板正常运行程序的电流负载约为**400~450mA**，使用笔记本或台式机的标准USB口取电基本都能满足供电要求，**不需要额外供电通路支持**。当然为了满足某些特定的需求，星空开发板也支持使用Type-C接口的外置5V/2A电源适配器供电，但是项目组在配件中并没有提供该适配器，需要同学们自行准备。
- 一般电源适配器是直接和市电相连的，供电电压和电流都比较高，存在一定危险性，**如果同学们确实需要使用电源适配器，请选取符合安全标准的适配器并注意用电安全**。
:::

### 上电测试
同学们手上拿到的板卡上的Flash插座中**已经内置了一个NOR Flash芯片**，项目组已经提前在该内置的Flash芯片中烧录好了RT-Thread程序，而且板卡在发给同学之前对SoC上所有的核都跑过了RT-Thread测试。同学们只需要按照下面介绍的内容一步一步操作板卡就可以运行RT-Thread，其中主要分为**硬件操作**和**软件设置**两部分，具体步骤如图所示：

![上电测试步骤](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/test-flow.png)

其中黄色框步骤为纯硬件操作部分，而蓝色框内步骤涉及有软件操作部分。

::: warning 调试注意事项
请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经验的同学，请务必遵守下面的各注意事项：
- 接触板卡和其他物料前请确认双手已经保持干燥。
- 接触板卡之前，先找一个金属物体摸一下，以释放人体上可能带有的静电。
- 拿取板卡时，请使用抓取电路板板边这种方式，以尽可能确保不用手接触芯片，以防止人体多余的静电传导到芯片引脚上。
- 使用Type-C线缆供电时，请优先使用PC的USB3.0接口，以尽可能保证供电稳定。
- 板卡上有电源选择开关和滑动开关，上电前请确认它们都被正确拨动到某一侧，而非中间位置 **(死区)**。
- SoC板卡和FPGA核心板不要在带电情况下插接，以防止这种非正确的热插拔操作导致的栓锁效应，损坏芯片。
- 微动拨码开关尽量不要在带电情况下拨动。
- 电源一经接通，若观察到有如冒烟、异常气味、放电的声光、元器件发烫等异常现象时，尤其当听到“滋滋滋”的**噪声啸叫**时，请立即**切断电源**。
:::

::: info 噪声啸叫
噪声啸叫英文为Acoustic Noise，常分为电感啸叫和电容啸叫。其中电感啸叫最常见，电感啸叫多是由于未正确选择器件参数，负载不稳定或轻载过载等情况导致的，而**负载不稳定**往往是主因，这意味着板卡上某个地方可能存在短路。
:::

#### 硬件操作

首先，同学们需要从**网格防静电袋**中拿出板卡，目前一生一芯SoC上是**通过ChipLink接口访问FPGA端的DDR来实现访存通路的**，所以需要配合一个FPGA核心板才能正确启动RT-Thread：

![一生一芯SoC支持的三种数据通路](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/datapath.png)


实际上板卡背面已经提前插入好了FPGA核心板，**不需要同学们自己安装了**。另外SoC板卡上还需要插入晶振才能正确工作，**这个晶振也已经提前插入到了板卡上**，同学们只需要再次确认即可。

::: info 安装/拆卸FPGA核心板和晶振
本SoC配套的FPGA核心板是一种 [SoM(System on Module)](https://en.wikipedia.org/wiki/System_on_module)，采用的是SODIMM 204P接口 **(DDR3兼容标准接口)**。这种接口常用于笔记本电脑内存模组。默认FPGA核心板已经插入到插槽中，一般不需要拆卸，如果确有需要，需要同学们自己操作，具体方法如下：

![安装FPGA核心板](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sodimm-black-1.png)

安装FPGA核心板时把FPGA核心板以**30度左右**倾角插入到插槽中，**并确保所有金手指插入的深度都一致**，然后两手同时抓住两边往下按，直到两边被压到插槽的**固定簧片**之下，听到“卡塔”一声就可以了。拆卸核心板过程则相反，轻轻向外侧拨动固定簧片，FPGA核心板会自动弹起，然后向外取出即可。

安装和拆卸晶振相比FPGA核心板要容易一些，只需从**硬质防静电袋**中取出一个25MHz的晶振，然后将晶振按照正确方向插入到三期板卡的晶振插座中即可。晶振管脚要比插座的插槽深度要长一些，当发现用手插入晶振时稍用力已无法再进一步插入后就可以停止了，正确插入时的方向和深度见下图：

![晶振正确插入时方向](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/osc-1-1.png)

![晶振正确插入时深度](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/osc-2.png)

:::
::: warning
- 不要将晶振的方向插反了，**这个上电前同学们需要再次确认下**。
- 可以用手直接取出和插拔晶振，但是要注意手尽量不要触碰到晶振的管脚。
- 可以通过抓住晶振的金属外壳来取出和插拔晶振。
:::

晶振正确插入后，硬件上还需要使用**微动拨码开关**正确设置SoC芯片的工作状态，具体来说需要两步：
- 使能PLL输出，选择PLL输出核时钟的频率
- 选通特定学号的处理器核

在做三期SoC的后端集成时，项目组给每个同学的核都分配了一个序号，可以通过这个序号选通到同学们自己的核。首先请同学们先打开 [三期处理器核序号和学号对应表(student-id.md)](https://github.com/maksyuki/StarrySky-res/blob/main/software/V1.2/student-id.md)，然后按照自己的学号来查找核序号是多少，比如学号为`ysyx_210000`的核序号为`1`。

现在解释下**微动拨码开关**每个拨码位的功能定义，板卡上共有两个微动拨码开关：左边的拨码开关有4位拨码，是用来**设置时钟输出状态的**。右边的拨码开关有6位拨码，是用来**设置核选通状态的**。

![拨码开关位功能定义](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-1.png)

4位拨码开关功能定义 **(从左到右)**：
- PLL时钟使能位 **(1位)**
- PLL输出时钟频率选择位 **(3位)**

6位拨码开关功能定义 **(从左到右)**：
- 未定义 **(1位)**
- 处理器核选择位 **(5位)**

::: warning 核选通拨码定义
6位拨码开关的最高位 **(左边数第一个)** 没有定义功能。
:::

拨码开关设置分成两部分，第一部分是设置PLL时钟使能位和PLL输出核的时钟频率，我们建议**先将PLL输出核时钟频率设置成25MHz，并先从低频率开始测试**。当同学们的核能够在25MHz核时钟下跑通我们提供的所有测试程序后，可以再去尝试逐步提高处理器核时钟频率。现在介绍下拨码开关位和SoC上信号的对应关系，其中三期SoC的RCG **(全局时钟复位模块)** 如下图所示：

![三期SoC的RCG模块](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/rcg-intro.png)

其中拨码开关的**PLL时钟使能位**对应于上图左上角红框中的`clk_sel`，当使能该位后，处理器核时钟`clk_core`使用PLL的输出时钟，此时需要将拨码开关上的**PLL时钟使能位**设置为`ON`。失能该位时，`clk_core`直接使用外部晶振时钟，此时需要将拨码开关上的**PLL时钟使能位**设置为`OFF`。而PLL输出时钟频率选择位对应于上图左上角红框中的`pll_cfg[2:0]`，用于设置PLL输出时钟的频率，也就是处理器核时钟频率。**拨码开关位和PLL输出核时钟频率对应**关系如下表格所示：

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

::: tip 时钟拨码开关设置
上面 ***拨码开关位和核时钟频率对应表*** 中的PLL输出时钟频率选择位**设置的最低位对应于板卡上拨码开关的4号位**。所以如果要将PLL输出时钟频率倍频到200MHz，则需要将PLL输出时钟选择位拨码调整到ON-OFF-OFF **(对应拨码开关的2位-3位-4位)**，如下图所示：

![使能PLL并将PLL倍频到200MHz的拨码开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-2.png)
:::

::: tip
- 拨码开关上面**如果**带有**黄色防尘薄膜**，需要先撕下来。
- 板卡上的机械拨码开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用镊子，曲别针等带尖头的物品拨动，**当使用尖头物品请注意使用安全**。
- 为了方便测试处理器核时钟的频率，板卡上面设计有**核时钟四分频测试点**和**外置晶振时钟测试点**：

![时钟频率测试点](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/osc-tp.png)

**外置晶振时钟测试点**是用来测试外置有源晶振是否能够正确起振的，**核时钟四分频测试点**则是用来测量核时钟频率的，身边有示波器的同学可以通过这个测试点来测量不同拨码下的PLL核时钟频率输出值，不过要注意这个测试值是PLL核时钟的四分频值。
:::

拨码开关设置的第二部分是选通自己的处理器核，一生一芯三期将多个同学们的核集成到一个SoC中，并使用外部信号线的高低电平来选通不同的核，该外部信号线由拨码开关上的**处理器核选择位**实现，**处理器核选择位**对应于下面三期SoC架构图中左边红框中的`core_dip[4:0]`：

![三期SoC架构图](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/soc-intro.png)

处理器核选择位的拨码仍然采用的是**正逻辑**。结合下图例子更方便理解，比如同学们要选择序号为3的核，此时拨码开关应该设置成下图中的样子：

![拨码开关与序号对应关系](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-3.png)

选通核的五位拨码开关位从左到右**位权**依次为`16, 8, 4, 2, 1`。这样选择序号为`1`的核，则其对应的编码为`5'b00001`。由于是**正逻辑**，所以对应拨码位设置从左到右依次为`OFF-OFF-OFF-OFF-ON`。如果要选择序号为`6`的核，则其对应的编码为`5'b00110`，对应拨码位设置从左到右依次为`OFF-OFF-ON-ON-OFF`。

再举个完整拨码开关设置的例子，比如要选择核序号为`7`的核进行测试，并希望处理器核时钟工作在25MHz，则拨码开关的设置应如下图所示：

![使能PLL，PLL输出核时钟为25MHz，选择核序号为7的拨码开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/dip-switch-4.png)

::: danger 拨码开关切换
- 拨码开关也需要和滑动开关一样上电前被正确拨动到某一侧，而非中间位置 **(机械死区)**，以防止拨码状态电平的不稳定。
- 不要带电拨动拨码开关，带电操作可能会导致板卡电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡。
:::

至此已经介绍完所有的硬件操作内容，下面蒋介绍软件工具的使用。板卡在发放给同学们前已经提前烧录好了测试程序，可以用来检测板卡和SoC芯片是否能够正常工作，文档以下均采用 **Win11专业版** 作为软件测试平台。

#### 安装串口驱动
目前板卡上采用的串口转USB芯片型号是CP2102，需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。检查自己电脑上是否安装有CP2102驱动的具体方法如下：

同学们先将配件中的 Type-C USB 线缆的一头插入到SoC板卡的 **`VBUS1`** 口中，另一头插入到电脑的USB口中，确认滑动开关 **`SW1`** 和 **`SW2`** 拨动到了上侧，而 **`HFP-MODE`** 拨动到了右侧：

![滑动开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-1.png)

然后按下 **`PWR`** 自锁开关给板卡供电，当正确供电时，板卡上 **`SW2`** 上侧的红色 **`LED`**  会被点亮：

![给板卡供电](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-2.png)

接着按动键盘上 ***WIN+X*** 组合键，在弹出的选项中点击 ***设备管理器*** 选项，如果 ***设备管理器--->端口(COM和LPT)*** 中显示类似下图中带有 `CP210x` 字样的端口图标，则说明CP2102驱动以前安装成功过，不需要再安装了：

![设备管理器显示CP2102端口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-1.png)

::: tip
上图端口图标后圆括号中的 **`COMx`** 后接着的数字 **`x`** 不一定是图中的 **`15`**，这个是电脑自动分配的，具体是几都没有问题，**但是要确定这个是板卡上电后识别出的串口**。
:::

如果在 ***其他设备*** 选项中出现类似下图中的黄色叹号图标，则说明电脑没有安装过CP2102驱动，需要使用CP2102官方驱动软件包安装该驱动，为了方便同学们使用，项目组已经将该软件包提前准备好了并放在 [StarrySky-res](https://github.com/maksyuki/StarrySky-res/) 仓库中供同学们下载，具体地址为 [CP2102.zip](https://github.com/maksyuki/StarrySky-res/tree/main/driver/CP2102.zip)：

![在其他设备中出现黄色叹号](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/cp2102-2.png)

CP2102驱动的具体安装方法如下：同学们需要先从Github下载`StarrySky-res`仓库并解压`CP2102.zip`，然后进入 `cp2102 driver` 目录，双击 `CP2102xVCPInstaller_x64.exe` 来安装64位驱动。如果同学们的电脑只支持32位的话，则双击 `CP2102xVCPInstaller_x86.exe` 来安装32位驱动：

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

#### 安装串口调试软件

当电脑能够成功识别出串口的端口号后，还需要使用串口调试软件打开串口才能和板卡进行通信。目前市场上常用的串口调试软件有很多，比如Minicom、MobaXterm、Xshell、SecureCRT、Cutecom和WindTerm 等等，为了方便展示串口运行的结果，**本文档选择使用MobaXterm介绍后续的软件操作**：

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-1.png)

MobaXterm是一款面向Window平台的，支持 SSH、X11、VNC、FTP和SERIAL等多种协议的强大终端工具。可以访问 [MobaXterm的官网](https://mobaxterm.mobatek.net/) 获得更加详细的信息。

::: info 串口调试软件选择
推荐同学们使用MobaXterm软件，但是同学们也可以自行选择其他串口调试软件使用。
:::

首先，同学们需要访问MobaXterm的[官网](https://putty.org/) 并下载符合自己电脑版本的安装包，并按照指引成功安装完MobaXterm。当安装完MobaXterm后，打开该软件，会显示类似下图的界面：

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-2.png)

然后需要按照下图所示步骤创建一个串口会话 **(Serial Session)**，具体步骤如下：

![新建串口会话](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-3.png)

- 点击MobaXterm工具栏第一个 ***Session*** 图标
- 然后在弹出的窗口中选择 ***Serial***
- 在 ***Basic Serial settings*** 中的 ***Serial port*** 下拉框中选择前面识别出的带有 ***Silicon Labs CP210x USB to UART xxx*** 字样的串口
- 在 ***Speed(bps)*** 下拉框中设置波特率为 ***115200***
- 在下面 ***Advanced Serial settings*** 窗口中确认参数为：
  - ***Serial engine:*** PuTTY (allows manual COM port setting)
  - ***Data bits:*** 8
  - ***Stop bits:*** 1
  - ***Parity:*** None
  - ***Flow control:*** None

当创建完一个串口会话后，将板卡用Type-C线缆和电脑相连，然后使用上面介绍的方法打开已经配置过的串口Session，如果没问题，则会打开一个黑色背景的窗口：

![正确打开串口Session](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-3-1.png)

至此串口Session配置完成，但为了能够**在窗口中正确地显示换行**，还需要对会话进行设置，具体步骤如下图所示：

![修改串口换行显示1](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-4.png)

![修改串口换行显示2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/mobaxterm-intro-5.png)

1. 在打开的窗口中任意地方鼠标右击，在弹出的选项中点击 ***Change terminal settings...*** 
2. 然后在弹出的窗口中勾选 ***Implicit CR in every LF*** 复选框

::: tip Implicit CR in every LF 选项含义
由于板卡上的测试程序是使用 **`"\n"(LF)`** 进行换行输出的，但是Win下换行格式是 **`"\r\n"(CR LF)`** ，另外前面创建的串口会话使用的是内置的PuTTY引擎，需要设置PuTTY在每次接收到 **`"\n"(LF)`** 时在其前面隐式添加 **`"\r"(CR)`** ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。
:::

当能够正确使用MobaXterm打开串口会话后，请先按动电源按键 **`PWR`** 以关闭电源，然后确认FPGA核心板的启动模式选择拨码开关 **`FPGA-BOOT`** 拨到了 **`FLASH`** 档位，表示此时FPGA核心板从自己板载的Flash中加载硬件系统，因为FPGA核心板在发给同学们之前已经将访存必须的FPGA侧的硬件系统固化在了核心板板载的Flash上，所以需要将档位设置到 **`FLASH`**。具体档位含义在拨码开关右侧的白色丝印上可以找到：

![FPGA核心板启动模式设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-3.png)

#### 板卡复位
确认完FPGA启动模式设置成 **`FLASH`** 后，按照上面 [安装串口驱动](#安装串口驱动) 一节介绍的步骤再次确认下电源选择和功能切换开关 **`SW1`**，**`SW2`** 和 **`HFP-MODE`** 被正确设置，然后启动板卡电源并打开串口会话窗口。最后按动按键 **`CORE-RST`** 对SoC板卡执行一次复位：

![按动复位按键执行SoC复位](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/uart-4.png)

::: warning 复位功能注意事项
- 由于SoC板卡上没有**上电自动复位电路**，所以需要同学们在板卡上电后按动复位按键 **`CORE-RST`** 执行**一次手动复位**。
- 复位信号是通过机械开关产生的，**没有设计去抖电路**，而且FPGA核心板侧复位**异步于**SoC板卡侧复位，如果SoC板卡的复位在FPGA核心板复位之前完成，则会由于访存请求得不到响应而卡死，现象是串口只输出 `Loading program size ...` 。**此时只需再次按动板卡上的复位按键 `CORE-RST` 即可**。
- 复位按键的按动时间可以长一些，以产生稳定的低电平复位信号。
- 如果按动 **`CORE-RST`** 多次都没法正确启动程序，则可以先按动FPGA侧的复位按键 **`PS-RST`**，然后等待 **`PL-LED`** 灯亮起后，再按动 **`CORE-RST`**。

<!-- fpga-rst.png -->
:::

当复位按键被按下后，如果一切设置都正确的话，串口会打印出RT-Thread程序的加载和执行过程。串口打印出 **`msh />`** 之后会停止，并等待用户输入。同学们可以直接使用键盘在窗口中键入命令。比如输入 **`help`** 会打印RT-Thread支持的命令，输入 **`list_timer`** 则会打印RT-Thread正在运行中的所有定时器。和其他shell一样，**`msh`** 在键入命令时也是支持 **`tab`** 补全的：

![运行RT-Thread测试程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/rtthread.png)

::: info 丰富应用实例
星空V1.2板卡上面有不少同学的核能够启动Linux，比如唐浩晋同学设计的处理器核。当时他参加一生一芯三期的时候还是中国科学院大学电子信息工程的一名大三学生。他在自己的核上成功启动了Linux并运行了应用程序([视频](https://www.bilibili.com/video/BV1CL411X7wV/))：

![启动Linux并运行程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/app-1.png)
:::

至此，上电运行RT-Thread程序的所有步骤就已经全部介绍完毕了。后面将会介绍一些更深入的内容。

### 程序烧写
这一章节主要介绍如何将程序下载到SoC底板板载的NOR Flash中，使得同学们自己写的核可以运行其他的应用程序，而不仅仅是RT-Thread。为了方便进行程序烧写，星空开发板集成有板载NOR Flash烧写器，可以像DAPLink一样实现 [拖拽式烧录(drag-and-drop programming)](https://daplink.io/) ，具体的软硬件原理见 [板载烧写器(HFPLink)](#板载烧写器-hfplink) 一节。

::: info 板载烧写器适用的操作系统
目前板载烧写器能够在 **Win10** 和 **Win11** 平台上正常工作，同学们需要确认下自己电脑的操作系统版本。
:::

现在开始介绍烧写程序的具体步骤：首先按下板卡的自锁电源开关 **`PWR`**，关闭板卡电源，然后在保持之前其他功能开关设置不变的情况下，仅将板卡上 **`HFP-MODE`** 的滑动开关拨码到左侧，以使能板载烧写器功能：

![使能板载烧写器](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfp-1.png)

然后再次按下板卡的自锁电源开关 **`PWR`**，接通板卡电源，此时电脑会识别出一个叫做 `YSYX-HFPLnk` 的移动U盘，容量为 `15.8MB` 左右。

![识别出U盘](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfp-2.png)

接着将想要烧写的bin格式的应用程序拷贝到 `YSYX-HFPLnk` 这个U盘中，然后等待拷贝完成。在拷贝的同时板载烧写器旁的蓝色LED会一直闪烁。当拷贝完成时，蓝色LED会常亮。项目组已经在 [StarrySky-res](https://github.com/maksyuki/StarrySky-res) 中 `V1.2/software` 目录下提前准备了一些已经编译好的测试程序，可以拷贝到 `YSYX-HFPLnk` 中进行烧写。当拷贝完成后，程序烧写也就完成了，此时关闭板卡电源，并重新将 **`HFP-MODE`** 的滑动开关拨码到右侧，然后上电就可以运行新的程序了。

::: info 更新板载烧写器固件
默认板载烧写器已经提前烧录有系统固件，一般使用是没有问题的，但有时候需要对固件进行更新以修复bug或者添加新的功能，这样就需要了解更新固件的方法。目前板载烧写器上使用的主控是CH32V103，这个MCU是支持ISP程序更新的，但是需要配合 **WCHISPTool** 一起使用。所以为了更新固件，首先需要安装 **WCHISPTool** 这个软件。同学们可以访问这个 [网址](https://www.wch.cn/download/WCHISPTool_Setup_exe.html) 来下载 **WCHISPTool** 并完成安装。

当按照指示安装完 **WCHISPTool** 后，双击打开该软件，可以看到如下界面：

![WCHISPTool界面](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfp-3.png)

然后将开发板切换到 [程序烧写模式](#程序烧写)，此时上电后，电脑会识别出一个名为 `YSYX-HFPLnk` U盘，这个上面已经介绍过了。在这个模式下，需要2个步骤才能让CH32V103进入到ISP下载模式：
- 先按住板载烧写器的系统复位按键 **`NRST`**，然后再按住板载烧写器的BOOT模式按键 **`BOOT`**，使得CH32V103进入复位状态并设置启动模式为ISP下载模式 **(BOOT=1，也就是按下BOOT按键)**
- 接着释放板载烧写器的系统复位按键 **`NRST`**，最后释放板载烧写器的BOOT模式按键 **`BOOT`**，此时CH32V103退出复位状态并进入ISP下载模式

![板载烧写器复位和模式选择按键位置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfplink-fireware-update.png)


**`NRST`** 和 **`BOOT`** 这两个按键旁边有白色丝印指示，比较容易找到。当按照上面步骤操作完之后，WSHISPTool会自动识别出 `CH32V103` 这个芯片型号：

![识别出CH32V103](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfp-4.png)

当识别出 `CH32V103` 后，同学们点击 ***用户程序文件*** 后的文件图标选择需要更新的固件 **(hex格式)**，项目组已经在 [StarrySky-res](https://github.com/maksyuki/StarrySky-res) 中 `V1.2/firmware` 目录下准备好了该固件。当选择完需要更新的固件后，点击 ***下载*** 按钮并等待更新完成即可：

![下载固件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfp-5.png)

最后再按一下板载烧写器的系统复位按键 **`NRST`** 就可以恢复到正常烧写器工作模式了。
:::

::: info 两线串行调试接口固件更新
实际上，SoC底板上的板载烧写器还支持WCH自定义的**两线串行调试接口协议**，可以使用支持该调试接口的下载器比如WCH-Link来更新固件，板卡通过测试点的方式上引出了该接口，有需要的同学可以自行取用：

![两线调试接口测试点](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/hfplink-2wire.png)

:::

::: warning 固件更新
- 更新固件不是必须的，**因为板卡在发给同学们之前已经烧录过固件了**，上面介绍更新固件的方法，是为了方便将板卡发给同学们之后，还能够便捷地对烧写器功能进行升级用的。
- 目前板载烧写器的固件**不支持连续拷贝烧写功能**，也就是说每次烧写完成之后**都需要复位并重新进入ISP模式才能开始新的一次应用程序烧写**。
- 有时候在更新固件点击 ***下载*** 之后，**WCHISPTool**软件提示存在 **写保护** 。此时可以先点击上面的 **解除保护** 之后再重复上面更新固件操作即可。
:::

至此，程序烧写内容就全部介绍完毕，下面将开始介绍板卡的硬件设计，为后面介绍FPGA开发做好铺垫。

### 硬件设计
这个章节主要会详细地介绍星空V1.2版本的硬件设计，先简单概括V1.2版本板卡的主要特点：
- 使用Cadence Orcad/Allegro设计 **(三周)**，采用**六层**层叠设计 **(TOP-GND02-ART03-PWR04-GND05-BOT)** 和沉金表面工艺，并完成四线低阻测试。
- 板卡等长设置：ChipLink走线分别参照**tx_clk**和**rx_clk**做**0/50mil**组内等长，2个SDIO参照clk做**0/30mil**组内等长，USB2.0参照clk做**0/50mil**组内等长，5对USB差分信号按照**0/25mil**做对内等长。
- SDIO WiFi的IPEX天线两侧按**30mil**间距打地过孔，功率电感PAD间做了**挖空处理**。
- VGA和所有晶振时钟输出端做了**包地处理**，远离高频和模拟信号，并均参考了完整地。
- 模拟地做了**单点隔离**，各芯片均做了完备的电源滤波，电源网络使用覆铜连接，保证电源供电稳定，并打了足量的**回流地过孔**。

![板卡硬件设计](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/pcb-1.png)


在完成了原理图和PCB布局布线设计后，该版本硬件设计又经过了多轮的DRC检查，CAM350通短路检查和差异对比检查。在物料采购环节完成后，该版本硬件正式导入到小批量生产流程，开始交由厂商进行PCB生产和SMT贴片。其中星空V1.2版本板卡的3D贴片图如下所示：

![板卡顶层贴片](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/board-smt-top.png)

![板卡底面贴片](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/board-smt-bot.png)

::: info 板卡设计资源文件
- 项目组在Github上**开源了星空板卡各个版本的原理图，PCB设计，BOM和制造文件等内容**，同学们可以访问Github仓库 [StarrySky](https://github.com/maksyuki/StarrySky) 来获取所有资源。其中：
- 星空V1.2的PDF版本原理图：[STARRYSKY_SCH.pdf](https://github.com/maksyuki/StarrySky/blob/main/CAD/V1.2/STARRYSKY_SCH.pdf)
- 星空V1.2的PDF版本PCB布线图：[STARRYSKY_PCB.pdf](https://github.com/maksyuki/StarrySky/blob/main/CAD/V1.2/STARRYSKY_PCB.pdf)
:::

下面将结合原理图详细介绍板卡的硬件设计。并按照 **电源网络** ，**PS侧外设** 和 **PL侧外设** 的顺序依次介绍。

#### 电源网络
SoC板卡上的电源网络拓扑结构如下图所示：


网络拓扑图.png
整个板卡使用

#### PS复位按键
SoC板卡上搭建了

#### 启动模式
ZYNQ芯片支持4种启动模式，分别是SD，Flash，JTAG和NAND。考虑到PS MIO管脚的复用，目前星空开发板上面支持的是前3种方式，原理图如下所示：

当

#### FPGA JTAG调试接口
SoC底板上搭载了一个5X2P的牛角插座，用于接入配件中的FPGA烧写器，实现FPGA硬件系统的下载，固化或者调试。原理图如下所示：

#### 板载烧写器(HFPLink)
SoC底板上搭载了一个板载的Flash烧写器，用于实现对SoC上应用程序的烧录，原理图如下所示：

#### PS UART
SoC底板上搭载了一个UART转USB的芯片，型号为CP2102，用于实现PS侧的串口通信，该接口位于BANK500,的MIOxx~xx，电平标准为3.3V，原理图如下所示：

#### PS SDIO
SoC底板上搭载了一个SDIO接口，位于BANK501的MIOxx~xx，电平标准为1.8V，需要通过一个电平转换芯片转换到3.3V以满足Micro SD插槽的使用，这个SDIO接口用于固化FPGA核心板的应用程序，或者存储应用需要的数据，原理图如下所示：

#### PS SDIO WiFi
SoC底板上搭载了一个支持SDIO数据协议的WiFi模组，型号为AP6212，用于实现无线网络通信功能。原理图如下所示：

#### PS CAN
CAN接口是控制局域网(Controller Area Network)的简称，是一种能够实现分布式实时控制的串行通信网络，其由德国的Bosh公司开发。原理图如下所示：

#### PS USB Host
SoC底板上搭载有一个兼容USB2.0的驱动芯片USB3320C，用于实现Host模式下的数据通信，数据接口上使用的是标准的USB接口 **(Type-A)**，原理图如下所示：

#### PS PMOD
SoC底板上额外引出了6位的PS侧的MIO口，位于BANK501的MIOxx~xx，电平标准为，可以用于扩展其他外设，原理图如下所示：

#### PS LED/KEY
SoC底板上搭载了，原理图如下所示：

#### PL VGA
SoC底板上搭载了一个标准VGA接口，用于图片或者视频的显示，原理图如下所示：

#### PL PS/2
SoC底板上搭载了一个PS/2键盘母座，用于连接键盘实现键盘按键输入，原理图如下所示：

#### PL RTC
SoC底板上，原理图如下所示：
#### PL EEPROM
SoC底板上，原理图如下所示：
#### PL SPI Flash
SoC底板上，原理图如下所示：
#### PL I2S
SoC底板上，原理图如下所示：
#### PL LED/KEY
SoC底板上，原理图如下所示：
#### SO-DIMM 204P接口
SoC底板上，原理图如下所示：

::: info 设计插曲

:::

### FPGA开发

http://47.111.11.73/docs/boards/fpga/zdyz_linhanz(V2).html

::: warning
- JTAG调试器要先接好，再打开板卡的电源。

:::
## 其他资源
对接PPT内容，你可以从这里获得。

### 硅后测试
## 勘误与致谢
项目组鼓励和欢迎同学们对本文档提出宝贵的意见和反馈，目前项目组使用 [Github issue](https://github.com/oscc-ysyx-web-project/ysyx-website/issues) 来追踪这些反馈，本文档致力于遵守开源软件开发中公认的最佳实践，所以当你觉得有提出的必要时，请大胆地发起issue吧！:smile:

### 致谢列表
- 感谢粟金伦同学在测试板卡时发现的板卡插接深度不够可能导致板卡信号断路问题，现在已经补充到相关注意事项中。
- 感谢粟金伦同学建议使用 PuTTY/MobaXterm 软件来做板卡测试流程演示用的串口上位机软件，本文档已经使用 MobaXterm 重写了有关章节。
- 

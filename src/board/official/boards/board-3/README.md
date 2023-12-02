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

同学们收到板卡后，请先按照下面的列表检查板卡和配件 **是否齐全并且无破损情况**：
- 板卡包装盒 **x1**
- 开发板+FPGA核心板 **(使用网格防静电袋包装)**
- 耗材 **(使用硬质防静电袋包装)**
  - Flash芯片W25Q128JWSIQ **x1**
  - 1.14寸TFT-LCD屏幕 **x1**
- Type-C USB线缆 **x1**
- FPGA JTAG烧写器和线缆 **x1**

包装所有内容可以见下图：

![包装和配件内容](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v1p2/package-cont.png)

::: info 板卡或者耗材损坏/缺失/丢失怎么办？
* 每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。
* 项目组会在板卡中额外提供若干耗材 **(Flash)**，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买 **(额外的耗材一般用不到，而且另行采购的成本很低，大概在十几块这样)**。
:::

星空系列板卡配套的软硬件资源 **均开源** 在Github上，可以在下面列出的两个仓库中找到星空系列板卡所有版本的资料，其中：
- [StarrySky](https://github.com/maksyuki/StarrySky)：星空系列开发板所有的**硬件资源**，包括原理图，PCB设计，制造文件等。
- [StarrySky-res](https://github.com/maksyuki/StarrySky-res)：星空系列开发板所有的**软件资源**，包括必须的串口驱动，测试程序，FPGA外设硬件工程等。

同学们可以提前将 **StarrySky-res** 下载下来，这个仓库中的软件资源后面会用到。

::: info 资料更新
目前上面介绍的板卡软硬件资料仍在持续更新中，推荐使用`git`管理仓库并使用`git pull`来获取最新的内容。
:::

::: info Type-C线缆长度
包装中配发的Type-C USB线缆可能不够长，同学们也可以自行选用更长的Type-C数据线，但是需要自行确认Type-C线材的质量符合板卡的数据和供电能力 **(市面上售卖的Type-C线一般都没问题)**。
:::
### 板卡介绍

星空开发板V2.1采用的是SoC底板+FPGA核心板的设计，FPGA核心板采用的是ZYNQ7020芯片，其中SoC底板板载资源如下图所示：

![SoC底板板载资源1](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/board-func-top-color.png)

![SoC底板板载资源2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/board-func-bot-color.png)

从上图可以看到，SoC部分的外设和接口基本上都分布在板卡的中下侧 **(紫色)**，而FPGA部分的PL和PS外设则主要分布在板子的上侧和两边 **(绿色和蓝色)**。外设和接口的详细介绍如下表所示：
- SoC
  - 1个25MHz有源晶振，1个100MHz有源晶振(未焊接)
  - 1个SPI模式的TF卡插座
  - 1个板载烧写器(HFPLink)
  - 1个Flash插座，内置NOR Flash芯片，SoC复位后会从该Flash芯片中取指
  - 1个UART接口，使用CP2102芯片
  - 1个容量32MB的16位LPSDRAM颗粒
  - 1个外置5V直流电源，使用Type-C接口
  - 2个电源模式切换开关
  - 1个自锁电源开关
  - 3个拨码开关，用于设置PLL时钟输出频率和核选通
  - 1个复位按键
- 系统
  - 1个红色电源指示LED
  - 1个PS功能复位按键，1个PS调试复位按键
  - 1个FPGA启动模式切换开关
  - 1个FPGA JTAG调试接口
  - 1个FPGA外设功能切换开关
- PS侧外设
  - 1个UART接口，使用CP2102芯片
  - 1个SDIO接口，SD能启动PetaLinux，eMMC可以固化程序
  - 1个USB HOST，使用USB3320C芯片
  - 2个用户自定义按键
  - 1个用户自定义蓝色LED
- PL侧外设
  - 1个VGA接口，使用电阻网络实现DAC
  - 1个PS/2接口，用于连接PS/2兼容键盘
  - 1个RTC时钟，使用PCF8563芯片
  - 1个EEPROM，使用AT24C64芯片
  - 1个SPI Flash插座，支持W25Q128JWSIQ芯片
  - 1个8pin SPI TFT-LCD接口
  - 1个支持SPI模式的TF卡插座
  - 1个UART接口，使用CP2102芯片
  - 1个容量32MB的16位LPSDRAM颗粒(未焊接)
  - 1个I2S接口，使用ES8388芯片，支持音频输入/输出，支持直驱耳机，板卡设计有PA，支持双声道3W扬声器输出
  - 1个用户自定义按键
  - 2个用户自定义蓝色LED
  - 4个WS2812C LED炫彩灯珠
  - 1个24pin的扩展口，扩展口相对的一组信号做过等长处理
- 4个DF40C-100DS接口，用于连接ZYNQ7020 FPGA核心板

SoC底板搭配使用的FPGA核心板如下图所示：

![FPGA核心板正反面](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v2p1/som-black.png)

FPGA核心板板载资源如下所示：
- 主芯片：XC7Z020CLG484-1I
  - ARM规格：Cortex-A9 双核主频667M
  - FPGA规格：
    - 架构：Artix7
    - 逻辑单元：85K
    - 查找表：53200
    - Block RAM：36Kb
    - DSP slices：220
    - 触发器：106400
    - 速度等级：-1
- DDR3L：MT41K256M16TW-107:P*2片 **(512x2 MB)**，2片与PS内存接口相连，最高支持 **1066MHz** 主频
- eMMC：KLM8G1GEME-B041 **(8GB)**，与PS外设接口相连，采用SD模式，最高支持 **50MHz** 时钟频率
- Flash：W25Q128FV **(16MB)**，与PS外设接口相连，四线模式，最高支持 **104MHz** 时钟频率
- 晶振：1路33.3333MHz有源晶振，与PS接口相连
- 4个DF40HC-100DP板对板连接器
  - 引出54个PS MIO接口
  - 引出200个PL接口(96对差分)

星空V2.1版本板卡设计上的主要特点如下：
- 星空开发板的外形尺寸为 **110X84mm**，面积约为标准信用卡大小的 **2倍**。
- 重新设计了电源网络，将供电能力从1.2A电流提高到2A，支持外置 **5V电源适配器** 供电，支持多路电源管理。
- FPGA采用4路BTB连接器的核心板设计，硬件规格为：**XC7Z020CLG484+1GB DDR3L+8GB eMMC**。
- 板载NOR Flash烧写器 **(HFPLink)**，实现了拖拽式烧录功能，烧写器支持固件升级 **(通过支持USB协议的ISP)**。
- 使用多路 **模拟开关** 实现FPGA侧PL端口 **IO的复用**，以挂载尽可能多的外设，并引出了FPGA核心板上所有的IO。
- 设计上将处理器核切换和频率选择开关分开，并使用 **正选通逻辑**，方便拨码。
- 充分考虑几何约束关系，按键开关选择低压力克数器件 **(160gf)**，提升硬件操作体验。
- **板卡上为拨码开关和重要接口都设置有丝印和标注**，方便同学们使用。

星空V2.1版本板卡的硬件资源框图如下所示：

![硬件资源](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/board-res.png)

FPGA核心板PS侧的BANK有BANK502，BANK500和BNAK501。其中BANK502电平标准为1.5V，用于连接两片DDR3颗粒。BANK500电平标准为3.3V，用于连接符合3.3V电气标准的外设，比如UART，LED和按键等。而BANK501电平标准为1.8V，用于连接符合1.8V电气标准的外设，比如USB HOST，SDIO等。而PL侧的BANK有BANK13，BANK33，BANK34和BANK35。这四个PL BANK的电平标准均为 **1.8V**，用于连接一些SoC常见的外设，比如UART，I2C，SPI，GPIO等。
::: warning FPGA PL侧电平标准为1.8V
- FPGA核心板的PL侧的 **所有BANK电平标准均为1.8V**，所以若要使用PL侧的扩展口，需要使用 **level shifter** 专用芯片进行电平协议转换。
- 另外选用level shifter芯片时需额外注意转换方向，最大数据传输率，驱动能力等参数，星空板卡板载的非1.8V电平标准外设已经全部使用level shifter芯片做过转换，可以放心使用。
:::

::: danger 供电负载说明
- 目前星空开发板正常运行程序的电流负载约为 **400~450mA**，从笔记本或台式机的标准USB口取电基本都能满足供电要求，**不需要额外电源供电**。当然为了满足某些特定的需求，星空开发板也支持使用Type-C接口的外置5V/2A电源适配器供电，但是项目组在配件中没有提供该适配器，有需求的同学需要自行准备。
- 电源适配器一般是直接和市电相连的，电压和电流都比较高，存在一定危险性。**如果同学们确实需要使用电源适配器给板卡供电，请选取符合安全标准的适配器并注意用电安全**。
:::

### 上电测试
这个章节主要介绍如何对板卡进行基本的软硬件测试。为了方便同学们测试，板卡上的Flash插座中 **已经内置了一个烧录好RT-Thread程序的NOR Flash芯片**。并且板卡在寄出之前，项目组对SoC上的核都跑过了该测试，同学们只需要按照下面介绍的内容顺序操作就可以运行RT-Thread程序了。上电测试的具体步骤如下图所示，其主要分为 **硬件操作** 和 **软件设置** 两部分：

![上电测试步骤](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/test-flow.png)

其中黄色框为纯硬件操作部分，而蓝色框内涉及有软件操作。

::: warning 调试注意事项
请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经验的同学，请务必遵守下面的各注意事项：
- 接触板卡和其他物料前请确认双手已经保持干燥。
- 接触板卡之前，先找一个金属物体摸一下，以释放人体上可能带有的静电。
- 拿取板卡时，请使用抓取电路板板边这种方式，以尽可能确保不用手接触芯片，以防止人体多余的静电传导到芯片引脚上。
- 使用Type-C线缆供电时，请优先使用PC的USB3.0接口，以尽可能保证供电稳定。
- 板卡上有电源选择开关，滑动开关和拨码开关，上电前请确认它们都被正确拨动到某一侧，而非中间位置 **(死区)**。另外，尽量确保所有开关都不要在带电情况下被拨动。
- SoC板卡和FPGA核心板不要在带电情况下插接，以防止这种非正确的热插拔操作导致的栓锁效应，损坏芯片。
- 电源一经接通，若观察到有如冒烟、异常气味、放电的声光、元器件发烫等异常现象时，尤其当听到 “滋滋滋” 的 **噪声啸叫** 时，请立即 **切断电源**。
:::

::: info 噪声啸叫
噪声啸叫英文为Acoustic Noise，常分为电感啸叫和电容啸叫。其中电感啸叫最常见，电感啸叫多是由于未正确选择器件参数，负载不稳定或轻载过载等情况导致的，而 **负载不稳定** 往往是主因，这意味着板卡上某个地方可能存在短路。
:::

#### 硬件操作
首先，同学们需要从 **网格防静电袋** 中拿出板卡，目前一生一芯SoC上是 **通过ChipLink接口访问FPGA端的DDR3颗粒来实现访存通路的**，所以需要配合一个FPGA核心板才能正确启动RT-Thread：

![一生一芯SoC支持的三种数据通路](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/datapath.png)

实际上板卡背面已经提前插入好FPGA核心板，只需要确认下即可。

::: info 安装/拆卸FPGA核心板
本SoC配套的FPGA核心板是一种 [SoM(System on Module)](https://en.wikipedia.org/wiki/System_on_module)，SoM与SoC底板连接采用的是4个型号为DF40C-100DS的 **高速BTB连接器**。这种连接器常用于需要高频稳定传输的场合。默认FPGA核心板已经插入到连接器中，**一般不需要拆卸**。如果有需要安装和拆卸SoM，只要对准连接器并垂直板卡用力按下或者拔出即可。
:::

确认FPGA核心板正确插入后，硬件上还需要设置 **3个微动拨码开关** 才能让四期SoC正常工作。具体来说需要三步：
- 设置PLL输出时钟的频率
- 设置时钟树输出频率
- 选通特定学号的处理器核

先简单介绍下四期SoC的RCG **(全局时钟复位模块)**，该模块功能框图如下所示：

![四期SoC的RCG模块](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/rcg-intro.png)

从上图可以看到，四期SoC共有3个时钟域，分别为 **处理器核时钟域(core_clk)**，**高速外设时钟域(hs_clk)**，**低速外设时钟域(ls_clk)**。其中高速外设时钟域恒定为100MHz，低速时钟域恒定为25MHz， 处理器核时钟会依照`pll_cfg[2:0]` 和 `clk_cfg[6:0]` 值的不同被设定为不同的频率。整个四期SoC时钟源由外置有源晶振提供，四期SoC设计上支持25MHz和100MHz两种频率的外置晶振输入，其中25MHz是正常工作模式下的时钟输入源，100MHz是PLL工作异常下的旁路时钟输入源。另外每个时钟域均通过两级同步器产生稳定的复位释放信号。

拨码开关设置的第一步骤设置 **PLL输出时钟频率选择位**，该位对应于上图左上角红框中的`pll_cfg[2:0]`，该位用于设置PLL输出时钟的频率。此时需要将拨码开关上的对应位设置为`ON`。拨码开关设置的第二步是设置 **时钟树输出频率**，该位对应于上图下边中间的`clk_cfg[6:0]`，该位用于设置处理器核的工作时钟频率。具体 `pll_cfg[2:0]` 和 `clk_cfg[6:0]`的设置值与SoC各输出核时钟频率的对应关系见下表：

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

| PLL_CFG | CLK_CFG | 晶振输入频率 | PLL输出频率 | 处理器核时钟频率(core_clk) | 高速时钟域频率(hs_clk) | 低速时钟域频率(ls_clk) |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 3'b001 | 7'b0100010 | 25MHz  | 100MHz | 25MHz  | 100MHz | 25MHz |
| 3'b001 | 7'b0100001 | 25MHz  | 100MHz | 50MHz  | 100MHz | 25MHz |
| 3'b001 | 7'b0100000 | 25MHz  | 100MHz | 100MHz | 100MHz | 25MHz |
| 3'b101 | 7'b0100101 | 25MHz  | 300MHz | 150MHz | 100MHz | 25MHz |
| 3'b011 | 7'b0101000 | 25MHz  | 200MHz | 200MHz | 100MHz | 25MHz |
| 3'b101 | 7'b0100100 | 25MHz  | 300MHz | 300MHz | 100MHz | 25MHz |
| 3'b111 | 7'b0110000 | 25MHz  | 400MHz | 400MHz | 100MHz | 25MHz |
| 3'b000 | 7'b1000000 | 100MHz | none   | 100MHz | 100MHz | 25MHz |
| 3'b000 | 7'b1000001 | 100MHz | none   | 50MHz  | 100MHz | 25MHz |
| 3'b000 | 7'b1000010 | 100MHz | none   | 25MHz  | 100MHz | 25MHz |

</div>

比如当置`PLL_CFG[3:0] = 3'b111 CLK_FG[6:0] = 7'b0110000` 时，SoC使用25MHz外置晶振作为时钟输入源，处理器核时钟为400MHz，高速时钟域为100MHz，低速时钟域为25MHz。现在介绍下拨码开关位和SoC上信号的对应关系，并解释板卡上 **微动拨码开关** 每个拨码位的功能定义。从下图可以看到，板卡上一共有三个微动拨码开关，其中最上面的的拨码开关有4位拨码，用来 **设置时钟输出状态**，该拨码开关的低3位对应于前面介绍的`PLL_CFG[2:0]`。下面右边的拨码开关有8位拨码，用来 **设置时钟树输出频率**，该拨码开关的低7位对应于前面介绍的`CLK_CFG[6:0]`，下面左边的拨码开关有6位拨码，用来 **设置核选通状态**：

![拨码开关位功能定义](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/dip-switch-1.png)

4位拨码开关功能定义 **(从左到右)**：
- 未定义 **(1位)**
- PLL输出时钟频率选择位 **(3位)**

8位拨码开关功能定义 **(从左到右)**：
- 未定义 **(1位)**
- 时钟树配置位 **(7位)**

6位拨码开关功能定义 **(从左到右)**：
- 未定义 **(2位)**
- 处理器核选择位 **(4位)**

::: warning 核选通拨码注意事项
- 4位拨码开关的最高位 **(左边数第一个)** 没有定义功能。
- 6位拨码开关的最高两位 **(左边数)** 没有定义功能。
- 8位拨码开关的最高位 **(左边数第一个)** 没有定义功能。
:::

::: tip 时钟拨码开关设置
- 测试时建议 **先将处理器核时钟频率设置成25MHz，并从低频率开始测试**。
- 上面 ***拨码开关位和核时钟频率对应表*** 中的**PLL输出时钟频率选择位** 设置的最低位对应于板卡上拨码开关的4号位。所以如果要设置PLL输出时钟频率为200MHz，则需要将PLL输出时钟选择位拨码调整到`ON-OFF-OFF` **(对应拨码开关的2位-3位-4位)**，如下图所示：

![使能PLL并将时钟倍频到200MHz的拨码开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v1p2/dip-switch-2.png)
:::

::: tip
- 板卡上的机械拨码开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用镊子，曲别针等带尖头的物品拨动，**当使用尖头物品请注意使用安全**。
- 为了方便测量处理器核时钟的频率，板卡上面设计有 **核时钟四分频测试点** 和 **外置25MHz，100MHz晶振时钟测试点(100MHz晶振未使用)**：

![时钟频率测试点](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/osc-tp.png)

**外置晶振时钟测试点** 可用来测试外置有源晶振是否能够正确起振，**核时钟四分频测试点** 可用来确认核时钟工作频率，通过测量不同拨码设置下该测试点的频率输出值，可判断处理器核的时钟工作状态。**要注意这个测试值是处理器核时钟的四分频值**。
:::

拨码开关设置的第三部分是选通处理器核，一生一芯四期将同学们的核集成到一个SoC中，并使用外部信号线的高低电平来选通不同的核，该外部信号线由拨码开关上的 **处理器核选择位** 实现，**处理器核选择位** 对应于下面四期SoC架构图中左边从上数第一个`DIP Switch`：

![四期SoC架构图](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/soc-intro.png)

::: info 实际流片时 VGA DAC和 Ethernet MAC的实现
- 实际流片中VGA使用电阻网络实现DAC，没有使用DAC驱动芯片。
- 由于项目调整，Ethernet MAC没有集成进本次班车。
:::

在做四期SoC的后端集成时，项目组给每个同学的核都分配了一个序号，可以通过这个序号选通到同学们自己的核。首先请同学们先打开 [四期处理器核序号和学号对应表(student-id.md)](https://github.com/maksyuki/StarrySky-res/blob/main/software/v2p1/student-id.md)，**然后按照自己的学号来查找核序号是多少**，比如学号为`ysyx_040053`的核序号为`1`。处理器核选择位的拨码仍然采用的是 **正逻辑**，结合下图中的例子更好理解。比如同学们要选择序号为 **12** 的核，此时拨码开关的各拨码位应拨到下图中的位置上：

![拨码开关与序号对应关系](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/dip-switch-3.png)

选通核的四位拨码开关位从左到右 **位权** 依次为`8, 4, 2, 1`。这样选择序号为`1`的核，则其对应的编码为`4'b0001`。由于是 **正逻辑**，所以对应拨码位设置从左到右依次为`OFF-OFF-OFF-ON`。如果要选择序号为`6`的核，则其对应的编码为`4'b0110`，对应拨码位设置从左到右依次为`OFF-ON-ON-OFF`。

再举个完整拨码开关设置的例子，比如要选择核序号为`12`的核进行测试，并希望处理器核时钟工作在25MHz，则拨码开关的设置应如下图所示：

![使能PLL，PLL输出核时钟为25MHz，选择核序号为7的拨码开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/dip-switch-4.png)

::: danger 拨码开关切换
- 拨码开关也需要和滑动开关一样上电前被正确拨动到某一侧，而非中间位置 **(机械死区)**，以防止SoC采样到的拨码状态电平值是不稳定的。
- 不要带电拨动拨码开关，带电操作可能会导致板卡电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡。
:::

至此已经介绍完所有的硬件操作内容，下面将介绍软件工具的安装和使用。板卡在发放给同学们前已经提前烧录好了RT-Thread程序，可以用来检测板卡和SoC芯片是否能够正常工作。

#### 安装串口驱动
目前板卡上使用的是CP2102这款串口转USB芯片，所以需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出该串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。检查自己电脑上是否安装有CP2102驱动的具体方法如下：

同学们先将配件中的 Type-C USB 线缆的一头插入到SoC板卡的 **`VBUS1`** 插座中，另一头插入到电脑的USB接口中，并确认滑动开关 **`SW1`** 和 **`SW2`** 都拨动到了上侧，SoC功能切换开关 **`HFP-MODE`** 拨动到了右侧：

![滑动开关设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/uart-1.png)

然后按下 **`PWR`** 自锁开关给板卡供电，当正确供电时，**`SW2`** 上侧的红色 **`LED`**  会被点亮：

![给板卡供电](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/uart-2.png)

接着按下键盘上的 ***WIN+X*** 组合键，在弹出的选项中点击 ***设备管理器*** 选项，如果 ***设备管理器--->端口(COM和LPT)*** 中显示类似下图中带有 `CP210x` 字样的端口图标，则说明CP2102驱动以前安装成功过，不需要再安装了：

![设备管理器显示CP2102端口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-1.png)

::: tip
上图中 **`COMx`** 末尾的数字 **`x`** 不一定是图中的 **`15`**，这个是电脑自动分配的，具体是几都没有问题，**但是要确定这个端口是板卡上电后新识别出来的**。
:::

如果在 ***其他设备*** 选项中出现类似下图中的黄色叹号图标，则说明电脑没有安装过CP2102驱动，需要使用CP2102官方驱动软件包安装该驱动。为了方便同学们使用，项目组已经将该驱动安装包提前准备好了并放在 [StarrySky-res](https://github.com/maksyuki/StarrySky-res/) 仓库中供同学们下载，具体地址为 [CP2102.zip](https://github.com/maksyuki/StarrySky-res/tree/main/driver/CP2102.zip)：

![在其他设备中出现黄色叹号](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-2.png)

CP2102驱动的具体安装方法如下：同学们需要先从Github下载`StarrySky-res`仓库并解压`driver/CP2102.zip`，然后进入 `cp2102 driver` 目录，双击 `CP2102xVCPInstaller_x64.exe` 安装64位驱动。如果同学们的电脑只支持32位的话，则双击 `CP2102xVCPInstaller_x86.exe` 安装32位驱动：

![安装CP2102驱动程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-3.png)

之后按照安装程序引导界面来安装驱动。当驱动安装完成后，再次使用前面介绍的方法打开设备管理器，如果在 ***端口(COM和LPT)*** 中显示出CP2102的端口号，则说明驱动安装成功。

::: details CP2102 设备识别问题
如果在 ***其他设备*** 选项中显示 **Verifone USB to Printer** 或者 **Verifone USB to Modem** ，则说明电脑已经安装过CP2102的驱动，但是没有被成功识别出来：

![CP2102设备识别问题](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-prb-1.png)

此时需要更新下本机驱动，具体方法如下：

- 右键 **Verifone USB to Printer** 或者 **Verifone USB to Modem** 并点击更新驱动选项：

![右键点击更新驱动](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-prb-2.png)

- 然后在弹出的窗口中点击 ***让我从计算机上的可用驱动程序程序列表中选取*** ：

![从电脑上选取驱动程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-prb-3.png)

- 在弹出的窗口中，选择显示 ***所有设备*** ，并点击 ***下一页*** ：

![选择设备类型](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-prb-4.png)


- 在弹出的窗口的左边设备列表中选择 ***Silicon Labs*** ，然后在右边详细列表中选择第一个，然后点击 ***下一页*** ：

![选择驱动程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-prb-5.png)

- 在弹出的警告框中，点击 ***是*** ：

![更新驱动](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/cp2102-prb-6.png)

这样重新插入 USB 线缆后，就可以在设备管理器中显示出端口号了。

:::

#### 安装串口调试软件
当电脑能够成功识别出串口的端口号后，还需要使用串口调试软件打开串口才能和板卡进行通信。目前市场上常用的串口调试软件有很多，比如Minicom、MobaXterm、Xshell、SecureCRT、Cutecom和WindTerm 等等，为了方便展示串口运行的结果，**本文档选择使用MobaXterm介绍后续的软件操作**：

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/mobaxterm-intro-1.png)

MobaXterm是一款面向Window平台的，支持 SSH、X11、VNC、FTP和SERIAL等多种协议的强大终端工具。可以访问 [MobaXterm的官网](https://mobaxterm.mobatek.net/) 获得更加详细的信息。

::: info 串口调试软件选择
推荐同学们使用MobaXterm软件，但是同学们也可以自行选择其他串口调试软件使用。
:::

首先，同学们需要访问MobaXterm的[官网](https://mobaxterm.mobatek.net/) 并下载符合自己电脑版本的安装包，并按照指引成功安装完MobaXterm。当安装完MobaXterm后，打开该软件，会显示类似下图的界面：

![MobaXterm软件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/mobaxterm-intro-2.png)

然后需要按照下图所示步骤创建一个串口会话 **(Serial Session)**，具体步骤如下：

![新建串口会话](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/mobaxterm-intro-3.png)

- 点击MobaXterm工具栏中第一个图标 ***Session***
- 然后在弹出的窗口中选择 ***Serial***
- 在 ***Basic Serial settings*** 中的 ***Serial port*** 下拉框中选择前面识别出的带有 ***Silicon Labs CP210x USB to UART xxx*** 字样的串口，**这步骤需要板卡上电并被识别出串口端口号**
- 在 ***Speed(bps)*** 下拉框中设置波特率为 ***115200***
- 在下面 ***Advanced Serial settings*** 窗口中确认参数为：
  - ***Serial engine:*** PuTTY (allows manual COM port setting)
  - ***Data bits:*** 8
  - ***Stop bits:*** 1
  - ***Parity:*** None
  - ***Flow control:*** None

当创建完一个串口会话后，将板卡用Type-C线缆和电脑相连并上电，**然后双击左边垂直导航栏中之前创建好的串口会话图标**，如果没问题，则会打开一个黑色背景的窗口：

![正确打开串口会话](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/mobaxterm-intro-3-1.png)

至此串口会话配置完成，但为了能够 **在窗口中正确地显示换行**，还需要对会话进行设置，具体步骤如下图所示：

![修改串口换行显示1](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/mobaxterm-intro-4.png)

![修改串口换行显示2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/mobaxterm-intro-5.png)

- 在打开的窗口中任意地方鼠标右击，在弹出的选项中点击 ***Change terminal settings...*** 
- 然后在弹出的窗口中勾选 ***Implicit CR in every LF*** 复选框

::: tip Implicit CR in every LF 选项含义
由于板卡上的测试程序是使用 **`"\n"(LF)`** 进行换行输出的，但是Win下换行格式是 **`"\r\n"(CR LF)`** ，而且前面创建的串口会话时使用的内置串口引擎是PuTTY，所以需要设置PuTTY在每次接收到 **`"\n"(LF)`** 时在其前面隐式添加 **`"\r"(CR)`** ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。
:::

在打开串口会话后，还需要确认一些拨码开关的设置位置是否正确。具体来说：需要先按动自锁电源按键 **`PWR`** 以关闭电源，然后确认FPGA核心板的启动模式选择拨码开关 **`FPGA-BOOT`** 已经拨到了 **`FLASH`** 档位，表示此时FPGA核心板从自己板载的Flash中加载硬件系统。因为FPGA核心板在发给同学们之前已经将访存必须的FPGA侧的硬件系统固化在了核心板板载的Flash上，所以需要将该档位设置到 **`FLASH`**。具体档位含义在拨码开关右侧的白色丝印上可以找到：

![FPGA核心板启动模式设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/uart-3.png)

#### 板卡复位
确认完FPGA启动模式设置成 **`FLASH`** 后，按照上面 [安装串口驱动](#安装串口驱动) 一节介绍的步骤再次确认下电源选择和SoC功能切换开关 **`SW1`**，**`SW2`** 和 **`HFP-MODE`** 被正确设置。接着对板卡上电并使用串口调试软件MobaXterm打开串口，最后按动SoC复位按键 **`CORE-RST`** 对SoC芯片执行一次手动复位：

![按动复位按键执行SoC复位](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/perip/v2p1/uart-4.png)

::: warning 复位功能注意事项
- 由于SoC板卡上没有 **上电自动复位电路**，所以需要同学们在板卡上电后按动复位按键 **`CORE-RST`** 执行 **一次手动复位**。
- 复位信号是通过机械开关产生的，**没有设计去抖电路**，而且FPGA核心板侧复位 **异步于** SoC板卡侧复位，如果SoC板卡的复位在FPGA核心板复位之前完成，则会由于访存请求得不到响应而卡死，现象是串口只输出 `Loading program size ...` 。**此时只需再次按动板卡上的复位按键 `CORE-RST` 即可**。
- 复位按键的按动时间可以长一些，以产生稳定的低电平复位信号。
- 如果按动 **`CORE-RST`** 多次都没法正确启动程序，则可以先按动FPGA侧的复位按键 **`PS-RST`**，然后等待 **`PL-LED`** 灯亮起后，再按动 **`CORE-RST`**。

<!-- fpga-rst.png -->
:::

当复位按键 **`CORE-RST`** 被按下后，如果一切设置都正确的话，串口会打印出RT-Thread程序的加载和执行过程。串口打印出 **`msh />`** 之后会停止，并开始等待用户输入。同学们可以直接使用键盘在窗口中键入命令。比如输入 **`help`** 会打印RT-Thread支持的命令，输入 **`list_timer`** 则会打印RT-Thread正在运行中的所有定时器。和其他shell一样，**`msh`** 在键入命令时也支持tab键补全：

![运行RT-Thread测试程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/rtthread.png)

::: warning RT-Thread程序运行异常
有的同学核在打印出 **`msh`** 后，会出现无法在窗口中键入命令，或者多次复位后程序运行不一致，不稳定的异常。这种异常往往是处理器核存在 **时序相关问题**，可以尝试多次复位或者降频。
:::

::: info 丰富应用实例
星空板卡上面有不少同学的核能够启动Linux，比如唐浩晋同学设计的处理器核。当时他参加一生一芯四期的时候还是中国科学院大学电子信息工程的一名大三学生，他在自己的核上成功启动了Linux并运行了应用程序([视频](https://www.bilibili.com/video/BV1CL411X7wV/))：

![启动Linux并运行程序](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/app-1.png)
:::

至此，上电运行RT-Thread程序的所有步骤就已经全部介绍完毕了。后面将会介绍一些更深入的内容。

### 程序烧写
这一章节主要介绍如何将程序下载到板卡板载的NOR Flash中，使得同学们自己写的核可以运行其他的应用程序，而不仅仅是RT-Thread。为了方便进行程序烧写，星空开发板集成有板载NOR Flash烧写器，可以像DAPLink一样实现 [拖拽式烧录(drag-and-drop programming)](https://daplink.io/) ，具体的软硬件原理见 [板载烧写器(HFPLink)](#板载烧写器-hfplink) 一节。

::: info 板载烧写器适用的操作系统
目前板载烧写器能够在 **Win10** 和 **Win11** 平台上正常工作，同学们需要确认下自己电脑的操作系统版本。
:::

现在开始介绍烧写程序的具体步骤：首先按下板卡的自锁电源开关 **`PWR`**，关闭板卡电源，然后在保持之前其他功能开关设置不变的情况下，仅将板卡上 **`HFP-MODE`** 的滑动开关拨码到左侧，**以使能板载烧写器功能**：

![使能板载烧写器](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfp-1-v2p1.png)

然后再次按下板卡的自锁电源开关 **`PWR`**，接通板卡电源，此时电脑会识别出一个叫做 `YSYX-HFPLnk` 的移动U盘，容量为 `15.8MB` 左右。

![识别出U盘](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfp-2.png)

接着将想要烧写的bin格式的应用程序拷贝到 `YSYX-HFPLnk` 这个U盘中，然后等待拷贝完成。在拷贝的同时板载烧写器旁的蓝色LED会一直闪烁。当拷贝完成时，蓝色LED会常亮。项目组已经在 [StarrySky-res](https://github.com/maksyuki/StarrySky-res) 中 `software/v1p3/ysyx2` 和 `software/v1p3/ysyx3` 目录下提前准备了一些已经编译好的测试程序，前者存放有二期核的程序，后者存放有四期核的程序，**由于串口驱动的不同，二期和四期的测试程序不通用**。这些程序可以供同学们拷贝到 `YSYX-HFPLnk` 中进行烧写。当拷贝完成后，程序烧写也就完成了，此时关闭板卡电源，并重新将 **`HFP-MODE`** 的滑动开关拨码到右侧，然后上电就可以运行新的程序了。

::: info 更新板载烧写器固件
板载烧写器默认已经提前烧录有系统固件，一般使用是没有问题的，但有时候需要对固件进行更新以修复bug或者添加新的功能，这样就需要了解更新固件的方法。目前板载烧写器上使用的主控是CH32V103，这个MCU是支持ISP程序更新的，但是需要配合 **WCHISPTool** 一起使用。所以为了更新固件，首先需要安装 **WCHISPTool** 这个软件。同学们可以访问这个 [网址](https://www.wch.cn/download/WCHISPTool_Setup_exe.html) 来下载 **WCHISPTool** 并完成安装。

当按照指示安装完 **WCHISPTool** 后，双击打开该软件，可以看到如下界面：

![WCHISPTool界面](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfp-3.png)

然后将开发板切换到 [程序烧写模式](#程序烧写)，此时上电后，电脑会识别出一个名为 `YSYX-HFPLnk` U盘，这个上面已经介绍过了。在这个模式下，需要2个步骤才能让CH32V103进入到ISP下载模式：
- 先按住板载烧写器的系统复位按键 **`NRST`**，然后再按住板载烧写器的BOOT模式按键 **`BOOT`**，使得CH32V103进入复位状态并设置启动模式为ISP下载模式 **(BOOT=1，也就是按下BOOT按键)**
- 接着释放板载烧写器的系统复位按键 **`NRST`**，最后释放板载烧写器的BOOT模式按键 **`BOOT`**，此时CH32V103退出复位状态并进入ISP下载模式

![板载烧写器复位和模式选择按键位置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfplink-fireware-update-v2p1.png)


**`NRST`** 和 **`BOOT`** 这两个按键旁边有白色丝印指示，比较容易找到。当按照上面步骤操作完之后，WSHISPTool会自动识别出 `CH32V103` 这个芯片型号：

![识别出CH32V103](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfp-4.png)

当识别出 `CH32V103` 后，同学们点击 ***用户程序文件*** 后的文件图标选择需要更新的固件 **(hex格式)**，项目组已经在 [StarrySky-res](https://github.com/maksyuki/StarrySky-res) 中 `firmware/v1p3` 目录下准备好了该固件。当选择完需要更新的固件后，点击 ***下载*** 按钮并等待更新完成即可：

![下载固件](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfp-5.png)

最后再按一下板载烧写器的系统复位按键 **`NRST`** 就可以恢复到正常烧写器工作模式了。
:::

::: info 两线串行调试接口固件更新
实际上，板卡的板载烧写器还支持WCH自定义的**两线串行调试接口协议**，可以使用支持该调试接口的下载器比如WCH-Link来更新固件，板卡通过测试点的方式上引出了该接口，有需要的同学可以自行取用：

![两线调试接口测试点](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/tool/hfplink-2wire-v2p1.png)

:::

::: warning 固件更新
- 更新固件不是必须的，**因为板卡在发给同学们之前已经烧录过固件了**，上面介绍更新固件的方法，是为了方便将板卡发给同学们之后，还能够便捷地对烧写器功能进行升级用的。
- 目前板载烧写器的固件 **不支持连续拷贝烧写功能**，也就是说每次烧写完成之后 **都需要复位并重新进入ISP模式才能开始新的一次应用程序烧写**。
- 有时候在更新固件点击 ***下载*** 之后，**WCHISPTool** 软件提示存在 **写保护**。此时可以先点击上面的 **解除保护**，之后再重复上面更新固件操作即可。
:::

至此，程序烧写内容就全部介绍完毕，下面将开始介绍板卡的硬件设计，为后面的FPGA开发做好铺垫。

### 硬件设计
这个章节主要会详细地介绍星空V2.1版本的硬件设计，先简单概括下V2.1版本板卡的硬件设计上的主要特点：
- 使用Cadence Orcad和Allegro设计，设计时间： **三周**，板卡机械尺寸：**11.18x9.59cm**，板厚 **1.6mm**
  - 采用 **八层** 叠层设计，叠层结构： **(TOP-GND02-ART03-PWR04-GND05-ART06-GND07-BOT)** 
  - 使用沉金表面和 **盘中孔+过孔塞树脂** 工艺，进行四线低阻测试
  - 外层铜厚 **1** 盎司，内层铜厚 **0.5** 盎司，沉金厚度 **1u''**
- 板卡等长设置：
  - ChipLink：参照 **tx_clk** 和 **rx_clk** 做 **0/50mil** 组内等长
  - 2个SDIO参照clk做 **0/30mil** 组内等长
  - USB2.0参照clk做 **0/50mil** 组内等长
  - 5对USB差分信号按照 **0/25mil** 做对内等长
  - JTAG信号按照 **0/25mil** 做对内等长
  - AUDIO信号按照 **0/25mil** 做对内等长
  - SDRAM信号按照 **0/250mil** 做对内等长
  - 24对扩展口的PL端差分IO信号按照 **0/25mil** 做对内等长

- VGA和所有晶振时钟输出端做了 **包地处理**，远离高频和模拟信号，并均参考了完整地。
- 模拟地做了 **单点隔离**，各芯片均做了完备的电源滤波，电源网络使用覆铜连接，保证电源供电稳定，并打了足量的 **回流地过孔**。

板卡硬件相关设计资料如下图所示：

![板卡硬件原理图设计](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/pcb-sch.png)

![板卡硬件PCB布局布线](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/pcb-layout.png)

![板卡硬件3D结构](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/pcb-3d.png)

在完成了原理图和PCB布局布线设计后，该版本硬件设计又经过了多轮的DRC检查，CAM350通短路检查和差异对比检查。在物料采购环节完成后，该版本硬件正式导入到小批量生产流程，开始交由厂商进行PCB生产和SMT贴片。其中星空V2.1版本板卡的3D贴片图如下所示：

![板卡顶层贴片](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/board-smt-top.png)

![板卡底层贴片](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/board-smt-bot.png)

::: info 板卡设计资源文件
- 项目组在Github上 **开源了星空板卡各个版本的原理图，PCB设计，BOM和制造文件等内容**，同学们可以访问Github仓库 [StarrySky](https://github.com/maksyuki/StarrySky) 来获取相关设计资料。其中：
- 星空V2.1的PDF版本原理图：[STARRYSKY_SCH.pdf](https://github.com/maksyuki/StarrySky/blob/main/CAD/V2.1/STARRYSKY_SCH.pdf)
- 星空V2.1的PDF版本PCB布线图：[STARRYSKY_PCB.pdf](https://github.com/maksyuki/StarrySky/blob/main/CAD/V2.1/STARRYSKY_PCB.pdf)
:::

下面将结合原理图详细介绍板卡的硬件设计。并按照 **电源网络**，**SoC电路**， **FPGA PS侧外设** 和 **FPGA PL侧外设** 的顺序依次介绍。

#### 电源网络
SoC板卡的电源网络拓扑结构如下图所示：

![板卡电源网络拓扑](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/res/v2p1/power-tp.png)


从上图可以看到，整个板卡统一使用5V的电源供电，为了灵活地控制外设的供电，板卡上设计有三路电源输入：
- SoC的USB串口的5V电源
- FPGA的PS侧的USB串口的5V电源
- 外置USB接口的5V DC电源适配器电源

板卡通过 **电源选择开关** 来选择上面三路中的一路供给板卡。而5V电源在经过 **自锁电源开关** 后，会通过三个LDO芯片分别降压成3.3V，1.8V和0.9V供SoC和FPGA各个外设使用。原理图如下：

![电源输入接口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pwr-sck.png)

其中 USB_PWR， PS_PWR，DC_PWR为三个标准Type-C母座，且USB_PWR上引出电源网络 **`5V_VBUS1`** 和SoC串口需要的差分输入信号 **`MAIN_DP/DN`**，PS_PWR上引出电源网络 **`5V_VBUS2`** 和FPGA的PS侧串口需要的差分输入信号 **`PS_UART_DP/DN`**。DC_PWR由于只用于供电，所以在接口上只引出电源网络 **`5V_DC`**。

::: info Type-C母座上CC引脚接5.1K下拉电阻的作用
Type-C上的CC引脚全称为 [Configuration Channel](https://en.wikipedia.org/wiki/USB-C) ，用于对线缆的插入进行检测，识别线缆方向，配置工作模式 **(电流，PD模式)**，协商建立DFP **(下行端口，主机端)** 和UFP **(上行端口，设备端)** 身份等。相对于PC上位机来说，板卡的Type-C接口是做作为设备端接口的，也就是具有UFP身份。而协议规定UFP的 **`CC1`** 和 **`CC2`** 引脚都需要一个下拉电阻 **`Rd=5.1KΩ`**。
:::

上面介绍的三路电源会经过PWR-SEL1和PWR-SEL2这两个 [单刀双掷(SPDT)滑动开关](https://en.wikipedia.org/wiki/Switch#Contact_terminology)，通过这两个开关的滑动组合，可以选择出一路电源供给 **自锁电源开关PWR-LOCK**。PWR-LOCK是一个 [双刀双掷(DPDT)滑动开关](https://en.wikipedia.org/wiki/Switch#Contact_terminology)，这里只用到该开关的单侧切换位。自锁开关未向下锁定时，其会将 **`2`** 和 **`1`** 引脚进行导通，电源网络此时未连通。而当向下按动自锁电源开关并锁定后，PWR-LOCK会导通其 **`2`** 和 **`3`** 引脚，使得一路电源经过自锁开关进入到后面的电源网络中。此时电源会经过双向TVS二极管SMAJ5.0CA和2A保险丝这两个保护器件，并通过多个电容进行滤波，最终得到稳定的5V数字电源 **`5V_IN`**：

![电源选择开关](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pwr-sel.png)


之后电源 **`5V_IN`** 会进入三个LDO芯片RT2515H中被降压成三种电源3.3V，1.8V和0.9V。其中RT2515H是一款高性能的电压调节器，支持最低200mV的输入输出压降差和最大2A的电流输出。通过配置其 **`ADJ`** 引脚上的电阻值可以产生不同电压的电源输出。另外3.3V电源网络 **`VCC_3V3`** 还连接有红色LED，用于指示电源电路是否正常工作：

![电源转换电路](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pwr-ldo.png)

#### SoC 核心电路
一生一芯四期SoC采用LQFP144规格的封装，为了保证整个芯片供电的稳定性，IC后端在做Floorplan时每隔一些功能引脚就会放置一组数字电源引脚 **`VDDIO`**，**`VDD`** 和 **`GND`**。其中 **`VDDIO`** 为数字IO电源引脚，电压为3.3V。而 **`VDD`** 为内核电源引脚，电压为0.9V。**`GND`** 为数字地引脚。最后所有电源引脚都连接有 **`100nF`**，以滤除一些干扰杂波。该部分原理图如下所示：

![SoC核心电路局部](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-core.png)

#### SoC 板载烧写器(HFPLink)
板卡SoC部分搭载了一个名为 **HFPLink** 的NOR Flash烧写器。实际上 **HFPLink** 是项目组自行设计的一款Flash烧写器，名字中 **HFP** 全称为 **High-speed QSPI-Flash Programmer**，又因为功能上和 **DAPlink** 一样支持拖拽式烧录，所以仿照其命名方式增加后缀 **Link**，最终组合成 **HFPLink** 这个名字。HFPLink的拖拽式烧录的核心原理是利用主控CH32V103的USB从机通信功能，使用软件模拟出一个USB的可移动设备 **(USB的仅数据传输协议)**，然后将PC上位机对USB可移动设备的bin文件拷贝 **重定向** 为写NOR Flash数据扇区的操作。其中有很多的细节需要处理，比如FAT16文件系统的模拟，扇区数据的划分等，其原理图如下所示：

![板载烧写器](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-hfplink.png)

HFPLink部分原理图其实就是CH32V103的最小系统再外扩了一个NOR Flash **(SPI协议)** 和USB接口，核心的功能其实是通过软件实现的。

#### SoC 拨码开关和复位按键
板卡SoC部分设计有三个微动拨码开关，一个是4位拨码的PLL-SEL，一个是6位拨码的CORE-SEL，一个是8位拨码的CLK-SEL。其各自的功能前面已经介绍过了，这里就不再赘述。两个拨码上的信号线都上拉接1.8V，**`5KΩ`** 的下拉电阻接地，这样在拨码拨在 **`OFF`** 一侧时，信号线上为低电平。而当拨码拨在 **`ON`** 一侧时，通过电阻分压，信号线上为高电平：

![SoC拨码开关](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-sw.png)

板卡上SoC部分电路设计有一个复位按键 **`CORE-RST`**，复位按键的输出接入到TPS3808G01这个监控芯片的 **`MR`** 引脚。当复位按键按下时，**`MR`** 引脚为低电平，TPS3808G01能够识别出该引脚上的低电平，并产生稳定的SoC低电平复位信号 **`SYS_RST`**：

![SoC复位按键](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-rst.png)

#### SoC USB转串口和TF接口
板卡上SoC的串口信号线是通过CP2102芯片转换成一对USB差分信号并进行传输的，该部分原理图如下所示：

![SoC USB转串口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-uart.png)

上图中的 **`0R`** 电阻是用来进行阻抗匹配用的，而其他部分电路组成了CP2102的最小系统。另外板卡上SoC的SPI接口还通过 **`SPI_CS1`** 这个片选信号扩展了一个TF母座，可以使用SPI协议读写TF卡：

![SoC TF接口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-tf.png)

#### SoC 功能切换开关
SoC部分电路的功能切换开关是为了实现SoC的USB转串口和HFPLink能够共享一个Type-C接口，并同步切换NOR Flash的工作状态而设计的。这个功能是通过一个名为HFP-SW的单刀双掷滑动开关进行控制的。当HFP-SW拨动使得其 **`1`** 和 **`2`** 引脚导通时，**`PROG_SW_SEL`** 网络电平为低，此时所有模拟开关WAS3157B的 **`6`** 脚均为低电平，这样会将每个模拟开关 **`1`** 和 **`4`** 引脚上的信号网络导通。而当HFP-SW拨动使得其 **`3`** 和 **`2`** 引脚导通时，**`PROG_SW_SEL`** 网络电平为高，此时所有模拟开关WAS3157B的 **`6`** 脚均为高电平，会将每个模拟开关 **`3`** 和 **`4`** 引脚上的信号网络导通：

![SoC功能切换开关](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-func-sw.png)

之所以能设计这样的电路是因为 **HFPLink和SoC的USB转串口不会同时工作**，所以可以复用一个Type-C接口上的差分信号 **`MAIN_DP/DN`**。而且当HFPLink烧写NOR Flash时，需要断开SoC连接NOR Flash的SPI信号线，反之当SoC需要从NOR Flash中取指执行程序时，也需要断开HFPLink连接NOR Flash的SPI信号线。也就说需要在HFPLink和SoC正常工作这两个状态下 **同步切换** 2个差分+4个SPI信号共6个信号线的通断状态。

#### SoC LPSDRAM颗粒
板卡上SoC的还外接了一块容量为32MB的LPSDRAM颗粒，该部分原理图如下所示：

![SoC LPSDRAM颗粒](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-soc-sdram.png)

#### PS启动模式和复位按键
ZYNQ芯片支持4种启动模式，分别是SD，Flash，JTAG和NAND。由于硬件设计上有PS MIO管脚的复用，所以目前星空开发板仅支持前3种启动模式，该部分原理图如下所示：

![SoC启动模式和复位按键](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-ps-boot-rst.png)

通过组合拨码开关FPGA-BOOT的不同拨码，可以实现前面介绍的3种启动模式。具体的拨码位置所对应的启动模式在该拨码开关旁的白色丝印处有标注。另外，板卡上还有PS侧的两个低电平复位按键。这两个按键都能够实现对ZYNQ的PS侧系统的复位功能，但是对PS子系统的复位范围稍有区别，具体差异可以查看ZYNQ的应用手册。

#### FPGA JTAG调试接口
板卡上搭载了一个5X2P的牛角插座，用于连接配件中的FPGA JTAG调试器。这个接口是用来实现FPGA硬件系统的下载，固化和调试用的，其原理图如下所示：

![FPGA JTAG调试接口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-ps-jtag.png)

#### PS UART
板卡上FPGA PS侧也搭载了一个USB转串口芯片CP2102，用于实现PS侧的串口数据通信。由于PS侧的串口位于BANK500的 **`MIO8~9`**，而该BANK的电平标准为3.3V，所以可以将串口信号线连接到Type-C接口上：

![PS UART](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-ps-uart.png)

#### PS SDIO
板卡上FPGA PS侧设计有一个SDIO接口，该接口信号位于BANK501的 **`MIO40~44`**。由于该BANK的电平标准为1.8V，所以需要通过一个电平转换芯片TXS010E将1.8V的信号转换成3.3V电平标准才能满足TF插槽的使用。该SDIO接口可以用于固化FPGA核心板的硬件系统或者存储应用数据，该部分原理图如下所示：

![PS SDIO](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-ps-tf.png)

#### PS USB HOST
板卡上FPGA PS侧搭载有一个兼容USB2.0的驱动芯片USB3320C，用于实现Host模式下的数据通信。该芯片支持高速ULPI标准接口，能通过该接口和FPGA PS侧的MIO之间进行高速数据传输。该接口信号位于BANK500的 **`MIO28~39`**，并使用标准的USB接口 **(Type-A)** 连接外设，其原理图如下所示：

![PS USB HOST](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-ps-usb.png)

#### PS LED和KEY
板卡上FPGA PS侧还搭载了1个蓝色LED和2个按键，这些信号位于BANK500的 **`MIO51~53`**。由于MIO51的电平为1.8V，达不到LED的导通阈值电压，所以外接一个型号为RUM001L02T2CL的NMOS管做驱动。当 **`PS_MIO51`** 为高电平时，LED是点亮状态。反之当 **`PS_MIO51`** 为低电平时，LED会熄灭。另外两个按键均采用低电平触发，所以只有当 **`PS_MIO52(53)`** 上检测到低电平时，才表示有按键按下：

![PS LED和KEY](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-ps-led-key.png)


#### PL VGA
板卡上FPGA PL侧搭载了一个标准VGA接口，可以用于图片或者视频的显示。数据信号线的颜色模式是RGB444，并且RGB每路数据信号均通过 **电阻网络** 实现DAC。该部分原理图如下所示：

![PL VGA](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-vga.png)

::: info 电阻网络阻值计算
VGA标准规定接口的`VGA_R`，`VGA_G`和`VGA_B`管脚上传输的是模拟信号，范围为`0~0.714V`。每路模拟信号上的电压为`0V`时表示无色，为`0.714V`表示满色。由于采用的是RGB444的模式，所以每路上有2^4=16级颜色层次。比如对于`VGA_R`这一路，设组合后的输入信号 VGA_R3~VGA_R0 的值为 $VGA_R[3:0]$，设 `VGA_R`网络的电压值为 $V_{R}$，如果想要正确显示`VGA_R`这一路的颜色，只需满足：
- 当 $VGA_R[3:0]=4'b0000$ 时，$V_{R}=0V$
- 当 $VGA_R[3:0]=4'b1111$ 时，$V_{R}<=0.714V$
- 当 $VGA_R[3:0]$ 取 $[4'b0000, 4'b1111]$ 中的任意一个值时，对于任意两个 $VGA_R[3:0]_1 <= VGA_R[3:0]_2$，均满足 $V_{R1}<=V_{R2}$

由此可见，VGA_R3~VGA_R0 上的电阻权值是不一样的。这个具体阻值是可以通过电路仿真软件计算得到的，比如可以免费使用的 [MultisimLive](https://www.multisim.com/)：

![MultisimLive仿真VGA电阻网络](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/vga-dac-sim.png)

免费版本的 **MultisimLive** 对搭建电路的规模有限制，但是对这里计算电阻网络阻值任务来说是完全够用的。
:::

#### PL PS/2
板卡上FPGA PL侧搭载了一个PS/2键盘母座，用于连接键盘实现按键输入功能。由于PS/2接口电平标准为5V，所以需要通过一个电平转换芯片TXS0102将PS/2信号转换成1.8V的标准。该部分原理图如下所示：

![PL PS/2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-ps2.png)

#### PL RTC和EEPROM
板卡上FPGA PL侧搭载了支持I2C协议的RTC芯片PCF8563B和EEPROM芯片AT24C64，I2C总线通过两个 **`4.7KΩ`** 的电阻上拉到3.3V电源网络。该部分原理图如下所示：

![PL RTC和EEPROM](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-i2c.png)

#### PL SPI Flash
板卡上FPGA PL侧搭载了一个支持1.8V NOR Flash芯片的插座，可以使用SPI标准四线或者QSPI协议对内置其中的NOR Flash芯片进行读写，该部分原理图如下所示：

![PL SPI Flash](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-spi.png)

#### PL SPI TFT-LCD
板卡上FPGA PL侧设计有一个8pin的FPC插座，可以插入配件附带的1.14寸TFT-LCD屏幕或者其他分辨率的TFT-LCD屏幕，该部分原理图如下所示：

![PL SPI Flash](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-tft.png)

::: warning
8pin SPI接口的TFT-LCD屏幕有两种管脚定义顺序，使用其他尺寸TFT-LCD屏幕时需要自行确认该屏幕的管脚定义是否和板卡上的FPC插座管脚顺序一致。
:::

#### PL SPI TF
板卡上FPGA PL侧设计有一个支持3.3V电平标准的TF卡插槽，可以使用SPI标准四线协议对TF卡进行读写，该部分原理图如下所示：

![PL SPI TF](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-tf.png)

#### PL UART
板卡上FPGA PL侧也搭载了一个USB转串口芯片CP2102，用于实现PL侧的串口数据通信。由于PL侧电平为1.8V，所以需要使用电平转换芯片将串口转换成3.3V标准，然后再将3.3V的串口信号线连接到Type-C接口上：

![PL UART](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-uart.png)

#### PL I2S
板卡上FPGA PL侧设计有一个支持I2S标准的音频外设。该外设使用的是ES8388这款低功耗的立体声编码器芯片。该部分电路支持使用I2S协议实现音频输入和音频输出两种功能。音频输出可以直驱耳机，同时板载有双路功率放大器，**支持外置驱动两个3W扬声器进行双声道音频输出**，其原理图如下所示：

![PL I2S](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-i2s.png)


#### PL LED和KEY
板卡上FPGA PL侧搭载了2个蓝色LED和1个按键，这部分电路和PS侧的LED和按键是一样的，这里就不再赘述了。该部分原理图如下所示：

![PL LED和KEY](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-led-key.png)

#### PL WS2812
和FPGA PS侧一样，板卡上FPGA PL侧也串联了4个WS2812C炫彩灯珠，该部分原理图如下所示：

![PL WS2812和UCLK](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-ws.png)

#### PL 外设切换开关
板卡上FPGA PL侧设计有一个 **外设切换开关**，这个切换开关的工作原理和 [SoC 功能切换开关](#soc-功能切换开关) 的类似，其主要功能是复用VGA和PS/2接口，可以切换VGA和PS/2是和SoC片上的IO相连还是和FPGA的PL侧IO相连，这样 **可以让FPGA PL侧能够搭载尽可能多的外设**。

![PL 外设切换开关](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-func-sw.png)

#### PL 外置晶振和BANK电压设置
SoC底板设计有1个1.8V的50MHz有源晶振，用于为FPGA的PL侧提供时钟基准。同时设置Bank13，Bank33，Bank34和Bank35的电源为1.8V，该部分原理图如下所示：

![PL 外置晶振和BANK电压设置](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-pl-pwr-clk.png)

#### BTB 100P接口
SoC底板背面设计有四个型号为DF40C-100DS的100P BTB母座，用于连接FPGA核心板上的各个IO并为FPGA核心板提供电源，该部分原理图如下所示：

![BTB 100P接口](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/sch/v2p1/sch-btb.png)


至此，板卡的所有硬件设计已经介绍完毕，下面将介绍FPGA部分内容。

::: info FPGA选用Xilinx ZYNQ系列的原因
- 市面上售卖的Xilinx ZYNQ系列开发板相比其他型号FPGA数量要多些，这样需要可参考的软硬件资料也会比较容易。
- ZYNQ PS侧的外设控制器可以通过EMIO的方式路由到PL侧的IO上，方便与项目组自行开发的IP功能作对比验证。
- 该版本板卡所搭载的FPGA核心板不仅为SoC提供了必需的ChipLink访存支持，也是 **为了下一代SoC的FPGA原型验证提供板卡支持**。为了实现这个目标，需要FPGA器件有高效，稳定的软件开发工具和IP组件支持。项目组之前在做FPGA选型时也试用过多款国产FPGA，但是软件开发环境功能上相比Xilinx的 **Vivado+Vitis** 还有欠缺，故最终项目组选用了Xilinx ZYNQ系列FPGA器件。
::::

### FPGA开发
这个章节主要将会介绍如何设计并驱动板卡FPGA端的众多外设，该部分代码在 **StarrySky-res** 仓库中的`fpga/v2p1`里面([代码地址](https://github.com/maksyuki/StarrySky-res/tree/main/fpga/v2p1))。项目组使用的FPGA开发工具软件版本是 **`Vivado 2022.2`** 和 **`Vitis IDE 2022.2`**。

::: info Vivado+Vitis 软件使用和ZYNQ开发入门
本章节内容需要同学们熟练掌握 **Vivado+Vitis** 工具的使用和ZYNQ开发流程，网上已经有很多比较好的，公开的ZYNQ入门学习资料了，比如 [ZYNQ领航者V2开发板](http://47.111.11.73/docs/boards/fpga/zdyz_linhanz(V2).html)，有需要的同学可以自己下载下来学习。
:::

#### PL侧外设集合测试1
这里主要介绍I2C，SPI，LED，KEY和UCLK这5个PL外设的功能。该部分代码在`fpga/v1p3/pl_i2c_spi_led_uclk`，具体实现功能：使用I2C总线访问并配置RTC芯片PCF8563，然后不停读取其三个时间寄存器的值，最后使用ILA对该寄存器值进行采样查看。使用SPI总线发送 **`0x9F`** 指令给NOR Flash，并使用ILA对读取的设备ID进行检查。LED会每隔1s翻转闪烁，按键则用作系统复位信号`rst_n`输入，另外还会在UCLK引脚上输出 **1Hz的波形**。

同学们基于项目组提供的代码和约束文件自行创建Vivado工程并生成bitstream文件，不过在下载程序之前还需要对板卡进行一些硬件操作：
- 将JTAG调试器插入到板卡上的牛角插座中，牛角插座有防呆设计，**仅支持单方向输入**，插入时需要让插头的凸出和插座缺口恰好重合。最后将JTAG调试器另一端插入到PC的USB接口上 **(需要在板卡未上电时操作)**。
- 将FPGA启动模式开关 **FPGA-BOOT** 从 **`FLASH`** 切换到 **`JTAG`**，并确认外设切换开关 **PERIP-MODE** 滑动到下侧，具体开关设置如下所示：

![PL外设开关设置1](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-perip-1.png)

::: warning JTAG调试器和板卡上/下电顺序
因为JTAG调试器的插头 **不像USB接口那样支持热插拔设计**，所以同学们不要在板卡上电的情况下，插拔JTAG调试器的的插头到牛角插座上，否则有可能损坏FPGA的JTAG接口。一个合理的操作顺序是先插入JTAG调试器插头，**板卡再上电**：
- 将JTAG插入到牛角插座中
- 将JTAG另一端插入到PC的USB口上
- 打开板卡的电源

反之，如果需要拔出JTAG调试器，则要 **先确认板卡已经下电**：
- 关闭板卡电源
- 将JTAG另一端从PC的USB口上拔出
- 将JTAG插头从牛角插座中拔出
:::

当确认JTAG调试器已经和板卡连接好，并且启动模式和功能切换开关都设置正确后，再给板卡上电。然后使用Vivado软件打开 **Hardware Manager** 并下载bitstream到板卡。下载完成后，板卡上PL侧的LED开始闪烁：

![PL LED闪烁](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-led.png)

并弹出两个ILA窗口 **hw_ila_1** 和 **hw_ila_2**。其中 **hw_ila_1** 信号窗口中有RTC控制器的三个8位时间寄存器`hour[7:0]`，`minute[7:0]`和`second[7:0]`。在该窗口中点击两次 **运行采样** 按钮，可以得到下面两个波形:

![RTC ILA第一次采样](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-rtc-ila-1.png)

![RTC ILA第二次采样](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-rtc-ila-2.png)

对比上面两个波形可以发现，两次采样时`minute[7:0]`和`second[7:0]`寄存器的值不一样，实际上这两个寄存器的两次采样的差值表示了 **这两次采样的时间间隔**。这个和自行统计的采样间隔作对比，是可以说明RTC控制器是正常工作的。

然后切换到 **hw_ila_2** 这个窗口，该信号窗口中显示有SPI控制器相关信号。为了捕获NOR Flash返回的设备ID波形，需要先设置`u_spi_ctrl/rd_flag`的上升沿作为触发信号，并点击 **运行采样** 按钮，此时ILA会显示正等待触发：

![SPI ILA等待采样触发](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-spi-ila-1.png)

然后按下板卡上的用户按键 **PL_KEY** 对PL进行复位：

![PL KEY](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-key.png)


此时可以看到ILA采样出了波形，并且`rd_data[7:0]`在读数据结束后返回了设备ID`0xEF17`的低8位`0x17`：

![SPI ILA采样结果](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-spi-ila-2.png)


#### PL侧EEPROM测试
这里主要介绍使用I2C总线对EEPROM芯片AT24C64进行读写测试，并使用ILA采样相关寄存器的值。该部分代码在`fpga/v1p3/pl_eeprom`。另外所有滑动开关的设置和上面 [PL侧外设集合测试1](#pl侧外设集合测试1) 的完全一致。

同学们需要自行创建完工程并生成bitstream文件，并将bistream下载到板卡上。成功下载完后Vivado会弹出ILA波形窗口，此时需要切换到 **hw_ila_1** 这个窗口，该信号窗口中显示有EERPOM控制器相关信号。为了捕获读写EEPROM芯片的波形，需要将`u_e2prom_ctrl/i2c_data_r[7:0]=215`作为触发条件，并点击 **运行采样** 按钮，此时ILA会显示正等待触发：

![EEPROM ILA等待触发](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-eeprom-ila-1.png)

然后同上面测试一样，需要按下板卡上的用户按键 **PL_KEY** 对PL进行复位，这样ILA波形窗口中就采样到了波形：

![EEPROM ILA采样结果](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-eeprom-ila-2.png)

#### PL侧外设集合测试2
这里主要测试的是VGA，PS/2和WS2812C这3个PL外设的功能。该部分代码在`fpga/v1p3/pl_vga_ps2_ws2812`，具体实现功能：驱动VGA在屏幕上显示彩条，当按下PS/2键盘的 **`A`** 键后，屏幕显示绿色，而当按下键盘上的其他按键后，屏幕会恢复显示彩条。运行该测试需要在板卡上插入VGA数据线和支持PS/2模式的键盘：

![VGA和PS/2线与板卡连接](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-vga-kdb.png)

::: warning VGA和PS/2注意事项
VGA和PS/2接口 **均不支持热插拔**，同学们需要在板卡上电前将VGA和PS/2线缆插入到板卡上，然后需要等待板卡下电后再从板卡上拔出VGA和PS/2线缆。
:::

之后同学们需要确认已经将FPGA启动模式开关 **FPGA-BOOT** 从 **`FLASH`** 切换到了 **`JTAG`**，并将外设切换开关 **PERIP-MODE** 滑动到上侧，具体开关设置如下所示：

![PL外设开关设置2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-perip-2.png)

::: warning 外设切换开关位置
注意这个测试要把外设切换开关 **PERIP-MODE** 滑动到 **上侧**，而上一个测试 **PERIP-MODE** 要滑动到 **下侧**，**这两个测试中外设切换开关的滑动位置是不一样的**。切换开关每个滑动位置对应连接的外设见 [PL 外设切换开关](#pl-外设切换开关) 部分原理图。
:::

然后像前一个测试那样，同学们需要自行创建工程并生成bistream文件，最后对板卡上电并打开 **Hardware Manager**，下载bitstream到板卡中。下载成功后屏幕上会显示彩条，此时如果按动键盘 **`A`** 键，屏幕则会切换成绿色：

![显示彩色条纹](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-vga-ps2-1.png)

![切换成绿色](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/pl-vga-ps2-2.png)

#### ChipLink硬件系统

::: info ChipLink固化
FPGA核心板在发给同学们之前已经将该部分介绍的ChipLink硬件系统固化在了FPGA板载的Flash中，同学们直接使用就可以了，不需要自己编译并下载。
:::

ChipLink是SiFive提出的一种片间低速总线通信协议 **(FPGA与SoC之间)**，主要用于对SoC发送的AXI4请求进行分片传输和重新组合，以可靠地访问FPGA上的硬件逻辑资源。本FPGA核心板上的ChipLink控制器Verilog代码由Chisel生成，并在VCS上仿真通过。具体实现上是将VCS仿真使用的`ChiplinkTop`及其子模块全部导入到一个文件中并重新命名成`ChiplinkTop.v`。因为VCS仿真时例化的`ChiplinkTop`内部有很多信号是悬空或者置常值的，所以项目组在`ChiplinkTop`之上又包装了一层`chiplink_ctrl`，然后在该模块中例化`ChiplinkTop`并置相应端口常值，最后将该模块命名为`chiplink_ctrl.v`。另外由于ZYNQ的DDR地址映射和SoC访存的地址范围不一样，所以需要对访存地址进行一个重映射，其中ZYNQ的memory地址映射如下图所示：

![ZYNQ OCM/DDR的地址映射](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-addr-map.png)

其中OCM全称是 **On-Chip-Memory**，内置在ZYNQ芯片中，可以作为PS侧双核CPU之间低访问延迟的共享内存，同时OCM也是双核CPU执行APP的内存，**所以需要确保四期SoC的访存地址被正确映射到DDR空间，否则一旦重映射到OCM空间，可能会导致PS侧运行的程序被覆盖掉**。从上图我们可以看到，ZYNQ支持`0x0010_0000 - 0x3FFF_FFF`共1GB的地址范围，而我们提供给大家的ZYNQ核心板只板载了512MB的DDR3。为了简化实现，我们将四期SoC起始地址为`0x8000_0000`的访存请求 **重映射** 到`0x0010_0000`，这样只要保证PS端的CPU需要访问DDR时其访存地址与SoC的访存地址不重合即可，重映射代码如下：

```verilog
assign io_axi4_0_awaddr = aw_addr - 32'h8000_0000 + 32'h10_000;
assign io_axi4_0_araddr = ar_addr - 32'h8000_0000 + 32'h10_000;
assign chiplink_cpu_int = 1'b0;
```

这样将`chiplink_ctrl`添加到 **Block Design** 中并连接到ZYNQ系统上就完成了硬件设计，最终搭建好的硬件系统如下图所示：

![ChipLink硬件系统Block Design](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-bd.png)


其中，**ZYNQ Processing System** 使能了AXI HP从机接口、`FCLK_CLK0`、`FCLK_CLK1`时钟输出和`FCLK_RESET0_N`复位输出。其中`FCLK_CLK0`设置时钟频率为25MHz，用于连接`chiplink_ctrl`的输入时钟。`FCLK_CLK1`设置时钟频率为100MHz，用于 **AXI Innterconnect** 进行AXI主机通信。另外两个时钟分别接入到各自的 **Processor System Reset** 产生复位信号。最后再接入一个ILA核以采样`chiplink_ctrl`的AXI4信号。

之后还需要对`chiplink_ctrl`模块的管脚进行约束，由于`chiplink_ctrl`模块的管脚数比较多，需要仔细检查并确认。另外四期SoC采用的是110nm工艺，管脚的电平标准需要约束为LVCMOS33。最后还需要给`chiplink_ctrl`管脚下时钟约束，具体约束如下图所示：

![ChipLink时序约束](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-contr.png)

之后使用Vivado进行综合，布线。布线后Vivado软件报了3个时序上的Critical Warning。查阅Xilinx的 **UG906** 手册并对设计代码进行分析，项目组认为报这三个Warning主要是因为 **PS侧MCM/PLL处产生的时钟源没法在PL侧定义共有路径**，而这个对设计没有影响，可以忽略掉。

![3个时序上的Critical Warning](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-log.png)

在确认布线后Warning可以被忽略后，需要生成bitstream文件并导出硬件到Vitis IDE中，并基于该导出的硬件平台创建一个名为`Hello World`的APP工程。`Hello World`工程源码如下图所示：

```c
#include <stdio.h>
#include "platform.h"
#include "xil printf.h"
int main()
{
  init_platform();
  print("Hello World\n\r");
  print("Successfully ran Hello World application");
  printf("main addr: %p\n", main);
  while(1);
  cleanup_platform();
  return 0;
}
```

该`Hello World`测试程序主要用于初始化PS侧的系统，给PL侧提供复位/时钟信号并进行串口打印测试，最后循环在`while(1)`处等待接收PL侧发送的DDR访问请求。

接着对板卡上电，在Vitis IDE中使用JTAG调试器下载程序，并在SoC上运行mem加载的memtest程序`memtest-mem.bin`，最后使用ILA抓取上电复位后的波形。由于SoC的复位异步于FPGA核心板，所以ILA需要多次触发尝试才能够采样到正确的波形，具体波形如下图所示：

![AXI4 ILA协议采样](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-axi4-ila.png)

同时使用ILA抓取了`chiplink_ctrl`的接口波形，其一次读请求的波形如下图所示：

![ChipLink控制器 ILA采样1](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-ctrl-ila-1.png)

![ChipLink控制器 ILA采样2](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-ctrl-ila-2.png)

我们将上面ILA采样的波形与VCS仿真中的做对比，以验证我们发送给`chiplink_ctrl`的请求得到了正确处理，其中VCS仿真一次ChipLink读请求的波形如下图所示：

![ChipLink控制器 VCS仿真](https://raw.githubusercontent.com/oscc-ysyx-web-project/ysyx-website-resources/main/images/board/fpga/v1p3/chiplink-ctrl-vcs.png)

经过对比，我们确认了ILA采样的`chiplink_ctrl`波形与 **VCS上仿真的一致**，`chiplink_ctrl`能够正确处理SoC的访存请求。

## 勘误与致谢
项目组鼓励和欢迎同学们对本文档提出宝贵的意见和反馈，目前项目组使用 [Github issue](https://github.com/oscc-ysyx-web-project/ysyx-website/issues) 来追踪这些反馈，本文档致力于遵守开源软件开发中公认的最佳实践，所以当你觉得有提出的必要时，请大胆地发起issue吧！:smile:

### 致谢列表

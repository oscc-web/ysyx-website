---
title: "开发wiki"
copyright: false
breadcrumb: false
pageInfo: false
toc: false
---
## 开发入门
### 开箱检查
同学们收到板卡后，请先按照下面的列表检查板卡和配件是否齐全：
* 板卡包装盒 x1
* 开发板+FPGA核心板 **(使用网格防静电袋包装)**
* 耗材 **(使用硬质防静电袋包装)**
  * 正方形晶振 x2
  * W25Q128JVSIQ x2
* Type-C线缆x1
* FPGA JTAG烧写器和线缆x1

包装所有内容可以见下图：


### 上电测试
板卡在发放前已经提前烧录好了测试程序，可以用来检测硬件是否能够正常工作，以下wiki均采用 *** Win11专业版 版本22616.1*** 作为测试平台，Win10 和 win11均可以。

* 安装串口驱动

我们三期板卡上用的串口芯片是CP2102，所以需要提前在电脑上安装CP2102串口的驱动，否则电脑无法识别出CP2102的串口。如果大家电脑上已经安装过该驱动，则不需要再次安装。具体检查方法如下：

同学们先将配件中的绿联的mini usb线缆(黑色)的一头插入到三期PCB板卡的mini usb口中，另一头插入到电脑的USB口中，然后按下WIN+X组合键，在弹出的选项中点击 ***设备管理器*** 选项，如果 ***设备管理器--->端口(COM和LPT)*** 中显示类似下图中带有CP210x字样的端口图标，则说明串口驱动已经安装成功，不需要再安装CP2102驱动：

图片.svg
::: tip
上图端口图标后圆括号中的 COMx 后接着的数字不一定是图中的15，这个是电脑自动分配的，对测试没有影响。
:::

如果在 ***其他设备*** 选项中出现类似下图中的黄色叹号图标，则说明电脑没有安装过CP2102的驱动，需要使用我们提供的软件包安装相应的CP2102驱动：

CP2102驱动的具体安装方法如下：同学们需要先进入ysyx3_pcb_software/cp2102 driver目录中，然后双击CP2102xVCPInstaller_x64.exe来安装64位驱动。同学们的电脑如果只支持32位的话，则双击CP2102xVCPInstaller_x86.exe来安装32位驱动：


之后按照安装程序引导界面来安装驱动。当驱动安装完成后，再次使用前面介绍的方法打开设备管理器，如果在 ***端口(COM和LPT)*** 中显示出CP2102的端口号，则说明驱动安装成功。

* 安装串口调试软件

::: tip Implicit CR in every LF 选项含义
由于我们板卡上的测试程序是使用 **`"\n"(LF)`** 进行换行的，但是Win下换行格式是 **`"\r\n"(CR LF)`** ，所以需要设置PuTTY在每次接收到 **`"\n"(LF)`** 时在其前面隐式添加 **`"\r"(CR)`** ，这样才能在 Win 下正确地显示换行。这个选项与 Win，Linux 和 Mac 系统下对换行的处理方式不同有关，感兴趣的同学们可以自行上网了解相关内容。
:::


至此，板卡的硬件测试完成，下面将更加详细地介绍板卡上的各个部分。

::: info 板卡或者耗材损坏/缺失/丢失怎么办？
* 每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。
* 项目组会在板卡中额外提供若干耗材 (晶振和Flash)，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买。
:::

### 板卡介绍

#### 硬件设计

::: tip
板卡上的机械开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用带尖头的拨动。
:::

::: danger 调试注意事项
请同学们在实际操作板卡前仔细阅读并确认下面各个注意事项内容，尤其是之前没有嵌入式调试经历的同学，请务必遵守下面的各注意事项：
:::

::: danger 机械开关切换
简单说的话，就是上电后，除了三期SoC板卡和黑金FPGA核心板上的复位按钮可以按动之外，板卡的机械开关和接插件都不要带电按动和插接。带电操作可能会导致板卡的电源网络出现较大的浪涌电流，影响板卡的工作稳定性，甚至会烧坏板卡，而非正确的热插拔操作可能会使得芯片出现闩锁效应，可能会损坏芯片。
:::

::: info Custom Title

A custom information container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: note Custom Title
A custom note container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: tip Custom Title

A custom tip container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: warning Custom Title

A custom warning container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: danger Custom Title

A custom danger container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: details Custom Title

A custom details container with `code`, [link](#demo).

```js
const a = 1;
```

:::

::: info Custom info
:::

::: note Custom note
:::

::: tip Custom tip
:::

::: warning Custom warning
:::

::: danger Custom danger
:::
## 其他资源
## 常见问题
## 硅后测试

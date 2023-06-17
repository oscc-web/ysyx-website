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


::: info 板卡或者耗材损坏/缺失/丢失怎么办？
* 每个板卡在发放给学生前都会进行硬件和软件测试，若自快递签收后一周内，板卡，FPGA损坏，或者耗材有缺失，可以联系项目组更换。
* 项目组会在板卡中额外提供若干耗材 (晶振和Flash)，若消耗完毕或丢失，项目组可提供参考网购链接，由同学们自行购买。
:::

### 板卡介绍

::: tip
板卡上的机械开关选用的是 1.27mm 间距的微动拨码开关。这种开关每一位拨码比较小，直接用手不好拨动，可以使用带尖头的拨动。
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

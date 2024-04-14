---
title: Project Overview
---

## Background

The most prominent talent training problems faced by my country's computer majors are mainly reflected in the relatively saturated number of computer application developers and the lack of underlying software and hardware R&D (Research & Development) talents, **especially the serious shortage of computer processor chip design talents**.According to statistics, 20% of the first authors of ISCA (top architecture conference) papers from 2008 to 2017 were Chinese nationals (25% in the United States).But in contrast, **85% of these authors chose to be employed in the United States, and only 4% were employed in China**.A large number of students go abroad to study processor chip design and stay in the United States to work after graduation.The gap in high-level processor chip talents between China and the United States is certainly related to the industrial environment of China's processor chips in the past many years, but it is also closely related to the training methods of processor chip talents in domestic universities.

![](/res/images/project/intro-background-1.png)

The processor chip design talent crisis that our country is experiencing has directly led to an imbalance in the domestic IT talent structure, making China's huge IT industry based on foreign software and hardware system platforms. Many key technologies are "strangle" by foreign countries, and national security is threatened.To solve this problem, \*\* must base its efforts on the current pressing problems and future strategic needs of the country, advance the cultivation of urgently needed talents in the key field of processor chips, and innovate the training model\*\*.However, due to the increasing cost of high-end processor chip design and production and the increasing difficulty of related technologies, currently only a handful of universities and scientific research institutions with better conditions are able to engage in research in this area and cultivate a small number of talents.This is far from meeting the country’s urgent need for high-end talents in this field.

![](/res/images/project/intro-background-2.png)

In response to the above situation, College of Computer Science and Technology, University of Chinese Academy of Sciences (referred to as "UCAS") based on the existing theoretical classroom and experimental teaching, combined with the scientific research engineering support team of the The Institute of Computing Technology, Chinese Academy of Sciences (referred to as "ICT"), in August 2019, the "One Student One Chip" open source processor chip teaching tape-out practice project initiative was launched, **thus forming an organic connection and through-type practical training for theoretical courses, experimental seminars and practical projects in the direction of computer systems**.

:::info Extended materials
In the 1980s, there were less than 100 professors and students engaged in semiconductor-related research at thousands of universities across the United States.To this end, The U.S. Department of Defense Advanced Research Projects Agency (DARPA) launched the MOSIS project in 1981 to fund universities to conduct processor chip research and provide tape-out services, significantly reducing the threshold for processor chip design through the MPW model.For more than 40 years, MOSIS has supplied more than 60,000 processor chips to universities and research institutions and trained hundreds of thousands of students.It can be seen that lowering the threshold for processor chip design can greatly promote the development of processor chip technology and improve the efficiency of talent training.
:::

## Goal

In order to solve the current "strangle" problem of processor chips and face the future demand for top talents in the computer system field, the "One Student One Chip" teaching team proposed the "Computer System Capability 3.0" processor chip talent training goal\*\*.That is to say, taking open source processor chips as the entry point, using the processor chip agile development method as the experimental method, the computer science (CS) and electronic information engineering (EE) professional courses are designed through the integration, highlighting the integration of science and education and the integration of industry, academia and research. Paying equal attention to theory and practice, we implement on-silicon processor chip teaching through the teaching tape-out plan, and cultivate top-notch full-stack talents in the field of computer systems.

The core concept of "One Student One Chip" is **simply "allowing a student to graduate with a processor chip designed by himself"**. It is hoped that the threshold of processor chip design can be lowered through a teaching mechanism that pays equal attention to theory and practice, so that more students can participate in every aspect of processor chip design throughout the process.

“公益性”是“一生一芯"的重要属性。“一生一芯”报名和学习是免费的，在校生和已毕业的都可以来参加“一生一芯”的学习，但是因为经费有限，免费流片只针对在校生。只要对处理器芯片学习有浓厚的兴趣，想在处理器芯片方向发展的同学，零基础都可以加入，**不论年级，专业和学校，都可以来报名**。

![](/res/images/project/intro-goal.png)

:::info Extended materials
“计算机系统能力3.0”处理器芯片人才培养的理念是用开源技术、做开源处理器芯片、育处理器芯片人才。具体来讲，为培养具有计算机系统能力的“卡脖子”处理器芯片人才，贯通计算机（CS）本科阶段系统方向核心课程与实践内容，包括组成原理、体系结构、操作系统、编译等软硬件课程，并延展至电子信息（EE）专业，包括片上系统SoC与处理器芯片后端设计等课程。基于开源软硬件生态形成处理器芯片人才培养体系，探索“硅上做教学”。即学生自行设计处理器芯片，提交版图文件至处理器芯片代工厂（Foundry）进行流片，并在回片后进行测试调试和运行操作系统。
:::

## 项目亮点

在战略层面，“一生一芯”计划主要有三个目标。**第一，打破教育资源不平衡的壁垒**。让所有对处理器芯片设计感兴趣的学生，无论学校、年级、专业和基础，都有机会参与到处理器芯片的学习中，这对提升我国高校处理器芯片教育的普及有着非常重要且积极的意义。**第二，突破传统课程的边界，尝试构建融合EE和CS的全栈人才培养方案。**“一生一芯”计划的核心是构建一套软硬件协同、并打通前后端全链条的处理器芯片教学流程，让学生不仅懂得如何用代码设计处理器芯片，而且要理解程序如何在自己设计的处理器芯片上运行，同时还要了解处理器芯片的代码如何转变成可流片版图。**第三，鼓励参加计划的学生进入软硬件开源社区和企业，努力攻克我国目前亟需解决的各个卡脖子领域**。同时也将这些领域的成果沉淀到教学方案中，吸引更多学生参与“一生一芯”计划，实现良性的正向循环。

在教学层面，“一生一芯”计划**首先是坡度低**。项目团队按照处理器芯片教学的难度将培训流程划分为多个阶段，其中预学习阶段的引入将提升零基础学生的学习积极性，从而使他们能够相对平滑地过渡到处理器芯片的正式学习中，而且每个阶段均设置了相应的游戏运行目标，增加趣味性的同时也能激励学生去不断探索设计和实现功能更强大的处理器芯片。**第二是高标准**。不仅要求学生理解软件程序是如何一步步在硬件电路上运行的，还要锻炼学生独立解决未知问题的能力，助教只提供对关键节点的引导，鼓励主动探索找到问题的解决方案。

“一生一芯”第六期于2023年7月2日正式启动，本期新增了4大亮点（如下图所示）：首先教学团队首次将处理器流片标准进行了细分，鼓励学生们根据自己的能力和时间来选择不同的学习路线；第二是引入开源EDA工具，尝试让一小部分动手能力较强的学生接触并学习后端EDA工具的使用方法，从而打通处理器芯片全链条培养的最后一环；第三是通过优化入学流程，增加答辩仪式等方式，让学生们**始终保持一颗对芯片的敬畏之心**，并培养大家对开源社区的认可感和归属感；第四是新增特别兴趣小组，有能力和想法的学员可以组队攻坚感兴趣的项目，共同建设和完善开源芯片软硬件生态。想要了解更详细内容可以观看视频[《“一生一芯”计划第六期启动会[余子濠]》](https://www.bilibili.com/video/BV1cN411S7dw/?spm_id_from=333.999.0.0\&vd_source=a599684e0ba5a636a1281db4733a28f3)。

![](/res/images/project/intro-highlight-1.png)

![](/res/images/project/intro-highlight-2.png)

![](/res/images/project/intro-highlight-3.png)

![](/res/images/project/intro-highlight-4.png)

## 阶段划分

![](/res/images/project/intro-stage.png)

## 知识图谱

![](/res/images/project/intro-knowledge-map.png)

## 学习路线

如下图所示，“一生一芯”计划的学习路线是非常明确的，每个阶段都有对应的任务需要大家完成（图中的任务完成时间仅供参考）。目前报名参与“一生一芯”计划的同学需要完成从【填写报名问卷】到【代码调试考核】之间的所有任务。从**第六期**开始我们会邀请一些学生在理解掌握已有教学内容的基础上，参与到全新的**处理器后端**（即图中的【接入SoC】、【后端物理设计】、【板卡基础测试】和【板卡系统调试】等阶段）环节的学习中，希望未来每位“一生一芯”计划的毕业学员都能成为既精通处理器前端设计，又掌握处理器后端知识和用法的复合型创新人才。

![](/res/images/project/intro-route.png)

## 预期收获

### 学生权益

- **各种礼包**：凡是参与第六期“一生一芯”计划报名的同学（在第六期临近启动前报名参与的同学也在范围内），在完成入学仪式、通过B阶段和A阶段认证考核后都会免费收到一份大礼包，且礼品的内容会随着大家完成“一生一芯”阶段的不断深入而变得更加精美。

![](/res/images/project/info-gifts.png)

- **认证证书**：从第六期开始，“一生一芯”计划会按照实现的难易程度从低到高分提供若干个等级认证的选择，同学们需要在学习过程中自主选择最终要完成哪一个等级的任务。待所有任务都完成后，同学们可向线上助教申请认证考核（考核内容与选择的等级相关，具体内容随后公布），考核通过即会得到由“一生一芯”项目组提供的官方认证证书，该证书包含能力水平认证等级以及助教评语，具有很高的参考价值。

![](/res/images/project/info-certificate.png)

- **积分奖励**：从第六期开始，学员在学习“一生一芯”计划的同时可以通过做任务（具体内容随后公布）赚取积分，积分累计一定程度后可向工作人员申请兑换周边产品。周边产品包含定制文化衫、帆布包、双肩包、收纳包、棒球帽、雨伞、卫衣等（更多周边陆续上线，尽请期待），非常具有纪念意义。

<el-row :gutter="20"
     justify="center">

<el-col span="12">

|  ID |    积分任务（部分）    |
| :-: | :------------: |
|  1  |  **提议新的文化周边**  |
|  2  |  参与“一生一芯”调研问卷  |
|  3  |  “一生一芯”官方录用文章  |
|  4  | “一生一芯”官方录用分享视频 |
|  5  | “一生一芯”官方录用报告视频 |
|  6  |   “一生一芯”分享报告   |
|  7  |  组织“一生一芯”巡回演讲  |
|  8  |   完成B阶段学习的认证   |
|  9  |   完成A阶段学习的认证   |
|  10 |    任务内容持续更新中   |


<el-col span=12>

|  ID |    可兑换周边（部分）    |
| :-: | :-------------: |
|  1  |    “一生一芯”文化衫    |
|  2  |    RISC-V文化衫    |
|  3  |    “一生一芯”帆布包    |
|  4  |    “一生一芯”双肩包    |
|  5  | **班车流片面积（自定义）** |
|  6  |  更多周边陆续上线，尽请期待  |




![](/res/images/project/info-exchange.png)

### 能力提升

- **技术水平**：软硬件相结合的能力。
- **科研能力**：独立解决问题的能力、发掘研究方向的能力、探索未知领域的能力。
- **心理素质**：大家在学习的过程中会遇到各种各样的问题，伴随而来的可能还会有相当程度的挫败感和焦虑感，这些是每一期学员或多或少都会经历的。因此“一生一芯”计划在培养学生们的技术水平和科研能力之外，更重要的是教会大家如何用一种平常心去对待这些问题：**当我们去做难度大且有意义的事情时，不好解决的问题必然是客观存在的，当然解决问题的方法也是一定存在的**。既然问题和解决方法都始终存在，我们何必殚精竭虑地自怨自艾呢？取而代之的是，我们应该放平心态且对自己充满自信，努力从一次次失败中总结经验。通过几次正向反馈，大家不仅能收获满满的成就感，心理素质也会得到很好的锤炼。

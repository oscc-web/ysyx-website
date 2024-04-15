---
title: Project Overview
---

## Background

The most prominent talent training problems faced by my country's computer majors are mainly reflected in the relatively saturated number of computer application developers and the lack of underlying software and hardware R&D (Research & Development) talents, **especially the serious shortage of computer processor chip design talents**. According to statistics, 20% of the first authors of ISCA (top architecture conference) papers from 2008 to 2017 were Chinese nationals (25% in the United States).But in contrast, **85% of these authors chose to be employed in the United States, and only 4% were employed in China**.A large number of students go abroad to study processor chip design and stay in the United States to work after graduation.The gap in high-level processor chip talents between China and the United States is certainly related to the industrial environment of China's processor chips in the past many years, but it is also closely related to the training methods of processor chip talents in domestic universities.

![](/res/images/project/intro-background-1.png)

The processor chip design talent crisis that our country is experiencing has directly led to an imbalance in the domestic IT talent structure, making China's huge IT industry based on foreign software and hardware system platforms. Many key technologies are "bottleneck" by foreign countries, and national security is threatened. To solve this problem, **must base its efforts on the current pressing problems and future strategic needs of the country, advance the cultivation of urgently needed talents in the key field of processor chips, and innovate the training model**. However, due to the increasing cost of high-end processor chip design and production and the increasing difficulty of related technologies, currently only a handful of universities and scientific research institutions with better conditions are able to engage in research in this area and cultivate a small number of talents. This is far from meeting the country’s urgent need for high-end talents in this field.

![](/res/images/project/intro-background-2.png)

In response to the above situation, College of Computer Science and Technology, University of Chinese Academy of Sciences (referred to as "UCAS") based on the existing theoretical classroom and experimental teaching, combined with the scientific research engineering support team of the The Institute of Computing Technology, Chinese Academy of Sciences (referred to as "ICT"), in August 2019, the "One Student One Chip" open source processor chip teaching tape-out practice project initiative was launched, **thus forming an organic connection and through-type practical training for theoretical courses, experimental seminars and practical projects in the direction of computer systems**.

:::info Extended materials
In the 1980s, there were less than 100 professors and students engaged in semiconductor-related research at thousands of universities across the United States. To this end, The U.S. Department of Defense Advanced Research Projects Agency (DARPA) launched the MOSIS project in 1981 to fund universities to conduct processor chip research and provide tape-out services, significantly reducing the threshold for processor chip design through the MPW model. For more than 40 years, MOSIS has supplied more than 60,000 processor chips to universities and research institutions and trained hundreds of thousands of students. It can be seen that lowering the threshold for processor chip design can greatly promote the development of processor chip technology and improve the efficiency of talent training.
:::

## Goal

In order to solve the current "bottleneck" problem of processor chips and face the future demand for top talents in the computer system field, **the "One Student One Chip" teaching team proposed the "Computer System Capability 3.0" processor chip talent training goal**. That is to say, taking open source processor chips as the entry point, using the processor chip agile development method as the experimental method, the computer science (CS) and electronic information engineering (EE) professional courses are designed through the integration, highlighting the integration of science and education and the integration of industry, academia and research. Paying equal attention to theory and practice, we implement on-silicon processor chip teaching through the teaching tape-out plan, and cultivate top-notch full-stack talents in the field of computer systems.

The core concept of "One Student One Chip" is **simply "allowing a student to graduate with a processor chip designed by himself"**. It is hoped that the threshold of processor chip design can be lowered through a teaching mechanism that pays equal attention to theory and practice, so that more students can participate in every aspect of processor chip design throughout the process.

"Public welfare" is an important attribute of "One Student One Chip". The registration and study of "One Student One Chip" is free. Both current students and graduates can participate in the "One Student One Chip" study. However, due to limited funds, free tape-out is only for current students.As long as you have a strong interest in processor chip learning and want to develop in the direction of processor chips, students with zero foundation can join. **Regardless of grade, major and school, you can sign up**.

![](/res/images/project/intro-goal.png)

:::info Extended materials
The concept of "Computer System Capability 3.0" processor chip talent training is to use open source technology, make open source processor chips, and cultivate processor chip talents. Specifically, in order to cultivate "bottleneck" processor chip talents with computer system capabilities, the core courses and practical content of system orientation at the undergraduate level of computer science (CS) include software and hardware courses such as composition principles, architecture, operating systems, and compilation, and extended to the electronic information (EE) major, including courses on system-on-chip SoC and processor chip back-end design. Based on the open source software and hardware ecosystem, a processor chip talent training system is formed to explore "teaching on silicon". That is, students design the processor chip by themselves, submit the layout files to the processor chip foundry (Foundry) for tape-out, and conduct testing, debugging and running the operating system after tape-out.
:::

## Highlights

At the strategic level, the "One Student One Chip" plan has three main goals. **First, break down the barriers of imbalance in educational resources**. Allowing all students who are interested in processor chip design, regardless of school, grade, major and foundation, to have the opportunity to participate in the study of processor chips. This has very important and positive significance for improving the popularization of processor chip education in colleges and universities in my country. \*\*Second, break through the boundaries of traditional courses and try to build a full-stack talent training program that integrates EE and CS. \*\*The core of the "One Student One Chip" Initiative is to build a set of processor chip teaching processes that collaborate with software and hardware and open up the entire front-end and back-end chain, so that students not only know how to design processor chips with code, but also understand how the program runs on the processor chip they designed, and also understand how the code of the processor chip is converted into a tape-out layout. **Third, students participating in the initiative are encouraged to enter software and hardware open source communities and enterprises, and strive to overcome various bottleneck areas that currently need to be solved in our country**. At the same time, achievements in these fields are also incorporated into teaching plans to attract more students to participate in the "One Student One Chip" Initiative and achieve a virtuous positive cycle.

At the teaching level, the "One Student One Chip" Initiative **first has a low slope**. The project team divided the training process into multiple stages according to the difficulty of teaching processor chips. The introduction of the preliminary stage will increase the learning enthusiasm of zero-based students, so that they can transition to formal learning of processor chips relatively smoothly. Moreover, corresponding game operation goals are set at each stage, which not only increases the fun, but also encourages students to continuously explore the design and implementation of more powerful processor chips. **Second is high standards**. Not only are students required to understand how software programs run step by step on hardware circuits, but they are also required to exercise their ability to independently solve unknown problems. TAs only provide guidance on key nodes and encourage active exploration to find solutions to problems.

The sixth session of "One Student One Chip" was officially launched on July 2, 2023. There are 4 new highlights in this session (as shown in the figure below): First, the teaching team subdivided the processor tape-out standards for the first time to encourage students choose different learning routes according to their own abilities and time. The second is to introduce open source EDA tools, trying to let a small number of students with strong hands-on ability access and learn how to use back-end EDA tools, so as to open up the last link in the entire processor chip training chain. The third is to optimize the admission process and add defense ceremonies to allow students to **always maintain a sense of awe for chips** and to cultivate a sense of recognition and belonging to the open source community. The fourth is to add SIG, students with abilities and ideas can form teams to tackle projects of interest and jointly build and improve the open source chip software and hardware ecosystem. If you want to know more details, you can watch the video [_Launching meeting of the sixth session of the "One Student One Chip" Initiative [Zihao Yu]_](https://www.bilibili.com/video/BV1cN411S7dw/?spm_id_from=333.999.0.0\&vd_source=a599684e0ba5a636a1281db4733a28f3).

![](/res/images/project/intro-highlight-1.png)

![](/res/images/project/intro-highlight-2.png)

![](/res/images/project/intro-highlight-3.png)

![](/res/images/project/intro-highlight-4.png)

## Stages

![](/res/images/project/intro-stage.png)

## Knowledge Diagram

![](/res/images/project/intro-knowledge-map.png)

## Learning Route

As shown in the picture below, the learning route of the "One Student One Chip" Initiative is very clear, and each stage has corresponding tasks that need to be completed (the task completion time in the picture is for reference only). Students who currently sign up to participate in the "One Student One Chip" Initiative need to complete all tasks from "Fill a form" to "Debug Exam". Starting from the **sixth session**, we will invite some students to participate in the learning of the new **processor back-end** (That is "SoC Integration", "Physical Design", "PCB Testing", "Run Demos" in the picture) link on the basis of understanding and mastering the existing teaching content. It is hoped that in the future, every graduate of the "One Student One Chip" Initiative will become a composite innovative talent who is proficient in processor front-end design and has mastered processor back-end knowledge and usage.

![](/res/images/project/intro-route.png)

## Expected Harvest

### Student Rights

- **Various Gift Packs**: All students who participate in the sixth session of the "One Student One Chip" Initiative (students who signed up before the launch of the sixth session are also within the scope), After completing the entrance ceremony and passing the B-stage and A-stage certification assessments, they will receive a free gift package, and the content of the gift will become more exquisite as you complete the "One Student One Chip" stage.

![](/res/images/project/info-gifts.png)

- **Certification Certificate**: Starting from the sixth session, "One Student One Chip" Initiative will provide several levels of certification options from low to high according to the difficulty of implementation. Students need to choose independently which level of task they want to complete during the learning process.After all tasks are completed, students can apply to the online TAs for a certification assessment (the assessment content is related to the selected level, and the specific content will be announced later). If you pass the assessment, you will receive an official certification certificate provided by the "One Student One Chip" team , this certificate includes competency level certification grades and teaching assistant comments, which has high reference value.

![](/res/images/project/info-certificate.png)

- **Points Reward**: Starting from the sixth session, students can earn points by completing tasks (the specific content will be announced later) while learning the "One Student One Chip" Initiative. After accumulating points to a certain level, students can apply to the staff to redeem peripheral products.Peripheral products include customized cultural shirts, canvas bags, backpacks, storage bags, baseball caps, umbrellas, sweatshirts, etc. (more peripheral products will be launched one after another, please stay tuned), which are very commemorative.

<el-row :gutter="20"
     justify="center">

<el-col span="12">

| No. |             Points tasks (part)             |
| :-----------------: | :------------------------------------------------------------: |
|          1          |              **Propose new cultural peripherals**              |
|          2          | Participate in the "One Student One Chip" Survey Questionnaire |
|          3          |       "One Student One Chip" Official Acceptance Article       |
|          4          |  "One Student One Chip" Official Acceptance and Sharing Video  |
|          5          |    "One Student One Chip" Official Recruitment Report Video    |
|          6          |              "One Student One Chip" Sharing Report             |
|          7          |        Organize the "One Student One Chip" Lecture Tour        |
|          8          |         Certification of Completion of Stage B Studies         |
|          9          |         Certification of Completion of Stage A Studies         |
|          10         |           Mission content is constantly being updated          |


<el-col span=12>

| No. |      Redeemable peripherals (some)     |
| :-----------------: | :-------------------------------------------------------: |
|          1          |           "One Student One Chip" Cultural Shirt           |
|          2          |                   RISC-V Cultural Shirt                   |
|          3          |             "One Student One Chip" Canvas Bag             |
|          4          |              "One Student One Chip" Backpack              |
|          5          | **Shuttle tape-out area (customized)** |
|          6          | More peripherals will be launched soon, please stay tuned |




![](/res/images/project/info-exchange.png)

### Ability Promote

- **Technical level**: The ability to combine software and hardware.
- **Scientific Research Ability**: The ability to solve problems independently, explore research directions, and explore unknown areas.
- **Psychological quality**: Everyone will encounter various problems in the process of learning, which may be accompanied by a considerable degree of frustration and anxiety. These are things that every session of  students will experience more or less.Therefore, in addition to cultivating students' technical level and scientific research ability, the "One Student One Chip" Initiative is more important to teach everyone how to deal with these problems with a normal mind: **When we do difficult and meaningful things at this time, problems that are difficult to solve must exist objectively, and of course there must be ways to solve them**. Since problems and solutions are always there, why should we spend so much time feeling sorry for ourselves?Instead, we should calm down and be confident in ourselves, and strive to learn from failures again and again. Through several positive feedbacks, everyone will not only gain a full sense of accomplishment, but their psychological quality will also be well tempered.

<template>
    <div class="wb-component">
        <el-divider />
        <el-text class="wb-component-title">学习流程</el-text>
        <section id=timeline>
            <div class="demo-card-wrapper">
                <div class="demo-card demo-card--step1">
                    <div class="head">
                        <div class="number-box">
                            <span>01</span>
                        </div>
                        <h2>预学习阶段（P线）</h2>
                    </div>
                    <div class="body">
                        <p>帮助同学们掌握处理器设计必备知识，具体包含：如何提问题并独立解决问题、GNU/Linux系统安装和使用、数字电路基础、C语言基础（数组和指针）、仿真和调试工具使用等。</p>
                        <img src="/res/images/home/stage-p.png">
                    </div>
                </div>
                <div class="demo-card demo-card--step2">
                    <div class="head">
                        <div class="number-box">
                            <span>02</span>
                        </div>
                        <h2>基础阶段（B线）</h2>
                    </div>
                    <div class="body">
                        <p>独立设计一款自己的RV32IM单周期处理器，并添加串口、定时器、键盘、VGA等外设，<span style="font-weight:bold;">可以运行各种有意思的FC模拟器游戏（如超级马里奥）！</span></p>
                        <img src="/res/images/home/stage-b.png">
                    </div>
                </div>
                <div class="demo-card demo-card--step3">
                    <div class="head">
                        <div class="number-box">
                            <span>03</span>
                        </div>
                        <h2>进阶阶段（A线）</h2>
                    </div>
                    <div class="body">
                        <p>在单周期基础上独立设计一款RV32IM流水线处理器，支持简单中断和异常处理、系统调用等，<span style="font-weight:bold;">可以运行简单自制OS并在其上玩仙剑奇侠传游戏！</span></p>
                        <img src="/res/images/home/stage-a.png">
                    </div>
                </div>
                <div class="demo-card demo-card--step4">
                    <div class="head">
                        <div class="number-box">
                            <span>04</span>
                        </div>
                        <h2>专家阶段（S线）</h2>
                    </div>
                    <div class="body">
                        <p>在流水线基础上独立设计一款RV64架构的超标量处理器（多发射甚至多核），<span style="font-weight:bold;">能够启动GNU/Linux系统并运行图形界面应用！</span>由于该阶段学习曲线较高，欢迎对高级体系结构感兴趣的同学挑战！</p>
                        <img src="/res/images/home/stage-s.png">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
    @mixin mq-xs {
    @media (min-width: 320px) {
        @content;
    }
    }

    @mixin mq-sm {
        @media (min-width: 480px) {
            @content;
        }
    }

    @mixin mq-md {
        @media (min-width: 720px) {
            @content;
        }
    }

    @mixin mq-lg {
        @media (min-width: 1000px) {
            @content;
        }
    }

    $background: var(--bg-color);
    $box-shadow: 0px 0px 1px #bdbdbd;
    $border: 1px solid #bdbdbd;
    $items: 4;
    $rows: ceil(calc($items/2));

    /* Card sizing */
    $card-height: 460px;
    $card-width: 450px;
    $inner-margin: 15px;
    $number-size: 35px;
    $stagger: 180px;
    $outer-margin: 90px;
    $marker-size: 9px;

    /* Colors */
    $colors: hsl(220, 60%, 40%),
             hsl(0, 80%, 50%),
             hsl(220, 60%, 40%),
             hsl(0, 80%, 50%);
    $timeline: #bdbdbd;

    /* Calculations */
    $container-height: $rows * ($card-height + $outer-margin) + $stagger;
    $container-width: $card-width*2 + $outer-margin*3;
    $head-height: $number-size + 50;
    $body-height: $card-height - $head-height;
    $marker-dist: $card-width + calc($outer-margin/2) - calc($marker-size/2);

    /* Placeholders */
    @include mq-lg {
        %arrow {
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
        }
        %marker {
            position: absolute;
            content: "";
            width: $marker-size;
            height: $marker-size;
            background-color: $timeline;
            border-radius: $marker-size;
            box-shadow: 0px 0px 2px 8px $background;
        }
    }

    /* Some Cool Stuff */
    $counter: $items - $rows + 2;
    @for $i from 1 through $rows {
        .demo-card:nth-child(#{$i*2-1})   { order: $i }
        .demo-card:nth-child(#{$i*2})     { order: $counter }
        $counter: $counter + 1;
    }

    /* Border Box */
    * {
        box-sizing: border-box;
    }

    /* Fonts */
    body {
        font-family: Roboto;
    }

    #timeline {
        padding: 50px 0px 0px 0px;
        background: $background;
        h1 {
            text-align: center;
            font-size: 3rem;
            font-weight: 200;
            margin-bottom: 20px;
        }
        p.leader {
            text-align: center;
            max-width: 90%;
            margin: auto;
            margin-bottom: 45px;
        }
        .demo-card-wrapper {
            text-align: left;
            position: relative;
            margin: auto;
            @include mq-lg {
                display: flex;
                flex-flow: column wrap;
                width: $container-width;
                height: $container-height;
                margin: 0 auto;
            }
            &::after {
                z-index: 1;
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 50%;
                border-left: $border;
                @include mq-lg {
                    border-left: 1px solid $timeline;
                }
            }
        }
        .demo-card {
            position: relative;
            display: block;
            margin: 10px auto 80px;
            max-width: 94%;
            z-index: 2;
            @include mq-sm {
                max-width: 70%;
                box-shadow: $box-shadow;
            }
            @include mq-md {
                max-width: 70%;
            }
            @include mq-lg {
                max-width: $card-width;
                height: $card-height;
                margin: $outer-margin;
                margin-top: calc($outer-margin/2);
                margin-bottom: calc($outer-margin/2);
                &:nth-child(odd) {
                    margin-right: calc($outer-margin/2);
                    .head::after {
                        @extend %arrow;
                        border-left-width: 15px;
                        border-left-style: solid;
                        left: 100%;
                    }
                    .head::before {
                        @extend %marker;
                        left: $marker-dist + 1;
                    }
                }
                &:nth-child(even) {
                    margin-left: calc($outer-margin/2);
                    .head::after {
                        @extend %arrow;
                        border-right-width: 15px;
                        border-right-style: solid;
                        right: 100%;
                    }
                    .head::before {
                        @extend %marker;
                        right: $marker-dist - 1;
                    }
                }
                &:nth-child(2) {
                    margin-top: $stagger;
                }
            }
            .head {
                position: relative;
                display: flex;
                align-items: center;
                color: #fff;
                font-weight: 400;
                .number-box {
                    display: inline;
                    float: left;
                    margin: $inner-margin;
                    padding: 10px;
                    font-size: $number-size;
                    line-height: $number-size;
                    font-weight: 600;
                    background: rgba(0, 0, 0, 0.17);
                }
                h2 {
                    text-transform: uppercase;
                    font-size: 1.3rem;
                    font-weight: inherit;
                    letter-spacing: 2px;
                    margin: 0;
                    padding-bottom: 6px;
                    line-height: 1rem;
                    @include mq-sm {
                        font-size: 150%;
                        line-height: 1.2rem;
                    }
                    span {
                        display: block;
                        font-size: 0.6rem;
                        margin: 0;
                        @include mq-sm {
                            font-size: 0.8rem;
                        }
                    }
                }
            }
            .body {
                background: #fff;
                border: $border;
                border-top: 0;
                padding: $inner-margin;
                @include mq-lg {
                    height: $body-height;
                }
                p {
                    font-size: 14px;
                    line-height: 18px;
                    margin-bottom: $inner-margin;
                }
                img {
                    display: block;
                    width: 100%;
                }
            }
            @for $i from 1 through $items {
                &--step#{$i} {
                    $color: nth($colors, ((($i - 1) % 4) + 1));
                    background-color: $color;
                    .head::after {
                        border-color: $color;
                    }
                }
            }
        }
    }
</style>

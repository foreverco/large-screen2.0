<template>
  <div class='chartscontainer'>
    <!-- <div class="shadow" v-show="isOptionAbnormal">数据为空</div> -->
    <div
      class="echarts1"
      ref="chart"
    />
  </div>

</template>

<script>
import { isValidOption } from "~/utils/echartsOption";
import echarts from "echarts";
export default {
  //   name: "echarts",
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          title: {
            text: "2019年销售水量和主营业务收入对比",
            textStyle: {
              align: "center",
              color: "#fff",
              fontSize: 20
            },
            top: "3%",
            left: "10%"
          },
          grid: {
            top: "25%",
            bottom: "10%"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              label: {
                show: true
              }
            }
          },
          legend: {
            data: ["销售水量", "主营业务"],
            top: "15%",
            textStyle: {
              color: "#ffffff"
            }
          },
          xAxis: {
            data: [
              "当年完成水量",
              "去年同期水量",
              "滚动目标值水量",
              "全年目标值水量",
              "当年完成金额",
              "去年同期金额",
              "滚动目标金额",
              "全年目标值"
            ],
            axisLine: {
              show: true //隐藏X轴轴线
            },
            axisTick: {
              show: true //隐藏X轴刻度
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ebf8ac" //X轴文字颜色
              }
            },
            axisLine: {
              lineStyle: {
                color: "#01FCE3"
              }
            }
          },
          yAxis: [
            {
              type: "value",
              name: "亿元",
              nameTextStyle: {
                color: "#ebf8ac"
              },
              splitLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: true
              },
              axisLine: {
                show: true
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#ebf8ac"
                }
              },
              axisLine: {
                lineStyle: {
                  color: "#FFFFFF"
                }
              }
            },
            {
              type: "value",
              name: "同比",
              nameTextStyle: {
                color: "#ebf8ac"
              },
              position: "right",
              splitLine: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                  color: "#ebf8ac"
                }
              }
            },
            {
              type: "value",
              gridIndex: 0,
              min: 50,
              max: 100,
              splitNumber: 8,
              splitLine: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
              }
            }
          ],
          series: [
            {
              name: "销售水量",
              type: "line",
              yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
              smooth: true, //平滑曲线显示
              showAllSymbol: true, //显示所有图形。
              symbol: "circle", //标记的图形为实心圆
              symbolSize: 10, //标记的大小
              itemStyle: {
                //折线拐点标志的样式
                color: "#058cff"
              },
              lineStyle: {
                color: "#058cff"
              },
              areaStyle: {
                color: "rgba(5,140,255, 0.2)"
              },
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            },
            {
              name: "主营业务",
              type: "bar",
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#00FFE3"
                    },
                    {
                      offset: 1,
                      color: "#4693EC"
                    }
                  ])
                }
              },
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      isOptionAbnormal: true
    };
  },
  mounted() {
    console.log(this.$refs);
    let myEcharts = echarts.init(this.$refs.chart);
    let option = this.option;
    // myChart.setOption(option)
    this.myEcharts = myEcharts;

    this.checkAndSetOption();

    window.addEventListener("resize", () => {
      this.myEcharts.resize();
    });
  },
  watch: {
    option(option) {
      console.log(option);
      this.checkAndSetOption();
    }
  },
  methods: {
    checkAndSetOption() {
      let option = this.option; //配置等于父组件传过来的数据
      if (isValidOption(option)) {
        this.myEcharts.setOption(option); //渲染出来
        this.myEcharts.hideLoading(); //隐藏加载动画
      } else {
        this.myEcharts.showLoading(); //加载动画
      }
    }
  }
};
</script>
<style scoped>
/* .echarts1{
  width: 100% !important;
  height: 100% !important;
} */
</style>
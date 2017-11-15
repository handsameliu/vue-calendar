# vue-calendar

> vue日历控件，支持点击，父子通信

项目需要，纯手写制作的日历控件。 

使用时，只需在父组件中引入 `DateModel.vue` 文件即可，详情可查看父组件`testMain.vue`中引用详情。

`DateModel.vue` 有两个参数：

    1、':parentTime'      默认显示的日期，String类型，也可以不传（默认当天）

    2、'@getQueryByDate'  点击后的回调方法（父组件定义）。返回点击的时间

当前需求：

    1、当前月份可点击，大于当前月及当前时间不可点击。
    
    2、每页5行，超出当月的其他月份都无法点击。
    
    3、上月，下月。

    4、初级加载当前日期选中。

    5、日期下方的小点，突出表示当前日期存在任务或备忘录。点击可查看（想去掉的话 删除 parameter 类所在的div即可）

    6、翻页后日期中只有月份或者年份改变。日期还是当前日期。

初始化

![avatar](http://olrrovutt.bkt.clouddn.com/20171115162646.jpg)

点击

![avatar](http://olrrovutt.bkt.clouddn.com/20171115162733.jpg)

下一页

![avatar](http://olrrovutt.bkt.clouddn.com/20171115163216.jpg)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<template>
  <!-- <div class="mywk__calendar"> -->
  <div class="calendar">
    <!-- <div class="calendar__header">
      <div class="header__pre" @click="handlePreMonth"></div>
      <div class="header__title">{{ selectedYear }}年{{ selectedMonth + 1 }}月{{ selectedDate }}日</div>
      <div class="header__next" @click="handleNextMonth"></div>
    </div> -->
    <head-tag :data="headData">
      <div class="dateSelect">
        <el-select v-model="jumpYear" size="small">
          <el-option v-for="(a, index) in selectYears" :key="index" :label="`${a}年`" :value="a" />
        </el-select>
        <el-select v-model="jumpMonth" size="small">
          <el-option v-for="(a, index) in selectMonths" :key="index" :label="`${a}月`" :value="a" />
        </el-select>
      </div>
    </head-tag>
    <div class="calendar__main">
      <div class="main__block-head">
        <div
          v-for="(item, index) in calendarHeader"
          :key="index"
        >{{ item }}</div>
      </div>
      <div
        v-for="(item, index) in displayDaysPerMonthT(selectedYear)[selectedMonth]"
        :key="item.type + item.content + `${index}`"
        :class="`main__block ${(item.type === 'pre' || item.type === 'next') ? 'main__block-not' : ''} ${(item.content === selectedDate && item.type === 'normal') && 'main__block-today'}`"
        @click="handleDayClick(item)"
      >{{ item.content }}</div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import HeadTag from '@/components/HeadTag/index.vue';
import './style.scss';

export default {
  name: 'Calendar',
  components: {
    HeadTag
  },
  data() {
    return {
      headData: [{ title: '码字日历', active: true }],
      calendarHeader: ['一', '二', '三', '四', '五', '六', '日'],
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth(),
      selectedDate: new Date().getDate(),
      jumpYear: '',
      jumpMonth: '',
      selectYears: [],
      selectMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
  },
  created() {
    this.initTimeDate();
  },
  methods: {
    initTimeDate() {
      this.jumpYear = this.selectedYear;
      this.jumpMonth = this.selectedMonth;
      for (let i = 0; i < 10; i++) {
        console.log(this.selectYear);
        this.selectYears.push(this.selectedYear - i);
      }
    },
    displayDaysPerMonthT(year) {
      // 定义每个月的天数，如果是闰年第二月改为29天
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
      }
      const daysPreMonth = [].concat(daysInMonth);
      daysPreMonth.unshift(daysPreMonth.pop());
      const addDaysFromPreMonth = new Array(12).fill(null).map((item, index) => {
        const day = new Date(year, index, 1).getDay();
        if (day === 0) {
          return 7;
        } else {
          return day - 2;
        }
      });
      const total_calendar_list = new Array(12).fill([]).map((month, monthIndex) => {
        let addDays = addDaysFromPreMonth[monthIndex] + 1;
        const daysCount = daysInMonth[monthIndex];
        let daysCountPre = daysPreMonth[monthIndex];
        const monthDate = [];
        if (addDays >= 7) {
          addDays = addDays - 7;
        }
        for (; addDays > 0; addDays--) {
          const obj = {
            content: daysCountPre--,
            type: 'pre',
          };
          monthDate.unshift(obj);
        }
        for (let i = 0; i < daysCount;) {
          const obj = {
            content: ++i,
            type: 'normal',
          };
          monthDate.push(obj);
        }
        if (monthDate.length > 35) {
          for (let i = 42 - monthDate.length, j = 0; j < i;) {
            const obj = {
              content: ++j,
              type: 'next',
            };
            monthDate.push(obj);
          }
        } else {
          for (let i = 35 - monthDate.length, j = 0; j < i;) {
            const obj = {
              content: ++j,
              type: 'next',
            };
            monthDate.push(obj);
          }
        }
        return monthDate;
      });
      return total_calendar_list;
    },
    handleDayClick(item) {
      if (item.type === 'normal') {
        // do anything...
        this.selectedDate = Number(item.content);
      }
    },
    handlePreMonth() {
      if (this.selectedMonth === 0) {
        this.selectedYear = this.selectedYear - 1;
        this.selectedMonth = 11;
        this.selectedDate = 1;
      } else {
        this.selectedMonth = this.selectedMonth - 1;
        this.selectedDate = 1;
      }
    },
    handleNextMonth() {
      if (this.selectedMonth === 11) {
        this.selectedYear = this.selectedYear + 1;
        this.selectedMonth = 0;
        this.selectedDate = 1;
      } else {
        this.selectedMonth = this.selectedMonth + 1;
        this.selectedDate = 1;
      }
    },
  },
};
</script>

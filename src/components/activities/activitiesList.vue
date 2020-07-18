<template>
  <div>
    <div class="main-table">
      <div class="table-containter">
        <table class="table-activities" border="1px">
          <thead>
            <tr width="300px">
              <td width="340">活动名称</td>
              <td width="163">开始时间</td>
              <td width="163">结束时间</td>
              <td width="170">活动地点</td>
              <td>举办单位</td>
              <td width="100">状态</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in activityList" :key="index">
              <td>{{item.name}}</td>
              <td>{{item.start_time}}</td>
              <td>{{item.end_time}}</td>
              <td>{{item.place}}</td>
              <td>{{item.organizer}}</td>
              <td v-if="item.status == 0" style="color:#409EFF">筹备中</td>
              <td v-else-if="item.status == 1" style="color:#67C23A">进行中</td>
              <td v-else-if="item.status == 2" style="color:#F56C6C">已结束</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="activities-page">
      <el-pagination
        layout="slot, prev, pager, next,jumper"
        :total="activityTotal"
        background=""
        @current-change="handleCurrentChange"
        :page-size="15"
      >
        <span class="activities-page-total">共 {{activityTotal}} 个活动信息</span>
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activityList: [],
      activityTotal: 0
    };
  },
  mounted() {
    this.$api.activity.getActivityList(0).then(res => {
      this.activityList = res.data.activityList;
      this.activityTotal = res.data.total;
    });
  },
  methods: {
    handleCurrentChange(index) {
      this.$api.activity.getActivityList((index - 1) * 15).then(res => {
        this.activityList = res.data.activityList;
        this.activityTotal = res.data.total;
      });
    }
  }
};
</script>
<style scoped>
.activities-page {
  margin: 0 auto;
  text-align: center;
  height: 136px;
  padding-top: 50px;
  box-sizing: border-box;
}
.activities-page-total {
  font-weight: 500;
  margin-right: 20px;
}
.main-table {
  width: 100%;
  /* height: 900px; */
  font-size: 15px;
}

.main-table .table-containter {
  width: 1200px;
  /* height: 769px; */
  margin: 0 auto;
}

.table-activities {
  width: 1200px;
  /* height: 769px; */
  margin-top: 50px;
  border-spacing: 0;
  border-collapse: collapse;
}
.table-activities thead > tr {
  height: 48px;
  border: #ddd 1px solid;
  background-color: #11a5eb;
  text-align: center;
  font-weight: 700;
}
.table-activities tr {
  height: 48px;
  text-align: center;
  border: #ddd 1px solid;
}
.table-activities tbody {
  color: #666;
  font-weight: 400;
}
.table-activities tbody tr:hover {
  background-color: #f1f1f1;
}
.table-activities tr:nth-child(even) {
  background-color: #f1f1f1;
}
</style>

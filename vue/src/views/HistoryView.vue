<template>
  <div>
  <div>
    <el-input style="width: 200px; margin-right: 10px" placeholder="请输入内容"></el-input>
    <el-button typle="primary">查询</el-button>
  </div>
  <div>
    <el-table :data="tableData" height=88vh style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="gender"
          label="性别"
          width="180">
      </el-table-column>
      <el-table-column
          prop="number"
          label="车牌"
          width="180">
      </el-table-column>
      <el-table-column
          prop="violation"
          label="是否佩戴头盔"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <el-button>警告</el-button>
        <el-button type="danger">罚款</el-button>
      </el-table-column>
    </el-table>
  </div>
  <div class="pagination-container">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems"
      ></el-pagination>
    </div>
  </div>
</template>



<style>
.app-container {
  position: relative;
  height: 100vh;
}

.el-table-container {
  height: calc(100vh - 60px); /* 确保表格高度留出翻页器的空间 */
  overflow-y: auto;
}

.pagination-container {
  position: fixed;
  bottom: 0;
  left: 200px;
  right: 0;
  background: #fff;
  padding: 10px;
  text-align: center;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-pagination {
  margin-left: -3px;
  margin-right: -3px;
  margin-top: 5px;
}

.el-pagination__total {
  margin-right: 10px;
}

.pagination-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pagination-ul li {
  display: inline-block;
  margin: 0 5px;
}

.pagination-ul li a {
  text-decoration: none;
  color: #409EFF;
}

.pagination-ul li.disabled a {
  color: #c0c4cc;
  cursor: not-allowed;
}
.el-table .warning-row {
  background: #f6e6e3; 
}

</style>

<script>
export default {
  methods: {
    tableRowClassName({row}) {
      if( row.violation === '否') {
        return 'warning-row';
      }
      return '';
    }
  },
  data() {
    return {
      tableData: [{
        date: '2025-05-02',
        name: 'name1',
        gender:'男',
        number:'000000',
        violation:'是',
        address: '长沙市岳麓区麓山南路',
      }, {
        date: '2025-05-04',
        name: 'name2',
        gender:'男',
        number:'000001',
        violation:'否',
        address: '长沙市岳麓区麓山南路'
      }, {
        date: '2025-05-01',
        name: 'name3',
        gender:'男',
        number:'000002',
        violation:'是',
        address: '长沙市岳麓区麓山南路',
      }, {
        date: '2025-05-03',
        name: 'name4',
        gender:'女',
        number:'000004',
        violation:'是',
        address: '长沙市岳麓区麓山南路'
      },
        {
          date: '2025-05-02',
          name: 'name1',
          gender:'男',
          number:'000000',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-04',
          name: 'name2',
          gender:'男',
          number:'000001',
          violation:'否',
          address: '长沙市岳麓区麓山南路'
        }, {
          date: '2025-05-01',
          name: 'name3',
          gender:'男',
          number:'000002',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-03',
          name: 'name4',
          gender:'女',
          number:'000004',
          violation:'是',
          address: '长沙市岳麓区麓山南路'
        },
        {
          date: '2025-05-02',
          name: 'name1',
          gender:'男',
          number:'000000',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-04',
          name: 'name2',
          gender:'男',
          number:'000001',
          violation:'否',
          address: '长沙市岳麓区麓山南路'
        }, {
          date: '2025-05-01',
          name: 'name3',
          gender:'男',
          number:'000002',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-03',
          name: 'name4',
          gender:'女',
          number:'000004',
          violation:'是',
          address: '长沙市岳麓区麓山南路'
        },
        {
          date: '2025-05-02',
          name: 'name1',
          gender:'男',
          number:'000000',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-04',
          name: 'name2',
          gender:'男',
          number:'000001',
          violation:'否',
          address: '长沙市岳麓区麓山南路'
        }, {
          date: '2025-05-01',
          name: 'name3',
          gender:'男',
          number:'000002',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-03',
          name: 'name4',
          gender:'女',
          number:'000004',
          violation:'是',
          address: '长沙市岳麓区麓山南路'
        },
        {
          date: '2025-05-02',
          name: 'name1',
          gender:'男',
          number:'000000',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-04',
          name: 'name2',
          gender:'男',
          number:'000001',
          violation:'否',
          address: '长沙市岳麓区麓山南路'
        }, {
          date: '2025-05-01',
          name: 'name3',
          gender:'男',
          number:'000002',
          violation:'是',
          address: '长沙市岳麓区麓山南路',
        }, {
          date: '2025-05-03',
          name: 'name4',
          gender:'女',
          number:'000004',
          violation:'是',
          address: '长沙市岳麓区麓山南路'
        }]
    }
  },
  methods: {
    tableRowClassName({ row }) {
      if (row.violation === '否') {
        return 'warning-row';
      }
      return '';
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.fetchData();
    },
    fetchData() {
      // 这里可以添加获取数据的逻辑，根据 currentPage 和 pageSize 来获取数据
    }
  }
}
</script>
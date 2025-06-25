<template>
  <div>
  <div>
    <el-input style="width: 200px; margin-right: 10px" placeholder="请输入内容"></el-input>
    <el-button typle="primary">查询</el-button>
  </div>
  <div>
    <el-table :data="tableData" height=100vh style="width: 100%" :row-class-name="tableRowClassName">
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
    <div class="block">
      
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>
  </div>
</template>



<style>
.el-table .warning-row {
  background: #f6e6e3;
}

</style>

<script>
export default {
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1 ) {
      // if( tableData.violation === '否') {
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
  }
}
</script>
<template>
  <el-card style="width: 1450px; height: 300px; border-color: black">
    <template #header>
      <input type="text" placeholder="請輸入商品名稱" class="item-name" />
    </template>
    <el-row>
      <el-col :span="6">
        <p>上傳圖片的地方</p>
      </el-col>
      <el-col :span="18">
        <div class="order-info">
          <el-row :gutter="20">
            <el-col :span="6">
              <div>
                <p style="margin: auto">購買平台</p>
                <el-select
                  class="platform"
                  v-model="selectedPlatform"
                  placeholder="購買平台"
                  size="large"
                  style="width: 175px"
                  allow-create
                  clearable
                  filterable
                >
                  <el-option
                    v-for="item in platform"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="demo-date-picker">
                <span class="demonstration">預計到貨日期</span>
                <el-date-picker
                  v-model="arriveDate"
                  type="date"
                  placeholder="到貨日期"
                  style="height: 40px; width: 175px"
                  class="arrivalDate"
                />
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <p style="margin: auto">付款狀況</p>
                <el-select
                  class="paidStatus"
                  v-model="selectedPaid"
                  placeholder="付款狀況"
                  size="large"
                  style="width: 175px"
                  clearable
                >
                  <el-option
                    v-for="item in paidStatus"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <p style="margin: auto">到貨狀況</p>
                <el-select
                  class="status"
                  v-model="selectedStatus"
                  placeholder="到貨狀況"
                  size="large"
                  style="width: 175px"
                  clearable
                >
                  <el-option
                    v-for="item in status"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
  <el-button type="danger" :icon="Delete" circle />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedPlatform = ref([])
const selectedStatus = ref([])
const selectedPaid = ref([])

const platform = [
  { value: '露天', label: '露天' },
  { value: '買動漫', label: '買動漫' },
  { value: '角川', label: '角川' },
]

const paidStatus = [
  { value: '已付款', label: '已付款' },
  { value: '未付款', label: '未付款' },
  { value: '已付訂金', label: '已付訂金' },
]

const status = [
  { value: '已到貨', label: '已到貨' },
  { value: '未到貨', label: '未到貨' },
]

const arriveDate = ref('')

import { Delete } from '@element-plus/icons-vue'
</script>

<style scoped></style>

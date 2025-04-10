<template>
  <el-card style="width: 1450px; height: 300px; border-color: black">
    <template #header>
      <input type="text" placeholder="請輸入商品名稱" class="item-name" />
    </template>
    <el-row>
      <el-col :span="6">
        <el-upload list-type="picture-card" action="#" :auto-upload="false" class="pic-upload">
          <el-icon><Plus /></el-icon>

          <template #file="{ file }">
            <div>
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <el-icon><Download /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </el-col>
      <el-col :span="18" style="background-color: chartreuse">
        <el-row>
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
        </el-row>
        <el-row style="background-color: red">
          <el-col :span="4.5">
            <el-input
              class="m-5"
              v-model="input"
              style="width: 175px"
              placeholder="總金額"
              clearable
            />
          </el-col>
          <el-col :span="4.5">
            <el-input
              class="m-5"
              v-model="input"
              style="width: 175px"
              placeholder="總金額"
              clearable
            />
          </el-col>
          <el-col :span="4.5">
            <el-input
              class="m-5"
              v-model="input"
              style="width: 175px"
              placeholder="總金額"
              clearable
            />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
  <el-button type="danger" :icon="Delete" circle />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus'

const selectedPlatform = ref([])
const selectedStatus = ref([])
const selectedPaid = ref([])
const arriveDate = ref('')
const input = ref('')
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const imageUrl = ref<string | null>(null)

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

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const handleImageChange = (file: any) => {
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = () => {
    imageUrl.value = reader.result as string
  }
}
</script>

<style scoped>
:deep(.el-upload--picture-card) {
  --el-upload-picture-card-size: 200px;
  margin-left: 50px;
}
</style>

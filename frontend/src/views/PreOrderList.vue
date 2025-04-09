<template>
  <navbar />
  <PreOrderCard class="item-info" />
</template>

<script setup>
import PreOrderCard from '@/components/cards/PreOrderInfo.vue'
import navbar from '@/components/navbar/navbar.vue'
</script>

<style scoped>
.item-info {
  margin-top: -200px;
  margin-left: -50px;
}
</style>

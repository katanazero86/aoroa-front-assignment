<template>
  <div>
    <h2>이슈 목록 페이지입니다.</h2>
    <div class="menus">
      <div class="button-container">
        <button @click="handleClick">이슈 생성</button>
      </div>
      <div class="filter-container">
        <select v-model="selectedStatus">
          <option value="">전체</option>
          <option v-for="(value, key) in STATUS_MAP" :key="key" :value="key">
            {{ value }}
          </option>
        </select>
      </div>
    </div>
    <div class="issue-list">
      <IssueItem v-for="issue in filteredIssues" :key="issue.id" :issue="issue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import IssueItem from '@/components/issue/IssueItem.vue'
import { issues } from '@/data/mockData'
import { STATUS_MAP } from '@/constants/status'

const router = useRouter()

const selectedStatus = ref('')
const filteredIssues = computed(() => {
  if (!selectedStatus.value) return issues
  return issues.filter((issue) => issue.status === selectedStatus.value)
})

const handleClick = () => {
  router.push('/issues/new')
}
</script>

<style scoped>
.issue-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menus {
  display: flex;
  align-items: center;
  gap: 8px;
}

.button-container {
  padding: 8px;
}

.button-container > button {
  padding: 4px 8px;
  border: 1px solid #d1d1d1;
  background-color: #d1d1d1;
  border-radius: 4px;
  cursor: pointer;
}

.button-container > button:hover {
  background-color: #c7c7c7;
}

.filter-container {
  padding: 8px;
}

.filter-container > select {
  padding: 4px;
  max-width: 150px;
  width: 100%;
  cursor: pointer;
}
</style>

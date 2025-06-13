<template>
  <div class="issue-item" @click="handleClick">
    <h2 class="title">{{ issue.title }}</h2>
    <div class="info">
      <span>{{ getStatus(issue.status) }}</span>
      <span>{{ issue.user ? issue.user.name : '담당자 없음' }}</span>
      <span>{{ formattedDate(issue.createdAt) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { STATUS_MAP } from '@/constants/status'

dayjs.locale('ko')

const router = useRouter()

interface User {
  id: number
  name: string
}

interface Issue {
  id: number
  title: string
  status: string
  user: User | null
  createdAt: string
}

const props = defineProps<{ issue: Issue }>()

const handleClick = () => {
  console.log(props.issue)
  router.push(`/issue/${props.issue.id}`)
}

const getStatus = (status: string) => {
  return STATUS_MAP[status]
}

const formattedDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}
</script>

<style scoped>
.issue-item {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.issue-item:active {
  border: 1px solid #6453fc;
}

.title {
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 20px;
}

.info {
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.info > span:not(:first-child) {
  border-left: 1px solid #ccc;
  padding-left: 8px;
}
</style>

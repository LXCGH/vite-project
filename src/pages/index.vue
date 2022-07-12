<template>
	<div>这是首页</div>
	<h3>Mouse: {{x}} x {{y}}</h3>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
userStore.updateName('李四');

import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>
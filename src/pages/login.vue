<template>
	<div class="root" @click="requestRes">这是登录页</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
userStore.updateName('李四');

import API from '@/api';
const requestRes = async () => {
    let result = await API.login('zhangsan', '123456');
}
</script>
 <style lang="less">
	.root {
		background: #eeeeee;
	}
 </style>
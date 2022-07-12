import { defineStore } from 'pinia'
export const useUserStore = defineStore({
	id: 'user', // id必填，且需要唯一
	state: () => {
		return '张三'
	},
	actions: {
		updateName(name){
			this.name = name
		}
	}
})
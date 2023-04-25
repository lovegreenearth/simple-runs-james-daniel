<template>
	<div>
		<UserList />
	</div>
</template>

<script>
import UserList from './user/user-list/UserList.vue'
import { getAuthUserData } from '@/utils/auth'

export default {
  components: {
    UserList
  },
  data () {
    return {
      
    }
  },
  watch: {
    
  },
  computed: {
    
  },
  methods: {
    
  },
  created () {
    
  },
  beforeDestroy () {
    
  },
  mounted() {
    getAuthUserData()
  }
}
</script>
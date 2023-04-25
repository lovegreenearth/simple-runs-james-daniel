<template>
	<div>
		<DataListThumbView  />
	</div>
</template>

<script>
import DataListThumbView from './data-list/thumb-view/DataListThumbView.vue'
import { getAuthUserData } from '@/utils/auth'

export default {
  components: {
    DataListThumbView
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
<template>
	<div>
		<DataListListView />
	</div>
</template>

<script>
import DataListListView from './data-list/list-view/DataListListView.vue'
import { getAuthUserData } from '@/utils/auth'

export default {
  components: {
    DataListListView
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
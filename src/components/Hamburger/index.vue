<template>
  <div class="hamburger" @click="toggleClick">
    <!-- <el-switch
        :value="isActive"
        @change='toggleClick'
        :active-color='navBarColor'
        inactive-text="是否展开侧边导航：">
    </el-switch> -->
    <span v-if="!isActive" :class="{'in-active': !isActive}">>></span>
    <span v-if="isActive" :class="{'is-active': isActive}"> << 收起 </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Hamburger',
  computed: {
    ...mapGetters(['navBarColor']),
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
</style>

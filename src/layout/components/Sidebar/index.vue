<template>
  <div class="siderBar" :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="menu_sider"
        :default-active="activeMenu"
        :collapse="isCollapse"     
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="(route,index) in permission_routes" :key="index" :item="route" :base-path="route.path" />
      </el-menu>     
    </el-scrollbar>
    <hamburger :is-active="sidebar.opened" @toggleClick="toggleSideBar" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import Logo from './Logo'
import Hamburger from '@/components/Hamburger'

export default {
  components: { SidebarItem, Logo, Hamburger},
  data(){
    return {
      activeMenu: localStorage.getItem('activeMenu')? localStorage.getItem('activeMenu'):this.$route.path
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar',
      'siderBarColor'
    ]),
    variables() {
      return variables
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
    },
  }
}
</script>

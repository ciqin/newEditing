<template>
  <div class="navbar">
      <!-- logo -->
      <div class="left">
          <!-- <span>智选</span> -->
          <el-select v-model="langName" placeholder="请选择" @change="changeLangEvent">
            <el-option v-for="item in lang" :key="item.label" :label="item.txt" :value="item.label"></el-option>
          </el-select>
      </div>
      <!-- 用户信息 -->
      <div class="right">
          <i class="el-icon-setting" @click="openDrawer"></i>
          <span>{{userData.userName}}</span>
      </div>
      <!-- 设置弹窗 -->
      <settingDrawer ref="settingDrawer"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import settingDrawer from "@/components/settingDrawer"
import { constants } from 'os';

export default {
  components: { settingDrawer },
  data () {
    return {
      langName: 'zh-CN',
      lang: [
        {
          txt: '中文',
          label: 'zh-CN'
        },
        {
          txt: '英文',
          label: 'en-US'
        },
        {
          txt: '日文',
          label: 'ja-JP'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['userData','theme','predefineColors']),
    navBarColor: {
      get() {
        return this.$store.getters.navBarColor
      },
      set() {
      }
    }
  },
  methods: {
    openDrawer() {
      this.$refs.settingDrawer.drawer = true;
    },
    changeLangEvent(val) {
      let self_current_lang = val;
      if (self_current_lang) {
        // 切换系统语言
        this.$i18n.locale = self_current_lang
        // 将新语言保存到全局状态管理
        this.$store.dispatch('update_current_lang', self_current_lang)
        // 成功提示
        this.$message.success('系统语言切换成功！')
      } else {
        this.$message.warning('没有你想要的语言吗，选一个吧！')
      }
    }
  }
}
</script>


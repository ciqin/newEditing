<template>
    <el-drawer
        title="主题设置"
        :modal='false'
        size='276px'
        :show-close='false'
        :visible.sync="drawer"
        :direction="direction">
        <div class="setting-container">
            <!-- <el-color-picker v-model="navBarColor"
                @change='changeNavbarColor'
                :predefine="predefineColors">
            </el-color-picker> -->
            <div class="color-configuration">
                <p>头部主题</p>
                <el-row>
                    <el-col :span="8" v-for="(item,index) in predefineColors" :key="index" :style="{'--color-box':item.value}">
                        <div class="box">
                            <div @click="changeNavbarColor(item.value)">
                                <i class="el-icon-check" 
                                v-if="(siderBarColor == 'light' && theme == 'light' && navBarColor == item.value) || (theme == 'dark' && navBarColor == item.value)"
                                >
                                </i>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-divider v-if="theme == 'light'"></el-divider>
            <div class="color-siderbar" v-if="theme == 'light'">
                <p>深色边栏</p>
                <el-row>
                    <el-col :span="8" v-for="(item,index) in predefineColors" :key="index" :style="{'--color-box':item.value}">
                        <div class="box" @click="changeSiderBarColor(item.value)">
                            <div class="left"></div>
                            <div class="right" >
                                <i class="el-icon-check" v-if="siderBarColor == 'dark' && theme == 'light' && navBarColor == item.value"></i>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-divider></el-divider>
            <div class="color-mode">
                <p>模式主题</p>
                <el-row>
                    <el-col :span="8" v-for="(item,index) in siderBarColors" :key="index" :style="{'--mode-box':item.value}">
                        <div class="box">
                            <div @click="changeTheme(item.theme)">
                                <!-- <i class="el-icon-check" v-if="theme == item.theme"></i> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        
    </el-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'settingDrawer', 
    data() {
        return {
            drawer: false,
            direction: 'rtl',
            predefineColors:[   //内置主题颜色
                {
                    value: '#e11836',
                    label: '活力红'
                },
                {
                    value: '#3370fd', 
                    label: '精锐蓝'
                },
                {
                    value: '#6a65e7', 
                    label: '简约紫'
                },
                {
                    value: '#fba800', //活力红
                    label: '青春黄'
                },
                {
                    value: '#27cbb2', //活力红
                    label: '生态绿'
                },
                {
                    value: '#59657f', //活力红
                    label: '星空灰'
                } 
            ],
            siderBarColors:[   //内置主题颜色
                {
                    value: '#ffffff',
                    label: '纯净白',
                    theme: 'light'
                },
                {
                    value: '#242733', 
                    label: '暗夜灰',
                    theme: 'dark'
                },
            ]
        }
    },
    computed: {
        ...mapGetters(['navBarColor','siderBarColor','theme']),
    },
    methods: {
        changeNavbarColor(val) {
            this.$store.dispatch('app/toggleNavBarColor', val)
            this.$store.dispatch("app/toggleSiderBarColor", 'light')
        },
        changeSiderBarColor(val) {
            this.$store.dispatch('app/toggleNavBarColor', val)
            this.$store.dispatch("app/toggleSiderBarColor", 'dark')
        },
        changeTheme(theme) {
            this.$store.dispatch('app/toggleTheme', theme)
        }
    }
}
</script>

<style lang='scss' scoped>
.setting-container {
    color: #000;
    padding: 0px 20px;
    .el-row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .el-col {
            margin-bottom: 23px;
            display: flex;
            justify-content: center;
            align-items: center;
            .box {   
                div {
                    width: 56px;
                    height: 56px;
                    background-color: var(--color-box);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    i {
                        color: #fff;
                        font-weight: 700;
                        font-size: $font24px;
                    }
                }
            } 
        }
    }
    .color-siderbar {
        .box {
            display: flex;
            .left {
                width: 12px!important;
                background: #242733!important;
            }
            .right {
                width: 44px!important;
                i {
                    margin-right: 0!important;
                }
            }
        }   
    }
    .color-mode {
        .el-row {
            justify-content: flex-start;
            .el-col:nth-child(1) {
                .box{
                    border: 1px solid #242733;
                }
            }
            .el-col:nth-child(2) {
                .box{
                    background: #242733;
                    border: 1px solid #242733;
                }
            }
        }
        
    }
}
</style>
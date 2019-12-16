<template>
    <div :class="classObj" class="app-wrapper">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div :class="{'fixed-header':fixedHeader}">
                <navbar />
            </div>
            <app-main />
        </div>
    </div>
</template>


<script>
    const { body } = document
    const WIDTH = 992
    import {Navbar,Sidebar,AppMain} from '~/components/mgmt/layout'
    export default {
        name: "Layout",
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            device() {
                return this.$store.state.app.device
            },
            fixedHeader() {
                return this.$store.state.settings.fixedHeader
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('closeSideBar', { withoutAnimation: false })
            },
            $_isMobile() {
                const rect = body.getBoundingClientRect()
                return rect.width - 1 < WIDTH
            },
            $_resizeHandler() {
                if (!document.hidden) {
                    const isMobile = this.$_isMobile()
                    this.$store.dispatch('toggleDevice', isMobile ? 'mobile' : 'desktop')

                    if (isMobile) {
                        this.$store.dispatch('closeSideBar', { withoutAnimation: true })
                    }
                }
            }
        },
        watch: {
            $route(route) {
                if (this.device === 'mobile' && this.sidebar.opened) {
                    this.$store.dispatch('closeSideBar', { withoutAnimation: false })
                }
            }
        },
        beforeMount() {
            window.addEventListener('resize', this.$_resizeHandler)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.$_resizeHandler)
        },
        mounted() {
            const isMobile = this.$_isMobile()
            if (isMobile) {
                this.$store.dispatch('toggleDevice', 'mobile')
                this.$store.dispatch('closeSideBar', { withoutAnimation: true })
            }
        },
        components :{
            Navbar,
            Sidebar,
            AppMain
        }
    }
</script>

<style lang="scss">
    @import "../../assets/mgmt/style/index.scss";
 

    
</style>

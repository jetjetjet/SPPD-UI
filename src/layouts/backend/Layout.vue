<template>
  <div>
    <div class="wrapper">
      <SidebarStyle  />
      <HeaderStyle1/>
      <div class="content-page">
        <transition name="router-anim">
          <router-view/>
        </transition>
      </div>
    </div>
    <FooterStyle />
  </div>
</template>
<script>
import {core} from "@/config/pluginInit"
import SidebarStyle from "@/components/partials/backend/SidebarStyle/SidebarStyle";
import HeaderStyle1 from "@/components/partials/backend/HeaderStyle/HeaderStyle1";
import FooterStyle from "@/components/partials/backend/FooterStyle/FooterStyle";
export default {
  name: 'Layout',
  components: {
    HeaderStyle1,
    FooterStyle,
    SidebarStyle
  },
   mounted(){
    document.body.classList=''
    core.iconanimate()
  },
  destroyed () {
    document.body.classList=''
  }
  
}
</script>
<style>
</style>

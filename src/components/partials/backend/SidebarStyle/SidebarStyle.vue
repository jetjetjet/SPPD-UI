<template>
<div class="mm-sidebar  sidebar-default ">
	<div class="mm-sidebar-logo d-flex align-items-center justify-content-between">
		<router-link :to="{name: 'layout.dashboard'}" class="header-logo"> <img :src="sidelogo" class="img-fluid rounded-normal" alt="logo"> </router-link>
		<div class="side-menu-bt-sidebar" @click="miniSidebar"> <i class="las la-bars wrapper-menu"></i> </div>
	</div>
	<div class="data-scrollbar" data-scroll="1" id="sidebar-scrollbar">
		<nav class="mm-sidebar-menu">
			<ul id="mm-sidebar-toggle" class="side-menu">
				<li :class="checkActive('layout.dashboard') ? 'active' : ''" >
					<router-link :to="{ name: 'layout.dashboard'}" class="svg-icon"> 
						<i class="">
							<svg class="svg-icon" id="mm-dash-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</i> 
						<span>Dashboard</span> 
					</router-link>
				</li>
        <li :class="checkActive(masterData) ? 'active' : ''">
					<a v-b-toggle.MasterData class="svg-icon"> 
            <i class="">
              <svg class="svg-icon" id="mm-dash" width="20" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </i>
            <span class="ml-2">Master Data</span>
            <i class="las la-angle-right mm-arrow-right arrow-active"></i> 
            <i class="las la-angle-down mm-arrow-right arrow-hover"></i> 
          </a>
          <b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
						<li :class="checkActive('Master.user') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.user'}" class="svg-icon"> 
                <i class="">
									<svg class="svg-icon" id="mm-user-1" xmlns="http://www.w3.org/2000/svg" fill="none"
										viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
                </i> <span>Pegawai</span> 
              </router-link>
						</li>
					</b-collapse>
					<b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
						<li :class="checkActive('Master.jabatan') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.jabatan'}" class="svg-icon"> 
                <i class="">
									<svg class="svg-icon" id="mm-user-1-3" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
									</svg>
                </i> <span>Peran</span> 
              </router-link>
						</li>
					</b-collapse>
					<b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
						<li :class="checkActive('Master.jabatan') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.jabatan'}" class="svg-icon"> 
                <i class="">
									<svg class="svg-icon" id="md-wil" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
                </i> <span>Wilayah Kerja Indonesia</span> 
              </router-link>
						</li>
					</b-collapse>
					<b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
						<li :class="checkActive('Master.jabatan') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.jabatan'}" class="svg-icon"> 
                <i class="">
                  <svg class="svg-icon" id="md-sign" width="20" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </i> <span>Pejabat TTD</span> 
              </router-link>
						</li>
					</b-collapse>  
				</li>
				<li :class="checkActive('layout.dashboard') ? 'active' : ''" >
					<router-link :to="{ name: 'layout.dashboard'}" class="svg-icon"> 
						<i class="">
							<svg class="svg-icon" id="sppd" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
							</svg>
						</i> 
						<span>SPPD</span> 
					</router-link>
				</li>
				<li :class="checkActive(charts) ? 'active' : ''">
					<a v-b-toggle.charts class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-chart-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </i> <span class="ml-2">Laporan</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul"  @shown="showCollapse('charts')" @hide="hideCollapse" id="charts" :visible="checkActive(charts)" class="submenu " accordion="my-accordion">
						<li :class="checkActive('chart.highchart') ? 'active' : ''">
							<router-link :to="{ name: 'chart.highchart'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chart-1-2" width="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                </i> <span class="">High Chart</span> </router-link>
						</li>
					</b-collapse>
				</li>
				
			</ul>
		</nav>
		<div class="pt-5 pb-2"></div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { core } from '@/config/pluginInit'
export default {
  name:"SidebarStyle",
  props:{
     items: Array,
  },
  data () {
    return{
      homeurl:'',
      masterData:['Master.jabatan', 'Master.user'],
      profile:['user-profile'],
      dashboards:['layout.dashboard'],
      charts:['chart.amchart','chart.apexchart','chart.highchart','chart.morrischart',],
      auth:['auth.login','auth.recover-password'],
      icon:['icon.dripicon', 'icon.fontawsome','icon.lineawsome','icon.remixicon',]
    }
  },
  mounted () {
    core.SmoothScrollbar()
  },
  destroyed () {
    core.SmoothScrollbar()
  },
  computed : {
    ...mapGetters({
      logo:'darklogo',
      sidelogo:'logo',
    })
  },
  methods: {
    checkActive(route) {
      if (this.$route.name == route) {
        return true;
      }
      if (route.includes(this.$route.name)) {
        return true
      }
    },
    miniSidebar(){
      core.triggerSet()
    },
    showCollapse(collapseId) {
      document.getElementById(collapseId).closest('li').classList.add('active')
    },
    hideCollapse() {
      const list = document.querySelector('.mm-sidebar-menu').querySelectorAll('.submenu')
      Array.from(list, elem => {
        if (elem.closest('.active') !== null && elem.closest('.active') !== undefined) {
          elem.closest('.active').classList.remove('active')
        }
      })
    }
  },
}
</script>
<template>
<div class="mm-sidebar  sidebar-default ">
	<div class="mm-sidebar-logo d-flex align-items-center justify-content-between">
		<router-link :to="{name: 'layout.dashboard1'}" class="header-logo"> <img :src="sidelogo" class="img-fluid rounded-normal" alt="logo"> </router-link>
		<div class="side-menu-bt-sidebar" @click="miniSidebar"> <i class="las la-bars wrapper-menu"></i> </div>
	</div>
	<div class="data-scrollbar" data-scroll="1" id="sidebar-scrollbar">
		<nav class="mm-sidebar-menu">
			<ul id="mm-sidebar-toggle" class="side-menu">
				<li :class="checkActive('layout.dashboard1') ? 'active' : ''" >
					<router-link :to="{ name: 'layout.dashboard1'}" class="svg-icon"> 
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
						<li :class="checkActive('Master.jabatan') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.jabatan'}" class="svg-icon"> 
                <i class="">
                  <svg class="svg-icon" id="mm-dash-1" width="20" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </i> <span>Jabatan</span> 
              </router-link>
						</li>
					</b-collapse>
          <b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
						<li :class="checkActive('Master.user') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.user'}" class="svg-icon"> 
                <i class="">
                  <svg class="svg-icon" id="mm-dash-1" width="20" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </i> <span>User</span> 
              </router-link>
						</li>
					</b-collapse>
          <b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
            <li :class="checkActive('Master.member') ? 'active' : ''" >
              <router-link :to="{ name: 'Master.member'}" class="svg-icon"> 
                <i class="">
                  <svg class="svg-icon" id="mm-dash-1" width="20" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </i> <span>Member</span> 
              </router-link>
            </li>
					</b-collapse>
          <b-collapse @shown="showCollapse('MasterData')" @hide="hideCollapse" tag="ul" id="MasterData" class="submenu" accordion="my-accordion" :visible="checkActive('masterData')">
						<li :class="checkActive('Master.suppliers') ? 'active' : ''" >
							<router-link :to="{ name: 'Master.suppliers'}" class="svg-icon"> 
                <i class="">
                  <svg class="svg-icon" id="mm-dash-1" width="20" xmlns="http://www.w3.org/2000/svg"
										fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
											d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </i> <span>Suppliers</span> 
              </router-link>
						</li>
					</b-collapse>  
				</li>
				<li :class="checkActive(icon) ? 'active' : ''">
					<a v-b-toggle.icon class=" svg-icon"> 
						<i>
							<svg class="svg-icon" id="mm-icon-1" width="20" xmlns="http://www.w3.org/2000/svg"
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
						</i> 
						<span class="ml-2">Icons</span> 
						<i class="las la-angle-right mm-arrow-right arrow-active"></i> 
						<i class="las la-angle-down mm-arrow-right arrow-hover"></i> 
					</a>
					<b-collapse tag="ul" @shown="showCollapse('icon')" @hide="hideCollapse" id="icon" class="submenu "  :visible="checkActive(icon)" accordion="my-accordion">
						<li :class="checkActive('icon.dripicon') ? 'active' : ''">
							<router-link :to="{name: 'icon.dripicon'}" class="svg-icon"> 
								<i class="">
									<svg class="svg-icon feather feather-layers" id="mm-icon-1-1" xmlns="http://www.w3.org/2000/svg" width="20"
										viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
										stroke-linecap="round" stroke-linejoin="round" >
										<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
										<polyline points="2 17 12 22 22 17"></polyline>
										<polyline points="2 12 12 17 22 12"></polyline>
									</svg>
								</i>
								<span class="">Dripicons</span> 
							</router-link>
						</li>
						<li :class="checkActive('icon.fontawsome') ? 'active' : ''">
							<router-link :to="{name: 'icon.fontawsome'}" class="svg-icon">
								<i class="">
									<svg class="svg-icon feather feather-facebook" id="mm-icon-1-2" xmlns="http://www.w3.org/2000/svg" width="20"
										viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
										stroke-linecap="round" stroke-linejoin="round" >
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
										</path>
									</svg>
								</i>
								<span class="">Font Awesome</span> 
							</router-link>
						</li>
						<li :class="checkActive('icon.lineawsome') ? 'active' : ''">
							<router-link :to="{ name: 'icon.lineawsome'}" class="svg-icon">
								<i class="">
										<svg class="svg-icon" id="mm-icon-1-3" xmlns="http://www.w3.org/2000/svg" width="20"
											viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
											stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<circle cx="9" cy="5" r="1" />
											<circle cx="9" cy="12" r="1" />
											<circle cx="9" cy="19" r="1" />
											<circle cx="15" cy="5" r="1" />
											<circle cx="15" cy="12" r="1" />
											<circle cx="15" cy="19" r="1" />
										</svg>
								</i>
								<span class="">Line Awesome</span> 
							</router-link>
						</li>
						<li :class="checkActive('icon.remixicon') ? 'active' : ''">
							<router-link :to="{ name: 'icon.remixicon'}" class="svg-icon">
								<i class="">
									<svg class="svg-icon feather feather-circle" id="mm-icon-1-4" xmlns="http://www.w3.org/2000/svg" width="20"
										viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
										stroke-linecap="round" stroke-linejoin="round" >
										<circle cx="12" cy="12" r="10"></circle>
									</svg>
								</i>
								<span class="">Remixicon</span> 
							</router-link>
						</li>
					</b-collapse>
				</li>
				<li :class="checkActive(charts) ? 'active' : ''">
					<a v-b-toggle.charts class=" svg-icon"> <i>
                            <svg class="svg-icon" id="mm-chart-1" width="20" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                        </i> <span class="ml-2">Charts</span> <i class="las la-angle-right mm-arrow-right arrow-active"></i> <i class="las la-angle-down mm-arrow-right arrow-hover"></i> </a>
					<b-collapse tag="ul"  @shown="showCollapse('charts')" @hide="hideCollapse" id="charts" :visible="checkActive(charts)" class="submenu " accordion="my-accordion">
						<li :class="checkActive('chart.apexchart') ? 'active' : ''">
							<router-link :to="{name: 'chart.apexchart'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chart-1-1" width="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </i> <span class="">Apex Chart</span> </router-link>
						</li>
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
						<li :class="checkActive('chart.morrischart') ? 'active' : ''">
							<router-link :to="{name: 'chart.morrischart'}" class="svg-icon"> <i class="">
                                    <svg class="svg-icon" id="mm-chart-1-3" width="20"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </i> <span class="">Morries Charts</span> </router-link>
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
      dashboards:['layout.dashboard1'],
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
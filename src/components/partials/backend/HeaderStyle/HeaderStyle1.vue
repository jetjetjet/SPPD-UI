<template>
 <div class="mm-top-navbar">
	<div class="mm-navbar-custom">
		<nav class="navbar navbar-expand-lg navbar-light p-0">
			<div class="mm-navbar-logo d-flex align-items-center justify-content-between" @click="miniSidebar"> <i class="ri-menu-line wrapper-menu"></i>
				<router-link :to="{name: 'layout.dashboard1'}" class="header-logo"> <img :src="sidelogo" class="img-fluid rounded-normal" alt="logo"> </router-link>
			</div>
			<div class="mm-search-bar device-search m-auto">
			</div>
			<div class="d-flex align-items-center">
				<ModeSwitch />
				<b-navbar-toggle target="nav-collapse" class="mr-2 text-primary"> <i class="ri-menu-3-line"></i> </b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<ul class="navbar-nav ml-auto navbar-list align-items-center">
						<li class="nav-item nav-icon search-content" v-nav-toggle>
							<a href="#" class="search-toggle rounded dropdown-toggle" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="svg-icon text-primary" id="h-suns" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
							</a>
							<div class="mm-search-bar mm-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
								<form action="#" class="searchbox p-2">
									<div class="form-group mb-0 position-relative">
										<input type="text" class="text search-input font-size-12" placeholder="type here to search..."> <a href="#" class="search-link"><i class="las la-search"></i></a> </div>
								</form>
							</div>
						</li>
						<li class="nav-item nav-icon dropdown" v-nav-toggle>
							<a href="javascript:void(0)" class="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="svg-icon feather feather-mail text-primary" id="mm-mail-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
									<polyline points="22,6 12,13 2,6"></polyline>
								</svg> <span class="bg-primary"></span> </a>
							<div class="mm-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton2">
								<div class="card shadow-none m-0 border-0">
									<div class="card-body p-0 ">
										<div class="cust-title p-3">
											<h5 class="mb-0">All Messages</h5> </div>
										<div class="p-3">
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/1.jpg" alt="01"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0">Barry Emma Watson <small class="badge badge-success float-right">New</small></h6> <small class="float-left font-size-12">12:00 PM</small> </div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/2.jpg" alt="02"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0 ">Lorem Ipsum Watson</h6> <small class="float-left font-size-12">20 Apr</small> </div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/3.jpg" alt="03"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0 ">Why do we use it? <small class="badge badge-success float-right">New</small></h6> <small class="float-left font-size-12">1:24 PM</small> </div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/4.jpg" alt="04"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0">Variations Passages <small class="badge badge-success float-right">New</small></h6> <small class="float-left font-size-12">5:45 PM</small> </div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/5.jpg" alt="05"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0 ">Lorem Ipsum generators</h6> <small class="float-left font-size-12">1 day ago</small> </div>
												</div>
											</a>
										</div> <a class="d-flex justify-content-center p-2 card-footer" href="#" role="button">
                                        View All
                                    </a> </div>
								</div>
							</div>
						</li>
						<li class="nav-item nav-icon dropdown" v-nav-toggle>
							<a href="#" class=" search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="feather feather-bell svg-icon text-primary" id="mm-bell-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
									<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
								</svg> <span class="bg-primary "></span> </a>
							<div class="mm-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
								<div class="card shadow-none m-0 border-0">
									<div class="card-body p-0 ">
										<div class="cust-title p-3">
											<h5 class="mb-0">All Notifications</h5> </div>
										<div class="p-3">
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/1.jpg" alt="01"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0">Emma Watson Barry <small class="badge badge-success float-right">New</small></h6>
														<p class="mb-0">95 MB</p>
													</div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/2.jpg" alt="02"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0 ">New customer is join</h6>
														<p class="mb-0">Cyst Barry</p>
													</div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/3.jpg" alt="03"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0 ">Two customer is left</h6>
														<p class="mb-0">Cyst Barry</p>
													</div>
												</div>
											</a>
											<a href="#" class="mm-sub-card">
												<div class="media align-items-center">
													<div class=""> <img class="avatar-40 rounded-small" src="@/assets/images/user/4.jpg" alt="04"> </div>
													<div class="media-body ml-3">
														<h6 class="mb-0 ">New Mail from Fenny <small class="badge badge-success float-right">New</small></h6>
														<p class="mb-0">Cyst Barry</p>
													</div>
												</div>
											</a>
										</div> <a class="d-flex justify-content-center p-2 card-footer" href="#" role="button">
                                        View All
                                    </a> </div>
								</div>
							</div>
						</li>
						<Fullscreen class="nav-item nav-icon dropdown full-screen" extraclass="nav-item nav-icon dropdown" />
						<li class="nav-item nav-icon dropdown" v-nav-toggle>
							<a class="nav-item nav-icon dropdown-toggle pr-0 search-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src="@/assets/images/user/1.jpg" class="img-fluid avatar-rounded" alt="user"> </a>
							<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
								<li class="dropdown-item d-flex svg-icon">
									<svg class="svg-icon mr-0 text-primary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
									<router-link :to="{name: 'user-profile'}">Profil Saya</router-link>
								</li>
								<li class="dropdown-item  d-flex svg-icon border-top">
									<svg class="svg-icon mr-0 text-primary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /> </svg>
									<a @click="logout">Logout</a>
								</li>
							</ul>
						</li>
					</ul>
				</b-collapse>
			</div>
		</nav>
	</div>
</div>
</template>
<script>
import {core} from '@/config/pluginInit'
import Fullscreen from '../../../fullscreen/Fullscreen'
import { mapGetters } from 'vuex'

export default {
    name:"HeaderStyle1",
	components: {  Fullscreen},
    computed : {
			...mapGetters({
					logo:'darklogo',
					sidelogo:'logo',
			}),
			isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
    },
	methods: {
		miniSidebar(){
			core.triggerSet()
		},
		async logout (){
			await this.$store.dispatch('LogOut')
			this.$router.push('/login')
		}
	}
}
</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-12">
				<div class="card">
					<div class="card-body p-0">
						<div class="mm-edit-list usr-edit">
							<tab-nav :pills="true" extraclass="mm-edit-profile d-flex" >
								<tab-nav-items :active="true" id="personal" dataToggle="pill" ariaControls="personal-information" title="Informasi Personal" liClass=" col-md-4 p-0" />
								<tab-nav-items :active="false" id="chang" dataToggle="pill" ariaControls="chang-pwd" title="Ubah Password" liClass=" col-md-4 p-0" />
								<tab-nav-items :active="false" id="profile-pict" dataToggle="pill" ariaControls="prof-pict" title="Ubah Photo" liClass=" col-md-4 p-0" />
							</tab-nav>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-12">
				<div class="mm-edit-list-data">
					<tab-content>
						<tab-content-item :active="true" id="personal-information" aria-labelled-by="personal">
							<div class="card">
								<div class="card-header d-flex justify-content-between">
									<div class="mm-header-title">
										<h4 class="card-title">Informasi Personal Pegawai</h4>
									</div>
								</div>
								<div class="card-header">
									<b-img thumbnail class="mx-auto d-block" :src="formProfile.path_foto" alt="Display Picture"></b-img>
								</div>
								<div class="card-body">
									<form>
										<div class="form-row">
											<b-col md="6" class="mb-3">
												<label for="nip">NIP</label>
												<input type="number" class="form-control" id="nip" v-model="formProfile.nip">
											</b-col>
											<b-col md="6" class="mb-3">
												<label for="email">Email</label>
												<input type="email" class="form-control" id="email" v-model="formProfile.email">  
											</b-col>
											<b-col md="6" class="mb-3">
												<label for="full_name">Nama Lengkap</label>
												<input type="text" class="form-control" id="full_name" v-model="formProfile.full_name">
											</b-col>
											<b-col md="6" class="mb-3">
												<label for="name">Peran</label>
												<v-select :options="dataRole" v-model="formProfile.role" class="style-chooser"></v-select>
											</b-col>
											<b-col md="6" class="mb-3">
												<label for="phone">Kontak</label>
												<input type="text" class="form-control" id="phone" v-model="formProfile.phone">
											</b-col>
											<b-col md="6" class="mb-3">
												<label for="tgl_lahir">Tgl. Lahir</label>
												<flat-pickr class="form-control" :config="config" id="tgl_lahir" v-model="formProfile.tgl_lahir"></flat-pickr>
											</b-col>
											<b-col md="12" class="form-group col-sm-6">
												<label class="d-block">Jenis Kelamin:</label>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" v-model="formProfile.jenis_kelamin" id="laki" value="Laki-laki" class="custom-control-input">
													<label class="custom-control-label" for="laki"> Laki-Laki </label>
												</div>
												<div class="custom-control custom-radio custom-control-inline">
													<input type="radio" v-model="formProfile.jenis_kelamin" value="Perempuan" id="perempuan" class="custom-control-input">
													<label class="custom-control-label" for="perempuan"> Perempuan </label>
												</div>
											</b-col>
											<b-col md="12" class="mb-3">
												<label for="address">Alamat</label>
												<textarea class="form-control" v-model="formProfile.address" id="address"></textarea>
											</b-col>
										</div>
										<div class="float-right">
											<button type="submit" class="btn bg-danger mr-1" @click.prevent="formCancel()">Batal</button>
											<button type="submit" class="btn btn-primary" @click.prevent="updateProfile()">Simpan</button>
										</div>
									</form>
								</div>
							</div>
						</tab-content-item>
						<tab-content-item :active="false" id="chang-pwd" aria-labelled-by="chang">
							<div class="card">
								<div class="card-header d-flex justify-content-between">
									<div class="mm-header-title">
										<h4 class="card-title">Ubah Password</h4>
									</div>
								</div>
								<div class="card-body">
									<form>
										<div class="form-row">
											<b-col md="12" class="mb-3">
												<label for="pass1">Password Baru</label>
												<input type="password" class="form-control" id="pass1" v-model="formPass.pass1" required>
											</b-col>
											<b-col md="12" class="mb-3">
												<label for="pass2">Ulangi Password</label>
												<input type="password" class="form-control" id="pass2" v-model="formPass.pass2" required>  
											</b-col>
										</div>
										<div class="float-right">
											<button type="submit" class="btn bg-danger mr-1" @click.prevent="formCancel()">Batal</button>
											<button type="submit" class="btn btn-primary" @click.prevent="updatePassword()">Simpan</button>
										</div>
									</form>
								</div>
							</div>
						</tab-content-item>
							<tab-content-item :active="false" id="prof-pict" aria-labelled-by="profile-pict">
								<div class="card">
									<div class="card-header d-flex justify-content-between">
										<div class="mm-header-title">
											<h4 class="card-title">Ubah Poto</h4>
										</div>
									</div>
									<div class="card-body">
										<form>
										<div class="form-row">
											<b-col md="12" class="mb-3">
												<label for="ss">Foto</label>
												<div class="form-group">
													<div class="custom-file">
														<input type="file" ref="file" class="custom-file-input" id="foto" v-on:change="handleFile()" required>
														<label class="custom-file-label" for="customFile">{{ formPoto.label }}</label>
													</div>
												</div>
												<template v-if="formPoto.preview">
													<div class="border p-2 mt-3">
															<p class="mb-0">Nama Berkas: {{ formPoto.file.name }}</p>
															<img :src="formPoto.preview" class="img-fluid" />
													</div>
												</template>
											</b-col>
											
										</div>
										<div class="float-right">
											<button type="submit" class="btn bg-danger mr-1" @click.prevent="formCancel()">Batal</button>
											<button type="submit" class="btn btn-primary" @click.prevent="updatePoto()">Simpan</button>
										</div>
									</form>
									</div>
								</div>
							</tab-content-item>
					</tab-content>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import tabNav from '../../../components/tab/tab-nav.vue'
import { showToast } from '../../../_utils/toast'
import { getDataService, putDataService } from '../../../store/modules/crudservices'
import { dateConfig } from '../../../_utils/form-config'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name:'UserEdit',
  data() {
    return {
      config: dateConfig.basic,
			formPoto:{
				file: null,
				preview: null,
				label: 'Pilih Foto'
			},
			formProfile:[],
			formPass:{
				pass1: null,
				pass2: null
			},
      dataRole: []
    }
  },
  components:{
    flatPickr, tabNav
  },
  methods: {
    getRole() {
      const url = '/role-grid';
      getDataService(url).then(response => {
        this.dataRole = response.data.map((data)=> data.name )
      })
    },
    getDataUser(id) {
      const url = '/user/' + id;
      getDataService(url).then(response => {
        this.formProfile = response.data
				this.formProfile.path_foto = 'https://randomuser.me/api/portraits/men/75.jpg'
      })
    },
		updatePassword(){
      const form = this.formPass
			if (form.pass1 !== form.pass2 || form.pass2 == null || form.pass1 == null) { 
				showToast('error', 'Password tidak cocok/Tidak boleh kosong.')
				return 
			}

			const _formData = new FormData()
      _formData.append('_method', 'PUT' )
      _formData.append('password', form.pass1)
      
			const url = '/user/' + this.formProfile.id + '/change-password'
      putDataService(url, _formData).then(response => {
        if(response.data.success) this.$router.push('/master/user')
      })
		},
		updatePoto(){
      const form = this.formPoto
			
			if (form.file == null) { 
				showToast('error', 'File tidak boleh kosong.')
				return 
			}

			const _formData = new FormData()
      _formData.append('_method', 'PUT' )
      _formData.append('file', form.file)
      
			const url = '/user/' + this.formProfile.id + '/change-photo'
      putDataService(url, _formData).then(response => {
        if(response.data.success) this.$router.push('/master/user')
      })		
		},
    updateProfile(){
      const _formData = new FormData()
      const form = this.formProfile
      // _formData.append('id', form.id)
      _formData.append('_method', 'PUT' )
      _formData.append('nip', form.nip)
      _formData.append('full_name', form.full_name)
      _formData.append('email', form.email)
      _formData.append('tgl_lahir', form.tgl_lahir)
      _formData.append('jenis_kelamin', form.jenis_kelamin)
      _formData.append('phone', form.phone)
      _formData.append('address', form.address)
      _formData.append('role', form.role)
      
			const url = '/user/' + form.id
      putDataService(url, _formData).then(response => {
        if(response.data.success) this.$router.push('/master/user')
      })
    },
    formCancel(){
      this.$router.push('/master/user') 
    },
		handleFile() {
			let input = this.$refs.file
			
			if (input) {
				var reader = new FileReader();
				reader.onload = (e) => {
					this.formPoto.preview = e.target.result;
				}
				this.formPoto.image=input.files[0];
				this.formPoto.file=input.files[0];
				reader.readAsDataURL(input.files[0]);
			}
		},
  },
  mounted() {
    this.getRole()
    this.getDataUser(this.$route.params.id)
  }
}
</script>
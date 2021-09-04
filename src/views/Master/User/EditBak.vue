<template>
  <b-container fluid="">
    <b-row>
      <b-col sm="12" lg="12">
        <card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Ubah User</h4>
          </template>
          <template v-slot:body>
            <form >
              <div class="form-row">
                <b-col md="6" class="mb-3">
                  <label for="nip">NIP</label>
                  <input type="number" class="form-control" id="nip" v-model="form.nip">
                </b-col>
                <b-col md="6" class="mb-3">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model="form.email">  
                </b-col>
                <b-col md="6" class="mb-3">
                  <label for="full_name">Nama Lengkap</label>
                  <input type="text" class="form-control" id="full_name" v-model="form.full_name">
                </b-col>
                <b-col md="6" class="mb-3">
                  <label for="name">Peran</label>
                  <v-select :options="dataRole" v-model="form.role" class="style-chooser"></v-select>
                </b-col>
                <b-col md="6" class="mb-3">
                  <label for="phone">Kontak</label>
                  <input type="text" class="form-control" id="phone" v-model="form.phone">
                </b-col>
                <b-col md="6" class="mb-3">
                  <label for="ttl">Tgl. Lahir</label>
                  <flat-pickr class="form-control" :config="config" id="ttl" v-model="form.ttl"></flat-pickr>
                </b-col>
                <b-col md="12" class="mb-3">
                  <label for="name">Jenis Kelamin</label>
                  <br />
                  <div class="radio d-inline-block mr-2">
                    <input type="radio" v-model="form.jenis_kelamin" id="laki" value="Laki-laki">
                    <label for="laki">&nbsp; Laki-laki</label>
                  </div>
                  <div class="radio d-inline-block mr-2">
                    <input type="radio" v-model="form.jenis_kelamin" value="Perempuan" id="perempuan">
                    <label for="perempuan"> &nbsp; Perempuan</label>
                  </div>
                </b-col>
                <b-col md="12" class="mb-3">
                  <label for="address">Alamat</label>
                  <textarea class="form-control" v-model="form.address" id="address"></textarea>
                </b-col>
              </div>
              
              <div class="float-right">
                <button type="submit" class="btn bg-danger mr-1" @click.prevent="formCancel()">Batal</button>
                <button type="submit" class="btn btn-primary" @click.prevent="formSave()">Simpan</button>
              </div>
            </form>
          </template>
        </card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { getDataService, putDataService } from '../../../store/modules/crudservices'
import { dateConfig } from '../../../_utils/form-config'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name:'UserAdd',
  data() {
    return {
      config: dateConfig.basic,
      label: {
        file: 'Pilih Foto'
      },
      form:{
        id: null,
        nip: null,
        full_name: null,
        email: null,
        ttl: null,
        jenis_kelamin: null,
        phone: null,
        address: null,
        file: null,
        role: null,
      },
      dataRole: []
    }
  },
  components:{
    flatPickr
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
        this.form = response.data
      })
    },
    formSave(){
      const _formData = new FormData()
      const form = this.form
      _formData.append('id', form.id)
      _formData.append('nip', form.nip)
      _formData.append('full_name', form.full_name)
      _formData.append('email', form.email)
      _formData.append('ttl', form.ttl)
      _formData.append('jenis_kelamin', form.jenis_kelamin)
      _formData.append('phone', form.phone)
      _formData.append('address', form.address)
      
      putDataService('/user', _formData).then(response => {
        if(response.data.success) this.$router.push('/master/user')
      })
    },
    formCancel(){
      this.$router.push('/master/user') 
    },
  },
  mounted() {
    this.getRole()
    this.getDataUser(this.$route.params.id)
  }
}
</script>
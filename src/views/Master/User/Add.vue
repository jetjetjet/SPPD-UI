<template>
  <b-container fluid="">
    <b-row>
      <b-col sm="12" lg="12">
        <card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Tambah Pegawai</h4>
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
                  <label for="tgl_lahir">Tgl. Lahir</label>
                  <flat-pickr class="form-control" :config="config" id="tgl_lahir" v-model="form.tgl_lahir"></flat-pickr>
                </b-col>
                <b-col md="12" class="form-group col-sm-6">
                  <label class="d-block">Jenis Kelamin:</label>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" v-model="form.jenis_kelamin" id="laki" value="Laki-laki" class="custom-control-input">
                    <label class="custom-control-label" for="laki"> Laki-Laki </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" v-model="form.jenis_kelamin" value="Perempuan" id="perempuan" class="custom-control-input">
                    <label class="custom-control-label" for="perempuan"> Perempuan </label>
                  </div>
                </b-col>
                <b-col md="12" class="mb-3">
                  <label for="ss">Foto</label>
                  <div class="form-group">
                    <div class="custom-file">
                      <input type="file" ref="file" class="custom-file-input" id="foto" v-on:change="handleFileForm()">
                      <label class="custom-file-label" for="customFile">{{ label.file }}</label>
                    </div>
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
import { getDataService, postDataService } from '../../../store/modules/crudservices'
import { dateConfig } from '../../../_utils/form-config'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  created(){
    document.title = "Tambah Pegawai"
  },
  name:'UserAdd',
  data() {
    return {
      config: dateConfig.basic,
      label: {
        file: 'Pilih Foto'
      },
      form:{
        nip: null,
        full_name: null,
        email: null,
        tgl_lahir: null,
        jenis_kelamin: 'Laki-laki',
        phone: null,
        address: null,
        file: null,
        role: null
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
    formSave(){
      const _formData = new FormData()
      const form = this.form
      _formData.append('nip', form.nip)
      _formData.append('full_name', form.full_name)
      _formData.append('email', form.email)
      _formData.append('tgl_lahir', form.tgl_lahir)
      _formData.append('jenis_kelamin', form.jenis_kelamin)
      _formData.append('phone', form.phone)
      _formData.append('address', form.address)
      _formData.append('file', form.file)
      _formData.append('role', form.role)
      // _formData.append('perms', JSON.stringify(this.perms))
      
      postDataService('/user', _formData).then(response => {
        if(response.data.success) this.$router.push('/master/user')
      })
    },
    formCancel(){
      this.$router.push('/master/user') 
    },
    handleFileForm(){
      let file = this.$refs.file.files[0]
      this.label.file = file.name
      this.form.file = file
    }
  },
  mounted() {
    this.getRole()
  }
}
</script>
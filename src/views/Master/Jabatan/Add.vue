<template>
  <b-container fluid="">
    <b-row>
      <b-col sm="12" lg="12">
        <card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Tambah Peran</h4>
          </template>
          <template v-slot:body>
            <form>
              <div class="form-group">
                <label for="name">Nama Peran</label>
                <input type="name" class="form-control" id="name" v-model="header.name">
                <input type="hidden" class="form-control" v-model="header.id">
              </div>
              <hr />
              <div class="col-md-12 my-2">
                <legend>Hak Akses</legend>
                <div class="row row-sm mg-b-10">
                  <div v-for="perm in perms" :key="perm.id" class="col-sm-2">
                    <h5><b>{{ perm.module }}</b></h5>
                    <div v-for="act in perm.actions" :key="act.id" class="d-flex justify-content-between my-2">
                      <div class="custom-control custom-switch custom-control-inline">
                        <input type="checkbox" v-model="act.active" :value="act.value" :id="act.value" class="custom-control-input">
                        <label class="custom-control-label" :for="act.value">{{ act.raw }}</label>
                      </div>
                    </div>
                  </div>
                </div>
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

export default {
  name:'JabatanAdd',
  data() {
    return {
      header:{
        name: null,
        id:null
      },
      perms: []
    }
  },
  methods: {
    getJabatan() {
      const url = '/role-permissions'
      getDataService(url).then(response => {
        this.perms = response.data
      })
    },
    formSave(){
      const _formData = new FormData()
      _formData.append('name', this.header.name)
      _formData.append('perms', JSON.stringify(this.perms))

      postDataService('/role', _formData).then(response => {
        if(response.data.success) this.$router.push('/master/jabatan')
      })
    },
    formCancel(){
      this.$router.push('/master/jabatan') 
    }
  },
  mounted() {
    this.getJabatan()
  }
}
</script>
<style >

</style>
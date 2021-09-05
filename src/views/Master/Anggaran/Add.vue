<template>
  <b-container fluid="">
    <b-row>
      <b-col sm="12" lg="12">
        <card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Tambah Anggaran Baru</h4>
          </template>
          <template v-slot:body>
            <form >
              <div class="form-row">
                <b-col md="12" class="mb-3">
                  <label for="mak">Nomor MAK</label>
                  <input type="text" @focus="$event.target.select()" class="form-control" id="mak" v-model="form.mak">
                </b-col>
                <b-col md="12" class="mb-3">
                  <label for="uraian">Uraian</label>
                  <textarea class="form-control" v-model="form.uraian" id="uraian"></textarea>
                </b-col>
                <b-col md="12" class="mb-3">
                  <label for="pagu">Pagu</label>
                  <money v-model="form.pagu" v-bind="money" ref="pagu" class="form-control text-right" ></money>
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
import { postDataService } from '../../../store/modules/crudservices'
import { numberFormat } from '../../../_utils/form-config'
import { Money } from 'v-money'

export default {
  created(){
    document.title = "Tambah Pagu"
  },
  name:'UserAdd',
  data() {
    return {
      money: numberFormat,
      form:{
        mak: null,
        uraian: null,
        pagu: 0
      },
    }
  },
  methods: {
    formSave(){
      const _formData = new FormData()
      const form = this.form
      _formData.append('mak', form.mak)
      _formData.append('uraian', form.uraian)
      _formData.append('pagu', form.pagu)
      
      postDataService('/anggaran', _formData).then(response => {
        if(response.data.success) this.$router.push('/master/anggaran')
      })
    },
    formCancel(){
      this.$router.push('/master/anggaran') 
    }
  },
  components: {
    Money,
  },
}
</script>
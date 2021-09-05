<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title mb-0">Master Pegawai</h4>
            </div>
            <a :href="'/master/user/add'" class="btn btn-primary">
              Tambah Baru
            </a>
          </div>
          <div class="card-body">
            <vue-good-table
              :columns="columns"
              :rows="rows"
              :pagination-options="{
                enabled: true,
                mode: 'records',
                perPage: 5,
                position: 'top',
                perPageDropdown: [5, 10, 20],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'Selanjutnya',
                prevLabel: 'Sebelumnya',
                rowsPerPageLabel: 'Jumlah baris',
                ofLabel: 'dari',
                pageLabel: 'halaman', // for 'pages' mode
                allLabel: 'Semua',
              }"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'action'">
                  <b-button size="sm" :href="'/master/user/edit/' + props.row.id"  variant="primary" class="mr-2" title="Edit">
                    <i class="dripicons dripicons-pencil"></i>
                  </b-button >
                  <b-button size="sm" @click="showDelete(props)" variant="danger" class="mr-2" title="Hapus">
                    <i class="dripicons dripicons-trash"></i>
                  </b-button>
                </span>
                <span v-else>
                  {{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
          </div>
          <!-- MODAL DELETE -->
          <b-modal :no-close-on-backdrop="true" id="modalDelete" title="Hapus User">
            <p>Apakah anda yakin untuk menghapus user <strong>{{ labelPopup }}</strong> ?</p>
            <template #modal-footer="{ cancel }">
              <b-button variant="primary" @click="cancel()">
                Batal
              </b-button>
              <b-button variant="danger" @click="modalDelete()">
                Hapus
              </b-button>
            </template>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-good-table/dist/vue-good-table.css'
  import { VueGoodTable } from 'vue-good-table';
  import { getDataService, deleteDataService } from '../../../store/modules/crudservices'

  export default {
    name:'UserList',
    data () {
      return {
        modalTitle: '',
        labelPopup: '',
        columns:[
          {
            label: 'id',
            field: 'id',
            hidden: false
          }, {
            label: 'NIP',
            field: 'nip'
          }, {
            label: 'Nama Lengkap',
            field: 'full_name'
          }, {
            label: 'Email',
            field: 'email'
          }, {
            label: '',
            field: 'action',
            sortable: false,
            width: '125px',
            tdClass: 'text-center',
          }
        ],
        rows: [],
        form:{
          name: null
        }
      }
    },
    methods: {
      refreshLists(){
        getDataService('/user-grid').then( data => {
          this.rows = data.data
        })
      },
      showDelete(val){
        this.labelPopup = val.row.full_name
        this.form.id = val.row.id
        this.$bvModal.show('modalDelete')
      },
      modalDelete(){
        const url = '/user/' + this.form.id
        deleteDataService(url).then(response => {
          if(response.data.success)
            this.$bvModal.hide('modalDelete')
            this.refreshLists()
        })
      },
    },
    components: {
      VueGoodTable,
    },
    mounted() {
      this.refreshLists()
    }
  }
</script>
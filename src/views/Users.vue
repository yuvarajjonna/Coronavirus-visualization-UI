<template>
  <div>
    <b-card :header="'User Details'">
      <b-table selectable
        :hover="true"
        :striped="true"
        :bordered="true"
        :fixed="true"
        :items="items"
        :current-page="currentPage"
        :per-page="perPage"
        :select-mode="'single'"
        selectedVariant="success"
        @row-selected="rowSelected"
      >
        <template slot="status" slot-scope="data">
          <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
        </template>
        <template slot="gender" slot-scope="data">
          <i style="float: right;" :class="[{'cui-user icons font-2xl d-block': data.item.gender === 'male'}, {'cui-user-female icons font-2xl d-block': data.item.gender === 'female'}]"></i>
          <b-badge :variant="getIcon(data.item.gender)">{{data.item.gender}}</b-badge>
        </template>
      </b-table>
      <nav>
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
      </nav>
    </b-card>
    <b-modal title="Modal title" class="modal-info" v-model="infoModal" @cancel="cancel" @close="cancel" @ok="update(newRowData)" ok-variant="info" v-if="infoModal">
      <b-form>
        <b-form-group
          label="firstName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="firstName" type="text" placeholder="Enter Email.." v-model="newRowData.firstName" disabled></b-form-input>
        </b-form-group>
        <b-form-group
          label="lastName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="lastName" type="text" placeholder="Enter Password.." v-model="newRowData.lastName" disabled></b-form-input>
        </b-form-group>
        <b-form-group
          label="userName"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="userName" type="text" placeholder="Enter Email.." v-model="newRowData.userName" disabled></b-form-input>
        </b-form-group>
        <b-form-group
          label="email"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="email" type="email" placeholder="Enter Password.." v-model="newRowData.email" disabled></b-form-input>
        </b-form-group>
        <b-form-group
          label="gender"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="gender" type="text" placeholder="Enter gender.." v-model="newRowData.gender" disabled></b-form-input>
        </b-form-group>
        <b-form-group
          label="role"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="role" type="text" placeholder="Enter Email.." v-model="newRowData.role"></b-form-input>
        </b-form-group>
        <b-form-group
          label="status"
          :label-cols="3"
          :horizontal="true">
          <b-form-input id="status" type="text" placeholder="Enter Email.." v-model="newRowData.status"></b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'Users',
  created () {
    if (this.getUserDetails.role === 'Admin') {
      axios.get('http://localhost:5000/api/GetUsers')
        .then(response => {
          console.log('response', response)
          this.tableData = response.data
        })
        .catch(error => {
          console.log('error', error)
        })
    } else {
      this.$router.push('/dashboard')
    }
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      tableData: [],
      infoModal: false,
      rowData: {},
      newRowData: {}
    }
  },
  computed: {
    items () {
      const items = this.tableData
      return Array.isArray(items) ? items : items()
    },
    totalRows () {
      return this.getRowCount()
    },
    ...mapGetters([
      'getUserDetails'
    ])
  },
  methods: {
    getBadge (status) {
      return status === 'Paid' ? 'success' : status === 'Free' ? 'warning' : status === 'Expired' ? 'danger' : ''
    },
    getRowCount () {
      return this.items.length
    },
    getIcon (gender) {
      return gender === 'male' ? 'primary' : gender === 'female' ? 'secondary' : 'dark'
    },
    rowSelected (rowData) {
      if (rowData.length === 0) {
        rowData.push(this.rowData)
      }
      this.rowData = rowData[0]
      this.newRowData = _.clone(rowData[0])
      this.infoModal = true
    },
    cancel () {
      this.infoModal = false
    },
    update (data) {
      console.log('row clicked', this.rowData)
      console.log('data', data)
      // axios.put('http://localhost:5000/api/UpdateUser', {
      //   updatedUser: data
      // })
      //   .then(response => {
      //     console.log('response', response)
      //     // this.tableData = response.data
      //   })
      //   .catch(error => {
      //     console.log('error', error)
      //   })
    }
  }
}
</script>

<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} DRIVER INFO</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">

        <!-- Product Image -->
        <template v-if="dataProfilePhoto">

          <!-- Image Container -->
          <div class="img-container w-64 mx-auto flex items-center justify-center">
            <img :src="dataProfilePhoto" alt="img" class="responsive">
          </div>

          <!-- Image upload Buttons -->
          <div class="modify-img flex justify-between mt-5">
            <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
            <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Update Image</vs-button>
            <vs-button type="flat" color="#999" @click="dataProfilePhoto = null">Remove Image</vs-button>
          </div>
        </template>

        <!-- FIRST NAME -->
        <vs-input label="First Name" v-model="dataFName" class="mt-5 w-full" name="First Name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('First Name')">{{ errors.first('First Name') }}</span>
        
        <!-- LAST NAME -->
        <vs-input label="Last Name" v-model="dataLName" class="mt-5 w-full" name="Last Name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('Last Name')">{{ errors.first('Last Name') }}</span>

        <!-- EMAIL -->
        <vs-input
          icon-pack="feather"
          icon="icon-mail"
          label="Email"
          v-model="dataEmail"
          class="mt-5 w-full"
          v-validate="{ required: true, regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }"
          name="Email" />
        <span class="text-danger text-sm" v-show="errors.has('Email')">{{ errors.first('Email') }}</span>

        <!-- PHONE -->
        <vs-input
          icon-pack="feather"
          icon="icon-phone"
          label="Phone"
          v-model="dataPhone"
          class="mt-5 w-full"
          v-validate="{ required: true, regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ }"
          name="Phone" />
        <span class="text-danger text-sm" v-show="errors.has('Phone')">{{ errors.first('Phone') }}</span>

        <!-- GENDER -->
        <vs-select v-model="dataGender" label="Gender" class="mt-5 w-full" name="Gender" v-validate="'required'">
          <vs-select-item :key="gender.value" :value="gender.value" :text="gender.text" v-for="gender in gender_choices" />
        </vs-select>
        <span class="text-danger text-sm" v-show="errors.has('Gender')">{{ errors.first('Gender') }}</span>

        <!-- ADDRESS -->
        <vs-input label="ADDRESS" icon-pack="feather" icon="icon-home" v-model="dataAddress" class="mt-5 w-full" name="Address" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('Address')">{{ errors.first('Address') }}</span>

        <!-- VEHICLE -->
        <!-- <vs-select v-model="dataVehicle" label="Vehicle" class="mt-5 w-full" name="item-vehicle" v-validate="'required'">
          <vs-select-item :key="vehicle.value" :value="vehicle.value" :text="vehicle.text" v-for="vehicle in vehicle_choice" />
        </vs-select> -->
        <!-- <span class="text-danger text-sm" v-show="errors.has('item-vehicle')">{{ errors.first('item-vehicle') }}</span> -->

        

        <!-- Upload -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

        <!-- <div class="upload-img mt-5" v-if="!dataProfilePhoto">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">Upload Image</vs-button>
        </div> -->
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <!-- <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">Submit</vs-button> -->
      <vs-button class="mr-6"  :disabled="!isFormValid">Submit</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {

      dataId: null,
      dataProfilePhoto: null,
      dataFName: '',
      dataLName: '',
      dataEmail: '',
      dataPhone: '',
      dataGender: 'male',
      dataAddress: '',
      dataVehicle: null,

      gender_choices: [
        {text:'Male', value:'male'},
        {text:'Female', value:'female'}
      ],

      vehicle_choice: [
        {text:'Curtainsider', value:'curtainsider'},
        {text:'Pantech', value:'pantech'},
        {text:'Prime Mover', value:'prime_mover'},
        {text:'Tipper', value:'tipper'},
      ],
      
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { id, profilePhoto, firstName, lastName, email, phone, gender, address, vehicle } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataProfilePhoto = profilePhoto
        this.dataFName = firstName
        this.dataLName = lastName
        this.dataEmail = email
        this.dataPhone = phone
        this.dataGender = gender
        this.dataAddress = address
        this.dataVehicle = vehicle
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataFName, this.dataLName, this.dataEmail, this.dataPhone, this.dataGender, this.dataAddress, this.dataVehicle } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid () {
      // return !this.errors.any() && this.dataFName && this.dataLName && this.dataEmail && this.dataPhone && this.dataGender && this.dataAddress && this.dataVehicle
      return !this.errors.any() && this.dataFName && this.dataLName && this.dataEmail && this.dataPhone && this.dataGender && this.dataAddress
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataProfilePhoto = null
      this.dataFName = ''
      this.dataLName = ''
      this.dataEmail = ''
      this.dataPhone = ''
      this.dataGender = 'male'
      this.dataAddress = ''
      this.dataVehicle = null
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            img: this.dataProfilePhoto,
            Fname: this.dataFName,
            Lname: this.dataLName,
            Email: this.dataEmail,
            Phone: this.dataPhone,
            gender: this.dataGender,
            address: this.dataAddress,
            vehicle: this.dataVehicle
          }

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('dataList/updateItem', obj).catch(err => { console.error(err) })
          } else {
            delete obj.id
            obj.popularity = 0
            this.$store.dispatch('dataList/addItem', obj).catch(err => { console.error(err) })
          }

          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    updateCurrImg (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.dataProfilePhoto = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

    &:not(.ps) {
      overflow-y: auto;
    }
}
</style>

<script setup lang="ts">
import { ref, reactive, shallowRef } from "vue"
import AppBtn from "@/components/AppBtn.vue";
import type Role from "./Role"
import type Errors from "./Errors"

const props = defineProps<{
  id?: string
  role: object  
  sending: boolean
  loading: boolean
  errors: Errors
  menus: []
}>()

const emit = defineEmits<{
  (e: 'submit', role: Role, roleId?: string): void
}>()

const form: Role = reactive(props.role)

const allSelected = ref(false)
const selected = ref([])

const submit = async () => {
  /*emit('submit', {
    name: form.name,
    description: form.description,
    menu_ids: form.menu_ids,
  }, props.id)*/
  emit('submit', form, props.id)  
}

const selectAll = () => {
  if (!allSelected.value) {        
    let temp = [];
    props.menus.forEach(menu => {
      if (menu.path !== '#')
        temp.push(menu.id);
    });
    form.menu_ids=[];
    form.menu_ids=temp;
    allSelected.value=true;                     
  } else {
    form.menu_ids=[];        
    allSelected.value=false;
  }      
}
</script>

<template>
  <form @submit.prevent="submit" class="p-4">    
    <div class="grid lg:grid-cols-2 gap-4">          
      <label class="block">
        <span class="text-gray-700">Nombre del rol</span>
        <input v-model="form.name" type="text" class="" />
        <div v-if="errors.name" class="form-error">
          {{ errors.name }}
        </div>
      </label>          

      <label class="block">
        <span class="text-gray-700">Descripción del rol</span>
        <input v-model="form.description" type="text" class="" />
        <div v-if="errors.description" class="form-error">
          {{ errors.description }}
        </div>
      </label>
    </div>
 
    <br/>

    <div class="table-data__wrapper">
      <table class="table-data">
        <thead>
          <tr class=""> 
            <th class="">Opciones del Menú</th>                             
            <th><input type="checkbox"  v-model="allSelected" @click="selectAll" title="Seleccionar todos"></th>
          </tr>
        </thead>
        <tbody>              
          <tr
	          v-for="menu in menus"
	          :key="menu.id"
	          :class="menu.path==='#'?'bg-gray-50 uppercase text-gray-500 text-xs':'hover:bg-gray-100 focus-within:bg-gray-100'"
	        > 
            <td>
	            {{ menu.alias }}
	          </td> 
            <td>              
              <div v-if="menu.path !== '#'" class="flex items-center space-x-1">                                
                <input type="checkbox" v-model="form.menu_ids" @click="select" :value="menu.id">
              </div>
            </td>               
          </tr>                
        </tbody>            
      </table>      
    </div>

    <div class="mt-4 px-2 border-gray-100 flex justify-end space-x-2">
      <AppBtn
        type="submit"
        :text="sending ? 'Guardando...' : 'Guardar'"
        :isDisabled='sending'
      />
    </div>
  </form>  
</template>

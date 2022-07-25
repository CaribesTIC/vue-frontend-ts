<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  
  <select
    class="field"
    v-bind="{
      ...$attrs,
      onChange: updateValue
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :value="option.id"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option.name }}
    </option>
  </select>
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </BaseErrorMessage>
  </label>
</template>

<script lang="ts">
import SetupFormComponent from '@/utils/SetupFormComponent'
import UniqueID from '@/utils/UniqueID'
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID()
    return {
      updateValue,
      uuid
    }
  }
}
</script>

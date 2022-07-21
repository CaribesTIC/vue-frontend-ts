import { ref } from 'vue'
import { getError } from "@/utils/helpers";

export default () => {
  const sending = ref(false)
  const loading = ref(false)
  const errors = ref({})
  
  return {
    errors,
    loading,
    sending,
    getError
  }
}


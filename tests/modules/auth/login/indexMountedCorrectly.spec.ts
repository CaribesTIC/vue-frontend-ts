import { shallowMount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import router from '@/router'
import AppLink from "@/components/AppLink.vue"
import LoginIndex from '@/modules/Auth/views/Login/Index.vue'

beforeEach(() => { window.scrollTo = vi.fn() })
afterEach(() => { vi.clearAllMocks() })

test('component must be mounted correctly', async () => {

  const wrapper = shallowMount(LoginIndex, {
    global: {
      plugins: [createPinia(), router],
      components: { AppLink }
    }
  })
  
  expect(wrapper.html()).toContain('Inicio de Sesión')
  expect(wrapper.html()).toContain('form-stub')     
  expect(wrapper.find('[data-testid="register-link"]').exists()).toBe(true)

  const forgotPasswordLink = wrapper.find('[data-testid="forgot-password-link"]')
  expect(forgotPasswordLink.exists()).toBe(true)  
  expect(forgotPasswordLink.html()).toContain('to="/forgot-password"') 
  
})

import { App } from 'vue'
import registerElement from './register-element'
export function globalRegisterApp(app: App): void {
  registerElement(app)
}

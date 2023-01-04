import { defineCustomElement } from 'vue'

import ChildComp from './components/ChildComp.vue'
import ParentComp from './components/ParentComp.vue'

const ceChild = defineCustomElement(ChildComp)
const ceParent = defineCustomElement(ParentComp)

customElements.define('child-comp', ceChild)
customElements.define('parent-comp', ceParent)

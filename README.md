# ce-slot-provide-issue

main.ts
```ts
import { defineCustomElement } from 'vue'

import ChildComp from './components/ChildComp.vue'
import ParentComp from './components/ParentComp.vue'

const ceChild = defineCustomElement(ChildComp)
const ceParent = defineCustomElement(ParentComp)

customElements.define('child-comp', ceChild)
customElements.define('parent-comp', ceParent)
```


index.html
```html
<script type="module" src="/src/main.ts"></script>

<parent-comp>
    <child-comp>

    </child-comp>      
</parent-comp>
```

Issue: parent component renders after child, so child component can not accept anything from parent.provides in inject fn.
/*组件注册*/
import ConfBar from "@/components/layout/ConfBar";

const components = [
  ConfBar
];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
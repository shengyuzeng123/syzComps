/*组件注册(公共)*/
import ShMarquee from "@/components/common/ShMarquee";
import ShRichText from "@/components/common/ShRichText";

const components = [
  ShMarquee,
  ShRichText
];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
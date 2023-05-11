import type { VNode } from "vue";

const CloseableDirective = {
    mounted(el: HTMLElement, binding: Object, vnode: VNode) {
      el.addEventListener('click', () => {
        const element = el as HTMLElement;
        const event = new Event('click');
        element.dispatchEvent(event);
      });
    },
  };

  export default CloseableDirective;
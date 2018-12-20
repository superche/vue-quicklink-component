import quicklink from './wrapper';

export function install(Vue) {
    if (install.installed ||
        !Vue) {
        return;
    }
    install.installed = true;
    Vue.use(install);

    Vue.component('Quicklink', quicklink);
}

const plugin = {
    install,
}

let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default quicklink;

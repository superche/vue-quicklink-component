import quicklink from './quicklink';

const wrapper = {
    template: `<div ref="quicklinkContainer"><slot></slot></div>`,
    props: {
        options: {
            type: Object,
            default: {},
        },
    },
    mounted() {
        const el = this.$refs.quicklinkContainer;
        quicklink({
            ...this.options,
            el,
        });
    },
};

export default wrapper;

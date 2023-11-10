
import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';

import CircleDrawerComponent from '../CircleDrawerComponent.vue';

const onMounted = () => {
    const wrapper = mount(CircleDrawerComponent, {
    })
    return wrapper;
};

/* describe('CircleDrawerComponent', () => {

    

} */

describe('circle', ()=>{

    let wrapper;

    beforeEach(() => {
        wrapper = onMounted()
    })

    test('existing CircleDrawerComponent', () => {
        expect(wrapper.exists()).toBe(true)
    })


    test('circleDrawer', async () => {
        const contentParagraph = wrapper.find('[data-test="paragraph"]')
        expect(contentParagraph.exists()).toBe(true)

    })

    test('add circle for click', async () => {
        const canvas = wrapper.find('svg')

        await canvas.trigger('click', { clientX: 100, clientY: 100 });

        expect(wrapper.vm.circles).toHaveLength(1);
        expect(wrapper.vm.circles[0].cx).toBe(100);
        expect(wrapper.vm.circles[0].cy).toBe(100);
        expect(wrapper.vm.circles[0].r).toBe(50);
    })

    test('should adjust the radius of a circle when right clicking', async () => {
        const canvas = wrapper.find('svg');

        const preventDefaultMock = () => { };

        await canvas.trigger('contextmenu', { preventDefault: preventDefaultMock, clientX: 100, clientY: 100 });
        expect(wrapper.vm.adjusting).toBe(false);
    })

    test('renders undo and redo buttons', async () => {
        expect(wrapper.find('[data-test="button-undo"]').exists()).toBe(true)
        expect(wrapper.find('[data-test="button-redo"]').exists()).toBe(true)
    })

    test('toggles the sidebar when the bars icon is clicked', async () => {

        const bodyComponent = wrapper.find('[data-test="dataBody-component"]')

        expect(bodyComponent.find('sidebar-container'))
        await wrapper.find('sidebar-container')

        expect(bodyComponent.find('close-sidebar'))
        await wrapper.find('close-sidebar')


    })

    test('adds a circle when the canvas is clicked', async () => {
        expect(wrapper.vm.circles).toHaveLength([])
        await wrapper.find('svg').trigger('click', { clientX: 100, clientY: 100 })
    })

    

})
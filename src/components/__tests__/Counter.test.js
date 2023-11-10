
import { describe, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';

import CounterComponent from '../CounterComponent.vue';

const onMounted = () => {
    const wrapper = mount(CounterComponent, {
    })
    return wrapper;
};

describe('CounterComponent', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = onMounted()
    })

    test('cellsTest', () => {
        expect(wrapper).toBeTruthy()
    })

    test('counter', async () => {

        const span = wrapper.find('[data-test="counter"]')
        expect(span.text()).toBe('0')

        const button = wrapper.find('[data-test="button"]')
        button.trigger('click')
        await wrapper.vm.$nextTick()

        expect(span.text()).toBe('1')
    })

    test('increment', async()=>{
        expect(wrapper.vm.count).toBe(0)
        wrapper.vm.incrementCount()
        await wrapper.vm.$nextTick()

        expect(wrapper.vm.count).toBe(1)
    })

    test('buttonCallIncrementFunction', async()=>{
        const spyIncrement = vi.spyOn(wrapper.vm, 'incrementCount')

        const button = wrapper.find('[data-test="button"]')
        button.trigger('click')
        await wrapper.vm.$nextTick()
        expect(spyIncrement).toBeCalled()
    })

})
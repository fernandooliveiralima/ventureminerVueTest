
import { describe, it, test, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { render, screen } from '@testing-library/vue';
import { createTestingPinia } from '@pinia/testing';

import CellsComponent from '../CellsComponent.vue';

const onMounted = ()=>{
    const wrapper = mount(CellsComponent, {
        props:{
            c:0,
            r:0
        },
        global:{
            plugins:[createTestingPinia({
                cells: Array.from(Array(5).keys()).map((i) =>
                Array.from(Array(10).keys()).map((i) => '')
            )
            })]
        }
    })
    return wrapper;
};

describe('CellsComponent', () => {

let wrapper;
beforeEach(()=>{
    wrapper = onMounted()
})

test('cellsTest', ()=>{
    expect(wrapper).toBeTruthy()
})
    

})
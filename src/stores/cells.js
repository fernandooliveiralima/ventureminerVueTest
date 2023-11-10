import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useCellsStore = defineStore('cells', () => {

    const COLS = ref(5);
    const ROWS = ref(20);

    const cells = reactive(
        Array.from(Array(COLS.value).keys()).map((i) =>
            Array.from(Array(ROWS.value).keys()).map((i) => '')
        )
    )

    const evalCell = (exp) => {

        if (typeof exp !== 'string' || !exp.startsWith('=')) {
            return exp;
        }

        // = A1 + B2 ---> get(0,1) + get(1,2)
        exp = exp
            .slice(1)
            .replace(
                /\b([A-Z])(\d{1,2})\b/g,
                (_, c, r) => `get(${c.charCodeAt(0) - 65},${r})`
            )

        try {
            return new Function('get', `return ${exp}`)(getCellValue)
        } catch (e) {
            return `#ERROR ${e}`
        }


    }

    const getCellValue = () => {

        const val = evalCell(cells[c][r])
        const num = Number(val)
        return Number.isFinite(num) ? num : val

    }

    return { cells, evalCell, getCellValue }

})
import {reactive} from "vue";

const filters = reactive<Record<string, string[]>>({});

const store = reactive({
    add(key: string, value: string) {
        if (filters[key] === undefined) {
            filters[key] = [];
        }

        if (!filters[key].includes(value)) {
            filters[key].push(value);
        }
    },
    remove(key: string, value: string) {
        filters[key] = filters[key].filter((v) => v !== value);
        if (filters[key].length === 0) {
            delete filters[key]
        }
    },
    get filters() {
        return filters;
    },
});

export default store;

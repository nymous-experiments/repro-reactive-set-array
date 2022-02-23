import {reactive} from "vue";

const filters = reactive<Record<string, Set<string>>>({});

const store = reactive({
    add(key: string, value: string) {
        if (filters[key] === undefined) {
            filters[key] = new Set();
        }

        filters[key].add(value);
    },
    remove(key: string, value: string) {
        filters[key].delete(value);
        if (filters[key].size === 0) {
            delete filters[key]
        }
    },
    get filters() {
        return filters;
    },
});

export default store;

import {reactive} from "vue";

const filters = reactive(new Map<string, Set<string>>());

const store = reactive({
    add(key: string, value: string) {
        if (!filters.has(key)) {
            filters.set(key, new Set());
        }
        filters.get(key)?.add(value);
    },
    remove(key: string, value: string) {
        filters.get(key)?.delete(value);
        if (filters.get(key)?.size === 0) {
            filters.delete(key)
        }
    },
    get filters() {
        return filters;
    },
});

export default store;

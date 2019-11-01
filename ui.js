function startUI({ form, store }) {
    load();
    form.addEventListener('submit', save);

    function load() {
        const data = new FormData(form);
        for (const k of data.keys()) {
            form.elements[k].value = store.getItem(k);
        }
    }

    function save(event) {
        const data = new FormData(form);
        for (const k of data.keys()) {
            store.setItem(k, data.get(k));
        }
        event.preventDefault();
    }
}


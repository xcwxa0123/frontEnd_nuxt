import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import SplitButton from 'primevue/splitbutton';
import Toolbar from 'primevue/toolbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import Card from 'primevue/card';
import Tooltip from 'primevue/tooltip';
import Fieldset from 'primevue/fieldset';
import ScrollPanel from 'primevue/scrollpanel';
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import MultiSelect from 'primevue/multiselect';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.directive('tooltip', Tooltip);
    [
        Card,
        DataTable,
        Column,
        ColumnGroup,
        Row,
        Toolbar,
        Button,
        SplitButton,
        Fieldset,
        ScrollPanel,
        ProgressSpinner,
        Dialog,
        Sidebar,
        InputText,
        Listbox,
        MultiSelect,
        Toast
    ].forEach(item => nuxtApp.vueApp.component(item.name, item))
    //other components that you need
});
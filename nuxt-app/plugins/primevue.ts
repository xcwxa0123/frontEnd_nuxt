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

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.directive('tooltip', Tooltip);
    [Card, DataTable, Column, ColumnGroup, Row, Toolbar, Button, SplitButton, Fieldset].forEach(item => nuxtApp.vueApp.component(item.name, item))
    //other components that you need
});
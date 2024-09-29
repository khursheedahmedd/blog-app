import {createClient} from 'next-sanity';

export const client = createClient({
    projectId: 'um4hqob3',
    dataset: 'production',
    apiVersion: '2024-09-29',
    useCdn: false
})
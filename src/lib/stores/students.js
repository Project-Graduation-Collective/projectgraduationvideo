import { writable, derived } from 'svelte/store';

const names = [
    'Sian Jaramillo',
    'Ferne Feeney',
    'Angel Avalos',
    'Astrid Munro',
    'Colin Jordan',
    'Dania Bond',
    'Vinay Tapia',
    'Ralphie Cooke',
    'Mylah Kavanagh',
    'Zacharia Morin',
];

export const count = writable(0, () => {
    let interval = setInterval(() => {
        count.update((value) => {
            if (value === names.length - 1)
                return 0;
            return value + 1;
        });
    }, 5000)

    return () => {
        clearInterval(interval)
    }
});

const type = ['student', 'teen'];

export const studentCard = derived(count, ($count) => {
    if ($count > names.length)
        return;
    
    return { name: names[$count], image: `https://source.unsplash.com/random/1600x900/?${type[$count % 2]}&count=${$count}` };
});

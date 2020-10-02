import { useState } from 'react';

export const useChoices = () => {
    const [choices, setChoices] = useState();
    const changeChoices = (e) => setChoices(e.target.value);

    return { choices, changeChoices };
};
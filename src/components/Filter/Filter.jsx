import React from "react";

import { FilterInput, FilterLabel } from "./Filter.style"

export const Filter = ({ value, onChange }) => {
    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput 
                type="text" 
                value={value} 
                onChange={onChange}
            />
        </FilterLabel>
    )
};


export const isEmpty = (value : any) => value === null || value === undefined;

export const isNotEmpty = (value : any) => !isEmpty(value);

export const isBlank = (value : any) => {
    return isEmpty(value) || (value.trim && value.trim().length === 0);
}

export const isNotBlank = (value : any) => !isBlank(value);
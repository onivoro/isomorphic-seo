
export const toSlug = (s: string, delim?: string) => {
    const d = delim || '-';
    console.log(s, delim, d);
    // const singleSpace = ' ';
    // const delim = _delim || singleSpace;
    return s
        // .replace(/\s+/g, delim || singleSpace)
        // .replace(/,\s/g, delim || '')
        .replace(/\W+/g, d)
        .toLowerCase();
};

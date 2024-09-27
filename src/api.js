function prepareSearchValue(value) {
    let searchArray = String(value).split(/,|\s/),
        filteredArray = searchArray.filter(el => el !== ''),
        resultString = '';

    for (let i= 0; i < filteredArray.length; i++) {
        resultString += i > 0 ? '&' : '';
        resultString += isNaN(Number(filteredArray[i])) ? `username=${filteredArray[i]}` : `id=${filteredArray[i]}`;
    }

    return resultString.length > 0 ? `?${resultString}` : resultString;
}

export const loadSearchResult = async (searchValue = '') => {
    let searchParams = prepareSearchValue(searchValue);

    if (searchParams.length <= 0) {
        return [];
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users${searchParams}`
    );

    return await response.json() || [];
};

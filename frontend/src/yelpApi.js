const yelpApi = 'lwP3BHKGDyMyjAEaSTV7CVWpnJyQYLH0CAVGzRxdxrwgPbV0GK52UBmBIRbRTcletnrfIVukKlseH5ze2Xojp8wr8alq9GVOFXITEyLBh2h9RS3445nZmUW6t7JpY3Yx';
const yelpUrl = 'https://api.yelp.com/v3/';
import queryString from 'query-string';

export function fetchYelp(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return fetch(`${yelpUrl}${path}?${query}`, {
        headers: {
            Anthorization: `Bearer ${yelpApi}`,
            Origin: 'localhose',
            withCredentials: true,
        }
    })
}
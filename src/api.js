import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID K-YXuegHMjRs-Wvo-7vNVJR2z_qITsg54ho2hdIDuhg'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response)

    return response;
};

export default searchImages;
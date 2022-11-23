require('dotenv').config();

const axios = require('axios')

async function getSource(search){

    return await axios.get('https://app.scrapingbee.com/api/v1', {
        params: {
            'api_key': process.env.scrapingbee_api_key,
            'url': `https://www.facebook.com/marketplace/${search.location}/search?daysSinceListed=1&query=${search.term.replace(/ /g,'%20')}&exact=false`,
            'render_js': 'false',
            'premium_proxy': 'true'
        }
    });

}

module.exports = {getSource}
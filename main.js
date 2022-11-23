const config = require('config');

const scrape = require("./controllers/scrape.js");
const parse = require("./controllers/parse.js");
const mail = require("./controllers/mail.js");

(async () => {
    const searches = config.get('Searches');

    const searchResult = {"items": {}, "count": 0}

    for await (const search of searches){
        
        try {
            const source = await scrape.getSource(search);
            const items = await parse.getSearchResults(source.data);
            const newItems = await parse.getNewItems(items);
            searchResult['items'][`${search.term} - ${search.location}`] = newItems;
            searchResult['count'] += newItems.length
            
        } catch (err) {
            searchResult['items'][`ERROR: ${search.term} - ${search.location}`] = [];
        }
    }
    
    await mail.send(searchResult);

})();


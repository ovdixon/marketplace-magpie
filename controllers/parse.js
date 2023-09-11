const storage = require('node-persist');

function getSearchResults(source){

  var items = [];

  var searchResult = source.match(new RegExp('feed_units":(.*)},"marketplace_seo_page'));

  searchResult = JSON.parse(searchResult[1]);

  if (searchResult['edges'][0]['node']['__typename'] === 'MarketplaceSearchFeedNoResults'){
    return items;
  } else {
    searchResult['edges'].forEach(element => {
      let id = element['node']['listing']['id'];
      let link = `https://www.facebook.com/marketplace/item/${id}`;
      let title = element['node']['listing']['marketplace_listing_title'];
      let price = element['node']['listing']['listing_price']['formatted_amount'];
      let img = element['node']['listing']['primary_listing_photo']['image']['uri'];

      const item = {"id": id, "link": link, "title": title, "price": price, "image": img};
      items.push(item);
    });
  }
  return items;
}

async function getNewItems(items){
  var newItems = [];

  await storage.init()

  for await (const item of items){
    let duplicates = await storage.valuesWithKeyMatch(item.id)
    if (duplicates.length === 0){
        await newItems.push(item)
        await storage.setItem(item.id, item)
    }
  }
  return newItems;
}

module.exports = {getSearchResults, getNewItems}
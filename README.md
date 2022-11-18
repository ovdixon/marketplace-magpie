# Marketplace Scraper
Setup email alerts for new items on Facebook Marketplace. Expensive due to level of proxies required to scrape.

## Accounts

You will need to setup the following accounts.

### [ScrapingBee](https://www.scrapingbee.com/?fpr=oliver-dixon68) - Proxy API
Start with free trial credits to test. For production upgrade to 'Startup' Plan at $100/month for ~35 search terms scraped every 15 minutes. 

### [SendGrid](https://signup.sendgrid.com) - Email API
Free account supports 100 emails / day which is plenty.


## Setup

In SendGrid under Email API, create a Dynamic Template with an arbitrary name. Add a new version and paste in code from `config/template.html`.

Create `.env` file with the following format.

```
scrapingbee_api_key = 
sendgrid_api_key = 
sendgrid_template_id = 
sender = 
recipient = 
```

Configure searches in `default.json`. Location must be copied from Marketplace URL (`facebook.com/marketplace/COPY_LOCATION/search?query=bicycle`).

```
{
    "term": "bicycle",
    "location": "nyc"
},
```


 
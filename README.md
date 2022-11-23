# Marketplace Scraper
Setup email alerts for new items on Facebook Marketplace. Expensive to run due to the proxies required.

## Accounts

Setup the following accounts:

### [ScrapingBee](https://www.scrapingbee.com/?fpr=oliver-dixon68) - Proxy API
Test with free trial credits. For production upgrade to the 'Startup' Plan at $100/month for ~35 search terms scraped every 15 minutes. For a cheaper alternative, maintain your own proxies.

### [SendGrid](https://signup.sendgrid.com) - Email API
Free account supports 100 emails / day which is plenty.


## Setup

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


 
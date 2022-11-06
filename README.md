# Static Webpage Scraper
### Purpose
This script can be used to record specific attributes of html elements on static web pages.
### Usage
This requires 5 parameters to run:
1. URL of the static webpage
2. Type of tag of the target element
3. Name of the target attribute
4. A filter value - elements without this value will be ignored
5. Action for the scraper to take:
  * list - to put the target attribute values into output/output.txt
  * download - to download src attributes into output/ (only works with .jpg and .png right now)
For example, to record the href values of every anchor tag:
 > npm run scrape -- https://exampleurl.com a href all list
To download the src of every img tag containing the id 'profilePicture':
> npm run scrape -- https://exampleurl.com img src profilePicture download`

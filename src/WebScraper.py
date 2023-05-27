# install requests module : py -m pip install requests.

import requests
from helium import *

class WebScraper:
    # get html from url
    def GetHtml(self, url):
        result = requests.get(url)
        result = result.text
        return result

# Custom Parsing : url ; ParsingMethod

# Parse data from https://baseballsavant.mlb.com/scoreboard

class BaseballSavantDataWebScraper:

    def DownloadCsv(self):
        url = 'https://google.com'
        start_firefox(url, True)
        # click(Button('Download CSV'))
        # kill_browser()

    def ReadCsv(self):
        directory = ''

    def WriteToFile(self, data):
        f = open("demotxt.txt", "a")
        f.write(data)
        f.close()

    def GetData(self):
        url = 'https://baseballsavant.mlb.com/scoreboard'
        ws = WebScraper()
        html = ws.GetHtml(url)
        self.WriteToFile(html)

bs = BaseballSavantDataWebScraper()
bs.DownloadCsv()
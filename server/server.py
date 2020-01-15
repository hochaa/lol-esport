import mwclient
import json
site = mwclient.Site('lol.gamepedia.com', path='/')

response = site.api('cargoquery',
	limit = 'max',
	tables = "ScoreboardPlayer=sp",
	fields = "sp.Name, sp.OverviewPage, sp.Kills, sp.Deaths, sp.Assists",
	where = "sp.Name = 'Teddy' and sp.OverviewPage = 'LCK/2019 Season/Spring Season'"

)

#print(dict(response.items()))
r = json.loads(json.dumps(response))
kills = 0
deaths = 0
assists = 0
i=0
for item in r['cargoquery']:
	kills = kills + int(item['title']['Kills'])
	deaths = deaths + int(item['title']['Deaths'])
	assists = assists + int(item['title']['Assists'])
	i = i + 1

total = (kills + assists) / deaths
print(total, kills, deaths, assists, i)
#print (r[0].items())
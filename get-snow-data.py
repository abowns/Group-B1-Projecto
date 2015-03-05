#get-snow-data.py                                                                                                                                 
#                                                                                                                                                     
# A small python program to scrape data from onthesnow.com based                                                                                   
# on Nathan Yau's tutorial in "Visualize This" and his older                                                                                          
# blog post at:                                                                                                                                       
#                                                                                                                                                     
#http://flowingdata.com/2007/07/09/grabbing-weather-underground-data-with-beautifulsoup/                                                             
#                                                                                                                                                     
# author: Ben Forsee                                                                                                                      



# Import the libraries necessary to do our work. 
import string
try:
    import urllib.request as urllib2
except ImportError:
    import urllib2
#import urllib2, re
from bs4 import BeautifulSoup

#Initialize an array of resorts we are looking at
resorts = ['vail', 'breckenridge', 'mt-hood-meadows', 'mt-baker', 'whistler-blackcomb',
'alpe-dhuez', 'heavenly-mountain-resort', 'whakapapa', 'killington-resort', 'davos-klosters', 
'geilo', 'alta-ski-area', 'alyeska-resort', 'valle-nevado', 'las-lenas',
'laax']
#Initialize an array of regions related to the resorts
regions = ['colorado', 'colorado', 'oregon', 'washington', 'british-columbia',
'northern-alps', 'california', 'new-zealand', 'vermont', 'graubunden',
'eastern-norway', 'utah', 'alaska', 'chile', 'argentina',
'graubunden']
# Open a file to store the .csv data in.                                                                                                              
f = open('C:\\Users\Ben\Documents\snowfall-data\Group-B1-Projecto-master\onthesnow-data.txt', 'w')

for i in range(0,16):

	## Loop over all the months                                                                                                                           
	for y in range(2006, 2015):
       
   
		  # Open wunderground.com url for 2009 in this particular iteration.                                                                              
		  # url = "http://www.onthesnow.com/" + region + "/" + resort + "/historical-snowfall.html?&y=" + y
		  url = "http://www.onthesnow.com/" + regions[i] + "/" + resorts[i] + "/historical-snowfall.html?&y=" + str(y)
		  #Provide helpful message to user as the loop boldly executes forth.
		  print ("opening: ")
		  print (url + "\n")
	
		  page = urllib2.urlopen(url)
	
	
		  # Read the one long line of the .html just loaded into page and                                                                                 
		  # store it as a tree of elements within the page.  Thanks crummy!                                                                               
		  soup = BeautifulSoup(page)
		  snowfall = soup.find(id="view").strong.contents[0]
		  
	 
	
		  # Provide helpful message to user as the loop boldly executes forth.
		  print ("writing: ")
		  print (regions[i] + "-" + resorts[i] + "-" + str(y))
		  print (snowfall + "\n\n\n") 
	
		  # Write timestamp and temperature to file                                                                                                    
		  f.write(regions[i] + ',' + resorts[i] + ", " + str(y) + ", " + snowfall + '\n')
		  
# Done getting data! Close file.                                                                                                                   
f.close()

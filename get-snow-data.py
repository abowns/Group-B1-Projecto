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
import urllib2, re
from bs4 import BeautifulSoup

# Open a file to store the .csv data in.                                                                                                              
f = open('onthesnow-data.txt', 'w')

## Loop over all the months                                                                                                                           
for y in range(2006, 2014):

   
      # Open wunderground.com url for 2009 in this particular iteration.                                                                              
     # url = "http://www.onthesnow.com/" + region + "/" + resort + "/historical-snowfall.html?&y=" + y
       url = "http://www.onthesnow.com/" + "colorado" + "/" + "vail" + "/historical-snowfall.html?&y=" + y
	# Provide helpful message to user as the loop boldly executes forth.
      print "opening: "
      print url

      page = urllib2.urlopen(url)

      # Read the one long line of the .html just loaded into page and                                                                                 
      # store it as a tree of elements within the page.  Thanks crummy!                                                                               
      soup = BeautifulSoup(page)
      snowfall = soup.contents[0].contents[1].contents[2].contents[4].contents[0].contents[0].contents[3].contents[1].contents[0].contents[6].contents[0].contents[0].contents[1]
     # wxs = soup.findAll(attrs={"class":"strong"});
 
     # Format month for timestamp, ensuring two digits.                                                                                                                 
      #if len(str(m)) < 2:
       # mStamp = '0' + str(m)
      #else:
       # mStamp = str(m)

      # Format day for timestamp, ensuring two digits.                                                                                                                  
      #if len(str(d)) < 2:
       # dStamp = '0' + str(d)
      #else:
       # dStamp = str(d)

      # Build timestamp                                                                                                                            
      #timestamp = str(2009) + mStamp + dStamp

	# Provide helpful message to user as the loop boldly executes forth.
      print "writing: "
      print region + "-" + resort + "-" + y
      print snowfall#wxs[5].contents[0]

      # Write timestamp and temperature to file                                                                                                    
      #f.write(region + ',' + resort + ", " + y + ", " + snowfall + '\n')
      f.write("colorado" + ',' + "vail" + ", " + y + ", " + snowfall + '\n')

# Done getting data! Close file.                                                                                                                   
f.close()

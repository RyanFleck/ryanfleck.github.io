---
layout: docs 
title: Jupyter Test
permalink: /docs/jupyter
---

MongoDB, is it easy to use with Python 3? Hopefully this jupyter notebook export looks nice in my new notebook format.

```python
# MongoDB
import pymongo
from pymongo import MongoClient
import pandas as pd
import json

# Pretty Printing - GH: EdwardBetts/pprint_color.py
from pygments import highlight
from pygments.lexers import PythonLexer
from pygments.formatters import Terminal256Formatter
from pprint import pformat

def cprint(obj):
    print(highlight(pformat(obj), PythonLexer(), Terminal256Formatter()))

print('Mongo version '+ pymongo.__version__)
client = MongoClient('localhost', 27017)
db = client.ryan
collection = db.restaurants
```

    Mongo version 3.7.1
    


```python
cursor = collection.find().sort('type_of_food',pymongo.DESCENDING).limit(3)
for doc in cursor:
    cprint(doc)
    print()
```

    {[38;5;124m'[39m[38;5;124mURL[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mhttp://www.just-eat.co.uk/restaurants-anhdao/menu[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124m_id[39m[38;5;124m'[39m: ObjectId([38;5;124m'[39m[38;5;124m55f14312c7447c3da7051efe[39m[38;5;124m'[39m),
     [38;5;124m'[39m[38;5;124maddress[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124m106-108 Kingsland Road[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124maddress line 2[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mLondon[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mname[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mAnh Dao[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124moutcode[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mE2[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mpostcode[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124m8DP[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mrating[39m[38;5;124m'[39m: [38;5;241m4[39m,
     [38;5;124m'[39m[38;5;124mtype_of_food[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mVietnamese[39m[38;5;124m'[39m}
    
    
    {[38;5;124m'[39m[38;5;124mURL[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mhttp://www.just-eat.co.uk/restaurants-anhdao/menu[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124m_id[39m[38;5;124m'[39m: ObjectId([38;5;124m'[39m[38;5;124m55f14312c7447c3da7051eff[39m[38;5;124m'[39m),
     [38;5;124m'[39m[38;5;124maddress[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124m106-108 Kingsland Road[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124maddress line 2[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mLondon[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mname[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mAnh Dao[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124moutcode[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mE2[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mpostcode[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124m8DP[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mrating[39m[38;5;124m'[39m: [38;5;241m4[39m,
     [38;5;124m'[39m[38;5;124mtype_of_food[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mVietnamese[39m[38;5;124m'[39m}
    
    
    {[38;5;124m'[39m[38;5;124mURL[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mhttp://www.just-eat.co.uk/restaurants-amrit-sweetcentre-le5/menu[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124m_id[39m[38;5;124m'[39m: ObjectId([38;5;124m'[39m[38;5;124m55f14312c7447c3da7051eb3[39m[38;5;124m'[39m),
     [38;5;124m'[39m[38;5;124maddress[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124m236 Green Lane Road[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124maddress line 2[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mLeicestershire[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mname[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mAmrit Sweet Centre[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124moutcode[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mLE5[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mpostcode[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124m4PA[39m[38;5;124m'[39m,
     [38;5;124m'[39m[38;5;124mrating[39m[38;5;124m'[39m: [38;5;241m4[39m,
     [38;5;124m'[39m[38;5;124mtype_of_food[39m[38;5;124m'[39m: [38;5;124m'[39m[38;5;124mVegetarian[39m[38;5;124m'[39m}
    
    
    

Neato.

# Aggregation


```python
# Up for breakfast?

pipeline = [
    {
        "$group":{
            "_id":"$type_of_food",
            "Average Rating":{"$avg":"$rating"},
            "Count":{"$sum":1}
        }
    },
    {
        "$sort":{
            # "Average Rating":-1,
            "Count": -1
        }
    }
]

agg = collection.aggregate(pipeline)
ratings = pd.DataFrame(list(agg))
ratings = ratings.set_index("_id")
ratings.head(10)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Rating</th>
      <th>Count</th>
    </tr>
    <tr>
      <th>_id</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Curry</th>
      <td>5.036158</td>
      <td>902</td>
    </tr>
    <tr>
      <th>Pizza</th>
      <td>4.914141</td>
      <td>500</td>
    </tr>
    <tr>
      <th>Chinese</th>
      <td>4.893678</td>
      <td>174</td>
    </tr>
    <tr>
      <th>Kebab</th>
      <td>4.885621</td>
      <td>154</td>
    </tr>
    <tr>
      <th>Fish &amp; Chips</th>
      <td>5.036697</td>
      <td>116</td>
    </tr>
    <tr>
      <th>American</th>
      <td>4.617021</td>
      <td>95</td>
    </tr>
    <tr>
      <th>Turkish</th>
      <td>4.918919</td>
      <td>74</td>
    </tr>
    <tr>
      <th>Lebanese</th>
      <td>4.805970</td>
      <td>70</td>
    </tr>
    <tr>
      <th>Chicken</th>
      <td>4.410000</td>
      <td>53</td>
    </tr>
    <tr>
      <th>Caribbean</th>
      <td>4.583333</td>
      <td>46</td>
    </tr>
  </tbody>
</table>
</div>




```python
ratings.tail()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Average Rating</th>
      <th>Count</th>
    </tr>
    <tr>
      <th>_id</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Pasta</th>
      <td>6.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Cakes</th>
      <td>5.5</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Nigerian</th>
      <td>4.5</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Punjabi</th>
      <td>6.0</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Spanish</th>
      <td>4.5</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>



# Well, that's pretty neat. 

Another one:


```python
pipeline = [
    {"$match": {"type_of_food":"Breakfast"}}
]

agg = collection.aggregate(pipeline)
breakfast = pd.DataFrame(list(agg))
breakfast
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>URL</th>
      <th>_id</th>
      <th>address</th>
      <th>address line 2</th>
      <th>name</th>
      <th>outcode</th>
      <th>postcode</th>
      <th>rating</th>
      <th>type_of_food</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>http://www.just-eat.co.uk/restaurants-133-take...</td>
      <td>55f14312c7447c3da7051b36</td>
      <td>133 Fullarton Street</td>
      <td>Irvine</td>
      <td>133 Takeaway</td>
      <td>KA12</td>
      <td>8DG</td>
      <td>Not yet rated</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <th>1</th>
      <td>http://www.just-eat.co.uk/restaurants-alfiesca...</td>
      <td>55f14312c7447c3da7051d66</td>
      <td>161 Helen Street</td>
      <td>Glasgow</td>
      <td>Alfies Cafe - Collection Only</td>
      <td>G51</td>
      <td>3HD</td>
      <td>Not yet rated</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <th>2</th>
      <td>http://www.just-eat.co.uk/restaurants-alldaybr...</td>
      <td>55f14312c7447c3da7051dc8</td>
      <td>227 Lower House Lane</td>
      <td>Liverpool</td>
      <td>All Day Breakfast Bar</td>
      <td>L11</td>
      <td>2SF</td>
      <td>4.5</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <th>3</th>
      <td>http://www.just-eat.co.uk/restaurants-annescaf...</td>
      <td>55f14312c7447c3da7051f27</td>
      <td>64 Anne Road</td>
      <td>Smethwick</td>
      <td>Anne's Cafe</td>
      <td>B66</td>
      <td>2NY</td>
      <td>5.5</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <th>4</th>
      <td>http://www.just-eat.co.uk/restaurants-benvenut...</td>
      <td>55f14313c7447c3da70523b7</td>
      <td>Bell Parade</td>
      <td>West Wickham</td>
      <td>Benvenuti - Collection Only</td>
      <td>BR4</td>
      <td>0RH</td>
      <td>Not yet rated</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <th>5</th>
      <td>http://www.just-eat.co.uk/restaurants-big-dadd...</td>
      <td>55f14313c7447c3da7052475</td>
      <td>2 Norris Street</td>
      <td>Cheshire</td>
      <td>Big Daddy House</td>
      <td>WA2</td>
      <td>7RL</td>
      <td>Not yet rated</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <th>6</th>
      <td>http://www.just-eat.co.uk/restaurants-bigphill...</td>
      <td>55f14313c7447c3da7052499</td>
      <td>Old Club Building</td>
      <td>Tyne and Wear</td>
      <td>Big Phil'lers Deli</td>
      <td>NE27</td>
      <td>0EP</td>
      <td>5</td>
      <td>Breakfast</td>
    </tr>
  </tbody>
</table>
</div>



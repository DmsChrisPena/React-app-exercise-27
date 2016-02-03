# React Dashboard Module

So I decided to go with a different approach and make one component that can be one of the 4 styles if specified. I also separated out the grid system so you can define it on the components props.

###Different Box Types

- boxType="plain"
- boxType="cover"
- boxType="topBar"
- boxType="bottomBar"

Now depending on what box type you pick you have to use different(but similar) props:

#### boxType="plain"
- boxTitle="20"
- boxSubtitle="New Followers added this month"
- span="4" (For how many columns you want it to span in the layout)

#### boxType="cover"
- boxTitle="18&deg;"
- boxSubtitle="Texas"
- boxBackground="#FF8A00"
- span="12"

#### boxType="topBar"
- boxTitle="New visitors"
- boxSubtitle="1.5k"
- boxBarBackground="#0096D0"
- span="12"

#### boxType="bottomBar"
Defined an array of objects and pass it into boxInfo
```
var bottomBarArray1 = [
    {"title": 15080, "subtitle": "Shots Views"},
    {"title": 12000, "subtitle": "Likes"},
    {"title": 5100, "subtitle": "Comments"}
];
```
- boxInfo={bottomBarArray1}
- boxBarBackground="#484D4D"
- boxBackground="#0096D0"
- span="12"


#### Final Version:
![Fullscreen](http://i.imgur.com/ArivrMq.png?1)

#### Mobile Version:
![Fullscreen](http://i.imgur.com/0nkpKM0.png?1)

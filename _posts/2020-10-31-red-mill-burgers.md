---
layout: post
title: Red Mill Burgers
excerpt: I just want the website
tags:
  - Unsolicited Opinions
imgs:
  - https://lh3.googleusercontent.com/5svMZOQr5G8a9_87aJQyekUteEGRXChN-x-JUgtcenCoS6TRZ-0OOx0T9BQtnwWs13-xObl95lzqskyiHpb81oeL4KaMsCnaz3H0fyg2Lji9ELqP75TWCm0OIHyq7RkTM0ubFyC4izA=w2400
  - https://lh3.googleusercontent.com/hCwfXBcsJIRdknNJfZHuDu7KF4yz_QTefaOJEWZXo8gsh0QdsO7AIl35cYF8LgqCKpjMvm3Ptc4KZ72mmwA9Ot7QIK8Gy7OWb43Jb2ozwyP5dccByA2f4VGiyKcP6psPM7J_LOWvz60=w2400
  - https://lh3.googleusercontent.com/tFdZw7QON4YpG2fD4p3WkfyR4MUrkwZ4JAk6iLFy1ANbEfk4iarT-Bm-tO9qRcbq3_2m35qW1WsQF3E-n8NjNLtohLhgSGlMiN7JsO7l3ohKJIpza6XOEwNl9fEtiKUf52GWlER64Yk=w2400
  - https://lh3.googleusercontent.com/Gyn0irJSkaKY4g-2AnijIVnShO9b1xiRWjYn3DtBOG2wVQqft_yKdeM-QwNTe2bnpZMC1jd5_0vomt8wJTybX6dvZ2ONn-A9LsJxtlfc-a-kyexMqv5xW4Nl_GeSnRs99vDduEGGcjI=w2400
---
{:.container.mb-1}
> Red Mill Burgers in Seattle has some great burgers. They make them quickly and they're a good size. But I swear to God, Google doesn't give me the correct damn search results when I go to Google them. I mean Jesus FUcking christ i just want to order their delicious burgers online.

{% 
include caption.html 
caption="What I initially wrote when I started this blog post. Note the aggitated tone the author takes." 
%}

{:.container.pt-3}
#### Scenario: I want Red Mill

{:.container}
I google `red mill burgers` so that I can order online. What do I get? Behold:

{% assign index = 0 %}
{% assign image = page.imgs[index] %}
{% include stop_image.html img=image thin=true %}

{:.container}
Ok, not bad. I have a few things to say about the results. But before we go any further, a disclaimer: I work at Google, though not on [Search](https://www.google.com){:.golden}.

{:.container}
Most of my issue with the results can be summed up by the first suggested search at the bottom:

{% assign index = index | plus: 1 %}
{% assign image = page.imgs[index] %}
{% include stop_image.html img=image thin=true %}

{:.container}
[Their website](https://www.redmillburgers.com) is not a result of the query `red mill burgers`! You shouldn't have to put "website" in your google query, we're on the internet here folks. There's yelp, facebook, toasttab, a wikipedia article ffs, but not their website.

{:.container}
Now, the observant among you will notice that their website actually is here: where the map results are.

{% assign index = index | plus: 1 %}
{% assign image = page.imgs[index] %}
{% include stop_image.html img=image thin=true %}

{:.container}
But I don't trust these. Why? There's a difference between a link that says "Red Mill Burgers" versus a button that says "Website." And there's no visible URL unlike the other results. It's like I have no idea where it will take me; for all I know it will direct me to one of the top links above, of which, again, none are the restaurant's site. This is more pronounced on mobile where you can't hover above a link to see where it will take you. 

{:.container.pt-3}
#### Other search engines

{:.container}
Bing and DuckDuckGo have the same problem, though Bing has more "Website" buttons, so that's nice, I guess?

{% assign index = index | plus: 1 %}
{% assign image = page.imgs[index] %}
{% include stop_image.html img=image thin=true caption="This is what Bing results look like" %}

{:.container.pt-3}
#### Question: Whose fault is this?

{:.container}
Actually we have to answer another question first.

{:.container.pt-3}
#### Question: Is what I'm describing even an issue?

{:.container}
Is what Google returned actually the information people are looking for? Am I the odd one out? Should I want to go to yelp or facebook or `places.singleplatform.com`, whatever that is? No. This is an issue to me. So back to the other question.

{:.container.pt-3}
#### Question: Whose fault is this?

{:.container}
Couple possibilities:

{:.container}
- ##### Red Mill

{:.container}
[Red Mill](https://www.redmillburgers.com) could be doing more [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization){:.golden}. I think this is stupid, most businesses shouldn't have to cater to search engines or indexers, _unless_ the query was `burgers` or `restaurants`. I searched for `red mill burgers` though.

{:.container}
I understand that this is a naïve position. But it leads to our current problem, because obviously the other results on this page are doing [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization){:.golden} to the detriment of the actual business in question and to those looking for it. 

{% 
include info_banner.html
style="gray"
title="Counterargument" 
fontAwesome="fas fa-meteor"
subtitle="Technology is the future, and SEO is part of that. It's a necessary part of doing business, no matter how small the business."
content="I don't disagree that having an online presence is necessary, it would just make me sad if all these sites had to have recurring content and a blog and a bunch of filler just to cater to crawlers."
%}

{:.container}
- ##### Google

{:.container}
Google should know what the website is and return it. 

{% 
include info_banner.html
style="gray"
title="Counterargument" 
fontAwesome="fas fa-meteor"
subtitle="Google is a search engine, not a directory."
content="Ok I hear this, but I think it's definitely trying to act like a directory. Especially if it intends to [remove URLs from its results in the future](https://www.reddit.com/r/bigseo/comments/def9gg/google_are_removing_urls_entirely_from_the_search/) 🤷‍♂️."
%}

{:.container}
- ##### The other results on the page

{:.container}
These would be the Yelps and Facebooks and TripAdvisors of the world. They become less and less interesting to me over time, because they're all the same - some questionable reviews, some pictures, contact information, all of which are at varying degrees of outdated-ness. And what do I end up looking for on these pages anyway? **Their website.**

{:.container.pt-3}
#### Isn't Toast what they use for online ordering? Isn't that the first result?

{:.container}
Yeah that first result is for Phinney Ridge. I go to Interbay.

{:.container.pt-3}
#### Conclusion

{:.container}
In true software engineering fashion, writing this post has taken more time than I will ever spend trying to get to red mill's website, and way more time than it would take to bookmark it.
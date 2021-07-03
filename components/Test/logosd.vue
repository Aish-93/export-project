<template>
  <v-container fluid class="d-flex  flex-column lighten-5" :class="{ colr: true }">
    <v-row class="bojo">
      <v-col class="col-6 bojo ml-7" style="color:#ffcc29;">
        <ul>
          <li>HOW DO I KNOW WHICH LOGO STYLE IS FOR ME?</li>
        </ul>
      </v-col>
    </v-row>
    <v-row class=" d-flex justify-end">
      <v-col class="col-7  mr-12 display-1" :class="{ colr2: true }">
        Different Types of Logo Styles
      </v-col>
      <v-col class=" col-4 ml-3 d-flex justify-end  pr-10">
        <v-btn color="#ffcc29" dark class="btnz">
          Contact Us
          <div class="shine"></div>
          <img
            class="cir"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAAD7+/s7OzusrKze3t7Z2dmvr6/b29tVVVUFBQVdXV34+Pjt7e0SEhKUlJRCQkLl5eXy8vJzc3NlZWXLy8tra2u9vb1KSkp5eXmZmZlkbd6rAAACfElEQVR4nO2di27aQBBFbWhSYhzCK03T///QVkhR0mAjEyBrn3vOB6C5mjs7uwvLVJWIiIiIiIiIiIiIiIiIiIjIG+1mWzqEW7LYNfU/9s+lA7kRs9f6jeVj6WBuQTuv31ndlQ7nBqzr/+BJ/FN/4r50RFdmu/qssF6Ujum6/DwSSDPqrkMhK4vLLoWoWnzoVEgy6q9uhSCJTz0KOUa971PIkdi91JCMuulViGkaL/0SKUb9wc/iCYmUWuzanOZkMaAWA4waIDHAqAESA4xq05gMARs4mwaB7FoMMCpFYrZRKU0juxYDsmgtToaApuEGjkB206BIzDYqpWlk12JAFgNqMcCoARIDjBogMcCoNo3JELCBs2kQyK7FAKNSJGYb1abRw2xsXDeLm6f9ej42fvcrPLcW29cTnzVSzsri5vjl3AQ4oxYfm9LBfolm+FvinkdXo+dhqMAT7yBGzgs8hXW9HCawLR3nBbSDFN6VDvMChi2nz6XDvIBh/z7BzyG/DvlraUA/nGwSB+9pAval/LPFNM+H515k0M/4B0pfyxzBv23DXwr3Z7BhZBB/5x1sUbzABm9RxiKTXIOMDCa3CXwG6TUI2arhfyqU3CbwAvEWZSwyyRbFZxBfg3iL0gXyT/R4gXSL8gXiLYpv9HiL4jOIr0G8RekC+Vs1xiKTXIOMDCa3CXwG6TXoly/TILlN4AXiLcpYZJItysggft7TiZldDIvy564t4BZNmH/In2HJn0PKnyXLnwfMn+nMn8vNn61eVWuyRQ+08w/6VkCBVTV7f6m6POMN76RY7A6PqvfD/u1horSbbekQRERERERERERERERERERE5Jv4CxOfKflP0w6QAAAAAElFTkSuQmCC"
            alt=""
          />
          <!-- <img src="\Images\arrow.svg" alt="" /> -->
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-13 " style="height: 350px;">
      <!-- <v-col v-for="align in alignments" :key="align" :align-self="align"> -->
      <v-col class="d-flex justify-center ">
        <v-card
          v-for="(temp, index) in logos"
          :key="index"
          class="pa-2 mr-4 ml-4 wid"
          outlined
          tile
          @click="tab = index"
          :class="{ activez: tab === index }"
        >
          <img :src="tab === index ? temp.iconz : temp.icon" class="benz" />

          <!-- <v-icon large :color="tab === index ? 'black' : 'yellow darken-2'">
            fa-arrow-right
          </v-icon> -->
          <div class="sides">{{ temp.title }}</div>

          <v-row class="sst" justify="center">
            <div v-if="tab === index">
              <p><i class="arrow down" @click="add"></i></p>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="maxi col-5">
        <h1 class="display-2">{{ tabs[tab].title }}</h1>
        <div class="mt-3">
          {{ tabs[tab].text }}
        </div>
      </v-col>
      <v-col class="col-7 maxia">
        <div class="siz ">
          <img :src="tabs[tab].images[0]" alt="" />
          <img :src="tabs[tab].images[1]" />
          <img :src="tabs[tab].images[2]" alt="" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
* {
  font-family: "Lato", sans-serif;
  font-family: "Roboto", sans-serif;
  font-weight:bolder;
}
.sst {
  // for arrow
  // font-size: 70px;
  height: 20px;
}
.arrow {
  border: solid rgb(255, 255, 255);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 25px;
  background-color: rgb(255, 255, 255);
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.benz {
  // for the color of cards logos change
  width: 60px !important;
  height: 60px !important;
  margin-left: auto;
  margin-right: auto;
  border-style: none;
  
  // border-radius: 50% !important;
}
.benzen {
  width: 60px !important;
  height: 60px !important;
  margin-left: auto;
  margin-right: auto;
  border-style: none;
  // color: #ffcc29;
  // border-radius: 50% !important;
}
.sides {
  // cards heading
  font-size: 17px;
  padding: 15px;
  font-weight: 400;
}
.wid {
  // used in cards of logos
  width: 200px;
  height: 160px;
  box-sizing: border-box;
  border-radius: 20px !important;
  -webkit-border-radius: 15px !important;
  border: 1px solid rgb(184, 176, 176) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-image: linear-gradient(145deg, #4f4f4f 0%, #282828 100%);
  transition: all 0.3s linear;
  color: white;
  font-family: "Lato", sans-serif;
  font-family: "Roboto", sans-serif;
}
.wid:hover {
  background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.384), white);
  color: black;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: orange;
 
  // filter: brightness(0);
  img {
    // box-shadow: 6px 6px 40px 1px rgba(0, 217, 255, 0.2);
    border-radius: 50%;
    filter: brightness(0);
  }
}

.colr {
  background-color: #434343;
  background-image: linear-gradient(145deg, #4f4f4f 0%, #282828 100%);
  border-radius: 15px;
  font-size: 16px;
  line-height: 1.875;
  font-weight: 400;

  margin-left: auto;
  margin-right: auto;
}
.colr2 {
  color: white;
}

.bojo {
  // class for cards section
  margin-top: 3.6rem;
}
.btnz {
  // for button
  font-size: 16px;
  font-weight: 400;
  line-height: 2.8;
  border-radius: 25px;
  cursor: pointer;
  text-transform: none;
  color: black;
  font-weight: bold;
  height: 50px !important;
  overflow: hidden;
}
.btnz:hover {
  background-color:#ffcc29 !important;
  transition: all 0.4s ease-in !important;
  color: white !important;
  text-decoration: underline;
}
.shine {
  position: absolute;
  top: -4px;
  left: -4px;
  height: 50px;
  width: 180px;
  background: rgba(255, 255, 255, 0.466);
  transition: all .5s ease-out;
  transform: skewX(0deg) translateX(-192px);
  // border-radius: 70%;
  // overflow: hidden;
}
.btnz:hover .shine{
   transform: skewX(0deg) translateX(220px);
}
.maxia {
  background-color: white;
  height: 800px;
  padding-top: 150px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.maxi {
  background-color: white;
  height: 800px;
  padding-top: 50px;
}

.siz {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 150px;
  width: 150px;
  border: 0.5px solid rgba(247, 247, 247, 0.925);
  padding: 10px;
}
.activez {
  background-image: linear-gradient(105deg, rgb(255, 255, 255), white);
  // background-color: white !important;
  color: black;
  text-decoration: underline;
  text-decoration-color: orange;
}
.cir {
  background-color: white;
  border-radius: 50%;
  width: 40px !important;
  height: 40px !important;
  margin-left: 10px !important;
}
.cir:hover {
  transition: all 0.4s ease-out;
}
</style>
<script>
export default {
  data: () => ({
    alignments: ["center", "center", "center", "center", "center", "center"],
    tab: 0,

    logos: [
      {
        icon:
            "/images/italic.svg",
            iconz:"images/italic-2.svg",
        title: "Lettermark Logos"
      },
      { icon: "/images/w.svg",
      iconz:"images/w-2.svg",
       title: "Wordmark Logos" },
      {
        icon:"/images/lemon.svg",
        iconz:"images/lemon-2.svg",
          title: "Pictorial Mark Logos"
      },
      {
        icon:
          "/images/art.svg",
          iconz:"images/art-2.svg",
        title: "Abstract Mark Logos"
      },
      {
        icon:
        "/images/mask.svg",
        iconz:"images/mask-2.svg",
          title: " Mascot -Logos",
      },
      {
        icon:
          "/images/puzz.svg",
          iconz:"images/puzz-2.svg",
          title: "Combination Logos"
      }
    ],
    tabs: [
      {
        title: "Lettermark Logos",
        images: [
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAABGi/9DhvlEh/xIjv9Fiv8SJEQXL1g9euQmS40wX7EcOGg1ascpUphIj/8YMFoCBAg5ctQnTpIOHDQIDxwTJkgrVqEfPnMhQXkJEiIECA9Kkv8WLFIdOm1Af+wuWqkyZLsNGS8LFik7dtwIESARIj8jRoIHDRg1aMJwWQvUAAAD3ElEQVR4nO3a6XqiMBSAYSiitSgMKm4Vxbq093+FA0IWSLTzPGpm+972B3IOhLRIyOJ5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODCavJmN/nheYsrscr8PNVO0y8sGd2yzmZO0X96Dadpz7fppWUNd7E1Vnt5LVQdo3fzDL3Z90W9Rw5qGAY24ais4dweEylhsPtoTpP4Ztwftota2nKeX8PZYmi3qK57ciUojMUFTm2Zi3ZRG0vOZNq9IMCwnvbtqtvnI7sS1GXVaT6tmae1VpL94Jn9sh5oX7zaFeWTZrK9EtRtk/I0A2vmQXuOrA5XD36u262FPdbNLE8TWduVntYkDkNbRuygtRgFLzZB3VpYYx3b8oZOrJlBupcF2csJn1/DdTawq75e0yuxjrIax8QaSWbflJMcn15D/DPWfXnjmO/C6mbN1M6PxHLEzLhZm3cW8y52fXtO07hXi6uHaNv8XcReVQO3FDv1IxK5U8RGdWDYDTh45W7bp35Y80dmDXsiptVwIXaWR8idgzhs819Xl8DB7wae3xC27Ufydf/LqOFYdjEOWg1Vv6OQOzdG9+HlfAkY+0PXNQT+fOtNJGyM4Cm6ZaBlTudjYSI2lp6Xj00nd5WrL+2XWgsrfaxiIDP9NGi2wuM+lW2HakbctxaiG9GztBY3BqTCt08tc6Ayd6PmjPEiF92KIJfxnusaruYjYW7UcDm6rp3dT2VgcRZb41zsnWQqnnVLAf57j/8elo1EJ7XYeBv1yfX38PHP0rnntYeAeoeVNpzj/Fl6abL86sfWHsaXUP2rb11+z1qm6j3FZQ0X7XZ0Vzb977+tPZwtx9o7SEdieSVR9BqucvGmk5fvLJ956+VnX3abVfzDKAb43z2+jz+uPr+pPv1X9cyN5EHO+/gPH6fxLzWMXuTnywMpUge5ruHDx9riespi25w23l66naq1cD7W9vjx0nqgVI7lZ5e/zUrFGc7HL3vE3NPUNmrfDOc39+Wp9UlJVk+v4f3zh8E2s8wf1q1F2X5sq/P7zfBW1E1zMH/4gDngg2ebA26mf49f1TmCpjQjzcEL+L6wz9Vv753HF0Nw5yql+Yd6STfNwTz++mRfb5HduRYjE32HY/VBfNtmRtrz12Lg73d7Xds3y9qG47w5jbmuTU0OTM5yRYaR5mBd2x1rE4MwLMS1m2sTx7KIIpVDOVE3zcHaxDvWl25H6v9krC/VFgslO7mZd9McvIDfXiNsWfkr7M76eKC5RjiXsR9qminrpjlYIwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtZ8Dnmb1ZiDAMgAAAABJRU5ErkJggg==",
          "data:image/png;base64,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",
          "data:image/jpeg;base64,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"
        ],

        text:
          "A Monogram or lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity. By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name."},
      {
        title: "Wordmark Logos",
        images: [
          "data:image/png;base64,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",
          "data:image/png;base64,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",
          "data:image/png;base64,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"
        ],
        text:
          "Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google’s logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition." },
      {
        title: "Pictorial Mark Logos",
        images: [
          "data:image/png;base64,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",
          "data:image/png;base64,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",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///8AAADy8vJra2vCwsLb29vGxsbf39+9vb2bm5vt7e36+vrw8PDY2Nj29vbo6Oinp6c4ODjR0dFjY2OwsLAmJiaIiIiSkpITExO1tbWBgYGhoaEgICBXV1dLS0teXl41NTV2dnYtLS0/Pz96enpPT08LCwuOjo6Xl5cZGRkj2gT3AAAENUlEQVR4nO3ca3eiMBAGYCKKVKv1fretta27//8PrlzEkAlB3WOimff5ZiE94xxIwiQYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADP5m3gOoLH0xCbpusYHo4QYt9yHcSDEYmwcVtjTy+xYZoUsb6h6UCIG3P54MIsJ2Lau7JhnLTy80J5ESff1zTrb9M283uF5VQkzqKLW43yFuM7RuZOV8rJxZfK5NTg666xObOXk/J70bC8Pje4d3RurEXJS32LgXR69/4BOtAp50T81H1NuQcSr1ZitO5dSYow3z/lHL5ZCtKyppoTMTGd/skhJ8GGJGVVffIfwSInS5IT8VN1rtr7eNqfBMEXTcq04knmQznPz3HnqEdzUnFXkDNth2rPSpcU3UOheplMrYdqz19dUkbktDf1lK2DWG1p63JCnwkP6hmGAer5xRclhZxgnMk8vRdNStSkjMjxawtRT2amTcrIfIq3Q3FOn5S2dMZUPbh3Fqwtc21SOsXxBjl2cBitJRNNSsSiuD/owyIdrf1DO9Gj4enoH3LIZazWND41SQnzg2P1wM5prPboetq8HkkeFTncOind/ZN9efWvC8eR2rSjSUnKJP2Ky4eHEam8fQa0nOT9hE1BZvor+pw4cx2kbY1QyUBEcuLnngKjlrLG0VVy4ufyeZ2o9HwzVgpKrqNzZbmQklDuYy7fg+Cd+FftbTNhfVM/9dYfFSnhNF2TjHb6dKR8Xf4z6dNnYOadSV+73nMWuw7QPn25mnNKetr1L9mw/p/4pe4iSfi8+qdBamlat+y6flqnZ5xDq6Vf2sgxGou3+VdeJh+0Vfxc5Z4d75wujXwn8MKQFM8XRQtFJTZ/mFE3m8j83FROFXX5TfbZ1KGIvttYLZH2Aqfjinl6v3QdrhVytXEXRWrxUcGjWGDOAeE6XBter8wJhw6F7N+rweFlU7LMV4NFDcU0RdNgUTEwPuBQLAZjsh6MnFx7ofj5ajExvCYnLPrYIOjWlh0l7fr/54XuFVcKhzlb5vvinLiO1KLRhdOUd9eBWrWuT4jw/C0VjXXFyrmMx/REFpnqjikuw46sW9Pbuo7PCfPqF5cadZn5MmH5s276tyYLjBYCz+Rf9AiVbaFDv1+NrFS8wLRZ98vvZM84Djmp/N4J01cyil/Gmc64LIqWdbJN49NjBgb5g152I4UTlr1IYiG+klGlHaaXRCdZE2wND3HH3Mpv6Y7yfNdNMp9V3jXoTVbvXApKhayw9NsMelkx8lxkfI1n//HzkM9MLbblL2BEq/MrCR9uI7RPfRUyDIL+ZFt8HA84rAAqtkpOtkVJZb9aMh15sh85mR6a+azk53idvIfzmO1ULch+M2mXjsP9McvOQ2ceFnORZIbPrcpYqxvyLAuYxQyHGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDbP4trIz1bBO7pAAAAAElFTkSuQmCC"
        ],
        text:
          "A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable. " },
      {
        title: "Abstract Mark Logos",
        images: [
          "https://1000logos.net/wp-content/uploads/2016/10/BP-Logo.png",
          "https://1000logos.net/wp-content/uploads/2017/05/Pepsi-Logo.png",
          "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/03/the-4th-logo-1024x862.jpg"
        ],
        text:
          "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower. Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand."},
      {
        title: "Mascot  Logos",
        images: [
          "https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P6_720x350?$pjpeg$&jpegSize=200&wid=720",
          "https://cdn.dribbble.com/users/1543265/screenshots/6252522/for_dribbble_2_4x.png?compress=1&resize=400x300",
          "https://cdn.dribbble.com/users/621155/screenshots/8215766/crowwww_4x.png"
        ],
        text:
          "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson   A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC’s Colonel and PUB’s cute Water Wally." },
      {
        title: "Combination Logos",
        images: [
          "https://upload.wikimedia.org/wikipedia/en/9/9a/Doritos_Logo_%282013%29.png",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAADiCAMAAAD5w+JtAAAA9lBMVEX////6rxgYVJTuHSPuHCPtHSHtAAD6rAD6qgD6qQDtAAz2oaLtAAj4vL33ra4ASY/tEhsAP4rwWV35xMXuDRYAQ4zzeXsASo/8398APor97e0ATpH+9/f2nZ/97u6xvtPzgIL4trf+8d/81p7h5u66xtiDmrz09vn/+/X+69H0iozvLTHN1uP+9un7w2f95sX93rL70tNyjbOfsMpLcaT80I1Weahjgq7yZWfwREjq7vP7yHhriLH81Zr7uUf92qnvNzv72NiZq8f7vlkmW5j6tTT94rvyb3H8y4D1kpT6sik+aZ/7uUXH0N/6y8zyaGrwTVAANYY6I86jAAAbm0lEQVR4nO2daVvivNfAC0jZKhQogoCCCoiC+4qOiisyjsr/+3+ZJ0nTZm/DojP3c3neuLSF/pqTsyVNDONHfuRHfuRHfuRHfmQmuWr1242Thw6Wh4dG+7119bfvagHSaj8cn9bypVLOlRKQ/CqU/wEpnx6fvP9XMfsnx0/5Uq5ci9ZqNUCWj75ddB5OQMu996G8v7cbD51fp+X/vXXa/y3I7ffOWx6SRaO1ci4fvXho9AMIrvqNznGn8R9hbJ2c5nM1xJYrRY9P+tt612332/3W197a/NLvREvlqMv21GlrohGZ+oLvlFanVqphuIv/irppS+PNhzt+/9s3s2hpHZdyiK6cv2j/7ZtZuLyf4qYrPZ380z1oJmk/Ybr8RV/n/O7eJpK97lff2SKkEc1F3bbrBFqU7ubL1uv+n0gylUolkcBffj9eb71sfte9Ti/tJ5euXHpQK+bmy9ljAkAlEokIFPAT0EHERML9/fn68F+EbL2VvLZTnbKz9QhQMJgrz/tnhzubQEsP7s4eI+5BAJncv9v7zpsPle1feZcu35G33d7dY5JFi5D2SzyevcAO2IVPIAlPSoB2vPl3EE9cqxItnUujqr2t51RSZKMxk6nI6wE6eecs4p6bSP05/FYKlbTecMeLSn354Z9UIBthTF7voCt2rvEVyeTZ3zesnVW38fIPkoOb16mkDhxGTP3GTbaVSOL/vP5dwha2mrk3iWoe3Oo1HSXJyIt77RbW6ETq7HuJGDlxG6+2Kmm8g+ep6RDhrWtYuo+45ROJg2+m8mT7HPe8J7HxNkHbJV5vZwBMpDDPXQr/J7X/zWCu9GvYbB4Lh7rARKReX2agQzy4Fx54gInIX/D5J6vYo4tZwmEykXzevEkFUgQBuobUuPONU+rlm+mMYxywRAXd7N4mI6kt43EKy8nLb/xRzwR563vx3squ3TwXjhyCjhfZ60ZmMS4+DdbHLfIh3wp4FcVdT4w291OR5L6xNw8dMKJYQQ8pHUh9XzjTcjP06OoJf2TvdyKSujE259BNxII/7pp+TKnvMjLvbjQdXRUsy04SmYJ58RLX7scdsBbqN/91XyNt13BGS0KO/pJCtm9vXrwE+rS9V84Ae2b1a6Xh4QmGcyuFlKg7H10k8dyF2aIQlydS35EyqfFuXDzjeT7bEjnbuXnkEiqY2Sf2v6P52sF44Bb258R7TtCZMEiAU8nb18Od78kj3jFeXsCD0SKMMu7m7HxEIFpk/+bgGxP5PsZblZqW5A2Iq2cOykS0rW9qNF9aJdx6gmOAWAkY5i+ADXa1m4O/kNdul3HfE9x6F3YY6J6u5+p8sNluz170FLJ6/3FUXSjfkxu1lMV86A/AgtZ7Z3bthBp5facVolSW10ZDE4m1cr8wvHMXr3YqHHkFNiV5B375PXOz/dFqtvViBpGlnXgMSdwxRwvC67jJerQmHIGtlrg1YNFkJrbHGw3PVlkeG8aIkPmSHi4Er51XeQYD9jmond0ptRMWdx+3wtkqG80BVEbDWHFiojiFBeB5prPUEA5Bm5IArsF4ncK4ILbw7uaiWY69tBS3FXwx82N+PmxbahfCEWRTYESs33xQJ7fC2NaL4wlGQ8LxxYmeOpdz4/1y8aJR8RCsISRh7nmmWadO3Wr0t884sCIemshnpoe26ROa8+K1PccuDlu6KTb8Ldy4ALbfr1rVzLoZX+LEHhA+axmcc+SbGrM+H942xitLBr/QeA+sjYQFnqDD7R8G+YBq5f7ec9h1k8dbMjOEzyzCk7KWx7c+H98p1s4n8RCiSsFg6jmILZH6fRaglJXMpe06bHOSFfnidto0mwbPd28uRj8bau10mw8GnurAGlqTwAHLbA90NU/XQLeq0nwQzblc+0AqyPIdYb54by48TztrYlzm9r4g6wKHvYJrs1nTYl22HaP47MK4SKJMnw/2PyOTxvZzdy4+HJdFc5JjSCmT0NTLQrNEKhKklVDWByYfkEB/5vOZTAjN8sXwlWZlHjzPduZEz47jaVjNE5wf6HLPN6H++960RX9tZSk+5t4ZvhH+w/mcB8/ArVeTGBecDsFq7CFjPaGT05kjcCQ2ntu7NPhGXu+z5vIOHS/pk83Y8aAO6cga2pNDrfS0IsWD7ozjqx9lPk2Kzyre93Dni5tzZUhXOKyuiQMNhnGQ9JWRgtvXHuuJ0cppp4E4tu2YWYPmAyHoEGZENF885um1PR+ecVFTpg1itg6NpTo8OcqMJoPCyoavTs00oUubhXE2Mx5NJihjJf7BD0FpvpjvTSbzufa+13xiXG24zo+CS6jhqtkCbAMbNo85dv9XMX0628ywnUgWvxiS/CE+nAvPj1ykzbeXouFelZ6gMh6aFqWK5gT9+9K/WWfIt4IuH7h0Hrx+Kaj5XpIacPdjEOxzTsBaAQeqfvPZYvwh8qVHNB/5wPQ82e1bVFWthoJ8QiCccWSbaYmNhFZx7Pc+1ocblWxWEn8O6xSfPSFdFz2s2cRvPrGkBOUgFQwHZMMU2NBDB12wF6f+wFL/WAP91Fwx1pn4M32ZOULHiX/YtfwPM8eqbw8Tr/flFLOoD5XRVyXT3IWea5myIQ5RKrtAqSfO3qrLyA+Ak5wm4bMn42Ux/rQ2jAnpiubGbHhe88my9iCprvXAjVrmEcUXNwvNgo8EzJ5/xIYdqH4J7Kr3AGg+efwJ+IweeVzm0Ux8nu8rC/XqQFkGxjIOBNa1lpkUpugzDUn3S4O8FfBQvZThk8ZnkI+6JD5TAuiFLtH8dDPFl804Epjn+HxDdGjgRR0FPzp2H/463U/1+Pz0D35Gdga+Ti3IOWjwxQU+P+TfNSaeeiENnIUPZI7+FbNkgLherbQujFSyGe9OZHy2y1fAUCBDGDLFoVA+EIXaHxyfsetdlZ7BhDY8vnLoqVXgw4EsB/AN0CGqYBJji18xBzg5GV8VOw3LAYrs50fYYha8v2cIsj3fXlPOGMcCUnBkUOx0GF8GO630LuX+XAtZGTiFNUfks0dDrxBK83kVazdLmmWMpeVZF2niR0sF88RxmU7J5ylhHDbZwO9/xLibIt+S7RdCaT7vivonVJy16fGMB69iLY4XKfmqgXx1z2MhRb70+JB/4PmqYny9BJTQ5Yub5BJjvTib84vqqqcuX9XHa8Kzdv1QeaDLVwd8cQfEa7N4A0782EVlPet+wqbFN1n2Mm7cWUhkSoZ/AvmsEay59EaZBYwWEecXLUkOVjIFC6h9b1zX5YvZXjzsuSoSf8YdHIN5IQ2w9hxf3LFMGMZV6Cy4erSczWQy2eL9DAUmv/eJdZeNASw3w29NozqyFp8vac8Y+AYG9Kfdo8r9xsT3Hss0H8z446MsW+Ms7g7c8XcLPmhwfGM6Rm84U4g9K03TpIatoG5NxxczcQNmqUMOvFWfF3Q0zAeTo8HuMpfdFz+hy4jTAj7gcpoqr2892cw2OzAdVnHsqfliJk5IbWlxELRwE2ovVEnTy/toWXNMJy4Rh7aqYfLm8VFFea7pcAMW9fjidP3FtTBFCTtsS5hqgN65kpU1SMa0ZHDu9xd18bY9505i6wrfdK4Ac6HDFx9eUqUh062oN2WAFipE1OUzd45ippLOTVj0pJ0Tul+R9Hgn7fhBhfOpx9czBhSg5RaFRgKg7TpHhTRNWwmHbkA3DD321dMPzgif+ZkZ+4DOSJfPGNIt6PbBjEkX/EAXKgQYifpQrZr4BnQdvxe8UKmtz4fifd9+6+on7FQMoHtudQTL0/BkYE7sXZ6OVtOqIzUrtFiafFd+4YVUXggf+rOALQ3IxLT56lTJxPJqQvWNlUE8HZsI5gTVm8gNV0N0E93Ash6f3/1qv1R8I2xsQM6gzUcDhjzqjybIKB2qQdbT4Xhx3XkGfnBWJu+9cXxDt/3g1BolX4znM+pLflYUZMs3bNPt4ISvp4GnPdB56psXMpGV5avgv2D5QMk3FPiMddvGpiTg6z/9yS8+3ygtA7Idd0wN/6U9DcZTTzp6Yflw90OZpYrPmYh8ABAG0U5QxXKFeCKPryi6PRuEN5OV8draeAWGoum02dOd7UrMS4lUBhm+keX+igIRnm/D4xtJ+Iz6ihkcKx5RqYPHJ1hO2xzS9qiSHa/pp03vfvtR0RnFV+yl3c7XNGR8Y+ymrDUq/6NHeYKtQMEW+NZ4x2f15kkCT8qe+XyT8MV7XhRq737I+Ab4aUMT4vHpWm5uZAzz8dppzjfhxY9eKPdAxS9k5ptjDtZpPjyryPuz7vNZskG6o8xucyyY0SORL8M137z1iVNZ7aUoqYiAJrSqhM+BlZQjz1GhabWQTzpHenkFjlc7adPmLM2GJfDFODxluayiZ2G85qPdn4Jvye4RvrgT/+z5YQZqzWXTMa0mF/aiwXgvguWzmkya5zti1VM+HXm9OAYfqpcg+eaTnrJE+KBlJjdhblDdw3Z8N+wOjG+YK4IlACkck0ay04vXBL5d1veJQcp9dhRDc+r1+FqEj3pPxeezBxuVyhqhLRhxWWzhDhywClNEmsW0EAKk21fkY9UTG20s1eVdND+bNgBh0ifugSpdc/GZf5MgEmlKggvBBtSXP01UAxP54vQgkcBXZdXTPxfOabLYQoweX5uEL1I+Nwoi6SDVAZU2YPkS9LglW84HnhGJrAS+ZebTvbkWlR5ptin5GmWfjyou8Xx++6VBwMgZ8DTr7lDhhnh5kW+JmiEi8I0Z7Uhj13ckK1ToedkHLT7SHQ04jMPQjZhAdwW0HB3FSPiWnImS79ORIczB52dH0RK1DhbHV/ET+Cb4qz7BNTs0UZoxKusxMlVFzedO35HyDRnr5dmir+b79Ipp2LoXC6ie3GtyXaBuU4XBAL4lbxaLwMeZl+rcfMcafBk/GiU1uaosfPikC0hBfEv45sL41r+Dr2lyd6WSClMBDOTDbpDnq8v5JDZ7UXzrayR8SYslgfrH8hGZ4uno88WtdQnfusL9LYRPZj+XzLSfQaQH/MXVS9QPR/g2YnF9viU0ySKMzwvHM/D/Tjq9eD5Ko4RQdwMXbB0Tv4YSm4JvCYbOYXx+XJRxQDyUyaa/jM8WJ+5RQyYolrifjg8a0RD74nCzIRk7My2fNP706QZiEYV6EwXGNfwQUSjfklnMBvPxU80+GD6t+Izik+UPmK4neVa71ITxGF2e0OZbSq/QuZPo3/k2Yvm0qjIUnzT/g3WJguxJVRkaOGdqer4lJjWEfCM2iuYmM8/AR+IXenCa1Jcssykv7xXsBfAxAvn46kua6YGXNL3e+Jg/Ni2rvwDFZDI7amyc62xubjM/nxCpUNWc9QIDb2rVX/zyoFg/A4pJq8D6mk19JOvr0AjYIvhET5521u7r9XolW+BG4i0dPDJxMBql5pUXTaCYu/QD+vgEnp7wZSyGBb3UrMHXE4b0eb6mOO6Xdt/15A44etPsSPmanhpZZBWznukhV+7zca7cfSc2nC8+PJIX5gjffdCYO6OeeuUzMq08mif/vacvvl/xXrr0+UbsqyXuZA0Nvh7JRRR8xkRjbAyJFh49eit/r2NjSIbNPT4+Uhka2nxUNiLn02xA7TEAwpcT105c3zXpdy49viH7Cg4O8zX4YP54qbI4ePyhGTaxAIqlPcm1RvqfuG4pd8v+mBjzX68KpMlnDGRTawifzuitNRFuVSX++APjILAUpXzsS0Z+T9Dlq8flVtTjWw+dXDDNFGUSoEne6Je2HxN4UjM6dflgETeIz6gKtU5GnKmGlIiDl7zaIeNjA0/qhWYNviX3TLmXoOZPDNVGxjYnUy3ERArYTIak5pswxiVOxvn1+UAPDuSDLzvIm9Axh6zfq2SbK81MwAg4GWCRvHok4eO7ZFZ1chCfMZYAMrNkKpemMNAB532yScPRAC9kMVQnE4RPfDdHwscVWQbKk2V8xCmPrGA+/B4Jng9iw4nm5ic/bxd4r17mvnKfHZqm8sXHN2JghOnXIt+axf9nGj6bnD0RvIQ4y6mysVvogVazB5+7G6IONsnLEBlTaVM7FB8fwQh8XOBpjdUnh/AZQqxtTfnmYhG+O1C4vLz8HK+DL1e9+EhlEEIH5PnqbODJrlWiwUdPZFpPc15i2pWjeiBrqZvOcAh0twpCYsUsKcrACK/ecrds8bxHASeH8ZFRG49vOrwjE2TwQJ/gl5i7wG2pMgrSfoIH5G453mOMC1e+m5aPq2LBmeZK6R6cXXNLKq9ZNkzU0ggVXDtMKybKXJAOyIfY/Ix4NjDj1vLQyG/T7MdnKUD1yiB7L6+/4XYmKXbBhBU4zwbo50YWZKdoiRGFhaEiGD4Elc34J9paDDxZgw8YeO+ILV+3puuyuSsL3DCHRtYn5INLOQ2g5V1RuQiqA/IeIpDPLgSeHGY/kWTR24R22hyIQRfQSWavk8Qdc7gJk4i6OQBuAlXSLpXv/pP24xU0kI9fLSGczxZGaIx6ptDrTXaFGZQ7N3/4fVyS7AJBWct0+VwbY1iWaqoTlUJwIUwwHwcYzsePJyhk724/KdmjJsGeVYXvyEI+YD7XkDdURaFtpQUN4WMBw/k0prx3D14j8g14Eq/cqZfpGOAbgt9gGNVzlDmv/wKL4OLD+GLWpfJkCV/YnOLNrVt+LWyyWFCSXx5i3QSPtwiDgkqxcukELKx1ShSUTXJD+WjAUD4rcCbnwXVC2MMldQ1U1fuDnIo3dDsyLTysVRmkgwpODcrCMG8Yh/NRgDzfJccXsDrN5h3fcC4eXNzpBnsHsiVEP5+/QIPp93GQGTXHTTi9KSi4oxWUsTA8n2T9spj1KT/ZNSaEz13URSIHZ5GUZDsvvBSgt9haiizSBdSttupuDgZcO5RYyEvVtILmqXkGgsrJllT1ALmT0/T8wXhavnBL91BqKuke5/JR1sUtSddKbrmv+lH8CC1Y0ApKjyPx8TTzXhj590h68ofHB+B6a5LG29wSfBwj7hYQ7mJyVPN5SwiWa5JF9hRChTD0ewICH70QCw/InozHljOWY8bGEtO2A7VSzRbBi1DjtQ6p5muRzpR70t3RlHLx0Rqp84p8dWkfRHPc2ZNx6rtm7krGIYGtDN5kDvGhU4Xmo/tStHSqtzdwX96AIp+x7kgB+fE/b2RZEla+BHQ5SnA47aKS0Jq5U7T7p9aOu0/0NX4PlPDB6qzIx49PO478vY7uIb+bRUjz4bUOySe8RTlR7rPIyAkVo5EgTcYnXSgRRs7k5Lg5kfmCPbmXU+Ahf+caTyrza5d4Prjjm0Y3pK/z00ApH71WkE+Upl7PMWOSWGJP3GMlWNBVj/6SuFhqIp7emkod+kpvhT45n/EhAMLRcHQySOUk00mmhsN7kL24vo980ENZgidbS1eQqzx9yVsgnxi3ufoJy+cZQTP37qaFwyv4G13XdpLAmr1JvjWC5RfdgHiyj4qPWW8BCqztLJu26Oi6M8BF3BX8DeMWXpmk9nQ8l6mndLVSUVrMs3F9hJIP+DX2CPAD90KI2z2cftNKJK5rP0v6LemKzLhorDmE5YJ+OG6YreYjy1mhA7LM50XbFfDiMuENu6hPzMnwFOslisI1YDuYj15wwRTX9D+4nhUONh+MVtw1xJPUwsW/pMZTt/m4BozmtoWRdrbCnHVXwwTRM5+dbL5qhF9qQQYF7WLD7EIm107N3gflapVv90A+oz6G2dfSLhuq7G39nq3T+a0HgzF3XzO6pLst1c7oql4AioTxgVBDg/kgYpVzB6DTzbllF/Lm3d9oHxS6JC+1nXq+z39EjAYAHxHKx8rOtVbkHIx3K8c7kTdfSSN0UXwI5GNGM4OX7u/Oq5cu3jP4qD20nyezjWprVYqXm241TyaNEPiCpuzt7C8ADuDBnH2HD1uAZkmVU7pJRaDQ2ZXApyzBdbcic+slxuvCPVnhbwmmGn8q55NtUhEslI/h+SQrOyNZUNNFsHJeQ7zkH2ZN+2N555vKuLhCWWGOz5FPCD6cbWdtmSQfQddDG0Km2Fr8idTz6SzmKUq7JOODk5VlKetNcmE7HEZS13ib7USSXbT/XW5boiXd6hIjvp8hfLbJTlb25WAhGxxivENj7w/aAeWW3W+hJU2KpPMBdcTXUI8PJHWqmRuHi9ufMrJnnEFNT6TYYUzjSt73NNbyVAi1R8mGBV+wDXjRYFFdD+jmIarRpx65zTKuZBk7FHHbTF05Lnt8WdNGhWdlCW5BO3BGdg5+I9WM8JsuqBxfNCfOxtUWd381wFdEHq/xpC5QbS7A8SWu755RKsuNsAfhaWd9MnEnnbs1iu2HXK4WXVWW+rvPc/fBRxRtJpI3wodfqfCitemWIecE7W8I+foXefcr8mp1uFmEA0wmJFu+e1uXSzrfFFmRTOD+lOVG+6lEXi9TL2y+N28Ak0g9y/Z77yvcunTjxSkFBnxl5vHVntSF/s15CJOpa+nOCw2FWwfPevq4TJAn8WOD4oW9s9lSv0TqVtZ0QDrK1pvLtngic6v5wOWjp66XBW58da5y6/LNtaYXWVhUDtBRwxtt1tu5MpFM7Ks3vmpFlZZzTtNJRBbW1vJhCTPazz0QMoE2nQ7cTvVEEXJCKWmN9+lIW9bBc2/hpnnz8OwxASgBpj9BB/2aTKZSv0N3Qd8+V3Y91Vtgs0lDPpwRuog7ku7mweHN6/Xj459nILeP+9dnWy87GvvMtZVeLzpLxh4kcj0p18Q3zRYm2xcBjTdHUC0XRUcovS34e8gXlgIab8GtB0XhZGul8wX2A1/6T0qvgB7rFzxVqZGBhPnzRX9bK8iuAMl9xSNVR4G10ulMBRCFtH7lg1QzWqstzDFwX1xWJmGlpynrx+ovuQimA1HLgty6KNtP6q8ul44XoKbt00CzAr9nETGnUtTBIGzE6MNcHePqoRZoVaCU9HzuzNIJCJiQnj7M2IrbjbcQxYSiLh8sSt5DFKhWKh+3pzUArZPTfGjTQcvyJYaTlau3sDuplUvR44burVy1O9GS0nLRktMfgZ5LgnUUM+ZKpbdOox/Ykq33h4taKSjKpGV1USY6VPo1rVuq1cqA8un8+OGk3e+3rrZduWr13xsnnYunUimn1W5Iyk/foJu+/AoOMDhMwAlAieRyAEybDMnqF9tNXt5rqnL5V0ju6avCeLV0VqdrgdmlFlBz/UJpvU2hpHNI6fyL4s1QaUe/Xkn1p8Z/hZzkvpawXP7ygCVEHkpfR1gu/ZWOx8lDTiO0mkFy84zsLVROoroxiLaATOLbwhUNaZ9qBP9T0OUXWhFYhLQ6uQU1Yi2X63xnLKYt7Yv83Ii1XP7iC4uqc8p243weRJB0XPxtfxAq7eOaXjrHsZVLtc6/1ukU0jq5yE3BWAPtVvulnRD/G9Jqd05RgheE6WaI552pCxr/iFy9n3TOo3kv4/OkDPJBmBA+XYRl+P8NARl7u3Hy0MHy8NBovPdbX1am/ZEf+ZEf+ZEf+ZH/1/J/034U/f0SgMAAAAAASUVORK5CYII=",
          "data:image/png;base64,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"
        ],
        text:
          "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image. Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand." }
    ]
  }),
  methods: {
    add: function() {
      // this.ticks = event.target.value;
      console.log(this.tab);
    }

    // flip: function() {
    //   if (tab === index) {
    //     this.ticks = "benz";
    //   } else {
    //     this.ticks = "benzen";
    //   }
    //   return this.ticks;
    // }
  }
};
</script>

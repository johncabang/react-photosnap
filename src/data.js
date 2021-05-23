import desktopCardMountains from "./assets/stories/desktop/mountains.jpg";
import desktopCardCityscapes from "./assets/stories/desktop/cityscapes.jpg";
import desktopCard18DaysVoyage from "./assets/stories/desktop/18-days-voyage.jpg";
import desktopCardArchitecturals from "./assets/stories/desktop/architecturals.jpg";
import desktopCardWorldTour from "./assets/stories/desktop/world-tour.jpg";
import desktopCardUnforseenCorners from "./assets/stories/desktop/unforeseen-corners.jpg";
import desktopCardTripToNowhere from "./assets/stories/desktop/trip-to-nowhere.jpg";
import desktopCardSomwarpet from "./assets/stories/desktop/somwarpet.jpg";
import desktopCardRunningFree from "./assets/stories/desktop/running-free.jpg";
import desktopCardRageOfTheSea from "./assets/stories/desktop/rage-of-the-sea.jpg";
import desktopCardMilkyWay from "./assets/stories/desktop/milky-way.jpg";
import desktopCardLandOfDreams from "./assets/stories/desktop/land-of-dreams.jpg";
import desktopCardKingOnAfrica from "./assets/stories/desktop/king-on-africa.jpg";
import desktopCardDarkForest from "./assets/stories/desktop/dark-forest.jpg";
import desktopCardCalmWaters from "./assets/stories/desktop/calm-waters.jpg";
import desktopCardBehindTheWaves from "./assets/stories/desktop/behind-the-waves.jpg";

import boostExposure from "./assets/features/desktop/boost-exposure.svg";
import customDomain from "./assets/features/desktop/custom-domain.svg";
import dragDrop from "./assets/features/desktop/drag-drop.svg";
import embed from "./assets/features/desktop/embed.svg";
import noLimit from "./assets/features/desktop/no-limit.svg";
import responsive from "./assets/features/desktop/responsive.svg";

import createDesktop from "./assets/home/desktop/create-and-share.jpg";
import createTablet from "./assets/home/tablet/create-and-share.jpg";
import createMobile from "./assets/home/mobile/create-and-share.jpg";

import beautifulDesktop from "./assets/home/desktop/beautiful-stories.jpg";
import beautifulTablet from "./assets/home/tablet/beautiful-stories.jpg";
import beautifulMobile from "./assets/home/mobile/beautiful-stories.jpg";

import designedDesktop from "./assets/home/desktop/designed-for-everyone.jpg";
import designedTablet from "./assets/home/tablet/designed-for-everyone.jpg";
import designedMobile from "./assets/home/mobile/designed-for-everyone.jpg";

const home = {
  black: "#000",
  white: "#fff",
  column: "column",
  reverse: "column-reverse",
};

export const homeDatas = [
  {
    id: 1,
    title: "create and share your photo stories.",
    body: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    direction: home.reverse,
    textWrapper: home.black,
    h1color: home.white,
    rightWrapperColor: home.white,
    desktopImage: createDesktop,
    tabletImage: createTablet,
    mobileImage: createMobile,
    linkText: "Get an invite",
    svgStrokeColor: home.white,
    route: "/",
  },
  {
    id: 2,
    title: "beatiful  stories every time.",
    body: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    direction: home.column,
    textWrapper: home.white,
    h1color: home.black,
    rightWrapperColor: home.black,
    desktopImage: beautifulDesktop,
    tabletImage: beautifulTablet,
    mobileImage: beautifulMobile,
    linkText: "View the stories",
    svgStrokeColor: home.black,
    route: "stories",
  },
  {
    id: 3,
    title: "designed for everyone.",
    body: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    direction: home.reverse,
    textWrapper: home.white,
    h1color: home.black,
    rightWrapperColor: home.black,
    desktopImage: designedDesktop,
    tabletImage: designedTablet,
    mobileImage: designedMobile,
    linkText: "View the stories",
    svgStrokeColor: home.black,
    route: "stories",
  },
];

export const storyData = [
  {
    id: 1,
    date: "April 16th 2020",
    image: desktopCardMountains,
    title: "The Montains",
    author: "John Appleseed",
    route: "stories",
  },
  {
    id: 2,
    date: "April 14th 2020",
    image: desktopCardCityscapes,
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    route: "stories",
  },
  {
    id: 3,
    date: "April 11th 2020",
    image: desktopCard18DaysVoyage,
    title: "18 Days Voyage",
    author: "Alexie Borodin",
    route: "stories",
  },
  {
    id: 4,
    date: "April 9th 2020",
    image: desktopCardArchitecturals,
    title: "Architecturals",
    author: "Samantha Brooke",
    route: "stories",
  },
  {
    id: 5,
    date: "April 7th 2020",
    image: desktopCardWorldTour,
    title: "World Tour 2019",
    author: "Timothy Wagner",
    route: "stories",
  },
  {
    id: 6,
    date: "April 3rd 2020",
    image: desktopCardUnforseenCorners,
    title: "Unforeseen Corners",
    author: "William Malcolm",
    route: "stories",
  },
  {
    id: 7,
    date: "March 29th 2020",
    image: desktopCardKingOnAfrica,
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    route: "stories",
  },
  {
    id: 8,
    date: "March 21st 2020",
    image: desktopCardTripToNowhere,
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    route: "stories",
  },
  {
    id: 9,
    date: "March 19th 2020",
    image: desktopCardRageOfTheSea,
    title: "Rage of The Sea",
    author: "Mohammed Abdul",
    route: "stories",
  },
  {
    id: 10,
    date: "March 16th 2020",
    image: desktopCardRunningFree,
    title: "Running Free",
    author: "Michelle",
    route: "stories",
  },
  {
    id: 11,
    date: "March 11th 2020",
    image: desktopCardBehindTheWaves,
    title: "Behind the Waves",
    author: " Lamarr Wilson",
    route: "stories",
  },
  {
    id: 12,
    date: "March 9th 2020",
    image: desktopCardCalmWaters,
    title: "Calm Waters",
    author: "Samantha Brooke",
    route: "stories",
  },
  {
    id: 13,
    date: "March 5th 2020",
    image: desktopCardMilkyWay,
    title: "The Milky Way",
    author: "Benjamin Cruz",
    route: "stories",
  },
  {
    id: 14,
    date: "March 4th 2020",
    image: desktopCardDarkForest,
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
    route: "stories",
  },
  {
    id: 15,
    date: "March 1st 2020",
    image: desktopCardSomwarpet,
    title: "Somwarpet’s Beauty",
    author: "Michelle",
    route: "stories",
  },
  {
    id: 16,
    date: "February 25th 2020",
    image: desktopCardLandOfDreams,
    title: "Land of Dreams",
    author: "William Malcolm",
    route: "stories",
  },
];

export const featuresData = [
  {
    id: 1,
    title: "100% Responsive",
    body: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    image: responsive,
  },
  {
    id: 2,
    title: "No Photo Upload Limit",
    body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: noLimit,
  },
  {
    id: 3,
    title: "Available to Embed",
    body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    image: embed,
  },
  {
    id: 4,
    title: "Custom Domain",
    body: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    image: customDomain,
  },
  {
    id: 5,
    title: "Boost Your Exposure",
    body: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    image: boostExposure,
  },
  {
    id: 6,
    title: "Drag & Drop Image",
    body: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    image: dragDrop,
  },
];

export const pricingDatas = [
  {
    id: 1,
    title: "Basic",
    body: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthlyPrice: "$19.00",
    yearlyPrice: "$190.00",
  },
  {
    id: 2,
    title: "Pro",
    body: "More advanced features available. Recommended for photography veterans and professionals.",
    monthlyPrice: "$39.00",
    yearlyPrice: "$390.00",
  },
  {
    id: 3,
    title: "Business",
    body: "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthlyPrice: "$99.00",
    yearlyPrice: "$999.00",
  },
];

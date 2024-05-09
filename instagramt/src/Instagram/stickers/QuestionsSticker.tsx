/* eslint-disable max-len */
import React from "react";
import { vec, Group, LinearGradient, Path } from "@shopify/react-native-skia";

import type { StickerProps } from "./Sticker";

const size = { width: 134, height: 54 };

const Sticker = ({ matrix }: StickerProps) => {
  return (
    <Group matrix={matrix}>
      <Path
        path="M18.593 19.22C15.775 19.22 13.469 21.526 13.469 24.343V48.013C13.469 50.831 15.775 53.137 18.593 53.137H116.099C118.917 53.137 121.222 50.831 121.222 48.013V24.343C121.222 21.526 118.917 19.22 116.099 19.22H18.593Z"
        color="#C2C2C2"
      />
      <Path
        path="M12.9251 9.55688C9.77905 9.55688 7.20605 12.1299 7.20605 15.2759V41.6979C7.20605 44.8429 9.77905 47.4159 12.9251 47.4159H121.767C124.912 47.4159 127.486 44.8429 127.486 41.6979V15.2759C127.486 12.1299 124.912 9.55688 121.767 9.55688H12.9251Z"
        color="#DFDFDF"
      />
      <Path
        path="M7.22706 0.785889C3.75206 0.785889 0.909058 3.62889 0.909058 7.10389V36.2919C0.909058 39.7669 3.75206 42.6099 7.22706 42.6099H127.465C130.94 42.6099 133.784 39.7669 133.784 36.2919V7.10389C133.784 3.62889 130.94 0.785889 127.465 0.785889H7.22706Z"
        color="white"
      />
      <Group>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(size.width, size.height)}
          colors={["#CB27D3", "#FF0000"]}
        />
        <Path path="M13.5146 17.0423L13.4713 25.9594C13.5114 30.1395 15.439 32.0783 18.3473 32.1391C19.5316 32.1599 20.5429 31.7797 21.3108 31.2246L22.5445 32.2035C22.805 32.4829 22.9095 32.4658 23.1357 32.5362C23.6585 32.4506 24.0253 32.0685 24.0614 31.6332C24.0101 31.3195 23.8542 31.023 23.4892 30.7607L22.4817 29.8521C22.9721 28.913 23.2895 27.5729 23.3465 25.9533L23.2853 17.0533C23.3498 12.8561 21.3176 10.9344 18.4092 10.8736C15.4134 10.9346 13.4746 12.8622 13.5146 17.0423ZM15.5623 25.6172L15.4992 17.3615C15.5086 14.1395 16.4704 12.8012 18.4036 12.8069C20.2323 12.8296 21.3082 14.1564 21.2989 17.3784L21.2574 25.6512C21.2365 26.8354 21.0598 27.7232 20.8488 28.4018L19.5979 27.3183C19.3546 27.1434 19.233 27.056 19.0239 27.0902C18.484 27.0712 18.1343 27.5579 18.2027 27.9761C18.1495 28.3068 18.2883 28.4988 18.6533 28.7611L19.7995 29.8617C19.4156 30.1393 18.8928 30.2248 18.353 30.2058C16.5243 30.1831 15.5529 28.8392 15.5623 25.6172Z" />
        <Path path="M34.839 12.215L34.8339 25.9566C34.8777 28.8479 33.933 30.2907 32.1044 30.268C30.2757 30.2452 29.3043 28.9013 29.3479 25.8884L29.353 12.1468C29.372 11.6069 28.8683 11.1526 28.3284 11.1336C27.7885 11.1146 27.3342 11.6184 27.3153 12.1583L27.2569 26.2306C27.2628 30.2016 29.1903 32.1405 32.0816 32.0966C34.99 32.1574 36.9288 30.2298 36.923 26.2588L36.8768 12.2035C36.8787 11.5591 36.4795 11.0877 35.8522 11.1904C35.3123 11.1714 34.8409 11.5706 34.839 12.215Z" />
        <Path path="M42.3102 11.2972C41.7704 11.2782 41.299 11.6774 41.2971 12.3218L41.313 30.7834C41.2941 31.3233 41.6933 31.7947 42.3377 31.7965L48.8863 31.7982C49.3045 31.7297 49.7759 31.3305 49.7949 30.7907C49.8139 30.2508 49.3272 29.9011 48.7874 29.8821L43.423 29.9013L43.3238 22.081L47.9392 22.077C48.4791 22.096 48.846 21.7139 48.8649 21.174C48.8839 20.6342 48.5018 20.2673 47.962 20.2483L43.3466 20.2523L43.3672 13.1639L48.8361 13.1275C49.376 13.1465 49.7428 12.7644 49.7618 12.2246C49.7808 11.6847 49.3816 11.2133 48.8588 11.2988L42.3102 11.2972Z" />
        <Path path="M53.0851 16.1295L53.0147 16.3557C53.0225 19.6823 53.9939 21.0262 56.8472 22.062L57.9782 22.4137C59.805 23.0808 60.3773 23.9533 60.423 26.2002L60.404 26.74C60.3622 29.1085 59.3662 30.2377 57.7638 30.2853C56.2487 30.2112 55.3287 29.181 55.1081 27.1774C55.1271 26.6376 54.7279 26.1662 54.0834 26.1643C53.5436 26.1453 53.0893 26.6491 53.192 27.2764C53.154 28.3561 53.5323 30.0117 54.5399 30.9203C55.3212 31.7586 56.4522 32.1102 57.741 32.114C60.8585 32.1405 62.4324 29.9506 62.4246 26.624L62.4607 26.1887C62.453 22.8621 61.4816 21.5182 58.6454 20.5869L57.4972 20.1307C55.6704 19.4635 55.0982 18.5911 55.0696 16.4487L55.1057 16.0134C55.0771 13.8711 55.8641 12.7762 57.4836 12.8331C58.9815 12.8026 59.7971 13.85 59.896 15.7661C59.877 16.306 60.3979 16.8648 60.9206 16.7793C61.4605 16.7982 61.9319 16.399 61.9338 15.7546C61.9242 13.0725 60.5022 10.9435 57.4893 10.8999C54.3718 10.8734 53.007 13.0291 53.0851 16.1295Z" />
        <Path path="M65.4949 11.2746C64.955 11.2556 64.5882 11.6377 64.5692 12.1775C64.5502 12.7174 65.054 13.1717 65.5767 13.0861L68.4851 13.1468L68.4858 30.8595C68.4668 31.3993 68.9706 31.8536 69.5104 31.8726C70.0503 31.8916 70.5046 31.3878 70.5236 30.848L70.5229 13.1354L73.5187 13.0744C74.0585 13.0934 74.4254 12.7113 74.4444 12.1714C74.4634 11.6316 74.0813 11.2647 73.5414 11.2457L65.4949 11.2746Z" />
        <Path path="M77.6575 12.1275L77.7077 30.7982C77.7058 31.4426 78.2096 31.8969 78.7494 31.9159C79.2722 31.8303 79.7436 31.4311 79.7626 30.8913L79.6953 12.116C79.7143 11.5762 79.3151 11.1048 78.6707 11.1029C78.1479 11.1885 77.6765 11.5877 77.6575 12.1275Z" />
        <Path path="M83.8325 17.0599L83.8937 25.9599C83.8292 30.1571 85.8613 32.0788 88.7697 32.1395C91.7655 32.0786 93.7044 30.151 93.7689 25.9538L93.7077 17.0538C93.6676 12.8737 91.74 10.9348 88.8316 10.8741C85.8358 10.9351 83.8969 12.8627 83.8325 17.0599ZM85.8801 25.6348L85.9216 17.362C85.931 14.14 86.8928 12.8017 88.826 12.8073C90.6546 12.8301 91.6261 14.174 91.6167 17.396L91.6797 25.6516C91.6704 28.8737 90.7086 30.2119 88.7753 30.2063C86.9467 30.1836 85.9753 28.8397 85.8801 25.6348Z" />
        <Path path="M105.781 12.1163L105.825 26.816L100.225 12.2743C99.8787 11.4721 99.4966 11.1052 98.8522 11.1034C98.3123 11.0844 97.8581 11.5881 97.8391 12.128L97.7847 30.8158C97.8873 31.4431 98.2866 31.9145 98.8264 31.9335C99.4537 31.8308 99.9251 31.4316 99.9441 30.8917L99.8998 16.192L105.5 30.7337C105.846 31.5359 106.229 31.9028 106.768 31.9217C107.396 31.8191 107.867 31.4199 107.886 30.88L107.836 12.2093C107.838 11.5649 107.334 11.1106 106.794 11.0916C106.271 11.1772 105.8 11.5764 105.781 12.1163Z" />
        <Path path="M111.807 16.142L111.842 16.3511C111.849 19.6776 112.821 21.0215 115.674 22.0574L116.805 22.409C118.632 23.0762 119.204 23.9487 119.145 26.2127L119.126 26.7525C119.189 29.1039 118.193 30.2331 116.591 30.2807C114.971 30.2237 114.051 29.1935 113.935 27.1728C113.954 26.633 113.45 26.1787 112.91 26.1597C112.37 26.1407 111.916 26.6445 111.914 27.2889C111.981 28.3515 112.359 30.0071 113.367 30.9157C114.148 31.754 115.279 32.1056 116.568 32.1094C119.685 32.1359 121.259 29.9459 121.251 26.6194L121.183 26.2012C121.175 22.8746 120.308 21.5136 117.472 20.5823L116.324 20.1261C114.497 19.4589 113.925 18.5864 113.896 16.4441L113.933 16.0088C113.904 13.8665 114.691 12.7715 116.311 12.8285C117.808 12.798 118.624 13.8454 118.723 15.7615C118.704 16.3014 119.225 16.8602 119.747 16.7747C120.287 16.7936 120.759 16.3944 120.761 15.75C120.751 13.0679 119.329 10.9389 116.316 10.8953C113.199 10.8688 111.834 13.0245 111.807 16.142Z" />
      </Group>
    </Group>
  );
};

export const QuestionsSticker = { Sticker, size };
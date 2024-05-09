/* eslint-disable max-len */
import { Group, LinearGradient, Path, Skia } from "@shopify/react-native-skia";
import React from "react";

import { inflate } from "../../components";

import type { StickerProps } from "./Sticker";

const path = Skia.Path.MakeFromSVGString(
  "M166.991 209.124C166.825 209.345 166.868 209.658 167.088 209.825C167.309 209.991 167.622 209.948 167.789 209.727L166.991 209.124ZM246.16 1.36591L246.3 0.885821C246.294 0.884332 246.289 0.882924 246.284 0.881599L246.16 1.36591ZM195.39 80.3659L194.899 80.2706L194.899 80.2732L195.39 80.3659ZM167.39 273.956L166.893 273.897C166.863 274.149 167.028 274.384 167.275 274.442C167.522 274.501 167.774 274.364 167.86 274.125L167.39 273.956ZM142.262 53.2944C142.449 53.4976 142.765 53.5108 142.968 53.3239C143.172 53.1369 143.185 52.8206 142.998 52.6174L142.262 53.2944ZM39.3398 89.6459L39.8238 89.5202L39.8238 89.5201L39.3398 89.6459ZM84.5999 142.056L84.352 142.49L84.3522 142.49L84.5999 142.056ZM138.42 209.426L137.921 209.457L137.921 209.457L138.42 209.426ZM1.24218 260.938C1.00059 260.805 0.696321 260.892 0.562567 261.134C0.428813 261.375 0.51623 261.68 0.757818 261.813L1.24218 260.938ZM222.84 168.956L223.152 169.346L223.155 169.344L222.84 168.956ZM254.95 156.506L254.924 156.007L254.921 156.007L254.95 156.506ZM219.437 208.915C219.166 208.862 218.903 209.038 218.849 209.309C218.796 209.58 218.972 209.843 219.243 209.896L219.437 208.915ZM219.432 208.934C219.161 208.884 218.899 209.062 218.848 209.334C218.798 209.605 218.976 209.866 219.248 209.917L219.432 208.934ZM258.14 261.326L258.607 261.148L258.606 261.144L258.14 261.326ZM264.88 270.386L264.576 270.783L264.58 270.786L264.88 270.386ZM331.75 236.216L331.338 235.933C331.329 235.946 331.321 235.958 331.314 235.971L331.75 236.216ZM375.198 157.708C375.321 157.461 375.22 157.161 374.972 157.038C374.725 156.915 374.425 157.016 374.302 157.264L375.198 157.708ZM375.235 157.671C375.337 157.414 375.212 157.124 374.955 157.021C374.699 156.919 374.408 157.044 374.306 157.301L375.235 157.671ZM349.2 233.776L348.711 233.671C348.708 233.685 348.706 233.7 348.704 233.715L349.2 233.776ZM363.71 275.256L363.595 275.742L363.595 275.742L363.71 275.256ZM440.52 210.256L441.008 210.366L441.008 210.366L440.52 210.256ZM558.879 198.794C558.955 199.059 559.232 199.213 559.498 199.137C559.763 199.061 559.917 198.784 559.841 198.518L558.879 198.794ZM558.879 198.774C558.955 199.039 559.232 199.193 559.498 199.117C559.763 199.041 559.917 198.764 559.841 198.498L558.879 198.774ZM440.52 210.236L440.032 210.127C440.03 210.138 440.028 210.149 440.026 210.16L440.52 210.236ZM457.06 262.966L456.741 263.351L456.744 263.353L457.06 262.966ZM481.13 273.966L481.217 273.473L481.216 273.473L481.13 273.966ZM523.28 267.376L523.047 266.933L523.047 266.933L523.28 267.376ZM525.68 266.056L525.929 266.489L525.933 266.487L525.68 266.056ZM555.62 220.506L555.124 220.442L555.124 220.444L555.62 220.506ZM570.462 157.218C570.535 156.952 570.379 156.677 570.112 156.604C569.846 156.531 569.571 156.687 569.498 156.953L570.462 157.218ZM570.462 157.208C570.535 156.942 570.379 156.667 570.112 156.594C569.846 156.521 569.571 156.677 569.498 156.944L570.462 157.208ZM556.16 255.156L556.645 255.036L556.645 255.033L556.16 255.156ZM584.85 273.156L584.953 273.645L584.956 273.644L584.85 273.156ZM632.902 233.604C633.05 233.371 632.981 233.062 632.748 232.914C632.515 232.766 632.206 232.835 632.058 233.068L632.902 233.604ZM167.789 209.727C217.395 144.099 242.46 93.5811 252.447 58.6621C257.439 41.2064 258.673 27.617 257.296 17.9744C255.921 8.34986 251.915 2.51985 246.3 0.885821L246.02 1.84599C251.075 3.31696 254.954 8.64695 256.306 18.1158C257.655 27.5667 256.457 41.0042 251.485 58.3872C241.545 93.1457 216.555 143.553 166.991 209.124L167.789 209.727ZM246.284 0.881599C242.431 -0.107153 237.974 0.830605 233.321 3.62426C228.666 6.41896 223.777 11.0915 219.02 17.6563C209.506 30.7874 200.474 51.5563 194.899 80.2706L195.881 80.4612C201.436 51.8455 210.424 31.2244 219.83 18.243C224.533 11.7515 229.329 7.18723 233.835 4.48161C238.344 1.77496 242.524 0.948966 246.036 1.85021L246.284 0.881599ZM194.899 80.2732C182.415 146.451 177.564 184.004 166.893 273.897L167.886 274.015C178.556 184.128 183.404 146.601 195.881 80.4586L194.899 80.2732ZM142.998 52.6174C114.631 21.7817 85.2072 17.8838 64.5123 28.3901C43.8514 38.879 32.0647 63.6555 38.8559 89.7717L39.8238 89.5201C33.145 63.8363 44.7433 39.5477 64.965 29.2817C85.1525 19.033 114.108 22.6901 142.262 53.2944L142.998 52.6174ZM38.8559 89.7716C43.6466 108.218 57.7108 127.288 84.352 142.49L84.8477 141.622C58.3889 126.524 44.5331 107.653 39.8238 89.5202L38.8559 89.7716ZM84.3522 142.49C120.971 163.374 136.565 187.549 137.921 209.457L138.919 209.395C137.535 187.023 121.628 162.598 84.8476 141.622L84.3522 142.49ZM137.921 209.457C139.479 234.493 122.458 256.813 96.4164 268.164C70.389 279.509 35.4097 279.855 1.24218 260.938L0.757818 261.813C35.1903 280.877 70.496 280.553 96.816 269.081C123.122 257.614 140.511 234.969 138.919 209.395L137.921 209.457ZM167.86 274.125C175.662 252.452 181.769 232.446 189.803 214.729C197.828 197.031 207.754 181.676 223.152 169.346L222.527 168.566C206.966 181.026 196.957 196.531 188.892 214.316C180.836 232.081 174.698 252.179 166.919 273.787L167.86 274.125ZM223.155 169.344C232.212 162.006 243.342 157.69 254.979 157.005L254.921 156.007C243.075 156.704 231.745 161.097 222.525 168.567L223.155 169.344ZM254.976 157.005C267.65 156.336 276.603 160.251 281.727 166.166C286.851 172.081 288.204 180.059 285.561 187.663C280.286 202.845 258.932 216.738 219.437 208.915L219.243 209.896C258.968 217.764 280.993 203.857 286.506 187.991C289.258 180.072 287.856 171.714 282.483 165.511C277.11 159.309 267.825 155.326 254.924 156.007L254.976 157.005ZM404.9 98.2959C404.9 102.819 404.016 106.251 402.091 108.55C400.182 110.83 397.169 112.086 392.69 112.086V113.086C397.357 113.086 400.699 111.77 402.858 109.192C405.002 106.632 405.9 102.919 405.9 98.2959H404.9ZM392.69 112.086C388.21 112.086 384.911 110.828 382.728 108.526C380.541 106.22 379.4 102.79 379.4 98.2959H378.4C378.4 102.948 379.581 106.662 382.002 109.215C384.428 111.772 388.024 113.086 392.69 113.086V112.086ZM379.4 98.2959C379.4 93.8019 380.54 90.7898 382.696 88.886C384.866 86.9702 388.166 86.0859 392.69 86.0859V85.0859C388.068 85.0859 384.473 85.9836 382.034 88.1364C379.582 90.3012 378.4 93.644 378.4 98.2959H379.4ZM392.69 86.0859C397.217 86.0859 400.228 86.9715 402.121 88.8648C404.014 90.758 404.9 93.7691 404.9 98.2959H405.9C405.9 93.6768 405.003 90.3329 402.828 88.1576C400.653 85.9824 397.309 85.0859 392.69 85.0859V86.0859ZM219.248 209.917C227.597 211.483 233.554 213.974 237.949 217.181C242.34 220.385 245.203 224.327 247.333 228.843C249.468 233.371 250.861 238.465 252.32 243.983C253.775 249.489 255.292 255.404 257.674 261.508L258.606 261.144C256.248 255.103 254.745 249.246 253.286 243.727C251.831 238.221 250.417 233.04 248.237 228.416C246.052 223.781 243.092 219.696 238.539 216.373C233.991 213.055 227.883 210.519 219.432 208.934L219.248 209.917ZM257.672 261.503C259.067 265.178 261.457 268.391 264.576 270.783L265.184 269.989C262.213 267.711 259.936 264.649 258.607 261.148L257.672 261.503ZM264.58 270.786C269.714 274.636 275.859 275.597 282.314 274.597C288.76 273.599 295.539 270.643 302.003 266.626C314.923 258.595 326.705 246.243 332.186 236.46L331.314 235.971C325.925 245.588 314.272 257.822 301.475 265.776C295.079 269.751 288.429 272.638 282.161 273.609C275.9 274.579 270.046 273.636 265.18 269.986L264.58 270.786ZM332.162 236.499C349.037 211.882 362.086 184.122 375.198 157.708L374.302 157.264C361.174 183.71 348.163 211.39 331.338 235.933L332.162 236.499ZM374.306 157.301C361.043 190.587 352.507 216.048 348.711 233.671L349.689 233.881C353.466 216.344 361.977 190.945 375.235 157.671L374.306 157.301ZM348.704 233.715C347.064 247.139 347.914 256.949 350.609 263.756C353.315 270.591 357.882 274.392 363.595 275.742L363.825 274.769C358.458 273.5 354.135 269.946 351.539 263.388C348.931 256.803 348.066 247.183 349.696 233.837L348.704 233.715ZM363.595 275.742C369.842 277.218 377.378 275.746 385.228 272.296C393.088 268.842 401.322 263.379 408.996 256.785C424.327 243.612 437.524 225.835 441.008 210.366L440.032 210.146C436.616 225.317 423.598 242.92 408.344 256.027C400.726 262.573 392.574 267.975 384.825 271.381C377.066 274.791 369.768 276.173 363.825 274.769L363.595 275.742ZM441.008 210.366C447.58 181.15 472.168 161.114 497.564 156.964C510.255 154.891 523.126 156.788 534.043 163.466C544.957 170.142 553.961 181.622 558.879 198.794L559.841 198.518C554.864 181.14 545.721 169.437 534.565 162.613C523.414 155.792 510.294 153.871 497.403 155.977C471.637 160.188 446.701 180.502 440.032 210.146L441.008 210.366ZM559.841 198.498C554.864 181.12 545.711 169.417 534.542 162.593C523.379 155.772 510.244 153.851 497.343 155.957C471.557 160.168 446.62 180.482 440.032 210.127L441.008 210.344C447.5 181.13 472.088 161.094 497.504 156.944C510.205 154.871 523.091 156.768 534.021 163.446C544.947 170.122 553.961 181.602 558.879 198.774L559.841 198.498ZM440.026 210.16C436.243 234.747 443.766 252.592 456.741 263.351L457.379 262.581C444.714 252.079 437.277 234.605 441.014 210.312L440.026 210.16ZM456.744 263.353C463.761 269.072 472.128 272.895 481.044 274.458L481.216 273.473C472.469 271.94 464.26 268.188 457.376 262.578L456.744 263.353ZM481.043 274.458C495.545 277.008 510.482 274.672 523.513 267.818L523.047 266.933C510.212 273.684 495.5 275.984 481.217 273.473L481.043 274.458ZM523.512 267.819C524.318 267.396 525.124 266.952 525.929 266.489L525.431 265.622C524.636 266.079 523.842 266.516 523.047 266.933L523.512 267.819ZM525.933 266.487C534.151 261.662 541.147 255.011 546.381 247.048L545.546 246.499C540.396 254.333 533.512 260.878 525.427 265.625L525.933 266.487ZM546.381 247.048C551.615 239.085 554.946 230.024 556.116 220.567L555.124 220.444C553.973 229.749 550.695 238.664 545.546 246.499L546.381 247.048ZM556.116 220.569C558.97 198.302 565.909 173.799 570.462 157.218L569.498 156.953C564.951 173.513 557.989 198.09 555.124 220.442L556.116 220.569ZM569.498 156.944C565.885 170.111 560.756 188.051 557.366 206.001C553.98 223.933 552.311 241.96 555.675 255.278L556.645 255.033C553.338 241.942 554.965 224.103 558.349 206.186C561.729 188.286 566.845 170.391 570.462 157.208L569.498 156.944ZM555.675 255.276C557.219 261.537 561.136 266.954 566.599 270.381L567.131 269.534C561.887 266.244 558.128 261.046 556.645 255.036L555.675 255.276ZM566.599 270.381C572.062 273.809 578.644 274.979 584.953 273.645L584.746 272.667C578.691 273.947 572.374 272.824 567.131 269.534L566.599 270.381ZM584.956 273.644C594.035 271.67 603.19 266.112 611.477 258.842C619.769 251.567 627.225 242.55 632.902 233.604L632.058 233.068C626.426 241.942 619.031 250.885 610.818 258.09C602.6 265.3 593.595 270.742 584.744 272.667L584.956 273.644Z"
)!;
const strokeWidth = 32;
const bounds = inflate(path.computeTightBounds(), strokeWidth / 2);
const size = {
  width: bounds.width,
  height: bounds.height,
};

const Sticker = ({ matrix }: StickerProps) => {
  return (
    <Group matrix={matrix}>
      <LinearGradient
        start={path.getPoint(0)}
        end={path.getLastPt()}
        colors={[
          "#3CBCEB",
          "#5F96E7",
          "#816FE3",
          "#9F5EE2",
          "#BD4CE0",
          "#DE589F",
          "#FF645E",
          "#FDA859",
          "#FAEC54",
          "#9EE671",
          "#67E282",
          "#3FCEBC",
        ]}
      />
      <Path
        path={path}
        strokeWidth={strokeWidth}
        style="stroke"
        strokeCap="round"
        strokeJoin="round"
      />
    </Group>
  );
};

export const SkiaSticker = { Sticker, size };
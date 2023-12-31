/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        // PRIMARY GREEN
        "grn-p":  '#046D0B',
        "grn-p-one":  '#023706',
        "grn-p-two":  '#024107',
        "grn-p-three":  '#034c08',
        "grn-p-four": '#035709',
        "grn-p-five": '#04620a',
        "grn-p-six": '#1d7c23',
        "grn-p-seven": '#368a3c',
        "grn-p-eight": '#4f9954',
        "grn-p-nine": '#68a76d',
        "grn-p-ten": '#82b685',

        //  ARMY GREEN
        "g-ag":  '#4E6A15',
        "g-ag1":  '#384C0F',
        "g-ag2":  '#6F981E',
        "g-ag3":  '#6B6A15',
        "g-ag4":  '#226b15',
        "g-ag5":  '#d6e592',
        "g-ag6":  '#d0e17b',
        "g-ag7":  '#bdda57',
        "g-ag8":  '#dfe811',
        "g-ag9":  '#28713e',
        "g-ag10":  '#727D0C',
        "g-ag10":  '#deffad',
        "g-ag10":  '#727D0C',
        "g-ag10":  '#727D0C',
        "g-ag10":  '#727D0C',
        "g-ag10":  '#727D0C',

        //  AQUA
        "g-aq":  '#33ffbb',
        "g-aq1":  '#16f4d0',
        "g-aq2":  '#419d78',
        "g-aq3":  '#85c1a9',
        "g-aq4":  '#b4f3a5',
        "g-aq5":  '#254d32',
        "g-aq6":  '#1e555c',
        "g-aq7":  '#3a7968',
        "g-aq8":  '#345457',
        "g-aq9":  '#2d3047',
        "g-aq9":  '#7bc576',
        "g-aq9":  '#197c5d',
        "g-aq9":  '#a0d9d2',
        "g-aq9":  '#569394',
        "g-aq9":  '#2d3047',

        //  YELLOW
        "yellow":'#e6f200',
        "yellow1":'#f2ff00',
        "yellow2":'#ffe500',
        "yellow3":'#d7e307',
        "yellow4":'#cfd200',
        "yellow5":'#d9da71',
        "yellow6":'#ffe100',
        "yellow7":'#ffff51',
        "yellow8":'#d9f924',
        "yellow9":'#b1a30b',
        "yellow10":'#ffaa17',

        //  BLUE
        "blu1":'#74a7c6',
        "blu2":'#15f4ee',
        "blu3":'#457a9a',
        "blu4":'#3884FF',
        "blu5":'#0C69FF',
        "blu6":'#005EF4',
        "blu7":'#5596FF',
        "blu8":'#71A7FF',
        "blu9":'#203049',
        "blu10":'#7FB0FF',
        "blu11":'#6888C5',
        "blu12":'#38C9FF',
        "blu13":'#99C0FF',
        "blu14":'#B8D3FF',
        "blu15":'#38FFF1',
        "blu16":'#7F95B8',

        //  PINK
        "pink":'#FF6DDD',
        "pink1":'#FF49D4',
        "pink2":'#FF24CC',
        "pink3":'#FF00C3',
        "pink4":'#ED12BA',
        "pink5":'#DB24B0',
        "pink6":'#FF006C',
        "pink7":'#a40686',
        "pink8":'#D71B84',
        "pink9":'#A9358E',
        "pink10":'#FF0040',

        //  PURPLE
        "purp":'#E2A4FF',
        "purp1":'#8D5BA4',
        "purp2":'#D16DFF',
        "purp3":'#BA24FF',
        "purp4":'#AE00FF',
        "purp5":'#9500DB',
        "purp6":'#8900C8',
        "purp7":'#640092',
        "purp8":'#9E2ED1',
        "purp9":'#FF00F8',
        "purp10":'#BA00DB',
        "purp11":'#A844D0',
        "purp12":'#c300ff',
        "purp13":'#c117ff',
        "purp14":'DF7EFF',
        "purp15":'#560771',
        "purp16":'#7B2C9F',
        "purp17":'#570080',
        "purp18":'#3E005B',
        "purp19":'#66128d',
        "purp20":'250037',

        //  RED
        "rd":'#f00314',
        "rd1":'#f52100',
        "rd2":'#fe0000',
        "rd3":'#d5412a',
        "rd4":'#ff3503',
        "rd5":'#e5383b',
        "rd6":'#4d0000',
        "rd7":'#971b1b',
        "rd8":'#e50000',
        "rd9":'#510017',
        "rd10":'#ce050f',


        //  TEXT PALETTES
        "text-black":  '#000000',
        "text-white":  '#FFFFFF',

        "text-grn":  '#013220',
        "text-grn1":  '#197c5d',
        "text-pink-d":  '#491768',
        "text-maroon":  '#290000',
        "text-grey":  '#949599',
        "text-lightblue":  '#d6f0fe',
        "text-lightblue1":  '#a5d8ff',
        "text-pink-l":  '#fadadd',
        "text-blu-l":  '#d6f0fe',

        "text-hue1":  '#8d2e01',
        "text-hue2":  '#a32d85',
        "text-hue3":  '#002400',
        "text-hue4":  '#0a0319',
        "text-hue5":  '#c1cad7',
        "text-hue6":  '#fbf8ef',
        "text-hue7":  '#a8c276',
        "text-hue8":  '#013220',
        "text-hue9":  '#000852',
        "text-hue10":  '#4c4d48',
        "text-hue11":  '#ff4d1c',
        "text-hue12":  '#4c4d48',
        "text-hue13":  '#2b381a',


        //  BACKGROUND PALETTES
        "bg-white":'#eff2f1',
        "bg-white":'#eff2f1',

        "bg-light":'#fffaf4',
        "bg-light1":'#e5f0d0',
        "bg-light2":'#c4e4cd',
        "bg-light3":'#e8f0f3',
        "bg-light4":'#e2e3e5',
        "bg-light5":'#d3e8a3',

        "bg-grey":'#e2e3e5',
        "bg-grey-two":'#e5f4ed',

        "bg-cream-l1":'#fdf4e3',
        "bg-cream-l2":'#ffffd1',
        "bg-cream-l3":'#fbf7ae',
        "bg-cream-l4":'#fbe3b3',
        "bg-cream-l5":'#dad7ae',

        "bg-pink1":'#FF6D7E',
        "bg-pink2":'#FFC0C7',
        "bg-pink3":'#FF808F',
        "bg-pink4":'#FF7661',
        "bg-pink5":'#FF374F',
        "bg-pink5":'#ff4747',
        "bg-pink5":'#ff96be',

        "bg-grn1":'#d3e8a3',
        "bg-grn2":'#aadd6d',
        "bg-grn3":'#568e14',
        "bg-grn4":'#a5cf4f',
        "bg-grn5":'#72c156',
        "bg-grn6":'#4e6a15',
        "bg-grn7":'#165a07',
        "bg-grn8":'#013220',
        "bg-grn9":'#007932',
        "bg-grn10":'#043927',
        "bg-grn11":'#c4f1be',
        "bg-grn12":'#49b866',
        "bg-grn13":'#119462',
        "bg-grn14":'#81bf8c',
        "bg-grn15":'#61FF93',
        "bg-grn16":'#98FF61',
        "bg-grn17":'#7CFC00',

        "bg-hue":'#ef4050',
        "bg-hue1":'#1e9577',
        "bg-hue2":'#888ba1',
        "bg-hue3":'#f0cf64',
        "bg-hue4":'#9a7f6c',
        "bg-hue5":'#457a9a',
        "bg-hue6":'#e9a5ca',
        "bg-hue7":'#a4b17b',
        "bg-hue8":'#b5b0b8',
        "bg-hue9":'#74a7c6',
        "bg-hue10":'#f9baaa',

      }
    },
  },
  plugins: [
    "@tailwindcss/forms",
  ],
}


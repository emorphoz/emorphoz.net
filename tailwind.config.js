module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      "colors": {
        "epurple": "#61066d",
        "ewhite": "#ffffff",
        "epink": "#e8088f",
        "eblue": "#25c6e5",
        "edark": "#2d054a"
       },
       "fontSize": {
        "5xs": "0.625rem",
        "4xs": "0.9375rem",
        "3xs": "1.0625rem",
        "2xs": "1.25rem",
        "xs": "1.4375rem",
        "sm": "1.5rem",
        "base": "1.75rem",
        "lg": "2.8125rem",
        "xl": "4.375rem"
       },
       "fontFamily": {
        "audiowide": "Audiowide",
        "trap-black": "Trap-black",
        "trap-bold": "Trap-bold",
        "trap-extrabold": "Trap-extrabold",
        "trap-light": "Trap-light",
        "trap-medium": "Trap-medium",
        "trap-regular": "Trap-regular",
        "trap-semibold": "Trap-semibold",
       },
       "boxShadow": {
        "whiteBlur": "0px 0px 56px 0px rgba(255,255,255,1)",
        "pinkBlur": "0px 3px 11px 0px rgba(189,0,255,1)",
        "whiteStrongBlur": "0px 0px 19px 0px rgba(255,255,255,1)",
        "turquoizeBlur": "0px 4px 80px 0px rgba(37,198,229,1)",
        "blueBlur": "0px 0px 22px 0px rgba(37,198,229,1)"
       },
       "screens": {
        phone: '274px',
        // tablette: '425px',
        desktop: '1024px'
      },
       "borderRadius": {
        "none": "0",
        "xs": "0.24945177137851715rem",
        "sm": "0.29775270819664rem",
        "default": "0.3037029802799225rem",
        "lg": "0.3121698498725891rem",
        "xl": "0.3125rem",
        "2xl": "0.3779354393482208rem",
        "3xl": "0.3783373534679413rem",
        "4xl": "0.4375rem",
        "5xl": "0.47268909215927124rem",
        "6xl": "0.5213155746459961rem",
        "7xl": "0.5291666984558105rem",
        "8xl": "0.5625rem",
        "9xl": "0.5944483280181885rem",
        "10xl": "0.6121688485145569rem",
        "11xl": "0.6134633421897888rem",
        "12xl": "0.625rem",
        "13xl": "0.6594708561897278rem",
        "14xl": "0.6721771359443665rem",
        "15xl": "0.7301322817802429rem",
        "16xl": "0.7505386471748352rem",
        "17xl": "0.7557753920555115rem",
        "18xl": "0.7567785978317261rem",
        "19xl": "0.7598802447319031rem",
        "20xl": "0.7629817128181458rem",
        "21xl": "0.8125rem",
        "22xl": "0.8126066327095032rem",
        "23xl": "0.8138637542724609rem",
        "24xl": "0.8425531983375549rem",
        "25xl": "0.9135088920593262rem",
        "26xl": "0.9245817065238953rem",
        "27xl": "0.9375rem",
        "28xl": "1rem",
        "29xl": "1.0566648244857788rem",
        "30xl": "1.0587738752365112rem",
        "31xl": "1.083414912223816rem",
        "32xl": "1.0975878238677979rem",
        "33xl": "1.25rem",
        "34xl": "1.2802306413650513rem",
        "35xl": "1.3414644002914429rem",
        "36xl": "1.3417432308197021rem",
        "37xl": "1.4560184478759766rem",
        "38xl": "1.52651846408844rem",
        "39xl": "1.5625rem",
        "40xl": "1.5740468502044678rem",
        "41xl": "1.6022595167160034rem",
        "42xl": "1.8125rem",
        "43xl": "1.8271000385284424rem",
        "44xl": "1.8277685642242432rem",
        "45xl": "1.875rem",
        "46xl": "1.96875rem",
        "47xl": "2rem",
        "48xl": "2.2734375rem",
        "49xl": "2.4439823627471924rem",
        "50xl": "2.6875rem",
        "51xl": "2.75rem",
        "52xl": "3rem",
        "53xl": "3.03125rem",
        "54xl": "3.0625rem",
        "55xl": "3.138631820678711rem",
        "56xl": "3.375rem",
        "57xl": "3.5rem",
        "58xl": "4.125rem",
        "59xl": "4.398860931396484rem",
        "60xl": "4.826432228088379rem",
        "61xl": "5.375rem",
        "62xl": "5.875rem",
        "63xl": "6rem",
        "64xl": "6.0625rem",
        "full": "9999px"
       }
 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
import {createGlobalStyle} from 'styled-components'

export const IconStyle = createGlobalStyle`
  @font-face {
      font-family: "iconfont";
      src: url('./iconfont.eot?t=1542817315259'); /* IE9*/
      src: url('./iconfont.eot?t=1542817315259#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAYUAAsAAAAACNgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8hEpDY21hcAAAAYAAAABqAAABstKgnbpnbHlmAAAB7AAAAh8AAAJ4q1BmKmhlYWQAAAQMAAAALwAAADYTVpJDaGhlYQAABDwAAAAcAAAAJAfeA4ZobXR4AAAEWAAAAA4AAAAUFAAAAGxvY2EAAARoAAAADAAAAAwA+AGybWF4cAAABHQAAAAfAAAAIAETAFluYW1lAAAElAAAAUUAAAJtPlT+fXBvc3QAAAXcAAAANwAAAEgVR/x6eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBye8b0IZG7438AQw9zA0AAUZgTJAQDkdgxEeJztkcENgDAIRR9tNaYxnjqGZ8+u0D08OXTTLSotHhzCTx6BH8IBgAnwyq4EkBuh61JXhu+Jww+c2kcWHK5sJZWj5tbgW78SnbPoW53tkplf68jn24V+PWPUydCLUQ6jf6dmA3kAYwEXvwAAeJw1jt9O1EAUxs/pdGa6qFtgp61s2I27ddutid263W0N6v5JWKJgIiGRGPyD0Si4cqGRKxKSTQwJ0Ut5AngBbjDcSCCBF+CK1+DGKyi2i8xMzpzzO1/yfSABXPRIfGEQCgDI86ilkde5UW9gWLMq/VHoRuhiQjTpbM71yM56r7d3TsfP+rV1iaQ/c+5ye32HtHq9Fj3fe7n5/f/fulpA4ndA9kkbtMSPYgPrLtrpxNioBiHq1aAWwzAeY+gi+R2dWg453Ng4lOXDjeZXF9WBrDjblLfX1rYJSSpH1f3SvBT8OiJ3rOh0QGTx79q2fKWC+Mix90XsDcBBhdtQASiYdoGb6GeIZZuMExr41RyadZOZRatea2LNLPI4iCZ0vxo8Qmn/4+PopPMB1XfjnymTKO/iidf4dh8LbTfsvmmNVebLuVvZknd8TCBysDlomZnogI4uH1UCz5lNX58qvaCjI9potZSPM0n9TKuEwE14ClASzLYYT2MewwYaefQbSeMiWkUV+33C9URypUpeYNkuXjKDM6FXQwxq5MniwuoWS7EBkZJ/LDmd3NhDSZFuaNG+IpQVOjvtvb/r+Dwzs2BPWyl6TaSc544/PVKgw+pk595i7dWS2OWqUHBemWQ527UVlskwygrlobSUk7kYknBCUVbKP2e8KUMoir7VtdsGE8OUZscd/5PXmVKHWHHkmf9678GuIlSOb7kA+AdzfoUqAHicY2BkYGAA4tpFX9Ti+W2+MnCzMIDADenlygj6fwMLA3MDkMvBwAQSBQAbEgl0AHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAAA4AHYAwAE8eJxjYGRgYGBl8GVgYQABJiDmAkIGhv9gPgMAELIBbQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYGluCAzjystMS89JTErMy+dyTGRtSIztSqTgQEAhlAIzgA=') format('woff'),
      url('./iconfont.ttf?t=1542817315259') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('./iconfont.svg?t=1542817315259#iconfont') format('svg'); /* iOS 4.1- */
    }
  
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
    .icon-spin:before { content: "\\e851"; }
    .icon-fangdajing:before { content: "\\e614"; }
    .icon-Aa:before { content: "\\e636"; }
    .icon-xiezi:before { content: "\\e60e"; }
`

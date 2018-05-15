/*
 Temperature conversation NPM
 * celsius to K and F
 * Kelvin to C and F
 * Fahrenheit to C and K
 */

const celsiusToKelvin = (temp)=>{
  return (temp + 273.15) + ' K'
}
const celsiusToFahrenheit = (temp)=>{
    return ((temp * 9/5) + 32) + ' F'
  }

  const kelvinToFahrenheit = (temp)=>{
    return ((temp - 273.15) * 9/5 + 32) + ' F'
  }
  const kelvinToCelsuis = (temp)=>{
    return (temp - 273.15) + ' C'
  }

  const fahrenheitToCelsuis = (temp)=>{
    return ((temp - 32) * 5/9 ) + ' C'
  }
  const fahrenheitToKelvin = (temp)=> {
    return ((temp - 32) * 5/9 + 273.15) + ' K'
  }

module.exports = {
    celsiusToKelvin,
    celsiusToFahrenheit,
    kelvinToFahrenheit,
    kelvinToCelsuis,
    fahrenheitToCelsuis,
    fahrenheitToKelvin

}
/*
 Temperature conversation NPM
 * celsius to K and F
 * Kelvin to C and F
 * Fahrenheit to C and K
 */

const celsiusToKelvin = (temp)=>{
  const value = (temp + 273.15).toFixed(2);
  return value + ' K'
}
const celsiusToFahrenheit = (temp)=>{
  const value = ((temp * 9/5) + 32).toFixed(2);
    return value + ' F'
  }

  const kelvinToFahrenheit = (temp)=>{
    const value = ((temp - 273.15) * 9/5 + 32).toFixed(2);
    return value + ' F'
  }
  const kelvinToCelsuis = (temp)=>{
    const value = (temp - 273.15).toFixed(2);
    return value + ' C'
  }

  const fahrenheitToCelsuis = (temp)=>{
    const value = ((temp - 32) * 5/9 ).toFixed(2);
    return value + ' C'
  }
  const fahrenheitToKelvin = (temp)=> {
    const value = ((temp - 32) * 5/9 + 273.15).toFixed(2);
    return value + ' K'
  }

module.exports = {
    celsiusToKelvin,
    celsiusToFahrenheit,
    kelvinToFahrenheit,
    kelvinToCelsuis,
    fahrenheitToCelsuis,
    fahrenheitToKelvin

}
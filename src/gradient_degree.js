export const makeGradientString = (colors, degrees) => {
    const colorString = colors.reduce((acc, curentValue) => {
      return `${acc}, ${curentValue}`
    })
    return `linear-gradient(${degrees}deg, ${colorString})`
  };
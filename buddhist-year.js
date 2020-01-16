/**
 * Author akexorcist
 * 
 * https://gist.github.com/akexorcist/eb5e8266670721c191a62851e3d8bb3d
 */

module.exports = {
    toBuddhistYear: (moment, format) => {
      var christianYear = moment.format('YYYY')
      var buddhishYear = (parseInt(christianYear) + 543).toString()
      return moment
        .format(format.replace('YYYY', buddhishYear).replace('YY', buddhishYear.substring(2, 4)))
        .replace(christianYear, buddhishYear)
    }
  }
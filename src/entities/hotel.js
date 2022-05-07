class Hotel{

  constructor(name, classification, regular_daily_rate, rewards_daily_rate){
      this.name = name;
      this.classification = classification;
      this.regular_daily_rate = regular_daily_rate;
      this.rewards_daily_rate = rewards_daily_rate;
  }

  getName(){
    return this.name
  }

  getClassification(){
    return this.classification
  }

  calculate_price_days(type_of_client, array_of_days) { 
    let sum = 0

    if (type_of_client === "Regular") {
      for( let i = 0; i < array_of_days.length; i++){
        const date = new Date(array_of_days[i])
        sum = sum + this.regular_daily_rate[date.getDay()]
      }
    } else {
      for( let i = 0; i < array_of_days.length; i++){
        const date = new Date(array_of_days[i])
        sum = sum + this.rewards_daily_rate[date.getDay()]
      }
    }

    return sum
  }

}

module.exports = Hotel
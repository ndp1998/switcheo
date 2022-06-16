// Not sure if this is what you are asking for, but I assume 2 classes need to be created.
class Price {
    constructor (pair, buy, sell, mid, quote) {
        this.pair = pair;
        this.buy = buy;
        this.sell = sell;
        this.mid = mid;
        this.quote = quote;
    }
}

class DataSource {
    getPrices() {
        let url = 'https://static.ngnrs.io/test/prices'
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            data.data.prices.forEach(element => {
                let price = new Price(element.pair, element.buy, element.sell, (element.buy + element.sell)/2, element.pair.slice(3,))
                console.log(`Mid price for ${ price.pair } is ${ price.mid } ${ price.quote }.`);
            });
        })
        .catch(err => {
            console.log("Something went wrong", err)
        })
    }
}

ds = new DataSource()
ds.getPrices()

    

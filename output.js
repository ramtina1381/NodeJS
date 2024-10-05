const ProgressBar = require("progress")
const chalk = require("chalk")

const bar = new ProgressBar("Downloading [:bar] :rate/bps :percent :etas", {
    total: 20
})

// total is the total number of = in the bar. will determine how long the bar should be. 

const timer = setInterval(() => {
    bar.tick()
    if(bar.complete){
        clearInterval(timer)
    }
}, 100)

console.log(chalk.green("Here is nodejs tutorial!"))

// so what happens is, everytime the interval is called, one = will be completed in our bar, 
// the 100 in the setInterval will call our progressBar every 100ms and it will go up to 20 = .

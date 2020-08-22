function lightOff () {
    selected = OnLights.shift()
    led.unplot(selected % 5, selected / 5)
    Offlights.push(selected)
    if (OnLights.length == 0) {
        OnOff = true
        basic.pause(100)
        for (let indexx = 0; indexx <= 4; indexx++) {
            for (let indexy = 0; indexy <= 4; indexy++) {
                led.plot(indexx, indexy)
            }
        }
        basic.pause(100)
        basic.clearScreen()
        led.enable(false)
    }
}
input.onButtonPressed(Button.A, function () {
    led.enable(true)
    Offlights = []
    for (let index = 0; index <= 24; index++) {
        Offlights.push(index)
    }
    OnLights = []
    OnOff = true
})
function lightUp () {
    selected = randint(0, Offlights.length) - 1
    selected = Offlights.removeAt(selected)
    led.plot(selected % 5, selected / 5)
    OnLights.push(selected)
    if (Offlights.length == 0) {
        OnOff = false
        basic.clearScreen()
        basic.pause(100)
        for (let indexx = 0; indexx <= 4; indexx++) {
            for (let indexy = 0; indexy <= 4; indexy++) {
                led.plot(indexx, indexy)
            }
        }
    basic.pause(100)
    //led.enable(false)
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.stopAnimation()
    basic.showString("reset")
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    OnOff = true
    OnLights = []
    for (let index2 = 0; index2 <= 24; index2++) {
        Offlights.pop()
    }
/*  basic.pause(100)
    for (let indexx2 = 0; indexx2 <= 4; indexx2++) {
        for (let indexy2 = 0; indexy2 <= 4; indexy2++) {
            led.plot(indexx2, indexy2)
        }
    }
    basic.clearScreen() */
    Offlights = []
})
let OnOff = true
let Offlights: number[] = []
let OnLights: number[] = []
let selected = 0
led.enable(false)
basic.forever(function () {
    if (OnOff) {
        lightUp()
    } else {
        lightOff()
    }
    basic.pause(500)
})

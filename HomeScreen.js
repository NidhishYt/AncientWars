class HomeScreen {
    constructor () {
        this.button = createButton('Start')
    }
    hide(){
        this.button.hide()
    }
    enter(){
        this.button.hide()
    }
    display(){
    this.button.position(displayWidth/2+30,displayHeight/2)
    this.button.mousePressed(()=>{
        this.button.hide()
        MainScreen.Update()   
    })
    }
}
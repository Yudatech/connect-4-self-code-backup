class Board extends Base {
    constructor() {
        super();
        this.gameField = [];
        for (let i = 0; i < 7; i++) {
            this.gameField.push([]);
            for(let j=0; j<6;j++){
                this.gameField[i].push(-1);            
            }
        }
    }

    render(el) {
        super.render(el);
    }

    scale() {
        let orgW = 1050, orgH = 900;
        let w = $('.game-div').width();
        let h = $(window).height();
        // Adjust h for headers, margins etc
        h -= $('#mainNav').outerHeight() + 50;
        // w -= 20 * 2;
        // This scaling would fit to width
        let wScale = w / orgW;
        // This scaling would fit to height
        let hScale = h / orgH;
        // This scaling would fit both width and height
        let scaling = Math.min(wScale, hScale);
        // Apply scaling
        $('.board').css('transform', `scale(${scaling})`);
        $('.board').show();
        // Set the holder to the scaled width and height
        $('.board-holder').width(orgW * scaling);
        $('.board-holder').height(orgH * scaling);
    }

    makeMove() {

    }

    checkIfWin() {

    }
}
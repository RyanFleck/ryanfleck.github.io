'use strict';

/*
 * Derived from the platforming example from Eloquent Javascript 3
 */

const scale = 30;

console.log('%cmain.js loaded.','color: green');

class Vec {
    constructor(x, y) {
        this.x = x; this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }
}

const simpleLevelPlan = `
......................
..#................#..
..#..........o...=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class Level{
    constructor( levelPlan ) {
        const rows = levelPlan.trim().split('\n').map(l => [...l]); // Hm, spread syntax.
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];

        /*
         * map() returns the object and indice.
         *  Here, this is used to set the co-ordinates of some objects in the 2D array.
         */
        this.rows = rows.map((row, y)=>{
            return row.map((ch, x) => {
                const type = levelChars[ch];
                if(typeof type == 'string') return type;
                this.startActors.push(type.create(new Vec(x,y), ch));
                return 'empty';
            });
        });
    }
}
class State{
    constructor(level, actors, status){
        this.level = level;
        this.actors = actors;
        this.status = status;
    }
    static start(level) {
        return new State(level, level.startActors, 'playing');
    }
    get player() {
        return this.actors.find(a => a.type === 'player');
    }
}
class Player{
    constructor(pos, speed){
        this.pos = pos;
        this.speed = speed;
    }

    get type() {return 'player';}

    static create(pos) {
        return new Player(pos.plus(new Vec(0,-0.5)),new Vec(0,0));
    }
}

// Use prototype when you want a common variable in a class, but don't want to 
Player.prototype.size = new Vec(0.8, 1.5);

class Coin{
    constructor(pos, basePos, wobble){
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
    }
    get type(){return 'coin';}
    static create(pos){
        const basePos = pos.plus(new Vec(0.2, 0.1));
        return new Coin(basePos, basePos, Math.random()* Math.PI * 2);
    }
}

Coin.prototype.size = new Vec(0.6, 0.6);

class Lava{
    constructor( pos, speed, reset ){
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }
    get type() { return 'lava'; }

    static create(pos, ch) {
        if(ch === '='){
            return new Lava(pos, new Vec(2, 0));
        } else if (ch === '|') {
            return new Lava(pos, new Vec(0, 2));
        } else if (ch === 'v'){
            return new Lava(pos, new Vec(0,3), pos);
        }
    }
}

Lava.prototype.size = new Vec(1,1);

const levelChars = {
    '.': 'empty', '#': 'wall', '+': 'lava',
    '@': Player, 'o': Coin,
    '=': Lava, '|': Lava, 'v': Lava
};


/*
 *  At this point, a simple level can be instantiated with the following: 
 *   let simpleLevel = new Level(simpleLevelPlan);
 *   console.log(`${simpleLevel.width} by ${simpleLevel.height}`);
 */

function drawGrid(level){
    return elt('table',
        {
            class: 'background',
            style: `width: ${level.width * scale}px`,
        },
        ...level.rows.map(row => elt('tr',
            {
                style: `height: ${scale}px`,
            },
            ...row.map(type => elt('td', {class: type}))
        ))
    );
}

function elt(name, attrs, ...children){
    const domObj = document.createElement(name);
    for(let attr of Object.keys(attrs)){
        domObj.setAttribute(attr, attrs[attr]);
    }
    for(let child of children){
        domObj.appendChild(child);
    }
    return domObj;
}

class DOMDisplay {
    constructor(parent, level){
        this.dom = elt('div', {class:'game'}, drawGrid(level));
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }

    clear() { this.dom.remove(); }
}

function drawActors(actors) {
    return elt('div', {}, ...actors.map(actor => {
        const rect = elt('div', {class: `actor ${actor.type}`});
        rect.style.width = `${actor.size.x * scale}px`;
        rect.style.height = `${actor.size.y * scale}px`;
        rect.style.left = `${actor.pos.x * scale}px`;
        rect.style.top = `${actor.pos.y * scale}px`;
        return rect;
    }));
}

DOMDisplay.prototype.syncState = function(state) {
    if (this.actorLayer) this.actorLayer.remove();
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
    this.dom.className = `game ${state.status}`;
    this.scrollPlayerIntoView(state);
};

DOMDisplay.prototype.scrollPlayerIntoView = function(state) {
    const width = this.dom.clientWidth;
    const height = this.dom.clientHeight;
    const margin = width/3;

    const left = this.dom.scrollLeft, right = left + width;
    const top = this.dom.scrollTop, bottom = top + height;

    const player = state.player;
    const center = player.pos.plus(player.size.times(0.5)).times(scale);

    if (center.x < left + margin) {
        this.dom.scrollLeft = center.x - margin;
    } else if (center.x > right - margin) {
        this.dom.scrollLeft = center.x + margin - width;
    }
    if (center.y < top + margin) {
        this.dom.scrollTop = center.y - margin;
    } else if (center.y > bottom - margin) {
        this.dom.scrollTop = center.y + margin - height;
    }
};

/* 
 * At this point, a simple level can be instantiated with the following:
 *   let simpleLevel = new Level(simpleLevelPlan);
 *   let display = new DOMDisplay(document.body, simpleLevel);
 *   display.syncState(State.start(simpleLevel));
 */


Level.prototype.touches = function(pos, size, type){
    const xStart = Math.floor(pox.x);
    const xEnd = Math.ceil(pos.x + size.x);
    const yStart = Math.floor(pos.y);
    const yEnd = Math.ceil(pos.y + size.y);

    for( let y = yStart; y < yEnd; y++ ){
        for( let x = xStart; x < xEnd; x++ ){
            const isOutside = x < 0 || x >= this.width || y < 0 || y >= this.height;
            const here = isOutside ? 'wall' : this.rows[y][x];
            if(here == type) return true;
        }
    }
};

function overlap(actor1, actor2) {
    return actor1.pos.x + actor1.size.x > actor2.pos.x &&
           actor1.pos.x < actor2.pos.x + actor2.size.x &&
           actor1.pos.y + actor1.size.y > actor2.pos.y &&
           actor1.pos.y < actor2.pos.y + actor2.size.y;
}

// LEFT OFF HERE

Lava.prototype.collide = function(state) {
    return new State(state.level, state.actors, 'lost');
};

Coin.prototype.collide = function(state) {
    let filtered = state.actors.filter(a => a != this);
    let status = state.status;
    if (!filtered.some(a => a.type == 'coin')) status = 'won';
    return new State(state.level, filtered, status);
};

State.prototype.update = function(time, keys){
    const actors = this.actors.map(actor => actor.update(time, this, keys));
    const newState = new State(this.level, actors, this.status);

    if (newState.status != 'playing') return newState;

    const player = newState.player;
    if (this.level.touches(player.pos, player.size, 'lava')){
        return new State(this.level, actors, 'lost');
    }

    for (let actor of actors){
        if(actor != player && overlap(actor, player)){
            newState = actor.collide(newState); 
        }
    }
    return newState;
};

// LEFT OFF HERE

Lava.prototype.update = function(time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, 'wall')) {
        return new Lava(newPos, this.speed, this.reset);
    } else if (this.reset) {
        return new Lava(this.reset, this.speed, this.reset);
    } else {
        return new Lava(this.pos, this.speed.times(-1));
    }
};

const wobbleSpeed = 8, wobbleDist = 0.07;

Coin.prototype.update = function(time) {
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;
    return new Coin(this.basePos.plus(new Vec(0, wobblePos)),
        this.basePos, wobble);
};



let simpleLevel = new Level(simpleLevelPlan);
let display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(simpleLevel));




/*
// Animation in JS:
let a = 0;
function frameAction(){
    console.log(`Frame ${a++}:`);
    // Dostuff:

    // Render next frame:
    requestAnimationFrame(frameAction);
}
requestAnimationFrame(frameAction);
*/
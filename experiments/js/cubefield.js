// ES5/JSHint shh-er:
var THREE=(THREE);

// Three.js scene:
// Based on tutorial https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
// Based on tutorial https://www.jonathan-petitcolas.com/2013/04/02/create-rotating-cube-in-webgl-with-threejs.html

/*
ooooooooo.     .oooooo.   oooooooooooo   .oooo.     .oooo.    .ooooo.
`888   `Y88.  d8P'  `Y8b  `888'     `8  d8P'`Y8b  .dP""Y88b  888' `Y88.
 888   .d88' 888           888         888    888       ]8P' 888    888
 888ooo88P'  888           888oooo8    888    888     <88b.   `Vbood888
 888`88b.    888           888    "    888    888      `88b.       888'
 888  `88b.  `88b    ooo   888         `88b  d88' o.   .88P      .88P'
o888o  o888o  `Y8bood8P'  o888o         `Y8bd8P'  `8bd88P'     .oP'

00000000000000000000000000000000000000000000000000000000000000000000000
*/

window.addEventListener('load', init, false);

// For three.js scene
var scene, camera, frame, fieldOfView, fov2=0, aspectRatio;
var cube, cube2, cube3, ctilt;
var nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;

// For development
var mouseInfoObj, mouseDeltaObj, gyroInfoObj, infoObj, keysObj;


// RCF Input Object
// Requires an inputplane div to be laid over entire viewport.
// Barebone implementation without momentum, lagged input.
var input = {
    ia:false,    // Input active.
    x:0, y:0,    // Position of input.
    lx:0, ly:0,  // Lagged input.
    mx:0, my:0,  // Momentum of input.
    wx:0, wy:0,  // Window dimensions.
    wrx:0, wry:0,  // Window ratio dimensions.
    rx:false, ry:false,  //Reset XY toggle.
    gyro:false, // Gyroscope enabled.
    alpha:0, beta:0, gamma:0, //Gyroscope data.
    itype: "mouse",
    mobile: false,
    activekeys: [],
    inputplane: null,
    initialize: function(){
        console.log("[RCF039] Initialize input object.");
        this.inputplane = document.getElementById("inputplane");

        this.initMouse();
        this.initTouch();
        this.initGyro();
        this.initKeys();

        //Devicecheck
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
           this.mobile = true;
        }
        else {
            this.mobile = false;
        }

    },
    initMouse: function(){
        // Add all event listeners for mouse input.
        console.log("[RCF039] Init mouse...");
        var t = this; // Event listener compatability.

        inputplane.addEventListener("mousedown", function(e){
            e.preventDefault();
            t.updateX((e.pageX || 0));
            t.updateY((e.pageY || 0));
            t.beginStroke("mouse");
        },false);

        inputplane.addEventListener("mousemove", function(e){
            e.preventDefault();
            t.updateX((e.pageX || 0));
            t.updateY((e.pageY || 0));
        },false);

        inputplane.addEventListener("mouseup", function(e){
            e.preventDefault();
            t.endStroke();
        },false);

        inputplane.addEventListener("mouseout", function(e){
            e.preventDefault();
            t.endStroke();
        },false);
    },
    initTouch: function(){
        // Add all event listeners for mouse input.
        console.log("[RCF039] Init touch...");
        var t = this; // Event listener compatability.

        inputplane.addEventListener("touchstart", function(e){
            e.preventDefault();
            var touch = e.touches[0] || e.changedTouches[0];
            t.updateX((touch.pageX || 0));
            t.updateY((touch.pageY || 0));
            t.beginStroke("touch");
        },false);

        inputplane.addEventListener("touchmove", function(e){
            e.preventDefault();
            var touch = e.touches[0] || e.changedTouches[0];
            t.updateX((touch.pageX || 0));
            t.updateY((touch.pageY || 0));
        },false);

        inputplane.addEventListener("touchend", function(e){
            e.preventDefault();
            var touch = e.touches[0] || e.changedTouches[0];
            t.updateX((touch.pageX || 0));
            t.updateY((touch.pageY || 0));
            t.endStroke();
            itype="gyro";
        },false);

        inputplane.addEventListener("touchcancel", function(e){
            e.preventDefault();
            var touch = e.touches[0] || e.changedTouches[0];
            t.updateX((touch.pageX || 0));
            t.updateY((touch.pageY || 0));
            t.endStroke();
            itype="gyro";
        },false);

    },
    initGyro: function(){
        // Add all event listeners for gyroscopic input.
        var t = this; // Event listener compatability.
        if(window.DeviceOrientationEvent){
            window.addEventListener("deviceorientation",function(e){
                t.alpha = Math.floor(e.alpha);
                t.beta = Math.floor(e.beta);
                t.gamma = Math.floor(e.gamma);
            }, true);
        }
    },
    initKeys: function(){
        // Add all event listeners for mouse input.
        var t = this; // Event listener compatability.
        console.log("[RCF039] Init keys...");
        document.addEventListener("keydown", function(e){
            e.preventDefault();
            console.log("KEYDOWN"+ e.keyCode);
            t.activekeys[e.keyCode] = true;
        },false);
        document.addEventListener("keyup", function(e){
            e.preventDefault();
            console.log("KEYUP"+ e.keyCode);
            t.activekeys[e.keyCode] = false;
        },false);
        document.addEventListener("keypress", function(e){
            e.preventDefault();
            
        },false);
    },
    updateX: function( newx ){
        // Perform all needed actions to update X position of cursor.
        if( this.rx ){
            // Ensure momentum is reset for the start of a stroke.
            this.lx = Math.floor(newx);
            this.mx = 0;
            this.rx = false;
        }
        this.lx = this.x;
        this.x = Math.floor(newx);
        this.wrx = this.x / this.wx;
        this.mx = this.x - this.lx; //TODO: Implement smarter momentum.
    },
    updateY: function( newy ){
        // Perform all needed actions to update Y position of cursor.
        if( this.ry ){
            // Ensure momentum is reset for the start of a stroke.
            this.ly = this.wy - Math.floor(newy);
            this.my = 0;
            this.ry = false;
        }
        this.ly = this.y;
        this.y = this.wy - Math.floor(newy);
        this.wry = this.y / this.wy;
        this.my = this.y - this.ly; //TODO: Implement smarter momentum.
    },
    beginStroke: function( i ){
        this.inputActive = true;
        this.ry = true;
        this.rx = true;
        this.itype = i;
    },
    endStroke: function(){
        this.inputActive = false;
        if(this.gyro){
            this.itype = "gyro";
        }
    },
    updateWindowParameters(windowx,windowy){
        this.wx = windowx;
        this.wy = windowy;
    }
}

//Controls
var lon=0, lat=0, zoom=1;
var colors = {
    purple: 0xe305fc,
    mint: 0x05fcc6,
    black: 0x161616
};

function init() {
    console.log('[RCF039] init(): Begin init sequence.');
    mouseInfoObj = document.getElementById("mousecoords");
    mouseInfoObj.innerHTML = "running...";
    mouseDeltaObj = document.getElementById("mousedelta");
    mouseDeltaObj.innerHTML = "running...";
    gyroInfoObj = document.getElementById("gyrodata");
    gyroInfoObj.innerHTML = "running...";
    infoObj = document.getElementById("status");
    infoObj.innerHTML = "Testing ENABLED";
    keysObj = document.getElementById("keydata");
    keysObj.innerHTML = "Keys active.";
    
    input.initialize()
    createScene();
    frame = 0;
    render();
}

function updateStats( i ){
    mouseDeltaObj.innerHTML = "Input Velocity Delta: "+i.mx+","+i.my;
    mouseInfoObj.innerHTML = "Input Screen Location: "+i.x+","+i.y +
        "\nInput Screen Ratio: "+i.wrx.toPrecision(4)+","+i.wry.toPrecision(4);
    gyroInfoObj.innerHTML = "Gyroscopic Sensor Output: "+ i.gyro +
        "\n\tAlpha x: "+i.alpha +
        "\n\tBeta  y: "+i.beta +
        "\n\tGamma z: "+i.gamma;
    if( i.inputActive ){
        infoObj.innerHTML = "Testing ENABLED f"+frame+" INPUT-ACTIVE "+i.itype;
    }else{
        infoObj.innerHTML = "Testing ENABLED f"+frame+" "+i.itype;
    }
    mouseDeltaObj.innerHTML = "Input Velocity Delta: "+i.mx+","+i.my;

    var currentkeys = [];
    for(var x=0; x<i.activekeys.length; x++){
        if(i.activekeys[x]){
            currentkeys.push(x);
        }
    }
    keysObj.innerHTML = "Active key keycodes: "+currentkeys;
}

function createScene() {
    console.log('[rcf039] createScene(): Init window.');
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    input.updateWindowParameters(WIDTH,HEIGHT);

    scene = new THREE.Scene();

    scene.fog = new THREE.Fog(colors.black, 100, 950);

    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 70;
    nearPlane = 1;
    farPlane = 100;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio,
        nearPlane, farPlane);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);

    console.log('[rcf039] createScene(): Init renderer.');
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;

    console.log('[rcf039] createScene(): Insert WebGL renderer.');
    container = document.getElementById('rcf039');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', handleWindowResize, false);
    
    cubeRow(0,0,4,14,scene);
    cubeRow(0,0,0,15,scene);
    cubeRow(0,0,-4,16,scene);
    cubeRow(0,0,-8,17,scene);
    cubeRow(0,0,-12,18,scene);
    cubeRow(0,0,-16,19,scene);
}

function cubeRow(x,y,z,num,scene){
    var crow = [];
    var crowobj = [];
    var cubesize = 2;
    var cubegap = 1;
    var spacing = cubesize + cubegap;

    if(num%2==0){
        var bordercubes =  num/2;
        for( var i=1; i<=bordercubes; i++){
            crow.push((i*spacing)-(spacing/2));
            crow.push((-i*spacing)+(spacing/2));
        }
    }else{
        var bordercubes =  (num-1)/2;
        crow.push(0);
        for( var i=1; i<=bordercubes; i++){
            crow.push(i*spacing);
            crow.push(-i*spacing);
        }
    }

    for(var i=0; i<=crow.length; i++){
        var tempc= new THREE.Mesh(new THREE.CubeGeometry(cubesize, cubesize, cubesize), new THREE.MeshNormalMaterial());
        tempc.translateX(crow[i]);
        tempc.translateX(x);
        tempc.translateY(y);
        tempc.translateZ(z);
        crowobj.push(tempc);
    }


   
    for(var i=0;i<crowobj.length;i++){
        scene.add(crowobj[i]);
    }
}

function render() {
    requestAnimationFrame(render);

    frame += 1;
    updateStats(input);
   
    switch(input.itype){
        case "mouse":
            ctilt = (input.wrx*2)-1;
            break;
        case "touch":
            if(input.inputActive){
                ctilt = (input.wrx*2)-1;
            }else{
                ctilt = input.gamma/40;
            }
            break;
        case "gyro":
            ctilt = Math.min((input.gamma/30),1);
            break;
        default:
            ctilt = 0;
            break;
    }

    if(input.mobile){
        if(input.inputActive){
            ctilt = (input.wrx*2)-1;
        }else{
            ctilt = input.gamma/40;
        }
    }else{
        ctilt = (input.wrx*2)-1;
    }

   
    camera.position.set(ctilt, 2.5, 5);
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    input.updateWindowParameters(WIDTH,HEIGHT);
    console.log("[rcf039] handleWindowResize(): Resizing to " + WIDTH + ", " + HEIGHT + ".");
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}


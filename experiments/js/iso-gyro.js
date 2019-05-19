// ES5/JSHint
var THREE=(THREE);

// Successfully renders a spinning cube.

// Based on tutorial https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
// Based on tutorial https://www.jonathan-petitcolas.com/2013/04/02/create-rotating-cube-in-webgl-with-threejs.html

console.log('[RCF037] Gyro Loaded!');

// Pavarte
var colors = {
    purple: 0xe305fc,
    mint: 0x05fcc6,
    black: 0x161616
};

// Init when window loaded.

window.addEventListener('load', init, false);

var scene, camera, fieldOfView, fov2=0, aspectRatio, cube, cube2, cube3, arotate=true;
var nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;

// For development
var mouseInfoObj, mouseDeltaObj, gyroInfoObj, infoObj, input;
var ix,iy; //Location
var lx1,ly1; //Last location
var lx2,ly2;
var mx, my;
var inputactive, newx, newy;

// Gyroscope
var alpha,beta,gamma;

function setX(icx){
    cx = Math.floor(icx);
    if(newx){
        lx2=cx;
        lx1=cx;
        ix=cx;
        newx=false;
    }else{
    // Takes current x and calculates momentum.
    lx2 = lx1;
    lx1 = ix;
    ix = cx;
    }

    mx = ix - lx2; //TODO
}

function setY(icy){
    cy = Math.floor(icy);
    if(newy){
        ly2=cy;
        ly1=cy;
        iy=cy;
        newy=false;
    }else{
    // Takes current y and calculates momentum.
    ly2 = ly1;
    ly1 = iy;
    iy = cy;
    }

    my = iy - ly2; //TODO
}

function inputActive(b){
    inputactive = b;
    if(b){
        infoObj.innerHTML = "Testing ENABLED +INPUT RECIEVED";
    }else{
        infoObj.innerHTML = "Testing ENABLED";
        mx = 0;
        my = 0;
        ly1 = 0;
        lx1 = 0;
        ly2 = 0;
        lx2 = 0;
    }
}

function touchDown(){
    newx=true;
    newy=true;
}

function updateStats(){
    mouseDeltaObj.innerHTML = "Mouse velocity delta: "+mx+","+my;
    mouseInfoObj.innerHTML = "Mouse location: "+ix+","+iy;
}


//Controls
var lon=0, lat=0, zoom=1;


function init() {
    console.log('[RCF037] init(): Begin init sequence.');
    mouseInfoObj = document.getElementById("mousecoords");
    mouseInfoObj.innerHTML = "running...";
    mouseDeltaObj = document.getElementById("mousedelta");
    mouseDeltaObj.innerHTML = "running...";
    gyroInfoObj = document.getElementById("gyrodata");
    gyroInfoObj.innerHTML = "running...";
    infoObj = document.getElementById("status");
    infoObj.innerHTML = "Testing ENABLED";
    input = document.getElementById("mousemonitor");
    createScene();
    initMouseControls();
    initGyroControls();
    //createLights();
    //createObj();
    render();

    /*
     * Well, here are basic touch controls. They sure need some simplification.
     */

    input.addEventListener("touchstart", function(ev){
        touchDown();
        inputActive(true);
        ev.preventDefault();
        var t = ev.touches[0] || ev.changedTouches[0];
        setX(t.pageX);
        setY(t.pageY);
        updateStats();
    }, false);

    input.addEventListener("touchmove", function(ev){
        inputActive(true);
        ev.preventDefault();
        var t = ev.touches[0] || ev.changedTouches[0];
        setX(t.pageX);
        setY(t.pageY);
        updateStats();
    }, false);

    input.addEventListener("touchend", function(ev){
        inputActive(false);
        ev.preventDefault();
        var t = ev.touches[0] || ev.changedTouches[0];
        setX(t.pageX);
        setY(t.pageY);
        updateStats();
    }, false);

    input.addEventListener("touchcancel", function(ev){
        inputActive(false);
        ev.preventDefault();
        var t = ev.touches[0] || ev.changedTouches[0];
        setX(t.pageX);
        setY(t.pageY);
        updateStats();
    }, false);

    input.addEventListener("mousemove", function(ev){
        ev.preventDefault();
        var nx = ev.pageX || 0;
        var ny = ev.pageY || 0;
        setX(nx);
        setY(ny);
        updateStats();
    }, false);

    input.addEventListener("mousedown", function(ev){
        touchDown();
        ev.preventDefault();
        var nx = ev.pageX || 0;
        var ny = ev.pageY || 0;
        setX(nx);
        setY(ny);
        inputActive(true);
    }, false);

    input.addEventListener("mouseup", function(ev){
        ev.preventDefault();
        inputActive(false);
    }, false);

    input.addEventListener("mouseout", function(ev){
        ev.preventDefault();
        inputActive(false);
    }, false);
}

function createScene() {
    console.log('[RCF037] createScene(): Init window.');
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();

    scene.fog = new THREE.Fog(colors.black, 100, 950);

    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 75;
    nearPlane = 1;
    farPlane = 10;
    camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio,
        nearPlane, farPlane);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);

    console.log('[RCF037] createScene(): Init renderer.');
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;

    console.log('[RCF037] createScene(): Insert WebGL renderer.');
    container = document.getElementById('rcf037');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', handleWindowResize, false);

    // Cube
    cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    cube2 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    cube3 = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    scene.add(cube);
    //cube2.translateX(4).translateZ(-1);
    //cube3.translateX(-4).transalteZ(1);
    scene.add(cube2);
    scene.add(cube3);
}

function warpProjectionMatrix( thisMuch ){
}

function render() {
    requestAnimationFrame(render);
    gyroInfoObj.innerHTML = "GYRO:\n\n\tx:"+alpha+"\n\n\ty:"+beta+"\n\n\tz:"+gamma+"";

    /*
    if(inputactive){
        if(my){
        fov2 += my/(HEIGHT/30);
        }
        camera.fov= fieldOfView + fov2;
        camera.updateProjectionMatrix();
        autoRotateCubes(arotate);
    }
    else{
        if(fov2 > 2){
            fov2 -= 2;
        }else if(fov2 < -2){
            fov2 +=2;
        }
        camera.fov= fieldOfView + fov2;
        camera.updateProjectionMatrix();
        autoRotateCubes(arotate);
    }*/

    camera.fov= fieldOfView + gamma;
    camera.updateProjectionMatrix();

    autoRotateCubes(arotate);
    renderer.render(scene, camera);
}

function autoRotateCubes( GO ) {
    var speed = 0.01;
    if(GO){
    var c1 = cube.rotation;
    var c2 = cube2.rotation;
    var c3 = cube3.rotation;

    c1.x -= speed * 2;
    c1.y -= speed;
    c1.z -= speed * 3;

    c2.y -= speed * 2;
    c2.z -= speed;
    c2.x -= speed * 3;

    c3.z -= speed * 2;
    c3.x -= speed;
    c3.y -= speed * 1;
    }
}

function mouseRotateCubes(x,y,z){
    var cx = [cube.rotation,cube2.rotation,cube3.rotation];
    for(var i=0; i<3; i++){
        cx[i].x += x;
        cx[i].y += y;
        cx[i].z += z;
    }

}

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    console.log("[RCF037] handleWindowResize(): Resizing to " + WIDTH + ", " + HEIGHT + ".");
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

function initMouseControls(){
    console.log("[RCF037] Adding mouse controls...");
    /* //Drag to pan camera, from https://gist.github.com/bellbind/d2be9cc09bf6241f255d
    var dragMouse = function (ev) {
        var mx = ev.movementX || ev.mozMovementX || ev.webkitMovementX || 0;
        var my = ev.movementY || ev.mozMovementY || ev.webkitMovementY || 0;
        lat = Math.min(Math.max(-Math.PI / 2, lat - my * 0.01), Math.PI / 2);
        lon = lon - mx * 0.01;

        var rotm = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(lat, lon, 0, "YXZ"));
        camera.quaternion.copy(rotm);
    };*/

    var dragMouse = function (ev) {
        var mx = ev.movementX || ev.mozMovementX || ev.webkitMovementX || 0;
        var my = ev.movementY || ev.mozMovementY || ev.webkitMovementY || 0;
        mouseDeltaObj.innerHTML = "Mouse velocity delta: "+mx+","+my;

        mouseRotateCubes(-my/100,0,0);
        fov2 += my/HEIGHT;
        camera.fov= fieldOfView + fov2;
        camera.updateProjectionMatrix();
    };

    container.addEventListener("mousedown", function (ev) {
        arotate=false;
        fov2=0;
        container.addEventListener("mousemove", dragMouse, false);
    }, false);
    container.addEventListener("mouseup", function (ev) {
        arotate=true;
        camera.fov= fieldOfView;
        camera.updateProjectionMatrix();
        container.removeEventListener("mousemove", dragMouse, false);
    }, false);
}

function initGyroControls(){
    console.log("[RCF037] Adding gyroscopic controls...");

    if(window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation",function(ev){
            alpha = Math.floor(ev.alpha);
            beta = Math.floor(ev.beta);
            gamma = Math.floor(ev.gamma);

            
            /*
            camera.fov= fieldOfView + ev.gamma;
            camera.updateProjectionMatrix();
            autoRotateCubes(arotate);
            */

        }, true);

    }else{
        gyroInfoObj.innerHTML = "GYRO: NO GYROSCOPE DETECTED.";
    }

}
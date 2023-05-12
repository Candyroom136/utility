const getYZXRotationMatrix = function(roll, pitch, yaw) {
    //roll - y축, pitch - z축, yaw -x축
    return getXRotationMatrix(yaw)*getZRotationMatrix(pitch)*getYRotationMatrix(roll)
}

const getYRotationMatrix = function(axesY) {
    return [
        [cos(axesY), 0, sin(axesY)],
        [0, 1, 0],
        [sin(axesY)*(-1), 0, cos(axesY)]
    ]
};
const getZRotationMatrix = function(axesZ) {
    return [
        [cos(axesZ), sin(axesZ)*(-1), 0],
        [sin(axesZ), cos(axesZ), 0],
        [0, 0, 1]
    ]
}
const getXRotationMatrix = function(axesX) {
    return [
        [1, 0, 0],
        [0, cos(axesX), sin(axesX)*(-1)],
        [0, sin(axesX), cos(axesX)]
    ]
}



const cos = function(theta) {
    return Math.cos(theta);
}

const sin = function(theta) {
    return Math.sin(theta);
}
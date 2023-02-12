const getRotationMatrixFromQueternion = function(w, x, y, z) {
    return [
        [w*w + x*x - y*y - z*z, 2*(x*y - w*z), 2*(x*z + w*y)],
        [2*(x*y + w*z), w*w - x*x + y*y -z*z, 2*(y*z -w*x)],
        [2*(x*z - w*y), 2*(y*z + w*x), w*w -x*x -y*y +z*z]
    ]
}

const square = function(x) {
    return x*x;
}
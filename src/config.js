module.exports = {
    block: {
        initWidth: 10, 
        initHeight: 2, 
        initDepth: 10, 

        initColor: 0xad6c86, 

        initSpeed: 0.1,
        acceleration: 0.005, 
        maxSpeed: 2, 
    },

    camera: {
        depth: 20,
        near: -100,
        far: 1000,
        position: [2, 2, 2],
        lookAt: [0, 0, 0],
    },

    lights: [
        {
            type: 'DirectionalLight',
            intensity: 0.5,
            position: [0, 499, 0],
            color: 0xffffff,
        }
    ],
};

Use the command `http-server` to run this code

![image](https://user-images.githubusercontent.com/39531367/148865543-b2090ce8-eea4-4e2d-814b-87250f982afe.png)

From left to right: no environment map, recursive method that iterates through all objects in the scene, three.js scene property that sets a global enviornment map that is applied to all objects.

![image](https://user-images.githubusercontent.com/39531367/148865560-26f8e4c4-cda2-4c8c-a589-fb8b36fc069e.png)

Here is a close-up:

![image](https://user-images.githubusercontent.com/39531367/148865758-b6555ff9-5e79-4954-a831-aadbf03e87ff.png)

Some resources that I used:
- https://glitch.com/edit/#!/street-flyer
- https://github.com/3DStreet/3dstreet/blob/main/assets/CGSkies_0343_doubled_2048.jpg
- https://github.com/3DStreet/3dstreet/blob/main/index.html
- https://github.com/3DStreet/3dstreet/tree/main/assets/images/skybox
- https://aframe.io/docs/1.2.0/primitives/a-sky.html#attributes_theta_length
- https://coeleveld.com/spherical-equirectangular-environment-textures-and-hdri/
- https://aframe.io/docs/1.2.0/components/gltf-model.html
- I'm not sure if there is a simple way to load an HDR file into three.js. It seems like you need to use a RGBELoader. https://discourse.threejs.org/t/hdri-background-position/13602/5
- https://threejs.org/docs/index.html#api/en/loaders/CubeTextureLoader
- https://discourse.threejs.org/t/hdri-background-position/13602/5
- https://github.com/mrdoob/three.js/blob/master/examples/jsm/loaders/RGBELoader.js

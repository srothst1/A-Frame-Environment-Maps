    //credit to Don McCurdy
    //https://github.com/n5ro/aframe-extras/blob/351608a7360bc61d0ddd917760834e0a7b43aae1/src/misc/README.md#cube-env-map
    AFRAME.registerComponent("cube-env-map", {
        schema: {
          path: {default: ''},
          extension: {default: 'jpg'},
          format: {default: 'RGBFormat'},
          enableBackground: {default: false}
        },
  
        init: function () {
          const data = this.data;
          var posx = data.path.split(" ")[0].replace(/\s+/g, '') + 'posx.' + data.extension.split(" ")[0].replace(/\s+/g, '');
          var negx = data.path.split(" ")[0].replace(/\s+/g, '') + 'negx.' + data.extension.split(" ")[0].replace(/\s+/g, '');
          var posy = data.path.split(" ")[0].replace(/\s+/g, '') + 'posy.' + data.extension.split(" ")[0].replace(/\s+/g, '');
          var negy = data.path.split(" ")[0].replace(/\s+/g, '') + 'negy.' + data.extension.split(" ")[0].replace(/\s+/g, '');
          var posz = data.path.split(" ")[0].replace(/\s+/g, '') + 'posz.' + data.extension.split(" ")[0].replace(/\s+/g, '');
          var negz = data.path.split(" ")[0].replace(/\s+/g, '') + 'negz.' + data.extension.split(" ")[0].replace(/\s+/g, '');
          this.texture = new THREE.CubeTextureLoader().load([posx,negx,posy,negy,posz,negz]);
          this.texture.format = THREE[data.format];
  
          if (data.enableBackground) {
            this.el.sceneEl.object3D.background = this.texture;
          }
  
          this.applyEnvMap();
          this.el.addEventListener('object3dset', this.applyEnvMap.bind(this));
        },
  
        applyEnvMap: function () {
          const mesh = this.el.getObject3D('mesh');
          const envMap = this.texture;
  
          if (!mesh) return;
  
          mesh.traverse(function (node) {
            if (node.material && 'envMap' in node.material) {
              node.material.envMap = envMap;
              node.material.needsUpdate = true;
            }
          });
        }
      });
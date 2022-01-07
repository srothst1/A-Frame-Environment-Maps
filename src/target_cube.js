AFRAME.registerComponent("sky1", {
    init: function() {
      var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
      var renderer = this.el.sceneEl.renderer;

      this.el.addEventListener("model-loaded", e => {
        let mesh = this.el.getObject3D("mesh");
        
        var texture = new THREE.TextureLoader().load(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Goat_Peak%2C_Cascades.jpg/1920px-Goat_Peak%2C_Cascades.jpg",
          function() {
            var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
            mesh.traverse(function(el) {
              if (el.material) {
                el.material.envMap = cubeTex.texture;
                el.material.envMap.intensity = 3;
                el.material.needsUpdate = true;
              }
            });
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.outputEncoding = THREE.sRGBEncoding;
          }
        );
      });
    }
});
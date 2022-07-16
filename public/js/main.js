'use strict'

window.addEventListener('load', () => {

    // imagen a mostrar
    const panoramaImage = new PANOLENS.ImagePanorama( '../img/maker1.jpg' );
    const panoramaImage2 = new PANOLENS.ImagePanorama( '../img/maker2.jpg' );
    // contenedor de la imagen
    const imageContainer = document.querySelector('.image-container');
    // contenedor de panel de informacion
    const panelMadera = document.querySelector('#madera');
    const panelCepilladora = document.querySelector('#cepilladora');
    const panelSierra = document.querySelector('#sierra');
    const panelHerramienta3= document.querySelector('#herra3');

    // viewer contenedor
    const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        // autoRotate: true,
        autoRotateSpeed: 0.3,
        // remover los controles
        //controlBar: false
        cameraFov: 80
    });

    // funcion para ir a otro panorama (metodo 1)
    function botonNuevaView(x,y,z, hoverText, nuevoPanorama){
        let panorama = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
        panorama.position.set(x, y, z);
        panorama.addHoverText(hoverText);
        panorama.addEventListener( 'click', function(){
            viewer.setPanorama(nuevoPanorama);
          } );

          return panorama;
    }

    // funcion para crear infospots (mostrar panel)
    function infoSpotContenido(x, y, z, contenido){
        let infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
        infospot.position.set(x, y, z);
        infospot.addHoverElement( contenido, 150 );

        return infospot;
    }

    // funcion para crear infospots (mostrar texto)
    function infoSpotTexto(x, y, z, texto){
        let infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
        infospot.position.set(x, y, z);
        infospot.addHoverText(texto);

        return infospot;
    }

    // funcion para ir a otro panorama
    function linkPanorama(actualPanorama, nuevoPanorama, x, y, z, escala = 500){
        actualPanorama.link( nuevoPanorama, new THREE.Vector3(x, y, z), escala);
    }

    const axesHelper = new THREE.AxesHelper( 5 );
    viewer.add( axesHelper );

    panoramaImage.add(infoSpotContenido(-7000, 1300, -1500, panelMadera));
    panoramaImage.add(infoSpotContenido(-7000, -1500, 700, panelCepilladora));
    panoramaImage.add(infoSpotContenido(-7000, -1200, -2200, panelSierra));
    panoramaImage.add(infoSpotContenido(-7000, -900, -5200, panelHerramienta3));
    panoramaImage.add(infoSpotTexto(-500, 0, -5200, "SALIDA", 25));
    linkPanorama(panoramaImage, panoramaImage2, 300, -2000, 8000);
    linkPanorama(panoramaImage2, panoramaImage, -1000, -900, -5000, 400);

    // na;adir la imagen al viewer
    viewer.add(panoramaImage, panoramaImage2);

    viewer.addUpdateCallback(function(){
  
    });

})
'use strict'

window.addEventListener('load', () => {

    // imagen a mostrar
    const panoramaImage = new PANOLENS.ImagePanorama( '../img/uvga.jpg' );
    const panoramaImage2 = new PANOLENS.ImagePanorama( '../img/uvga2.jpg' );
    // contenedor de la imagen
    const imageContainer = document.querySelector('.image-container');
    // contenedor de panel de informacion
    const panelContainer = document.querySelector('.panel');

    // viewer
    const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 0.3
        // remover los controles
        //controlBar: false
    });

    // lugar 1
    var infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
    infospot.position.set( 0, -2000, -5000 );
    infospot.addHoverText( "A la cafeteria" );
    //infospot.addHoverElement( panelContainer, 150 );
    infospot.addEventListener( 'click', function(){
        viewer.setPanorama( panoramaImage2 );
      } );

      // lugar 2
    var infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
    infospot2.position.set( 0, -2000, -5000 );
    infospot2.addHoverText( "Al centro" );
    //infospot.addHoverElement( panelContainer, 150 );
    infospot2.addEventListener( 'click', function(){
        viewer.setPanorama( panoramaImage );
    } );

    // panel de informacion 
    var infospotinfo = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
    infospotinfo.position.set( 0, 1000, -3000 );
    //infospotinfo.addHoverText( "Informacion" );
    infospotinfo.addHoverElement( panelContainer, 150 );


    panoramaImage.add(infospot, infospotinfo);
    panoramaImage2.add(infospot2);

    // na;adir la imagen al viewer
    viewer.add(panoramaImage, panoramaImage2);

    viewer.addUpdateCallback(function(){
  
    });

})
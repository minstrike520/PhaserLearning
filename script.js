var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };

  var game = new Phaser.Game(config);

  function preload() {
    this.load.image('tile1', 'assets/tile1.png');
    this.load.image('tile2', 'assets/tile2.png');
    this.load.image('tile3', 'assets/tile3.png')
  }
  
  function create() {
    this.add.image(0, 0, 'tile1').setOrigin(0, 0);
    this.
    this.add.image(50, 0, 'tile2').setOrigin(0, 0);
    this.add.image(0, 50, 'tile3').setOrigin(0, 0);
    // 
  }
  
  function update() {}
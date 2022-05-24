<template>
   <canvas id="granim-canvas"></canvas>
</template>

<script>
import Granim from 'granim'

export default {
  name: 'granim',
  data () {
    return {
      GObj: Object
    }
  },
  mounted () {
    this.GObj = new Granim({
      element: '#granim-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
             ['#29323c', '#485563'],
             ['#FF6B6B', '#556270'],
             ['#80d3fe', '#7ea0c4'],
             ['#f0ab51', '#eceba3']
          ]
        }
      }
    })
  }
}
</script>

<style scoped>
  #granim-canvas {
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
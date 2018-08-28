new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    isStyled: true,
    userClass1: 'green',
    userClass2: '',
    isActive: true,
    myStyle: {
      backgroundColor: 'purple',
      width: '200px',
      height: '100px'
    },
    progressBar: {
      width: '0px'
    }
    
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        console.log(1)
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink
      }, 1000)
    },
    startProgress: function() {
      let vm = this;
      let width = 0;
      let interval = setInterval(function() {
        width = width + 50;
        vm.progressBar.width = width + 'px';
        if (width === 500){
          console.log(1)
          clearInterval(interval)
        }
      }, 500)

    }
  }
});

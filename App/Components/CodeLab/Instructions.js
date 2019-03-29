const Instructions = {
  action: {
    up: {
      key: 'up',
      icon: 'arrow-up',
      title: 'Move Up'
    },
    left: {
      key: 'left',
      icon: 'arrow-left',
      title: 'Move Left'
    },
    right: {
      key: 'right',
      icon: 'arrow-right',
      title: 'Move Right'
    },
    down: {
      key: 'down',
      icon: 'arrow-down',
      title: 'Move Down'
    }
  },
  sensor: {
    temperature: {
      key: 'temperature',
      type: 'sensor',
      icon: 'thermometer',
      title: 'Read Temperature'
    },
    distance: {
      key: 'distance',
      type: 'sensor',
      icon: 'road',
      title: 'Read Distance'
    }
  },
  control: {
    if: {
      key: 'if',
      type: 'control',
      title: 'If'
    },
    loop: {
      key: 'loop',
      type: 'control',
      title: 'Loop'
    },
    while: {
      key: 'while',
      type: 'control',
      title: 'While'
    }
  },
  data: {
    color: {
      key: 'color',
      type: 'data',
      icon: 'eyedropper',
      title: 'Set Color'
    },
    speed: {
      key: 'speed',
      type: 'data',
      icon: 'rocket',
      title: 'Set Speed'
    }
  }
}

export default Instructions

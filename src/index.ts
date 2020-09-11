import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const checkWidth: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
    const allowedWidth = utils.getOption('allowedWidth')

    for (const artboard of utils.objects.artboard) {
      const currentWidth = artboard.frame.width

      if (currentWidth != allowedWidth) {
        utils.report(`Artboard “${artboard.name}” width is ${currentWidth}px.`, artboard)
      }
    }
  },
  name: 'sketch-assistant-artboard-size/check-width',
  title: 'Artboard width should be 1360px',
  description: 'Artboard width should be exactly 1360 pixels',
}

const checkHeight: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
    const allowedHeight = utils.getOption('allowedHeight')

    for (const artboard of utils.objects.artboard) {
      const currentHeight = artboard.frame.height

      if (currentHeight != allowedHeight) {
        utils.report(`Artboard “${artboard.name}” height is ${currentHeight}px.`, artboard)
      }
    }
  },
  name: 'sketch-assistant-artboard-size/check-height',
  title: 'Artboard height should be 768px',
  description: 'Artboard height should be exactly 768 pixels',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'sketch-assistant-artboard-size',
    rules: [checkWidth, checkHeight],
    config: {
      rules: {
        'sketch-assistant-artboard-size/check-width': {
          active: true,
          allowedWidth: 1360,
        },
        'sketch-assistant-artboard-size/check-height': {
          active: true,
          allowedHeight: 768,
        },
      },
    },
  }
}

export default assistant

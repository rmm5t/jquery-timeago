setupFn = -> null
window.setup = (fn) ->
  setupFn = fn
window.moreSetup = (fn) ->
  origSetup = setupFn
  setup ->
    origSetup.call(this)
    fn.call(this)
window.clearSetup = ->
  setup -> null

originalModule = window.module
window.module = (description) ->
  clearSetup()
  originalModule(description)

originalTest =   window.test
window.test = (description, testFn) ->
  setupSnapshot = setupFn
  originalTest description, ->
    context = {}
    setupSnapshot.call(context)
    testFn.call(context)

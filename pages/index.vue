<template lang="pug">
  div.d-flex.flex-column.justify-content-center.align-items-center(@keyup.shift.enter.prevent="generate()")
    b-container
      b-row.justify-content-center.align-items-center
        img.m-2(src="polygon.png" alt="Polygon" style="width: 100px; height: 100px")
        h1.display-3.mt-3.text-center(style="font-size: 2em")
          strong Polygon.  
          | Add AI to your app with a few lines of code
      //- Example picker
      b-row.lead.pb-2.mb-2.border-bottom.justify-content-center.align-items-center
        b-button.mx-1.text-muted(v-for="example, index in examples" :key="example.caption"
            :variant="pickedExample === example ? 'outline-secondary' : 'light'"
            size="sm"
            @click="outputKeys = example.outputKeys; input = example.input; pickedExample = example; generated = false"
            style="cursor: pointer"
            :id="'example-' + index"
          )
          span {{ example.caption }}
        //- Custom example
        b-button(
          variant="light"
          size="sm"
          @click="generateExample"
          style="cursor: pointer"
          :id="'example-random'"
        )
          b-spinner(v-if="generatingExample" small type="grow" variant="primary")
          strong(v-else) 💡
        b-popover(
          :target="'example-random'"
          triggers="hover"
          placement="bottom"
        )
          p.lead Let’s come up with something especially for you!
          //- Enter product description, generate example
          b-form(@submit.prevent="generateExample")
            b-form-group(
                label="What is your product?"
              )
              b-input-group(size="sm")
                b-input(
                  v-model="exampleProduct"
                  placeholder="Or click 👉 for random example"
                )
                b-input-group-append
                  b-button(
                    size="sm"
                    variant="primary"
                    @click="generateExample"
                  )
                    b-icon-arrow-right-circle(style="width: 1em")
        //- 
      
      //- 
      b-row.justify-content-center.align-items-center(style="font-size: 0.8em")
        b-alert(
          :show="showExampleDescription"
          dismissible
          @dismissed="showExampleDescription = false"
        )
          | {{ pickedExample.description }}
      b-row.justify-content-between.mt-2
        b-col.mt-2.col-12.col-md-7

          h2.lead.strong.mb-3(style="font-size: 1.5em")
            strong {{ pickedExample.caption }}  
            | for a  
            strong {{ pickedExample.product.toLowerCase() }}


          h3.lead.strong Inputs
          small.form-text.text-muted.mb-2(style="font-size: 0.8em")
            | What do you want the user to enter, or what data will you obtain programmatically?
          //- Current inputs (keys/values in the input object)
          div.d-flex.flex-wrap.align-items-center(style="font-size: 0.8em")
            //- div.d-flex.w-100.my-1(
            //-     v-for="value, key in input" :key="key"
            //-   )
            b-input-group.my-1(
                v-for="value, key in input" :key="key"
              )
              //- div.rounded-left.bg-light.border.px-2.pt-1(
              //-   :id="'for-' + key"
              //- )
              //-   strong {{ key }}
              b-input-group-prepend(
                :id="'for-' + key"
              )
                b-input-group-text(
                )
                  strong {{ key }}
              //- Edit on popover
              
              b-popover(
                  :target="'for-' + key"
                  triggers="hover"
                  placement="bottom"
                  @shown="focusAndSelect($refs['newKey-' + key][0])"
                  @hidden="returnFocus"
                )
                //- Input for new key name
                b-form(
                  @submit.prevent="renameInput(key, $refs['newKey-' + key][0].vModelValue)"
                )
                  b-input-group(size="sm")
                    b-input(
                      :ref="'newKey-' + key"
                      :value="key"
                    )
                    b-input-group-append
                      b-button(type="submit" variant="outline-secondary")
                        b-icon-check
              //- 

              b-input.pt-1(
                v-model="input[key]"
                placeholder="Input value to test the API"
              )

              b-input-group-append
                b-button.rounded-right(
                  variant="outline-secondary"
                  style="font-size: 1em; border-color: #ced4da; border-left: 0"
                  @click="deleteInput(key)"
                )
                  b-icon-trash(style="width: 0.6em")
              b-form-invalid-feedback(:state="!!input[key]") Please add a value
            //-

            //- Add a new input
            b-form(@submit.prevent="addInput")
              b-input-group.mt-1(style="width: 150px")
                b-input(
                  v-model="newInputKey"
                  :placeholder="'What else?'"
                )
                b-input-group-append
                  b-button(
                    type="submit" variant="outline-secondary"
                    :disabled="!newInputKey"
                  )
                    b-icon-plus 
          //- 


          h3.lead.strong.mt-3 Outputs
          small.form-text.text-muted.mb-2(style="font-size: 0.8em")
            | What keys do you want the API to return? Make them as self-explanatory as possible.
          div.d-flex.flex-wrap.align-items-center
            //- Current outputKeys
            div.input-group-text.m-1.p-1(
                v-for="outputKey in outputKeys" :key="outputKey"
              )
              strong {{ outputKey }}
              //- Small icon to remove the outputKey
              b-button.text-muted.p-0.px-1(
                size="sm"
                variant="light"
                style="background: transparent; border: none"
                @click="outputKeys = outputKeys.filter(w => w !== outputKey)"
              )
                b-icon-x-circle(style="width: 0.6em")
            //- Input to add a new outputKey
            b-input.m-1(
              v-model="newOutputKey"
              placeholder="What else?"
              @keyup.enter.prevent="addOutputKey"
              @blur="addOutputKey"
              style="width: 120px; height: 2em;"
            )
          b-form-invalid-feedback(:state="outputKeys.length > 0") Please add at least one thing to generate


          //- OpenAI key
          b-alert.m-3(
              :variant="openAIkey ? 'info' : 'warning'"
              v-if="!openAIkey || showOpenAIkeyEntry"
              show
              :dismissible="!!openAIkey"
              @dismissed="showOpenAIkeyEntry = false"
            )
            b-form-group.text-muted(
                label="OpenAI API key"
                style="font-size: 0.8em"
              )
              template(v-slot:description)
                | We don’t store <a href="https://beta.openai.com/account/api-keys" target="_blank">your key</a>, it’s only used to make requests to OpenAI’s API.
                b-form-invalid-feedback(:state="!!openAIkey") Please add your OpenAI API key
              b-input-group
                b-input(
                  :value="openAIkey"
                  @change="openAIkey = $event"
                  :type="showOpenAIkey ? 'text' : 'password'"
                  placeholder="sk-..."
                  style="font-size: 1em"
                )
                //- See the key
                b-input-group-append
                  b-button(
                    variant="outline-secondary"
                    size="sm"
                    style="font-size: 0.8em"
                    @click="showOpenAIkey = !showOpenAIkey"
                  )
                    b-icon(
                      :icon="showOpenAIkey ? 'eye-slash' : 'eye'"
                      style="width: 0.8em"
                    )
              
          //- 

          //- If not shown, show a small key icon in the bottom right corner in case the user wants to change the key
          b-button(
              v-else
              variant="outline-secondary"
              size="sm"
              class="position-fixed"
              style="bottom: 1em; right: 1em; font-size: 0.8em"
              @click="showOpenAIkeyEntry = true"
            )
              b-icon-key(style="width: 0.8em")
          
          //- Try it!
          b-button.mt-2(
              block
              type="submit"
              ref="generateButton"
              :variant="generating ? 'light' : 'primary'"
              :disabled="generating || !openAIkey || !outputKeys.length || !inputValid"
              size="lg"
              @click="generate()"
            )
            span(v-if="generating")
              b-spinner.mr-2(small)
              | Generating...
            span(v-else)
              b-icon(:icon="generated ? 'arrow-clockwise' : 'play'")
              | {{ generated ? 'Try again' : 'Try it!' }}
          span.text-muted.text-center.small.d-none.d-lg-block
            | ( Shift+Enter )
          //- 
        
        b-col.mt-2
          b-tabs(no-fade)
            b-tab(title="Request")
              //- Pre-formatted copiable div on dark background
              div.rounded-top
                pre.mb-0
                  code(
                    v-text="obfuscatedCode"
                    :class="`language-${languageForFormat[format]}`"
                    style="font-size: 0.8em; white-space: pre-wrap"
                  )
              //- Buttons to pick format: fetch, curl js
              div.d-flex.justify-content-between
                b-button-group
                  b-button(
                      v-for="f in formats" :key="f"
                      size="sm"
                      :variant="f === format ? 'secondary' : 'outline-secondary'"
                      @click="format = f"
                      style="border-top-left-radius: 0; border-top-right-radius: 0"
                    )
                    | {{ f }}
                //- Copy to clipboard
                b-button(
                    variant="outline-secondary"
                    size="sm"
                    @click="copyToClipboard"
                    style="border-top-left-radius: 0; border-top-right-radius: 0"
                  )
                  b-icon-clipboard(style="width: 0.6em")
            //- 
            
            b-tab(
                title="Response"
                ref="generated"
                v-if="generated"
              )
              div(:class="justGenerated ? 'bg-success' : 'bg-dark'")
                pre
                  code.language-json(
                    v-text="generated"
                    style="white-space: pre-wrap; font-size: 0.9em; overflow-y: auto"
                  )
            //- 
      //- 

</template>

<script lang="coffee">

  import syncLocalMixin from '~/plugins/mixins/syncLocal'
  import tryActionMixin from '~/plugins/mixins/tryAction'
  import log from '~/plugins/log'
  import _ from 'lodash'

  import hljs from 'highlight.js'
  import 'highlight.js/styles/github-dark.css'

  import mixpanel from 'mixpanel-browser'

  defaultExamples = [
    {
      product: 'Tweet scheduler'
      caption: 'Tweet generator'
      description: 'Imagine you’re building a tweet scheduler. You can get your user’s bio via the Twitter API, and use it to generate an engaging tweet for them.'
      outputKeys: ['tweet', 'topicSuggestions']
      input:
        bio: 'I’m an indie hacker who likes to build things and is passionate about cats, running, and the outdoors.'
        topic: 'life philosophy'
        comments: 'topicSuggestions means other topics they can tweet about based on their bio'
    },
    {
      product: 'Blogging platform'
      caption: 'Article title, intro & outline'
      description: 'Imagine you’re building a blogging platform and you want to help your users overcome writer’s block. You give your users an input field to enter a topic, and then use this API to generate a title, intro and outline for their article.'
      outputKeys: ['title', 'intro', 'outline']
      input:
        topic: 'functional programming'
        generationComments: 'The outline must be a nested bullet list in markdown format.'
    },
    {
      product: 'Voice modulation app'
      caption: 'Cheeky quotes'
      description: 'Imagine you’re building a vocie modulation app that allows users to speak in celebrity voices. You can use this API to generate a cheeky (or not so cheeky) quote in the style of the celebrity of their choice.'
      outputKeys: ['quote', 'explanationForUser']
      input:
        celebrity: 'Arnold Schwarzenegger'
        tone: 'cheeky'
    }
  ]

  export default

    mixins: [
      syncLocalMixin
        keys: ['outputKeys', 'input', 'openAIkey', 'format', 'exampleProduct']
        format: 'yaml'
        prefix: 'polygon'
        mergeObjects: false
      tryActionMixin
    ]

    data: ->

      pickedExample = defaultExamples[0]

      {
        showExampleDescription: true
        showOpenAIkey: false
        showOpenAIkeyEntry: false
        generatingExample: false
        exampleProduct: ''
        examples: defaultExamples
        pickedExample
        outputKeys: defaultExamples[0].outputKeys
        newOutputKey: ''
        input: defaultExamples[0].input
        openAIkey: ''
        generated: ''
        justGenerated: false
        formats: ['js', 'js (fetch)', 'curl']
        languageForFormat:
          'js': 'javascript'
          'js (fetch)': 'javascript'
          'curl': 'bash'
        format: 'fetch'
        generating: false
        oldFocused: null
        newInputKey: ''
        mixpanelId: null
      }

    created: ->

      mixpanel.init process.env.MIXPANEL_TOKEN,
        loaded: (mp) =>
          log 'mixpanel loaded with distinct id',
          @mixpanelId = mp.get_distinct_id()
          mp.track('page view', {page: 'demo'})
    
    computed:

      inputValid: ->
        _.every @input, (v) -> v.length > 0

      code: ->
        switch @format
          when 'js (fetch)'
            """
            await(
              await(
                fetch('#{process.env.API_URL}/generate', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    outputKeys: #{JSON.stringify @outputKeys},
                    input: #{JSON.stringify @input},
                    openAIkey: #{JSON.stringify @openAIkey}
                  })
                })
              )
            ).json()
            """
          when 'curl'
            """
            curl -X POST \\
              -H "Content-Type: application/json" \\
              -d '{"outputKeys": #{JSON.stringify @outputKeys}, "input": #{JSON.stringify @input}, "openAIkey": #{JSON.stringify @openAIkey}}' \\
              #{process.env.API_URL}/generate
            """
          when 'js'
            """
            // import Generate from 'polygon-ai'
            // 
            // const generate = new Generate({
            //   openAIkey: #{JSON.stringify @openAIkey}
            // })
            // 
            // ☝️ This part doesn’t work yet, but it will soon!

            // 👇 This part works in the browser console on this page
            
            await generate(
                #{JSON.stringify @outputKeys}, {
                input: #{JSON.stringify @input}
              }
            )

            // Pro tip: change args in the console, and they will automatically update here!
            """
      # 

      obfuscatedCode: ->
        @code?.replace(/sk-\w+/g, 'sk-<your key here>')

    methods:

      generateExample: ->
        
        @try 'generatingExample', ->

          mixpanel.track('generate example')
          
          prompt = JSON.stringify(@examples)
          # Remove the trailing ] and add a comma
          prompt = prompt.slice(0, prompt.length - 1) + ','
          feeder = '{"product":'
          if @exampleProduct
            feeder += JSON.stringify @exampleProduct
          prompt += feeder
          stop = "}}"

          { choices: [{ text }] } = await(
            await(
              fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer #{@openAIkey}"
                },
                body: JSON.stringify({
                  prompt
                  stop
                  temperature: 0.5
                  max_tokens: 300
                })
              })
            )
          ).json()
          
          text = feeder + text + stop

          @pickedExample = JSON.parse text

          { @outputKeys, @input } = @pickedExample

          # If any of the keys of @input is an array, join it with a comma
          @input = _.mapValues @input, (v) ->
            if _.isArray v
              v.join ', '
            else
              v

      deleteInput: (key) ->
        if window.confirm("Are you sure you want to delete '#{key}'? THERE IS NO UNDO!")
          delete @input[key]
          @input = _.clone @input

      addInput: ->
        if @newInputKey
          @newInputKey = _.camelCase @newInputKey
          @input[@newInputKey] = ''
          @newInputKey = ''
          @input = _.clone @input

      focusAndSelect: (element) ->
        @oldFocused = document.activeElement
        element.focus()
        element.select()
      
      returnFocus: ->
        @oldFocused?.focus()
        @oldFocused = null

      renameInput: (oldKey, newKey) ->
        if not newKey
          return
        if @input[newKey]
          @$bvToast.toast('This key already exists', {
            title: 'Error',
            variant: 'danger',            
            autoHideDelay: 3000,
            solid: true,            
          })
          return
        @input[newKey] = @input[oldKey]
        delete @input[oldKey]
        @input = _.clone @input

      addOutputKey: ->
        if @newOutputKey
          @outputKeys.push _.camelCase @newOutputKey
          @newOutputKey = ''

      copyToClipboard: ->
        window.navigator.clipboard.writeText @code
        @$bvToast.toast "Copied #{@format} code to clipboard",
          title: 'Copied!'
          variant: 'success'
          autoHideDelay: 1000
    
      generate: (outputKeys, { input } = {}) ->

        if outputKeys
          @outputKeys = outputKeys
        if input
          @input = input

        if not _.isArray(@outputKeys)
          @outputKeys = [outputKeys]

        log 'outputKeys', @outputKeys
        @$refs.generateButton.scrollIntoView()

        @try 'generating', ->

          generatedObject = await(
            await(
              fetch("#{process.env.API_URL}/generate", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  @outputKeys
                  @input
                  @openAIkey
                })
              })
            )
          ).json()

          @generated = JSON.stringify(generatedObject, null, 2)
          @$nextTick => @$refs.generated.activate()
          generatedObject
        #
      
      #
    
    watch:

      showOpenAIkey: (show) ->
        # If shown, hide after 3 seconds
        if show
          setTimeout =>
            @showOpenAIkey = false
          , 3000

      pickedExample: ->

        if @syncLocal.ignoreWatchers.includes 'pickedExample' then return

        mixpanel.track 'picked example', @pickedExample

      generated: ->
        @justGenerated = true
        setTimeout =>
          @justGenerated = false
        , 500
        @$nextTick -> hljs.highlightAll()
      
      code: ->
        @$nextTick -> hljs.highlightAll()
      
      openAIkey: (key) ->

          keyHash = await do (key) ->
            msgUint8 = new TextEncoder().encode key
            hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
            hashArray = Array.from new Uint8Array hashBuffer
            hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')            

          if @keyHash isnt @mixpanelId
            mixpanel.track 'key changed', {
              keyHash
            }

            mixpanel.identify keyHash

    mounted: ->

      window.generate = @generate.bind @
      
</script>

<style>
  
  .strong {
    font-weight: 400;
  }

</style>
<template lang="pug">
  div.d-flex.flex-column.justify-content-center.align-items-center(@keyup.shift.enter.prevent="generate()")
    b-container
      b-row.justify-content-center.align-items-center
        img.m-2(src="polygon.png" alt="Polygon" style="width: 100px; height: 100px")
        h1.display-3.mt-3.text-center(style="font-size: 2em")
          strong Polygon.  
          | Add AI to your app with a few lines of code
      //- Example picker
      b-row.lead.pb-2.mb-2.border-bottom.justify-content-center.align-items-center(style="font-size: 0.8em")
        span.mx-1 Examples:
        div.mx-1(v-for="example, index in examples" :key="example.caption")
          span(
            variant="light"
            @click="whats = example.whats; forWhat = example.forWhat; pickedExample = example; generated = false"
            @mouseover="hoveredExample = index"
            @mouseout="hoveredExample = null"
            :class="hoveredExample === index ? 'text-primary' : ''"
            style="cursor: pointer"
            :id="'example-' + index"
            v-b-popover.hover.bottom="example.description"
          )
            span {{ example.caption }}
        //- Custom example
        div.mx-1
          span.strong(
            variant="light"
            @click="generateExample"
            @mouseover="hoveredExample = -1"
            @mouseout="hoveredExample = null"
            :class="hoveredExample === -1 ? 'text-primary' : ''"
            style="cursor: pointer"
            :id="'example-random'"
          )
            b-spinner(v-if="generatingExample" small type="grow" variant="primary")
            strong(v-else) 🪄 Example for your product
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
      b-row.justify-content-center.align-items-center(style="font-size: 0.8em")
        b-alert(
          v-if="!!pickedExample"
          show
          dismissible
          @dismissed="pickedExample = null"
        )
          strong {{ pickedExample.caption }}  
          | for  
          strong {{ pickedExample.product }}
          | : {{ pickedExample.description }}
      b-row.justify-content-between.mt-2
        b-col.mt-2.col-12(:class="generated ? 'col-lg-4' : 'col-lg-6'")
          h2.lead.strong What do you want to generate?
          div.d-flex.flex-wrap.align-items-center(style="font-size: 0.8em")
            //- Current whats
            div.input-group-text.m-1.p-1(
                v-for="what in whats" :key="what"
                style="font-size: 1em; height: 2.5em"
              )
              strong {{ what }}
              //- Small icon to remove the what
              b-button.text-muted.p-0.px-1(
                size="sm"
                variant="light"
                style="background: transparent; border: none; font-size: 0.8em"
                @click="whats = whats.filter(w => w !== what)"
              )
                b-icon-x-circle(style="width: 0.6em")
            //- Input to add a new what
            b-input.m-1(
              v-model="newWhat"
              placeholder="What else?"
              @keyup.enter.prevent="addWhat"
              @blur="addWhat"
              style="width: 120px; font-size: 1em; height: 2em"
            )
          b-form-invalid-feedback(:state="whats.length > 0") Please add at least one thing to generate
          p.lead.strong.mt-2.mb-1 For what?
          //- Current forWhats (keys/values in the forWhat object)
          div.d-flex.flex-wrap.align-items-center(style="font-size: 0.8em")
            //- div.d-flex.w-100.my-1(
            //-     v-for="value, key in forWhat" :key="key"
            //-   )
            b-input-group.m-1(
                v-for="value, key in forWhat" :key="key"
                size="sm"
              )
              //- div.rounded-left.bg-light.border.px-2.pt-1(
              //-   :id="'for-' + key"
              //- )
              //-   strong {{ key }}
              b-input-group-prepend(
                :id="'for-' + key"
              )
                b-input-group-text(
                  style="font-size: 1em"
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
                  @submit.prevent="renameForWhat(key, $refs['newKey-' + key][0].vModelValue)"
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
                style="font-size: 1em"
                v-model="forWhat[key]"
                placeholder="For what?"
              )

              b-input-group-append
                b-button(
                  variant="outline-secondary"
                  style="font-size: 1em"
                  @click="deleteForWhat(key)"
                )
                  b-icon-x-circle(style="width: 0.6em")
              b-form-invalid-feedback(:state="!!forWhat[key]") Please add a value
          //- 

          //- Input to add a new forWhat
          b-form(@submit.prevent="addForWhat")
            b-input-group.mt-2(size="sm" style="width: 150px; font-size: 0.8em")
              b-input(
                v-model="newForWhatKey"
                :placeholder="'E.g. tone of voice'"
                style="font-size: 1em;"
              )
              b-input-group-append
                b-button(
                  type="submit" variant="outline-secondary"
                  style="font-size: 1em"
                  :disabled="!newForWhatKey"
                )
                  b-icon-plus

          //- OpenAI key
          div.mt-3
            b-form-group.text-muted(
                label="OpenAI API key"
                style="font-size: 0.7em"
              )
              template(v-slot:description)
                | We don’t store <a href="https://beta.openai.com/account/api-keys" target="_blank">your key</a>, it’s only used to make requests to OpenAI’s API.
                b-form-invalid-feedback(:state="!!openAIkey") Please add your OpenAI API key
              b-input(
                v-model="openAIkey"
                type="password"
                placeholder="sk-..."
                style="font-size: 1em"
              )
        //- 
        b-col.mt-2.col-12(:class="generated ? 'col-lg-4' : 'col-lg-6'")
          h2.lead.strong Here’s your code:
          //- Pre-formatted copiable div on dark background
          div.rounded-top
            pre.mb-0
              code(
                v-text="obfuscatedCode"
                :class="`language-${languageForFormat[format]}`"
                style="font-size: 0.6em; white-space: pre-wrap"
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
          //- Try it!
          b-button.mt-2(
              block
              type="submit"
              ref="generateButton"
              :variant="generating ? 'light' : 'primary'"
              :disabled="generating || !openAIkey || !whats.length || !forWhatValid"
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
        //- 
        b-col.mt-2.col-12.col-lg-4.pb-5.pb-lg-0(
            ref="generated"
            v-if="generated"
          )
          h2.lead.strong Here’s the response JSON:
          div(:class="justGenerated ? 'bg-success' : 'bg-dark'")
            pre
              code.language-json(
                v-text="generated"
                style="white-space: pre-wrap; font-size: 0.9em; height: 300px; overflow-y: auto"
              )
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
      whats: ['tweet', 'hashtags']
      forWhat:
        bio: 'I’m an indie hacker who likes to build things and is passionate about cats, running, and the outdoors.'
        topic: 'life philosophy'
    },
    {
      product: 'Blogging platform'
      caption: 'Article title, intro & outline'
      description: 'Imagine you’re building a blogging platform and you want to help your users overcome writer’s block. You give your users an input field to enter a topic, and then use this API to generate a title, intro and outline for their article.'
      whats: ['title', 'intro', 'outline']
      forWhat:
        topic: 'functional programming'
        generationComments: 'The outline must be a nested bullet list in markdown format.'
    },
    {
      product: 'Voice modulation app'
      caption: 'Cheeky quotes'
      description: 'Imagine you’re building a vocie modulation app that allows users to speak in celebrity voices. You can use this API to generate a cheeky (or not so cheeky) quote in the style of the celebrity of their choice.'
      whats: ['quote', 'explanationForUser']
      forWhat:
        celebrity: 'Arnold Schwarzenegger'
        tone: 'cheeky'
    }
  ]

  export default

    mixins: [
      syncLocalMixin
        keys: ['whats', 'forWhat', 'openAIkey', 'format', 'exampleProduct']
        format: 'yaml'
        prefix: 'polygon'
        mergeObjects: false
      tryActionMixin
    ]

    data: ->
      generatingExample: false
      exampleProduct: ''
      examples: defaultExamples
      pickedExample: null
      hoveredExample: null
      whats: ['name', 'tagline']
      newWhat: ''
      forWhat:
        company: 'A startup for people who would like to have a startup'
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
      newForWhatKey: ''
      mixpanelId: null

    created: ->

      mixpanel.init process.env.MIXPANEL_TOKEN,
        loaded: (mp) =>
          log 'mixpanel loaded with distinct id',
          @mixpanelId = mp.get_distinct_id()
          mp.track('page view', {page: 'demo'})
    
    computed:

      forWhatValid: ->
        _.every @forWhat, (v) -> v.length > 0

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
                    what: #{JSON.stringify @whats},
                    for: #{JSON.stringify @forWhat},
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
              -d '{"what": #{JSON.stringify @whats}, "for": #{JSON.stringify @forWhat}, "openAIkey": #{JSON.stringify @openAIkey}}' \\
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
                #{JSON.stringify @whats}, {
                for: #{JSON.stringify @forWhat}
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

          { @whats, @forWhat } = @pickedExample

          # If any of the keys of @forWhat is an array, join it with a comma
          @forWhat = _.mapValues @forWhat, (v) ->
            if _.isArray v
              v.join ', '
            else
              v

      deleteForWhat: (key) ->
        if window.confirm("Are you sure you want to delete '#{key}'? THERE IS NO UNDO!")
          delete @forWhat[key]
          @forWhat = _.clone @forWhat

      addForWhat: ->
        if @newForWhatKey
          @newForWhatKey = _.camelCase @newForWhatKey
          @forWhat[@newForWhatKey] = ''
          @newForWhatKey = ''
          @forWhat = _.clone @forWhat

      focusAndSelect: (element) ->
        @oldFocused = document.activeElement
        element.focus()
        element.select()
      
      returnFocus: ->
        @oldFocused?.focus()
        @oldFocused = null

      renameForWhat: (oldKey, newKey) ->
        if not newKey
          return
        if @forWhat[newKey]
          @$bvToast.toast('This key already exists', {
            title: 'Error',
            variant: 'danger',            
            autoHideDelay: 3000,
            solid: true,            
          })
          return
        @forWhat[newKey] = @forWhat[oldKey]
        delete @forWhat[oldKey]
        @forWhat = _.clone @forWhat

      addWhat: ->
        if @newWhat
          @whats.push _.camelCase @newWhat
          @newWhat = ''

      copyToClipboard: ->
        window.navigator.clipboard.writeText @code
        @$bvToast.toast "Copied #{@format} code to clipboard",
          title: 'Copied!'
          variant: 'success'
          autoHideDelay: 1000
    
      generate: (whats, { for: forWhat } = {}) ->

        if whats
          @whats = whats
        if forWhat
          @forWhat = forWhat

        if not _.isArray(@whats)
          @whats = [whats]

        log 'whats', @whats
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
                  what: @whats,
                  for: @forWhat,
                  openAIkey: @openAIkey
                })
              })
            )
          ).json()

          @generated = JSON.stringify(generatedObject, null, 2)
          @$nextTick => @$refs.generated.scrollIntoView()
          generatedObject
        #
      
      #
    
    watch:

      pickedExample: ->

        mixpanel.track 'picked example', @pickedExample

        @generate()

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
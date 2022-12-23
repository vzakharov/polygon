<template lang="pug">
  div.d-flex.flex-column.justify-content-center.align-items-center(@keyup.shift.enter.prevent="generate()")
    b-container
      b-row.mb-2.border-bottom.justify-content-center.align-items-center
        img.m-2(src="polygon.png" alt="Polygon" style="width: 100px; height: 100px")
        h1.display-3.mt-3.text-center(style="font-size: 2em")
          strong Polygon.  
          | Add AI to your app with a few lines of code
      b-row.justify-content-between.mt-4
        b-col.col-12(:class="generated ? 'col-lg-4' : 'col-lg-6'")
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
              b-input(
                v-model="openAIkey"
                placeholder="sk-..."
                style="font-size: 1em"
              )
        //- 
        b-col.col-12(:class="generated ? 'col-lg-4' : 'col-lg-6'")
          h2.lead.strong Here’s your code:
          //- Pre-formatted copiable div on dark background
          div.bg-dark.p-3.rounded-top
            pre.text-white(v-text="code" style="white-space: pre-wrap; font-size: 0.6em; height: 300px; overflow-y: auto")
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
              size="lg"
              @click="generate()"
            )
            span(v-if="generating")
              b-spinner.mr-2(small)
              | Generating...
            span(v-else)
              b-icon-play
              | Try it!
        //- 
        //- 
        b-col.col-12.col-lg-4.pb-5.pb-lg-0(
            ref="generated"
            v-if="generated"
          )
          h2.lead.strong Here’s the response JSON:
          div.p-3.rounded(:class="justGenerated ? 'bg-success' : 'bg-dark'")
            pre.text-white(
              v-text="generated"
              style="white-space: pre-wrap; font-size: 0.6em; height: 300px; overflow-y: auto"
              :class="generating ? 'text-muted' : ''"
            )
      //- 

</template>

<script lang="coffee">

  import syncLocalMixin from '~/plugins/mixins/syncLocal'
  import tryActionMixin from '~/plugins/mixins/tryAction'
  import log from '~/plugins/log'
  import _ from 'lodash'

  export default

    mixins: [
      syncLocalMixin
        keys: ['whats', 'forWhat', 'openAIkey', 'format']
        format: 'yaml'
        prefix: 'polygon'
      tryActionMixin
    ]

    data: ->

      whats: ['name', 'tagline']
      newWhat: ''
      forWhat:
        company: 'A startup for people who would like to have a startup'
      openAIkey: ''
      generated: ''
      justGenerated: false
      formats: ['js', 'fetch', 'curl']
      format: 'fetch'
      generating: false
      oldFocused: null
      newForWhatKey: ''
    
    computed:

      code: ->
        switch @format
          when 'fetch'
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
    
    methods:

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

      generated: ->
        @justGenerated = true
        setTimeout =>
          @justGenerated = false
        , 500

    mounted: ->

      window.generate = @generate.bind @

</script>

<style>
  
  .strong {
    font-weight: 400;
  }

</style>
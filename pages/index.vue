<template lang="pug">
  div.vh-100.d-flex.flex-column.justify-content-center.align-items-center
    b-container
      h1.display-3.mb-5.text-center(style="font-size: 2.5em")
        strong Polygon.  
        | Add AI to your app with a couple lines of code
      b-row.justify-content-center
        b-col.col-12.col-lg-4
          h3 What do you want to generate?
          div.d-flex.flex-wrap.align-items-center
            //- Current whats
            div.bg-light.border.px-2.py-1.m-1(
                v-for="what in whats" :key="what"
              )
              | {{ what }}
              //- Small icon to remove the what
              b-button.ml-2.text-muted(
                size="sm"
                variant="light"
                v-if="whats.length > 1"
                @click="whats = whats.filter(w => w !== what)"
              )
                b-icon-x-circle
            //- Input to add a new what
            div.bg-light.border.px-2.py-1.m-1
              b-input(
                v-model="newWhat"
                placeholder="What else?"
                @keyup.enter="whats = [...whats, newWhat]; newWhat = ''"
                style="width: 120px"
              )
          h3 For what?
          //- An input for freeform information
          b-input(
            v-model="forWhat"
            placeholder="E.g. 'an app that sells shoes to cats'"
          )
          //- OpenAI key
          div.mt-3
            b-form-group(
                label="OpenAI API key"
              )
              template(v-slot:description)
                | We don’t store <a href="https://beta.openai.com/account/api-keys" target="_blank">your key</a>, it’s only used to make requests to OpenAI’s API.
              b-input(
                v-model="openAIkey"
                placeholder="sk-..."
              )
        //- 
        b-col.col-12.col-lg-4
          h3 Here’s your code:
          //- Pre-formatted copiable div on dark background
          //- Buttons to pick format: fetch, curl js
          div.d-flex.justify-content-between
            b-button-group.mb-2
              b-button(
                  v-for="f in formats" :key="f"
                  size="sm"
                  :variant="f === format ? 'secondary' : 'outline-secondary'"
                  @click="format = f"
                )
                | {{ f }}
          div.bg-dark.p-3.rounded
            pre.text-white(v-text="code" style="white-space: pre-wrap; font-size: 0.6em; height: 300px; overflow-y: auto")
          div.d-flex.justify-content-between.mt-2
            //- Try it!
            b-button(
                :disabled="!openAIkey || generating"
                :variant="generating ? 'light' : 'primary'"
                size="lg"
                @click="generate"
              )
              span(v-if="generating")
                b-spinner.mr-2(small)
                | Generating...
              span(v-else)
                b-icon-play
                | Try it!
            //- Copy to clipboard
            b-button.text-muted(variant="light" size="sm" @click="copyToClipboard")
              b-icon-clipboard
        //- 
        //- 
        b-col.col-12.col-lg-4(
            ref="generated"
            v-if="generated"
          )
          h3 Here’s the response JSON:
          div.bg-dark.p-3.rounded
            pre.text-white(v-text="generated" style="white-space: pre-wrap; font-size: 0.6em; height: 300px; overflow-y: auto")
</template>

<script lang="coffee">

  import syncLocalMixin from '~/plugins/mixins/syncLocal'
  import tryActionMixin from '~/plugins/mixins/tryAction'

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
      forWhat: 'A startup for people who would like to have a startup'
      openAIkey: ''
      generated: ''
      formats: ['fetch', 'curl', 'js']
      format: 'fetch'
      generating: false
    
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
            // COMING SOON:
            //
            // import Generate from 'polygon-ai'
            // 
            // const generate = new Generate({
            //   openAIkey: #{JSON.stringify @openAIkey}
            // })
            // 
            // const response = await generate(
            //   #{JSON.stringify @whats}, {
            //     for: #{JSON.stringify @forWhat}
            //   }
            // )
            """
    
    methods:
      copyToClipboard: ->
        window.navigator.clipboard.writeText @code
    
      generate: ->

        @try 'generating', ->

          @generated = await(
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

          @generated = JSON.stringify(@generated, null, 2)
          @$nextTick => @$refs.generated.scrollIntoView()


</script>
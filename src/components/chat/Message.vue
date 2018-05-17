<template>
  <div>{{message.author}}: {{message.text}}</div>
</template>

<script>
export default {
  props: ['message']
}
</script>
